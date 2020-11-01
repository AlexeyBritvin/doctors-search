import React, { FunctionComponent } from 'react';
import Checkbox, { CheckboxProps } from '../Checkbox/Checkbox';

import styles from './CheckboxWithCount.module.css';

export interface CheckboxWithCountProps extends CheckboxProps {
  count: number
}

const CheckboxWithCount: FunctionComponent<CheckboxWithCountProps> = ({count, children, ...other}) => {
  return (
    <Checkbox {...other}>
      <span className={styles.text}>{children}</span>
      <span className={styles.count}>({count})</span>
    </Checkbox>
  );
}

export default CheckboxWithCount;
