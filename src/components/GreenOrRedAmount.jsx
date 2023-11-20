/* eslint-disable react/prop-types */
import styles from './GreenOrRedAmount.module.css';

export const GreenOrRedAmount = ({ statusColor, price }) => {
  return (
    <>
      {statusColor === 'Green' ? (
        <GreenAmount amount={price} />
      ) : (
        <RedAmount amount={price} />
      )}
    </>
  );
};

function RedAmount({ amount }) {
  return (
    <div className={styles.redAmount}>
      <p>{amount}</p>
    </div>
  );
}

function GreenAmount({ amount }) {
  return (
    <div className={styles.greenAmount}>
      <p>{amount}</p>
    </div>
  );
}
