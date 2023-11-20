import { createPortal } from 'react-dom';

import styles from './AllTransactions.module.css';
import TransactionFormat from '../components/TransactionFormat';

import LeftArrow from '../assets/LeftArrow.png';
import blackCalendar from '../assets/blackCalendar.png';
import yellowCalendar from '../assets/yellowCalendar.png';
import searchIcon from '../assets/searchIcon.png';
import firstTransaction from '../assets/firstTransaction.png';
import secondTransaction from '../assets/secondTransaction.png';
import thirdTransaction from '../assets/thirdTransaction.png';
import fourthTransaction from '../assets/fourthTransaction.png';

const AllTransactions = ({ ...props }) => {
  return createPortal(
    <>
      <div className={styles.transactionBackdrop} {...props} />
      <div className={styles.transactionContainer}>
        <div className={styles.transactionBack}>
          <img src={LeftArrow} />
          <p>Back</p>
        </div>
        <div className={styles.transactionHeader}>
          <h1>All Transactions</h1>
          <button className={styles.blackButton}>
            <img className={styles.calendar} src={blackCalendar} />
            From date
          </button>
          <button className={styles.yellowButton}>
            <img className={styles.calendar} src={yellowCalendar} />
            To date
          </button>
          <div className={styles.searchGroup}>
            <input className={styles.searchBar} type="search" placeholder="Search" />
            <div className={styles.searchIcon}>
              <img src={searchIcon} />
            </div>
          </div>
        </div>
        <div className={styles.recordTables}>
          <p>This Week</p>
          <TransactionFormat
            icon={firstTransaction}
            name="Internet Bill"
            info="Bank transfer"
            color="Success"
            priceVal="- QAR 94.01"
            priceStat="Red"
          />
          <TransactionFormat
            icon={secondTransaction}
            name="Nada Gamal"
            info="Wallet"
            color="Success"
            priceVal="+ QAR 41.01"
            priceStat="Green"
          />
          <p>2 Aug, 2020</p>
          <TransactionFormat
            icon={thirdTransaction}
            name="Ahmed Emad"
            info="Cash pickup"
            color="Failed"
            priceVal="+ QAR 41.01"
            priceStat="Red"
          />
          <TransactionFormat
            icon={fourthTransaction}
            name="Ahmed Samir"
            info="Wallet"
            color="Success"
            priceVal="+ QAR 41.01"
            priceStat="Green"
          />

          <TransactionFormat
            icon={thirdTransaction}
            name="Ahmed Emad"
            info="Cash pickup"
            color="Success"
            priceVal="+ QAR 41.01"
            priceStat="Green"
          />
          <p>3 Aug, 2020</p>
          <TransactionFormat
            icon={thirdTransaction}
            name="Ahmed Emad"
            info="Cash pickup"
            color="Success"
            priceVal="+ QAR 41.01"
            priceStat="Green"
          />
          <TransactionFormat
            icon={firstTransaction}
            name="Internet Bill"
            info="Bank transfer"
            color="Success"
            priceVal="- QAR 94.01"
            priceStat="Red"
          />
        </div>
      </div>
    </>,
    document.getElementById('allTransactionModal')
  );
};

export default AllTransactions;
