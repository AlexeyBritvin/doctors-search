import { Doctor } from './../models/doctor.model'
import { doctorsSlice } from './doctors'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { MainFilter } from '../models/main-filter.model'

export interface RootState {
  doctors: {
    filter: MainFilter
    data: Doctor[]
    filteredData: Doctor[]
    averagePrice: number
  }
}

const rootReducer = combineReducers<RootState>({
  doctors: doctorsSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
