import { useState } from 'react';
import '../App.css';
import ProfileInfo from '../components/ProfileInfo';
import NavBarSettings from '../components/NavBarSettings';

const MainNavigation = () => {
  const [showProfile, setShowProfile] = useState(true);

  let sidenav = (
    <div className={`profile-nav ${showProfile ? 'open' : 'close'}`}>
      <ProfileInfo />
      <NavBarSettings />
      <button className="logoutButton">Logout</button>
    </div>
  );

  return (
    <div>
      <button
        className="button"
        onClick={() => {
          setShowProfile(!showProfile);
        }}
      >
        Show Profile
      </button>
      {sidenav}
    </div>
  );
};

export default MainNavigation;
