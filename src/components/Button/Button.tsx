import * as React from 'react';
import { SyntheticEvent } from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  viewType: 'link' | 'primary';
  onClick?: (event: SyntheticEvent) => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({viewType, onClick, children}) => {
  return (
    <button type="button" className={styles[viewType]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
