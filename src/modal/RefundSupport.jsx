import styles from './RefundSupport.module.css';

const RefundSupport = () => {
  return (
    <div className={styles.refundContainer}>
      <h1>Refund Support</h1>
      <div className={styles.form}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className={styles.colWrapper}>
            <div className={styles.firstCol}>
              <div>
                <p>Name</p>
                <input type="name" placeholder="Ex. Youssef Bsheer" />
              </div>
              <div>
                <p>Email</p>
                <input type="name" placeholder="Ex. youssefbsheer@gmail.com" />
              </div>
            </div>
            <div className={styles.secCol}>
              <div>
                <p>Phone number</p>
                <input type="number" placeholder="Ex. +201094828532" />
              </div>
              <div>
                <p>Choose Transaction</p>
                <select className={styles.select} name="select" id="select">
                  <option value="Select Category">Choose Transaction</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <p className={styles.feedback}>Comments</p>
            <textarea placeholder="Enter your comments" />

            <div className={styles.addWrapper}>
              <div>
                <p>Select Image</p>
                <input
                  className={styles.fileType}
                  type="file"
                  id="myfile"
                  name="myfile"
                />
              </div>
              <div className={styles.sendTicket}>
                <input type="checkbox" id="option" name="option" />
                <label htmlFor="option"> Send a ticket copy via SMS </label>
              </div>
            </div>
          </div>
          <button className={styles.submitButton}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default RefundSupport;
