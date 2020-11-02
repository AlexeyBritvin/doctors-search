import React, { ChangeEvent, FunctionComponent } from 'react';
import CheckboxWithCount from '../../CheckboxWithCount/CheckboxWithCount';
import Divider from '../../Divider/Divider';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownMenuItem from '../../Dropdown/DropdownMenuItem/DropdownMenuItem';
import { Availability } from '../../../models/main-filter.model';

import { ReactComponent as VideoIcon } from '../../../icons/video.svg';
import styles from './AvailabilityFilter.module.css';

export interface AvailabilityFilterProps {
  selected: Availability
  onChange: (name: string, checked: boolean) => void
}

const AvailabilityFilter: FunctionComponent<AvailabilityFilterProps> = ({selected, onChange}) => {
  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    onChange(target.name, target.checked)
  }

  return (
    <Dropdown label="Availability">
      <DropdownMenuItem>
        <CheckboxWithCount name="today" count={2} checked={selected.today} onChange={handleChange}>
          Today
        </CheckboxWithCount>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CheckboxWithCount name="nextThreeDays" count={3} checked={selected.nextThreeDays} onChange={handleChange}>
          Next 3 days
        </CheckboxWithCount>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CheckboxWithCount name="nextTwoWeeks" count={4} checked={selected.nextTwoWeeks} onChange={handleChange}>
          Next 2 weeks
        </CheckboxWithCount>
      </DropdownMenuItem>

      <DropdownMenuItem>
        <Divider></Divider>
      </DropdownMenuItem>

      <DropdownMenuItem>
        <CheckboxWithCount name="telehealth" count={2} checked={selected.telehealth} onChange={handleChange}>
          <VideoIcon className={styles.videoIcon} width="24" height="24"></VideoIcon>
          Telehealth
        </CheckboxWithCount>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CheckboxWithCount name="acceptNew" count={2} checked={selected.acceptNew} onChange={handleChange}>
          Accepts new patients
        </CheckboxWithCount>
      </DropdownMenuItem>
    </Dropdown>
  );
}

export default AvailabilityFilter;
