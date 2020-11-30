import React, { useEffect, useState, VFC } from 'react'
import { ReactComponent as InfoIcon } from '../../icons/info.svg'
import FilterResult from '../FilterResult/FilterResult'
import AvailabilityFilter from '../Filters/AvailabilityFilter/AvailabilityFilter'
import SpecialityFilter from '../Filters/SpeacialityFilter/SpecialityFilter'
import InsuranceFilter from '../Filters/InsuranceFIlter/InsuranceFilter'
import getUniqueArrayValues from '../../helpers/get-unique-values'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  reset,
  changeAvailability,
  changeInsuranceFilter,
  changeSpecialitiesFilter,
  setDoctors,
} from '../../store/doctors'

import response from '../../data/mock.json'
import styles from './App.module.css'
import Button from '../Button/Button'

const App: VFC = () => {
  const dispatch = useDispatch()
  const { filter, filteredData, averagePrice } = useSelector((state: RootState) => state.doctors)

  const [specialties, setSpecialties] = useState<string[]>([])
  const [insurance, setInsurance] = useState<string[]>([])

  const onSpecialityChange = (selected: string[]) => {
    dispatch(changeSpecialitiesFilter(selected))
  }

  const onInsuranceChange = (selected: string[]) => {
    dispatch(changeInsuranceFilter(selected))
  }

  const onAvailabilityChange = (name: string, checked: boolean) => {
    dispatch(changeAvailability({ name, checked }))
  }

  const clearFilters = () => {
    dispatch(reset())
  }

  useEffect(() => {
    const { success, data } = response
    if (success) {
      const { items } = data
      dispatch(setDoctors(items))
      setSpecialties(getUniqueArrayValues(items, (doc) => doc.speciality))
      setInsurance(getUniqueArrayValues(items, (doc) => doc.insurances))
    }
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.filterItem}>
            <AvailabilityFilter selected={filter.availability} onChange={onAvailabilityChange}></AvailabilityFilter>
          </div>

          <div className={styles.filterItem}>
            <SpecialityFilter
              selected={filter.specialities}
              specialties={specialties}
              onChange={onSpecialityChange}></SpecialityFilter>
          </div>

          <div className={styles.filterItem}>
            <InsuranceFilter
              selected={filter.insurance}
              insurance={insurance}
              onChange={onInsuranceChange}></InsuranceFilter>
          </div>

          <div className={styles.filterItem}>
            <Button viewType="link" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        </div>

        <h1 className={styles.header}>Root Canal doctors in New York, NY</h1>
        <div className={styles.info}>
          <InfoIcon className={styles.infoIcon}></InfoIcon>
          <div className={styles.infoText}>
            <p>The average price of a procedure in New York is ${averagePrice}</p>
          </div>
        </div>

        <FilterResult data={filteredData}></FilterResult>
      </div>
    </div>
  )
}

export default App
