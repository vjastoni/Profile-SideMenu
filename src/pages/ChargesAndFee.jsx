import styles from './ChargesAndFee.module.css';
import ModalNav from '../components/ModalNav';

const ChargesAndFee = () => {
  return (
    <div className={styles.chargesContainer}>
      <ModalNav />
      <div className={styles.chargesContent}>
        <h1>Charges and Fee</h1>
      </div>
    </div>
  );
};

export default ChargesAndFee;
