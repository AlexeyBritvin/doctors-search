import React from 'react';
import FilterResultCard from '../FilterResultCard/FilterResultCard';
import Icon from '../Icon/Icon';
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.header}>Root Canal doctors in New York, NY</h1>
        <div className={styles.info}>
          <Icon icon="info" size="20" viewBox="0 0 20 20" className={styles.infoIcon}></Icon>
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
