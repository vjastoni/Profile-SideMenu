import { useState } from 'react';

import styles from './HelpCenterPage.module.css';
import ModalNav from '../components/ModalNav';
import HelpCenterComponent from '../components/HelpCenterComponent';

// Modals
import TechnicalSupport from '../components/TechnicalSupport';
import RefundSupport from '../modal/RefundSupport';

// Images
import HelpCenterIcon from '../assets/HelpCenterIcon.png';

const HelpCenterPage = () => {
  const [selectedSetting, setSelectedSetting] = useState();
  const [techSupport, setTechSupport] = useState(false);
  const [refundSupport, setRefundSupport] = useState(false);

  function handleSelect(selectedOption) {
    setSelectedSetting(selectedOption);
  }

  let settingName = ' ';

  if (selectedSetting) {
    settingName = settingName + '' + selectedSetting;
  }

  return (
    <div className={styles.helpContainer}>
      <ModalNav
        onClick={() => {
          setTechSupport(false);
          setRefundSupport(false);
          setSelectedSetting('');
        }}
      />
      <div className={styles.helpContent}>
        <div className={styles.helpHeader}>
          <img src={HelpCenterIcon} />
          <h1
            onClick={() => {
              setTechSupport(false);
              setRefundSupport(false);
              setSelectedSetting('');
            }}
          >
            Help Center {' ' + settingName + ''}
          </h1>
        </div>
        <div className={styles.mainContent}>
          <h2>Support</h2>
          <div className={styles.helpSupport}>
            <p>Choose which support you want</p>
            <div className={styles.helpSupportBox}>
              <HelpCenterComponent
                onClick={() => {
                  handleSelect('> Technical Support');
                  setTechSupport(true);
                }}
                title="Technical Support"
                description="Create ticket for Technical Support "
              />
              {techSupport && <TechnicalSupport />}
              <HelpCenterComponent
                onClick={() => {
                  handleSelect('> Refund Support');
                  setRefundSupport(true);
                }}
                title="Refund Support"
                description="Request for a Refund Support"
              />
              {refundSupport && <RefundSupport />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HelpCenterPage;
