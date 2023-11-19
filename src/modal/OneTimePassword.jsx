import styles from './OneTimePassword.module.css';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import ChangePin from './ChangePin';
import SuccessPasswordChange from './SuccessPasswordChange';

import LeftArrow from '../assets/LeftArrow.png';
import ExitButton from '../assets/ExitButton.png';
import CWalletIcon from '../assets/CWalletIcon.png';

const OneTimePassword = ({ ...props }) => {
  const [oldPin, setOldPin] = useState(false);
  const [newPin, setNewPin] = useState(false);
  const [confirmPin, setConfirmPin] = useState(false);
  const [successPin, setSuccessPin] = useState(false);

  return createPortal(
    <>
      <div className={styles.otpBackdrop} {...props} />
      <div className={styles.otpContainer}>
        <div className={styles.otpExitNav}>
          <div className={styles.otpBack}>
            <img src={LeftArrow} />
            <p>Back</p>
          </div>
          <img {...props} src={ExitButton} />
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
          <button
            onClick={() => {
              setOldPin(true);
            }}
            className={styles.confirmButton}
          >
            Confirm
          </button>
          {oldPin && (
            <ChangePin
              version="Please enter old Pin"
              onClick={() => {
                setOldPin(false);
                setNewPin(true);
              }}
            />
          )}
          {newPin && (
            <ChangePin
              onClick={() => {
                setNewPin(false);
                setConfirmPin(true);
              }}
              version="Please Enter New Pin"
            />
          )}
          {confirmPin && (
            <ChangePin
              version="Please Confirm New Pin"
              onClick={() => {
                setConfirmPin(false);
                setSuccessPin(true);
              }}
            />
          )}
          {successPin && (
            <SuccessPasswordChange
              onClick={() => {
                setSuccessPin(false);
              }}
            />
          )}
        </div>
      </div>
    </>,
    document.getElementById('modal')
  );
};

export default OneTimePassword;
