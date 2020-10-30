import React, { ChangeEvent, ReactComponentElement } from 'react';
import styles from './Input.module.css';

export interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactComponentElement<'svg'>;
}

const Input: React.FunctionComponent<InputProps> = ({
  placeholder,
  value,
  onChange,
  icon
}) => {
  return (
    <div className={styles.inputBox}>
      <input type="text" className={styles.input} placeholder={placeholder} value={value} onChange={onChange} />
      {
        icon &&
          <span className={styles.iconBox}>
            { icon }
          </span>
      }
    </div>
  );
}

export default Input;
