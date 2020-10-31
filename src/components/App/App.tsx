import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import CheckboxWithCount from '../CheckboxWithCount/CheckboxWithCount';
import Dropdown from '../Dropdown/Dropdown';
import FilterResultCard from '../FilterResultCard/FilterResultCard';
import SearchInput from '../SearchInput/SearchInput';
import Switcher from '../Switcher/Switcher';
import { ReactComponent as InfoIcon } from '../../icons/info.svg';

import { Doctor } from '../../models/doctor.model';

import response  from '../../data/mock.json';
import styles from './App.module.css';

function App() {
  const [inputValue, setInputValue] = useState('')

  const [checked, setChecked] = useState(false)

  const [value, onSwitcherChange] = useState(false)

  const [data, setData] = useState<Doctor[]>([])

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value)
  }

  const handleSwitcher = ({target}: ChangeEvent<HTMLInputElement>) => {
    onSwitcherChange(target.checked)
  }

  const onCheckedChange = ({target}: ChangeEvent<HTMLInputElement>) => setChecked(target.checked)


  useEffect(() => {
    if (response.success) {
      setData(response.data.items)
    }
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Dropdown label="Button">
          <SearchInput
            value={inputValue}
            placeholder="Filter by speciality"
            onChange={handleChange}
          ></SearchInput>

          <div>
            <div>
              <Switcher value={value} onChange={handleSwitcher}></Switcher>
            </div>

            <Checkbox
              checked={checked}
              onChange={onCheckedChange}
            >Plastic Surgeon</Checkbox>

            <CheckboxWithCount
              checked={checked}
              onChange={onCheckedChange}
              count={4}
            >Plastic Surgeon</CheckboxWithCount>
          </div>
        </Dropdown>

        <h1 className={styles.header}>Root Canal doctors in New York, NY</h1>
        <div className={styles.info}>
          <InfoIcon className={styles.infoIcon}></InfoIcon>
          <div className={styles.infoText}>
            <p>The average price of a procedure in New York is $300</p>
          </div>
        </div>

        {
          data.map((item: Doctor) => (
            <FilterResultCard
              key={item.id}
              name={item.name}
              speciality={item.speciality}
              address={item.address}
              avatar="https://thispersondoesnotexist.com/image"
              experience={item.experience}
              reviewsCount={item.reviewsCount}
              price={item.price}
              telehealth={item.telehealth}
            ></FilterResultCard>
          ))
        }
      </div>
    </div>
  );
}

export default App;
