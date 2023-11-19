import styles from './ModalNav.module.css';

import LeftArrow from '../assets/LeftArrow.png';
import CWalletIcon from '../assets/CWalletIcon.png';

const ModalNav = () => {
  return (
    <div className={styles.faqsNav}>
      <div className={styles.faqsBack}>
        <img src={LeftArrow} />
        <p>Back</p>
      </div>
      <div className={styles.faqsIcon}>
        <img src={CWalletIcon} />
      </div>
      <div className={styles.faqsRoutes}>
        <nav>
          <a>Web Wallet</a>
          <a>About Us</a>
          <a>Contact Us</a>
        </nav>
      </div>
    </div>
  );
};

export default ModalNav;
