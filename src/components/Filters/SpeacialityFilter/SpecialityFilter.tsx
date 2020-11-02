import React, { ChangeEvent, useEffect, useState } from 'react';
import { CheckboxView } from '../../../models/checkbox-view.model';
import CheckboxWithCount from '../../CheckboxWithCount/CheckboxWithCount';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownMenuItem from '../../Dropdown/DropdownMenuItem/DropdownMenuItem';
import SearchInput from '../../SearchInput/SearchInput';

export interface SpecialityFilterProps {
  specialties: string[]
  selected: string[]
  onChange: (selected: string[]) => void
}

const SpecialityFilter: React.FunctionComponent<SpecialityFilterProps> = ({specialties, selected, onChange}) => {
  const [search, setSearch] = useState('')
  const [checkboxes, setCheckboxes] = useState<CheckboxView[]>([])
  const [innerSelected, setSelected] = useState<string[]>([])

  useEffect(() => {
    const checkboxes = generateCheckboxes(specialties)
    setCheckboxes(checkboxes)
  }, [specialties])

  useEffect(() => {
    setSelected(selected)
  }, [selected])

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      setSelected((prevState) => [...prevState, target.name])
    } else {
      setSelected((prevState) => prevState.filter(item => item !== target.name))
    }
  }

  const generateCheckboxes = (data: string[]) => {
    return data.map(item => ({
      name: item.split(' ').join('-'),
      label: item
    }))
  }

  const filterSpecialties = (arr: string[], value = '') => {
    if (value.length) {
      return arr.filter(item => item.toLowerCase().indexOf(value.toLowerCase()) >= 0)
    }

    return arr
  }

  const handleSearchChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const {value} = target
    setSearch(value)
    const filtered = filterSpecialties(specialties, value)
    const checkboxes = generateCheckboxes(filtered)
    setCheckboxes(checkboxes)
  }

  const handleReset = () => {
    setSelected([])
  }
  const handleApply = () => {
    onChange(innerSelected)
  }

  const onClose = () => {
    setSelected(selected)
  }

  return (
    <Dropdown
      label="Speciality"
      size="big"
      footer={true}
      onApply={handleApply}
      onReset={handleReset}
      onClose={onClose}
    >
      <DropdownMenuItem>
        <SearchInput
          value={search}
          placeholder="Filter by speciality"
          onChange={handleSearchChange}
        ></SearchInput>
      </DropdownMenuItem>

      {
        checkboxes.map(({name, label}: CheckboxView) => (
          <DropdownMenuItem key={name}>
            <CheckboxWithCount
              name={name}
              count={2}
              checked={ innerSelected.includes(name) }
              onChange={handleChange}
            >
              {label}
            </CheckboxWithCount>
          </DropdownMenuItem>
        ))
      }

    </Dropdown>
   );
}

export default SpecialityFilter;
