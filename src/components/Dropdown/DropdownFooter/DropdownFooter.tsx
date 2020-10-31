import React, { FunctionComponent } from 'react';

import styles from './DropdownFooter.module.css';

export interface DropdownFooterProps {

}

const DropdownFooter: FunctionComponent<DropdownFooterProps> = (props) => {
  return (
    <div className={styles.footer}>
      {props.children}
    </div>
   );
}

export default DropdownFooter;
