import { useState } from 'react';

import styles from './SettingsPage.module.css';
import ModalNav from '../components/ModalNav';
import SettingsComponent from '../components/SettingsComponent';
import SettingsAppearance from '../components/SettingsAppearance';

// Images
import ProfileIcon from '../assets/ProfileIcon.png';
import ThemeIcon from '../assets/ThemeIcon.png';
import LanguageIcon from '../assets/LanguageIcon.png';
import PincodeIcon from '../assets/PincodeIcon.png';

// Modals
import AccountInformation from '../modal/AccountInformation';
import WorkInformation from '../modal/WorkInformation';
import AddressInformation from '../modal/AddressInformation';
import OneTimePassword from '../modal/OneTimePassword';
import ChangePassword from '../modal/ChangePassword';

const SettingsPage = () => {
  const [selectedSetting, setSelectedSetting] = useState();
  const [accountInformation, setAccountInformation] = useState(false);
  const [workInformation, setWorkInformation] = useState(false);
  const [addressInformation, setAddressInformation] = useState(false);
  const [oneTimePassword, setOneTimePassword] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  function handleSelect(selectedOption) {
    setSelectedSetting(selectedOption);
  }

  let settingName = ' ';

  if (selectedSetting) {
    settingName = settingName + '' + selectedSetting;
  }

  return (
    <div className={styles.settingsContainer}>
      <ModalNav
        onClick={() => {
          setAccountInformation(false);
          setWorkInformation(false);
          setAddressInformation(false);
          setChangePassword(false);
          setSelectedSetting('');
        }}
      />
      <div className={styles.settingsContent}>
        <h1
          className={styles.settingsBack}
          onClick={() => {
            setAccountInformation(false);
            setWorkInformation(false);
            setAddressInformation(false);
            setChangePassword(false);
            setSelectedSetting('');
          }}
        >
          Settings {' ' + settingName + ''}
        </h1>
        <div className={styles.settingsContentContainer}>
          <div className={styles.settingsExtra}>
            <div className={styles.settingsPersonal}>
              <h3>Personal Information</h3>
              <SettingsComponent
                onClick={() => {
                  handleSelect('> Account Information');
                  setAccountInformation(true);
                }}
                icon={ProfileIcon}
                title="Account info"
                description="Edit your Personal info"
              />

              {accountInformation && <AccountInformation />}

              <SettingsComponent
                onClick={() => {
                  handleSelect('> Work Information');
                  setWorkInformation(true);
                }}
                icon={ProfileIcon}
                title="Work info"
                description="Edit your Work info"
              />

              {workInformation && <WorkInformation />}

              <SettingsComponent
                onClick={() => {
                  handleSelect('> Address Information');
                  setAddressInformation(true);
                }}
                icon={ProfileIcon}
                title="Address info"
                description="Edit your Address info"
              />

              {addressInformation && <AddressInformation />}

              <h3>Security</h3>
              <SettingsComponent
                onClick={() => {
                  handleSelect('> Security > Change Password');
                  setOneTimePassword(true);
                  setChangePassword(true);
                }}
                icon={PincodeIcon}
                title="Change pin code"
              />

              {changePassword && <ChangePassword />}

              {oneTimePassword && (
                <OneTimePassword
                  onClick={() => {
                    setOneTimePassword(false);
                  }}
                />
              )}
            </div>
            <div className={styles.settingsAppearance}>
              <h3>Appearance</h3>
              <SettingsAppearance
                onClick={() => {
                  handleSelect('> Theme');
                }}
                icon={ThemeIcon}
                title="Theme"
                defaultSetting="System"
              />
              <SettingsAppearance
                onClick={() => {
                  handleSelect('> Language');
                }}
                icon={LanguageIcon}
                title="Language"
                defaultSetting="English"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
