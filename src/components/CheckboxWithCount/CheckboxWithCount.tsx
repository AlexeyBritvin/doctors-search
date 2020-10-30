import React, { ChangeEvent, FunctionComponent } from 'react';
import Checkbox from '../Checkbox/Checkbox';

import styles from './CheckboxWithCount.module.css';

export interface CheckboxWithCountProps {
  count: number
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const CheckboxWithCount: FunctionComponent<CheckboxWithCountProps> = ({count, children, ...other}) => {
  return (
    <Checkbox {...other}>
      {children} <span className={styles.count}>({count})</span>
    </Checkbox>
  );
}

export default CheckboxWithCount;
