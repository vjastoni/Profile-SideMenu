import { createPortal } from 'react-dom';
import styles from './ChangePin.module.css';

import LeftArrow from '../assets/LeftArrow.png';
import ExitButton from '../assets/ExitButton.png';
import CWalletIcon from '../assets/CWalletIcon2.png';

const ChangePin = ({ version, ...props }) => {
  return createPortal(
    <>
      <div className={styles.changePinBackdrop} {...props} />
      <div className={styles.changePinContainer}>
        <div className={styles.changePinExitNav}>
          <div className={styles.changePinBack}>
            <img src={LeftArrow} />
            <p>Back</p>
          </div>
          <img {...props} src={ExitButton} />
        </div>
        <div className={styles.changePinContent}>
          <img src={CWalletIcon} />
          <h1>Change Pin</h1>
          <p>{version}</p>
          <div className={styles.changePinCode}>
            <input
              type="number"
              name="otp"
              id="otp"
              min="0"
              max="9"
              pattern="[0-9]"
            />
            <input
              type="number"
              name="otp"
              id="otp"
              min="0"
              max="9"
              pattern="[0-9]"
            />
            <input
              type="number"
              name="otp"
              id="otp"
              min="0"
              max="9"
              pattern="[0-9]"
            />
            <input
              type="number"
              name="otp"
              id="otp"
              min="0"
              max="9"
              pattern="[0-9]"
            />
            <input
              type="number"
              name="otp"
              id="otp"
              min="0"
              max="9"
              pattern="[0-9]"
            />
            <input
              type="number"
              name="otp"
              id="otp"
              min="0"
              max="9"
              pattern="[0-9]"
            />
          </div>
          <button {...props} className={styles.changeConfirmButton}>
            Confirm
          </button>
        </div>
      </div>
    </>,
    document.getElementById('changePinModal')
  );
};

export default ChangePin;
