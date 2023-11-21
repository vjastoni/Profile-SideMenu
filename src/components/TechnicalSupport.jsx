import styles from './TechnicalSupport.module.css';

const TechnicalSupport = () => {
  return (
    <div className={styles.technicalContainer}>
      <h1>Technical Support</h1>
      <div className={styles.form}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className={styles.colWrapper}>
            <div className={styles.firstCol}>
              <div>
                <p>Full name</p>
                <input
                  className={styles.shorter}
                  type="name"
                  placeholder="Ex. Youssef Bsheer"
                />
              </div>
              <div>
                <p>Email</p>
                <input
                  className={styles.email}
                  type="name"
                  placeholder="Ex. youssefbsheer@gmail.com"
                />
              </div>
            </div>
            <div className={styles.secCol}>
              <div>
                <p>Phone number</p>
                <input
                  className={styles.shorter}
                  type="number"
                  placeholder="Ex. +201094828532"
                />
              </div>
              <div>
                <p>Category</p>
                <select className={styles.select} name="select" id="select">
                  <option value="Select Category">Select Category</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <p className={styles.feedback}>Feedback</p>
            <textarea
              className={styles.textarea}
              placeholder="Enter your feedback"
            />
          </div>
          <button className={styles.submitButton}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default TechnicalSupport;
