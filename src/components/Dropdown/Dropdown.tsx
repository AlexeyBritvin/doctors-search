import React, { FunctionComponent } from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

import styles from './Dropdown.module.css';


export interface DropdownProps {
  label: string
}

const Dropdown: FunctionComponent<DropdownProps> = ({label, children}) => {
  const handleClick = () => {
    const newValue = !isComponentVisible
    setIsComponentVisible(newValue)
  }

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  return (
    <div className={styles.dropdown} ref={ref}>
      <button
        type="button"
        className={`${styles.button} ${isComponentVisible && styles.active}`}
        onClick={handleClick}
      >
        <span className={styles.buttonText}>{label}</span>
        <ArrowIcon
          className={`${styles.arrow} ${isComponentVisible && styles.rotated}`}
          fill={isComponentVisible ? '#ffffff' : '#327680'}
        ></ArrowIcon>
      </button>

      {
        isComponentVisible &&
          <div className={styles.dropdownMenu}>
            {children}
          </div>
      }
    </div>
  );
}

export default Dropdown;
