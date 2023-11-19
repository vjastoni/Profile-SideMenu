import styles from './WorkInformation.module.css';

const WorkInformation = () => {
  return (
    <div className={styles.workContainer}>
      <h1>Work Information</h1>
      <div className={styles.forms}>
        <div className={styles.firstCol}>
          <p>Profession</p>
          <select className={styles.select} name="select" id="select">
            <option value="Accountant">ACCOUNTANT</option>
            <option value="IT">IT</option>
            <option value="Doctor">DOCTOR</option>
            <option value="Nurse">NURSE</option>
          </select>
          <p>Phone number</p>
          <input type="text" placeholder="Ex. +201094828532 " />
          <p>Source of Income</p>
          <select className={styles.select} name="select" id="select">
            <option value="Salary">Salary</option>
            <option value="Rental">Rental income</option>
            <option value="Interest">Interest</option>
            <option value="Bonds">Bonds</option>
            <option value="Dividends">Dividends</option>
          </select>
        </div>
        <div className={styles.secondCol}>
          <p>Employer</p>
          <input type="text" placeholder="Ex. Google " />
          <p>Expected Monthly Salary</p>
          <input type="text" placeholder="Ex. 15,600 " />
          <button className={styles.saveButton}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default WorkInformation;
