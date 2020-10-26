import React, { ChangeEvent, FunctionComponent } from 'react';
import styles from './RadioButton.module.css';

export interface RadioButtonProps {
  checked: boolean;
  label?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: FunctionComponent<RadioButtonProps> = ({label, ...other}) => {
  return (
    <div className={styles.container}>
      <label className={styles.radioLabel}>
        <input className={styles.input} type="radio" {...other} />
        <span className={styles.radio}></span>
        <span className={styles.radioText}>{label}</span>
      </label>
    </div>
   );
}

export default RadioButton;
