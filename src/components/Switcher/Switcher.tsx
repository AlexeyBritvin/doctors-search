import React, { ChangeEvent, FunctionComponent } from 'react';
import { ReactComponent as CrossIcon } from '../../icons/cross.svg';

import styles from './Switcher.module.css';

export interface SwitcherProps {
  value: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Switcher: FunctionComponent<SwitcherProps> = ({value, onChange}) => {
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
        <CrossIcon className={styles.icon}></CrossIcon>
        <span className={styles.switcherButton} />
      </label>
    </div>
  );
}

export default Switcher;
