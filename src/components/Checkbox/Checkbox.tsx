import React, { ChangeEvent, FunctionComponent } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  checked: boolean;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({label, children, ...other}) => {
  return (
    <div className={styles.container}>
      <label className={styles.checkboxLabel}>
        <input className={styles.input} type="checkbox" {...other} />
        <span className={styles.checkbox}></span>
        <span className={styles.checkboxText}>{children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
