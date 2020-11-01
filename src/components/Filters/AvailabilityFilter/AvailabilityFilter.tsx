import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import CheckboxWithCount from '../../CheckboxWithCount/CheckboxWithCount';
import Divider from '../../Divider/Divider';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownMenuItem from '../../Dropdown/DropdownMenuItem/DropdownMenuItem';

import { ReactComponent as VideoIcon } from '../../../icons/video.svg';
import styles from './AvailabilityFilter.module.css';

export interface AvailabilityFilterProps {

}

const AvailabilityFilter: FunctionComponent<AvailabilityFilterProps> = () => {
  const [todayChecked, setTodayChecked] = useState(false)
  const [daysChecked, setDaysCheckedChecked] = useState(false)
  const [weeksChecked, setWeeksCheckedChecked] = useState(false)

  const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    console.log(target.name, target.checked)
  }

  return (
    <Dropdown label="Availability">
      <DropdownMenuItem>
        <CheckboxWithCount name="today" count={2} checked={todayChecked} onChange={handleChange}>
          Today
        </CheckboxWithCount>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CheckboxWithCount name="nextThreeDays" count={3} checked={todayChecked} onChange={handleChange}>
          Next 3 days
        </CheckboxWithCount>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CheckboxWithCount name="nextTwoWeeks" count={4} checked={todayChecked} onChange={handleChange}>
          Next 2 weeks
        </CheckboxWithCount>
      </DropdownMenuItem>

      <DropdownMenuItem>
        <Divider></Divider>
      </DropdownMenuItem>

      <DropdownMenuItem>
        <CheckboxWithCount name="Telehealth" count={2} checked={todayChecked} onChange={handleChange}>
          <VideoIcon className={styles.videoIcon} width="24" height="24"></VideoIcon>
          Telehealth
        </CheckboxWithCount>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CheckboxWithCount name="newPatients" count={2} checked={todayChecked} onChange={handleChange}>
          Accepts new patients
        </CheckboxWithCount>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CheckboxWithCount name="online" count={2} checked={todayChecked} onChange={handleChange}>
          Schedules online
        </CheckboxWithCount>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CheckboxWithCount name="сhildren" count={2} checked={todayChecked} onChange={handleChange}>
          Treats сhildren
        </CheckboxWithCount>
      </DropdownMenuItem>
    </Dropdown>
  );
}

export default AvailabilityFilter;
