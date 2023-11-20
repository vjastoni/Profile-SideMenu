/* eslint-disable react/prop-types */
import styles from './SuccessOrFail.module.css';

export const SuccessOrFail = ({ condition }) => {
  return <>{condition === 'Success' ? <Success /> : <Failed />}</>;
};

function Success() {
  return <div className={styles.success}>Success</div>;
}

function Failed() {
  return <div className={styles.failed}>Failed</div>;
}
