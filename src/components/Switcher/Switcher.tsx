import React from 'react';
import Icon from '../Icon/Icon';
import styles from './Switcher.module.css';

export interface SwitcherProps {
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switcher: React.FunctionComponent<SwitcherProps> = ({value, onChange}) => {
  return (
    <div className={styles.switcherBox}>
      <input
        className={styles.input}
        id="switcher"
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <label
        className={styles.label}
        htmlFor="switcher"
      >
        <Icon
          icon="cross"
          className={styles.icon}
          viewBox="0 0 10 10"
          size="10"
          color="#91A5A7"
        ></Icon>
        <span className={styles.switcherButton} />
      </label>
    </div>
  );
}

export default Switcher;
