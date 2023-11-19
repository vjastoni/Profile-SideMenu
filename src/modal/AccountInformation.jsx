/* eslint-disable no-irregular-whitespace */
import { useState } from 'react';

import styles from './AccountInformation.module.css';

const AccountInformation = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.accountInfoContainer}>
      <h1>Account Information</h1>
      <div className={styles.form}>
        <div className={styles.firstColumn}>
          <div className={styles.radioGroup}>
            <p>QID issuer</p>
            <div
              style={{
                backgroundColor:
                  selectedOption === 'option1' ? '#fff2cc' : '#ffffff',
              }}
              className={styles.radioButton}
            >
              <label htmlFor="interior">Ministry of interior</label>
              <input
                name="radio"
                type="radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={handleOptionChange}
              />
               
            </div>
            <div
              style={{
                backgroundColor:
                  selectedOption === 'option2' ? '#fff2cc' : '#ffffff',
              }}
              className={styles.radioButton}
            >
              <label htmlFor="foreign">Ministry of foreign affairs</label>
              <input
                name="radio"
                type="radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
              />
            </div>
          </div>
          <div className={styles.wrapper}>
            <p>Date Of Birth </p>
            <p>*based on QID</p>
          </div>
          <input className={styles.gray} type="text" placeholder="1992-02-02" />
          <div className={styles.wrapper}>
            <p>Qatar ID </p>
            <p>*based on QID</p>
          </div>
          <input className={styles.gray} type="text" placeholder="29081805653" />
          <p>Email</p>
          <input type="email" placeholder="Youssefbsheer@gmail.com" />
          <p>Are you a Politically Exposed Person?</p>
          <select className={styles.select} name="select" id="select">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <p>Phone number</p>
          <input type="text" placeholder="+201094828532 " />
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.wrapper}>
            <p>Fullname </p>
            <p>*based on QID</p>
          </div>
          <input className={styles.gray} type="text" placeholder="Youssef Bsheer" />
          <div className={styles.wrapper} id={styles.nationality}>
            <p>NATIONALITY </p>
            <p>*based on QID</p>
          </div>
          <input className={styles.gray} type="text" placeholder="PHILIPPINES " />
          <div className={styles.wrapper}>
            <p>QID expiry date </p>
            <p>*based on QID</p>
          </div>
          <input className={styles.gray} type="text" placeholder="03/08/2024 " />
          <p>Place of Birth </p>
          <input type="text" placeholder="Place of Birth " />
          <p>Gender</p>
          <select className={styles.select} name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button className={styles.saveButton}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
