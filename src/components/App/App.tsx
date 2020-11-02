import React, { useEffect, useState } from 'react';
import { ReactComponent as InfoIcon } from '../../icons/info.svg';
import { Doctor } from '../../models/doctor.model';
import FilterResult from '../FilterResult/FilterResult';
import AvailabilityFilter from '../Filters/AvailabilityFilter/AvailabilityFilter';
import SpecialityFilter from '../Filters/SpeacialityFilter/SpecialityFilter';
import InsuranceFilter from '../Filters/InsuranceFIlter/InsuranceFilter';
import { MainFilter } from '../../models/main-filter.model';
import { isBetweenDays, isToday } from '../../helpers/date-filters';
import { applyMultipleFilters } from '../../helpers/multiple-filters';

import response from '../../data/mock.json';
import styles from './App.module.css';
import Button from '../Button/Button';

function App() {
  const defaultFilter: MainFilter = {
    availability: {
      today: false,
      nextThreeDays: false,
      nextTwoWeeks: false,

      telehealth: false,
      acceptNew: false
    },

    specialities: [],
    insurance: []
  }

  const [data, setData] = useState<Doctor[]>([])
  const [filteredData, setFilteredData] = useState<Doctor[]>([])
  const [specialties, setSpecialties] = useState<string[]>([])
  const [insurance, setInsurance] = useState<string[]>([])
  const [filter, setFilter] = useState(defaultFilter)

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

  const getSpecialties = (doctors: Doctor[]): string[] => {
    const specialties = doctors.map(doc => doc.speciality)
    return Array.from(new Set(specialties))
  }

  const getInsurance = (doctors: Doctor[]): string[] => {
    const insurance = doctors.map(doc => doc.insurances)
    return Array.from(new Set(insurance))
  }

  const onSpecialityChange = (selected: string[]) => {
    const newFilter: MainFilter = {...filter, specialities: selected}
    setFilter(newFilter)
    applyAllFilters(data, newFilter)
  }

  const onInsuranceChange = (selected: string[]) => {
    const newFilter: MainFilter = {...filter, insurance: selected}
    setFilter(newFilter)
    applyAllFilters(data, newFilter)
  }

  const onAvailabilityChange = (name: string, checked: boolean) => {
    const newFilter: MainFilter = {...filter, availability: {...filter.availability, [name]: checked}}
    setFilter(newFilter)
    applyAllFilters(data, newFilter)
  }

  const applyAllFilters = (data: Doctor[], filter: MainFilter) => {
    const filtered = applyMultipleFilters(data, filter, filterFns)
    console.log(filtered)
    setFilteredData(filtered)
  }

  const clearFilters = () => {
    setFilter(defaultFilter)
    applyAllFilters(data, defaultFilter)
  }

  useEffect(() => {
    const {success, data} = response
    if (success) {
      const {items} = data
      setData(items)
      setFilteredData(items)
      setSpecialties(getSpecialties(items))
      setInsurance(getInsurance(items))
    }
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.filterItem}>
            <AvailabilityFilter
              selected={filter.availability}
              onChange={onAvailabilityChange}
            ></AvailabilityFilter>
          </div>

          <div className={styles.filterItem}>
            <SpecialityFilter
              selected={filter.specialities}
              specialties={specialties}
              onChange={onSpecialityChange}
            ></SpecialityFilter>
          </div>

          <div className={styles.filterItem}>
            <InsuranceFilter
              selected={filter.insurance}
              insurance={insurance}
              onChange={onInsuranceChange}
            ></InsuranceFilter>
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
            <p>The average price of a procedure in New York is $300</p>
          </div>
        </div>

        <FilterResult data={filteredData}></FilterResult>
      </div>
    </div>
  );
}

export default App;
