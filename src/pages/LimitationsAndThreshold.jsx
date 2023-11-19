import styles from './LimitationsAndThreshold.module.css';
import ModalNav from '../components/ModalNav';

const LimitationsAndThreshold = () => {
  return (
    <div className={styles.limitsContainer}>
      <ModalNav />
      <div className={styles.limitsContent}>
        <h1>Limits And Threshold</h1>
      </div>
    </div>
  );
};

export default LimitationsAndThreshold;
