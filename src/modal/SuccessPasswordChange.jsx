import { createPortal } from 'react-dom';

import styles from './OneTimePassword.module.css';

import CWalletIcon2 from '../assets/CWalletIcon2.png';
import SuccessIcon from '../assets/SuccessIcon.png';

const SuccessPasswordChange = ({ ...props }) => {
  return createPortal(
    <>
      <div className={styles.successBackdrop} {...props} />
      <div className={styles.successContainer}>
        <img src={CWalletIcon2} />
        <h1>
          You’ve successfully <br></br> changed your <br></br> PIN Number
        </h1>
        <img src={SuccessIcon} />
      </div>
    </>,
    document.getElementById('successModal')
  );
};

export default SuccessPasswordChange;
