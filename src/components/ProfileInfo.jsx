import styles from './ProfileInfo.module.css';

import ProfilePicture from '../assets/ProfilePicture.png';
import EditButton from '../assets/EditButton.png';

const ProfileInfo = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profilePicture}>
        <img src={ProfilePicture} />
        <img src={EditButton} />
      </div>
      <div className={styles.profileInformation}>
        <h1>Youssef Bsheer</h1>
        <div className={styles.otherInfo}>
          <p>
            Username: <b>YoussefBsheer</b>
          </p>
          <p>User Status: Approved</p>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
