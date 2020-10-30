import React, { FunctionComponent } from 'react';
import Avatar from '../Avatar/Avatar';
import { ReactComponent as HeartIcon } from '../../icons/heart.svg';

import styles from './FilterResultCard.module.css';

export interface FilterResultCardProps {
  avatar?: string;
  name: string;
  address: string;
  speciality: string;
  experience: number;
  reviewsCount: number;
  telehealth: boolean;
  price: number;
}

const FilterResultCard: FunctionComponent<FilterResultCardProps> = ({
  avatar,
  name,
  speciality,
  experience,
  reviewsCount,
  address,
  telehealth,
  price
}) => {
  return (
    <div className={styles.card}>
      <Avatar source={avatar}></Avatar>
      <div className={styles.cardTextInfo}>
        <div className={styles.cardTitle}>
          <p>{name}</p>
        </div>
        <div className={styles.cardTextRow}>
          <span className={styles.cardTextItem}>{speciality}</span>
          <span className={styles.cardTextItem}>{experience} Years Experience</span>
          <span className={`${styles.cardTextItem} ${styles.highlighed}`}>{reviewsCount} Reviews</span>
        </div>
        <div className={styles.cardAdditionalText}>
          {
            telehealth && <span className={styles.cardTextItem}>Video visit</span>
          }
          <span className={styles.cardTextItem}>{address}</span>
        </div>
      </div>

      <div className={styles.cardActions}>
        <div className={styles.cardPrice}>
          <span className={styles.cardPriceTitle}>avg. price</span>
          <span className={styles.cardPriceValue}>${price}</span>
        </div>

        <HeartIcon className={styles.icon}></HeartIcon>
      </div>
    </div>
  );
}

export default FilterResultCard;
