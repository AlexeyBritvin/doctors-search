import React, { FunctionComponent, ReactComponentElement } from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import styles from './Dropdown.module.css';



export interface DropdownProps {
  label: string
  footer?: ReactComponentElement<'div'>
}

const Dropdown: FunctionComponent<DropdownProps> = ({label, children, footer}) => {
  const handleClick = () => {
    const newValue = !isComponentVisible
    setIsComponentVisible(newValue)
  }

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  // const handleReset = (event: SyntheticEvent) => {
  //   console.log('click handleReset', event)
  // }
  // const handleApply = (event: SyntheticEvent) => {
  //   console.log('click handleApply', event)
  // }

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
            <div className={styles.dropdownMenuBody}>
              {children}
            </div>

            {/* <DropdownFooter>
              <Button viewType="link" onClick={handleReset}>Reset</Button>
              <Button viewType="primary" onClick={handleApply}>Apply</Button>
            </DropdownFooter> */}

            {footer && footer}
          </div>
      }
    </div>
  );
}

export default Dropdown;
