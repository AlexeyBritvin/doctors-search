import React, { ChangeEvent } from 'react';
import Icon from '../Icon/Icon';
import { IconTypes } from '../Icon/icon-path';
import styles from './Input.module.css';

export interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: IconTypes;
  iconSize?: string;
  iconViewbox?: string;
}

const Input: React.FunctionComponent<InputProps> = ({
  placeholder,
  value,
  onChange,
  icon,
  iconSize,
  iconViewbox
}) => {
  return (
    <div className={styles.inputBox}>
      <input type="text" className={styles.input} placeholder={placeholder} value={value} onChange={onChange} />
      { icon && <Icon className={styles.icon} icon={icon} viewBox={iconViewbox} size={iconSize}></Icon> }
    </div>
  );
}

export default Input;
