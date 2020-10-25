import React from 'react';
import { iconPath, IconTypes } from './icon-path';

export interface IconProps {
  viewBox?: string;
  size?: string;
  icon: IconTypes;
  className?: string;
  color?: string;
}

const Icon: React.FunctionComponent<IconProps> = ({className, size, viewBox, color, icon}) => {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill={color} d={iconPath[icon]} />
    </svg>
  );
}

Icon.defaultProps = {
  size: '16',
  color: '#244D51',
  viewBox: '0 0 24 24'
};

export default Icon;
