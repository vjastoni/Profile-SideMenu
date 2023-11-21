/* eslint-disable react/prop-types */
import styles from './FaqsComponent.module.css';

import { useState } from 'react';

import ExpandIcon from '../assets/ExpandIcon.png';
import MinimizeIcon from '../assets/MinimizeIcon.png';

const FaqsComponent = ({ question, answer }) => {
  const [showIcon, setShowIcon] = useState(false);
  return (
    <details className={styles.container}>
      <summary
        onClick={() => {
          setShowIcon(!showIcon);
        }}
      >
        {question}
        <img src={`${showIcon ? MinimizeIcon : ExpandIcon}`} />
      </summary>
      <p>{answer}</p>
    </details>
  );
};

export default FaqsComponent;
