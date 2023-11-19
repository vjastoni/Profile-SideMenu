/* eslint-disable react/prop-types */
import styles from './SettingsComponent.module.css';

import RightArrow from '../assets/RightArrow.png';

const SettingsComponent = ({ icon, title, description, ...props }) => {
  return (
    <div className={styles.border} {...props}>
      <div className={styles.iconLeft}>
        <img src={icon} />
      </div>
      <div className={styles.settingsInfo}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <div className={styles.iconRight}>
        <img src={RightArrow} />
      </div>
    </div>
  );
};

export default SettingsComponent;
