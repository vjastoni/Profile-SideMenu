/* eslint-disable react/prop-types */
import styles from './SettingsComponent.module.css';

import RightArrow from '../assets/RightArrow.png';

const SettingsAppearance = ({ icon, title, defaultSetting, ...props }) => {
  return (
    <div className={styles.border} {...props}>
      <div className={styles.iconLeft}>
        <img src={icon} />
      </div>
      <div className={styles.settingsAppearance}>
        <p>{title}</p>
        <p>{defaultSetting}</p>
      </div>
      <div className={styles.iconRight}>
        <img src={RightArrow} />
      </div>
    </div>
  );
};
export default SettingsAppearance;
