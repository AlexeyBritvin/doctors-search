import React, { FunctionComponent } from 'react';
import useComponentVisible from '../../hooks/useComponentVisible';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import Button from '../Button/Button';
import styles from './Dropdown.module.css';
import DropdownFooter from './DropdownFooter/DropdownFooter';

export interface DropdownProps {
  label: string
  footer?: boolean
  onReset?: () => void
  onApply?: () => void
  onClose? : () => void
}

const Dropdown: FunctionComponent<DropdownProps> = ({label, children, footer, onReset, onApply, onClose}) => {
  const handleClick = () => {
    const newValue = !isComponentVisible
    setIsComponentVisible(newValue)
  }

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false, onClose);

  const handleReset = () => {
    typeof onReset === 'function' && onReset()
  }
  const handleApply = () => {
    typeof onApply === 'function' && onApply()
    setIsComponentVisible(false)
  }

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

            {
              footer &&
                <DropdownFooter>
                  <Button viewType="link" onClick={handleReset}>Reset</Button>
                  <Button viewType="primary" onClick={handleApply}>Apply</Button>
                </DropdownFooter>
            }
          </div>
      }
    </div>
  );
}

export default Dropdown;
