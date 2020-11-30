import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isToday, isBetweenDays } from '../helpers/date-filters'
import { applyMultipleFilters } from '../helpers/multiple-filters'
import { Doctor } from '../models/doctor.model'
import { MainFilter } from '../models/main-filter.model'

const filterFns = {
  availability: {
    telehealth: (doc: Doctor) => doc.telehealth,
    acceptNew: (doc: Doctor) => doc.acceptNew,

    today: (doc: Doctor) => isToday(doc.offline_available) || isToday(doc.telehealth_available),
    nextThreeDays: (doc: Doctor) => isBetweenDays(doc.offline_available, 3),
    nextTwoWeeks: (doc: Doctor) => isBetweenDays(doc.offline_available, 14),
  },
  specialities: (doc: Doctor, filter: MainFilter) => filter.specialities.includes(doc.speciality),
  insurance: (doc: Doctor, filter: MainFilter) => filter.insurance.includes(doc.insurances),
}

const defaultFilter: MainFilter = {
  availability: {
    today: false,
    nextThreeDays: false,
    nextTwoWeeks: false,

    telehealth: false,
    acceptNew: false,
  },

  specialities: [],
  insurance: [],
}

const calcAveragePrice = (items: Doctor[]) => {
  if (!items.length) return 0
  const total = items.reduce((acc, nextItem) => acc + nextItem.price, 0)
  return Math.round(total / items.length)
}

export interface ChangeAvailabilityAction {
  name: string
  checked: boolean
}

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    filter: defaultFilter,
    data: [],
    filteredData: [],
    averagePrice: 0,
  },
  reducers: {
    setDoctors: (state, action: PayloadAction<Doctor[]>) => {
      state.data = action.payload
      state.filteredData = action.payload
      state.averagePrice = calcAveragePrice(state.filteredData)
    },

    reset: (state) => {
      state.filter = defaultFilter
      state.filteredData = applyMultipleFilters(state.data, defaultFilter, filterFns)
      state.averagePrice = calcAveragePrice(state.filteredData)
    },

    changeAvailability: (state, { payload }: PayloadAction<ChangeAvailabilityAction>) => {
      state.filter.availability = { ...state.filter.availability, [payload.name]: payload.checked }
      state.filteredData = applyMultipleFilters(state.data, state.filter, filterFns)
      state.averagePrice = calcAveragePrice(state.filteredData)
    },

    changeInsuranceFilter: (state, { payload }: PayloadAction<string[]>) => {
      state.filter.insurance = payload
      state.filteredData = applyMultipleFilters(state.data, state.filter, filterFns)
      state.averagePrice = calcAveragePrice(state.filteredData)
    },

    changeSpecialitiesFilter: (state, { payload }: PayloadAction<string[]>) => {
      state.filter.specialities = payload
      state.filteredData = applyMultipleFilters(state.data, state.filter, filterFns)
      state.averagePrice = calcAveragePrice(state.filteredData)
    },

    setAveragePrice: () => {},
  },
})

export const {
  reset,
  changeAvailability,
  changeInsuranceFilter,
  changeSpecialitiesFilter,
  setDoctors,
} = doctorsSlice.actions
