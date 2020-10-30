import React, { ChangeEvent, useState } from 'react';
import { ReactComponent as InfoIcon } from '../../icons/info.svg';
import Checkbox from '../Checkbox/Checkbox';
import CheckboxWithCount from '../CheckboxWithCount/CheckboxWithCount';
import Dropdown from '../Dropdown/Dropdown';
import FilterResultCard from '../FilterResultCard/FilterResultCard';
import SearchInput from '../SearchInput/SearchInput';
import Switcher from '../Switcher/Switcher';
import styles from './App.module.css';

function App() {

  const [inputValue, setInputValue] = useState('')

  const [checked, setChecked] = useState(false)

  const [value, onSwitcherChange] = useState(false)

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value)
  }

  const handleSwitcher = ({target}: ChangeEvent<HTMLInputElement>) => {
    onSwitcherChange(target.checked)
  }

  const onCheckedChange = ({target}: ChangeEvent<HTMLInputElement>) => setChecked(target.checked)

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
        <FilterResultCard
          name="Mojgan Fajiram, DMD"
          speciality="Dentist"
          address="55 E 9th St, New York, NY 10003"
          avatar="https://thispersondoesnotexist.com/image"
          experience={3}
          reviewsCount={76}
          price={500}
          telehealth={true}
        ></FilterResultCard>
      </div>
    </div>
  );
}

export default App;
