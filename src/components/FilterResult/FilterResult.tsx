import React, { FunctionComponent } from 'react';
import FilterResultCard from '../FilterResultCard/FilterResultCard';
import { Doctor } from '../../models/doctor.model';

export interface FilterResultProps {
  data: Doctor[]
}

const FilterResult: FunctionComponent<FilterResultProps> = ({data}) => {
  return (
    <>
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
    </>
  );
}

export default FilterResult;
