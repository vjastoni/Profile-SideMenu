import { useState } from 'react';
import '../App.css';
import ProfileInfo from '../components/ProfileInfo';
import NavBarSettings from '../components/NavBarSettings';

import LeftArrow from '../assets/LeftArrow.png';

const MainNavigation = () => {
  const [showProfile, setShowProfile] = useState(true);

  let sidenav = (
    <div className={`profile-nav ${showProfile ? 'open' : 'close'}`}>
      <div
        onClick={() => {
          setShowProfile(!showProfile);
        }}
        className="backButton"
      >
        <img src={LeftArrow} />
      </div>
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
