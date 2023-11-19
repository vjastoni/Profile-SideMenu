import styles from './OneTimePassword.module.css';
import { createPortal } from 'react-dom';

import LeftArrow from '../assets/LeftArrow.png';
import ExitButtom from '../assets/ExitButton.png';
import CWalletIcon from '../assets/CWalletIcon.png';

const OneTimePassword = ({ ...props }) => {
  return createPortal(
    <>
      <div className={styles.otpBackdrop} {...props} />
      <div className={styles.otpContainer}>
        <div className={styles.otpExitNav}>
          <div className={styles.otpBack}>
            <img src={LeftArrow} />
            <p>Back</p>
          </div>
          <img {...props} src={ExitButtom} />
        </div>
        <div className={styles.modalContent}>
          <img src={CWalletIcon} />
          <h1>4-digit OTP code</h1>
          <p>
            Please enter the code we’ve sent to <br></br> +201094828532
          </p>
          <div className={styles.otpCode}>
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
          <p>Resend</p>
          <button className={styles.confirmButton}>Confirm</button>
        </div>
      </div>
    </>,
    document.getElementById('modal')
  );
};

export default OneTimePassword;
