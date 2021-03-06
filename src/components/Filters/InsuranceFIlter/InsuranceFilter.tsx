import React, { ChangeEvent, useEffect, useState } from 'react'
import useGenerateCheckboxes from '../../../hooks/useGenerateCheckboxes'
import { CheckboxView } from '../../../models/checkbox-view.model'
import CheckboxWithCount from '../../CheckboxWithCount/CheckboxWithCount'
import Divider from '../../Divider/Divider'
import Dropdown from '../../Dropdown/Dropdown'
import DropdownMenuItem from '../../Dropdown/DropdownMenuItem/DropdownMenuItem'
import SearchInput from '../../SearchInput/SearchInput'
import Switcher from '../../Switcher/Switcher'

import styles from './InsuranceFilter.module.css'

export interface InsuranceFilterProps {
  insurance: string[]
  selected: string[]
  onChange: (selected: string[]) => void
}

const InsuranceFilter: React.FC<InsuranceFilterProps> = ({ insurance, selected, onChange }) => {
  const [search, setSearch] = useState('')
  const [otherThenInsuranse, setOtherThenInsuranse] = useState(false)
  const checkboxes = useGenerateCheckboxes(insurance, search)
  const [innerSelected, setSelected] = useState<string[]>([])

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
    setSearch('')
  }
  const handleApply = () => {
    onChange(innerSelected)
    setSearch('')
  }

  const onClose = () => {
    setSelected(selected)
    setSearch('')
  }

  const handleSwitcherChange = () => {
    setOtherThenInsuranse(!otherThenInsuranse)
  }

  return (
    <Dropdown label="Insurance" size="big" footer={true} onApply={handleApply} onReset={handleReset} onClose={onClose}>
      <DropdownMenuItem>
        <div className={styles.switcherWrap}>
          <span>Provides other than insurance payment options</span>
          <Switcher value={otherThenInsuranse} onChange={handleSwitcherChange}></Switcher>
        </div>
      </DropdownMenuItem>

      <DropdownMenuItem>
        <Divider />
      </DropdownMenuItem>

      <DropdownMenuItem>
        <SearchInput
          value={search}
          placeholder="Filter by insurance carrier"
          onChange={handleSearchChange}></SearchInput>
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

export default InsuranceFilter
