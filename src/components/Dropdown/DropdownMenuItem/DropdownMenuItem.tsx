import React, { FunctionComponent } from 'react';

import styles from './DropdownMenuItem.module.css';

export interface DropdownMenuItemProps {

}

const DropdownMenuItem: FunctionComponent<DropdownMenuItemProps> = ({children}) => {
  return (
    <div className={styles.item}>
      {children}
    </div>
  );
}

export default DropdownMenuItem;
