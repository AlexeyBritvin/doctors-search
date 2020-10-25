import * as React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  checked: boolean;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({label, ...other}) => {
  return (
    <div className={styles.container}>
      <label className={styles.checkboxLabel}>
        <input className={styles.input} type="checkbox" {...other} />
        <span className={styles.checkbox}></span>
        <span className={styles.checkboxText}>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
