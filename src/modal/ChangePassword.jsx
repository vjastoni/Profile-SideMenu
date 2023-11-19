import { useState } from 'react';

import styles from './ChangePassword.module.css';
import SuccessPasswordChange from './SuccessPasswordChange';

import passWordIcon from '../assets/passwordIcon.png';

const ChangePassword = () => {
  const [passwordChange, setPasswordChange] = useState(false);
  return (
    <div className={styles.passwordContainer}>
      <div className={styles.passwordContent}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h2>
            Mobile Wallet <br></br>Details
          </h2>
          <div className={styles.passWrapper}>
            <p>Old Password</p>
            <div className={styles.fieldGroup}>
              <input placeholder="Enter Old Password" type="password" />
              <div className={styles.icon}>
                <img src={passWordIcon} />
              </div>
            </div>
            <p>New Password</p>
            <div className={styles.fieldGroup}>
              <input placeholder="Enter Old Password" type="password" />
              <div className={styles.icon}>
                <img src={passWordIcon} />
              </div>
            </div>
            <p>Confirm New Password</p>
            <div className={styles.fieldGroup}>
              <input placeholder="Confirm New Password" type="password" />
              <div className={styles.icon}>
                <img src={passWordIcon} />
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setPasswordChange(true);
            }}
            className={styles.changePassButton}
          >
            Change Password
          </button>
        </form>
      </div>
      {passwordChange && (
        <SuccessPasswordChange
          onClick={() => {
            setPasswordChange(false);
          }}
        />
      )}
    </div>
  );
};

export default ChangePassword;
