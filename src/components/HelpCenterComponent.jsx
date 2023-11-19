/* eslint-disable react/prop-types */
import styles from './HelpCenterComponent.module.css';
import RightArrow from '../assets/RightArrow.png';

const HelpCenterComponent = ({ title, description, ...props }) => {
  return (
    <div className={styles.box} {...props}>
      <div className={styles.boxWrapper}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <img src={RightArrow} />
    </div>
  );
};

export default HelpCenterComponent;
