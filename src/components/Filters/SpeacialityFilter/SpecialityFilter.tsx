import React, { ChangeEvent, useEffect, useState } from 'react'
import useGenerateCheckboxes from '../../../hooks/useGenerateCheckboxes'
import { CheckboxView } from '../../../models/checkbox-view.model'
import CheckboxWithCount from '../../CheckboxWithCount/CheckboxWithCount'
import Dropdown from '../../Dropdown/Dropdown'
import DropdownMenuItem from '../../Dropdown/DropdownMenuItem/DropdownMenuItem'
import SearchInput from '../../SearchInput/SearchInput'

export interface SpecialityFilterProps {
  specialties: string[]
  selected: string[]
  onChange: (selected: string[]) => void
}

const SpecialityFilter: React.FunctionComponent<SpecialityFilterProps> = ({ specialties, selected, onChange }) => {
  const [search, setSearch] = useState('')
  const [innerSelected, setSelected] = useState<string[]>([])
  const checkboxes = useGenerateCheckboxes(specialties, search)

  useEffect(() => {
    setSelected(selected)
  }, [selected])

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.checked) {
      setSelected((prevState) => [...prevState, target.name])
    } else {
      setSelected((prevState) => prevState.filter((item) => item !== target.name))
    }
  }

  const handleSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setSearch(value)
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
    <Dropdown label="Speciality" size="big" footer={true} onApply={handleApply} onReset={handleReset} onClose={onClose}>
      <DropdownMenuItem>
        <SearchInput value={search} placeholder="Filter by speciality" onChange={handleSearchChange}></SearchInput>
      </DropdownMenuItem>

      {checkboxes.map(({ name, label }: CheckboxView) => (
        <DropdownMenuItem key={name}>
          <CheckboxWithCount name={name} count={2} checked={innerSelected.includes(name)} onChange={handleChange}>
            {label}
          </CheckboxWithCount>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  )
}

export default SpecialityFilter
