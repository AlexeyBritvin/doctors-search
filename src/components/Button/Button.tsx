import * as React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  viewType: 'link' | 'primary';
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const {viewType} = props;
  return (
    <button type="button" className={styles[viewType]}>
      {props.children}
    </button>
  );
}

export default Button;
