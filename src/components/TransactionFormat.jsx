/* eslint-disable react/prop-types */

import styles from './TransactionFormat.module.css';
import { SuccessOrFail } from './SuccessOrFail';
import { GreenOrRedAmount } from './GreenOrRedAmount';

const TransactionFormat = ({ icon, name, info, priceVal, priceStat, color }) => {
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
        <SuccessOrFail condition={color} />
        <GreenOrRedAmount statusColor={priceStat} price={priceVal} />
      </div>
    </div>
  );
};

export default TransactionFormat;
