/* eslint-disable react/prop-types */
import styles from './TransactionFormat.module.css';

const TransactionFormat = ({ icon, name, info, condition, amount }) => {
  return (
    <div className={styles.transacTable}>
      <div className={styles.transacUserInfo}>
        <img src={icon} />
        <p>{name}</p>
      </div>
      <div className={styles.transacInfo}>
        <p>{info}</p>
      </div>
      <div className={styles.transacAmountInfo}>
        <div className={styles.transSuccess}>{condition}</div>
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default TransactionFormat;
