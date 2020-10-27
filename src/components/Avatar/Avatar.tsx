import React, { FunctionComponent } from 'react';
import styles from './Avatar.module.css';

export interface AvatarProps {
  source?: string;
  size?: number;
}

const Avatar: FunctionComponent<AvatarProps> = ({source, size = 96}) => {
  const avatarStyle = {
    width: `${size}px`,
    height: `${size}px`
  };

  return (
    <div className={styles.avatar} style={avatarStyle}>
      {
        source ?
        <img className={styles.avatarImage} src={source} alt="avatar" ></img>
        : <div className={styles.default}></div>
      }
    </div>
  );
}

export default Avatar;
