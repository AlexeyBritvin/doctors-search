import React, { useEffect, useState } from 'react';
import { ReactComponent as InfoIcon } from '../../icons/info.svg';
import { Doctor } from '../../models/doctor.model';
import FilterResult from '../FilterResult/FilterResult';
import AvailabilityFilter from '../Filters/AvailabilityFilter/AvailabilityFilter';
import SpecialityFilter from '../Filters/SpeacialityFilter/SpecialityFilter';
import InsuranceFilter from '../Filters/InsuranceFIlter/InsuranceFilter';

import response from '../../data/mock.json';
import styles from './App.module.css';

function App() {
  const [data, setData] = useState<Doctor[]>([])
  const [specialties, setSpecialties] = useState<string[]>([])
  const [insurance, setInsurance] = useState<string[]>([])

  const getSpecialties = (doctors: Doctor[]): string[] => {
    const specialties = doctors.map(doc => doc.speciality)
    return Array.from(new Set(specialties))
  }

  const getInsurance = (doctors: Doctor[]): string[] => {
    const insurance = doctors.map(doc => doc.insurances)
    return Array.from(new Set(insurance))
  }

  const onSpecialityChange = (selected: string[]) => {
    console.log(selected)
  }

  const onInsuranceChange = (selected: string[]) => {
    console.log(selected)
  }

  useEffect(() => {
    const {success, data} = response
    if (success) {
      setData(data.items)
      setSpecialties(getSpecialties(data.items))
      setInsurance(getInsurance(data.items))
    }
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.filters}>
          <div className={styles.filterItem}>
            <AvailabilityFilter></AvailabilityFilter>
          </div>

          <div className={styles.filterItem}>
            <SpecialityFilter
              specialties={specialties}
              onChange={onSpecialityChange}
            ></SpecialityFilter>
          </div>

          <div className={styles.filterItem}>
            <InsuranceFilter
              insurance={insurance}
              onChange={onInsuranceChange}
            ></InsuranceFilter>
          </div>
        </div>

        <h1 className={styles.header}>Root Canal doctors in New York, NY</h1>
        <div className={styles.info}>
          <InfoIcon className={styles.infoIcon}></InfoIcon>
          <div className={styles.infoText}>
            <p>The average price of a procedure in New York is $300</p>
          </div>
        </div>

        <FilterResult data={data}></FilterResult>
      </div>
    </div>
  );
}

export default App;
