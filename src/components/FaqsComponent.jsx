/* eslint-disable react/prop-types */
import styles from './FaqsComponent.module.css';

import ExpandIcon from '../assets/ExpandIcon.png';

const FaqsComponent = ({ question, answer }) => {
  return (
    <details className={styles.container}>
      <summary>
        {question}
        <img src={ExpandIcon} />
      </summary>
      <p>{answer}</p>
    </details>
  );
};

export default FaqsComponent;
