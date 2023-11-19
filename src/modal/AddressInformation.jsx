import styles from './AddressInformation.module.css';

const AddressInformation = () => {
  return (
    <div className={styles.addressContainer}>
      <h1> Home Address</h1>
      <div className={styles.formed}>
        <div className={styles.firstCol}>
          <p>Zone Number</p>
          <input type="text" placeholder="Ex. 56 " />
          <p>Building number</p>
          <input type="text" placeholder="Ex. 50 " />
          <p>Work Address</p>
          <input type="text" placeholder="Al Rayyan" />
        </div>
        <div className={styles.secondCol}>
          <p>Street Number</p>
          <input type="text" placeholder="Ex. 123  " />
          <p>Unit Number</p>
          <input type="text" placeholder="Ex. 3" />
          <button className={styles.saveButton}>Save</button>
        </div>
      </div>
    </div>
  );
};
export default AddressInformation;
