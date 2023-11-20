/* eslint-disable react/prop-types */
import styles from './Setting.module.css';

import RightArrow from '../assets/RightArrow.png';

const Setting = ({ image, name, description }) => {
  return (
    <div className={styles.settingsContainer}>
      <div className={styles.settingsImage}>
        <img src={image} />
      </div>
      <div className={styles.settingInfo}>
        <p>{name}</p>
        <p className={styles.desc}>{description}</p>
      </div>
      <img className={styles.rightArrow} src={RightArrow} />
    </div>
  );
};

export default Setting;
