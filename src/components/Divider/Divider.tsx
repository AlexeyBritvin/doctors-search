import React, { FunctionComponent } from 'react';

import styles from './Divider.module.css';

export interface DividerProps {

}

const Divider: FunctionComponent<DividerProps> = () => {
  return (
    <div className={styles.divider}></div>
  );
}

export default Divider;
