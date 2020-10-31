import React, { FunctionComponent, ReactComponentElement } from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps {
  source?: string;
  size?: number;
  icon?: ReactComponentElement<'svg'>;
}

const Avatar: FunctionComponent<AvatarProps> = ({source, size = 96, icon}) => {
  const avatarStyle = {
    width: `${size}px`,
    height: `${size}px`
  }

  return (
    <div className={styles.avatar} style={avatarStyle}>
      {
        source ?
          <img className={styles.avatarImage} src={source} alt="avatar" ></img>
        : <div className={styles.default}></div>
      }
      {
        icon &&
        <div className={styles.icon}>{icon}</div>
      }
    </div>
  );
}

export default Avatar;
