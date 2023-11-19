import { NavLink } from 'react-router-dom';

import styles from './NavBarSettings.module.css';
import Setting from './Setting';

import CardIcon from '../assets/CardIcon.png';
import InviteIcon from '../assets/InviteIcon.png';
import PaymentIcon from '../assets/PaymentIcon.png';
import SettingsIcon from '../assets/SettingsIcon.png';
import HelpCenterIcon from '../assets/HelpCenterIcon.png';
import FaqsIcon from '../assets/FaqsIcon.png';
import NoteIcon from '../assets/NoteIcon.png';

const NavBarSettings = () => {
  return (
    <div className={styles.settingsContainer}>
      <Setting
        image={InviteIcon}
        name="Invite your friends"
        description="sed do eiusmod tempor incididunt."
      />
      <NavLink
        to="settings"
        style={({ isActive }) => ({
          backgroundColor: isActive ? '#fff2cc' : undefined,
          textDecoration: isActive ? 'none' : 'none',
          borderRadius: isActive ? '6px' : undefined,
        })}
        end
      >
        <Setting
          image={SettingsIcon}
          name="Settings"
          description="sed do eiusmod tempor incididunt."
        />
      </NavLink>
      <Setting
        image={CardIcon}
        name="Cards"
        description="sed do eiusmod tempor incididunt."
      />
      <Setting
        image={PaymentIcon}
        name="Express payment"
        description="sed do eiusmod tempor incididunt."
      />
      <NavLink
        to="helpcenter"
        style={({ isActive }) => ({
          backgroundColor: isActive ? '#fff2cc' : undefined,
          textDecoration: isActive ? 'none' : 'none',
          borderRadius: isActive ? '6px' : undefined,
        })}
      >
        <Setting
          image={HelpCenterIcon}
          name="Help center"
          description="sed do eiusmod tempor incididunt."
        />
      </NavLink>
      <NavLink
        to="faqs"
        style={({ isActive }) => ({
          backgroundColor: isActive ? '#fff2cc' : undefined,
          textDecoration: isActive ? 'none' : 'none',
          borderRadius: isActive ? '6px' : undefined,
        })}
      >
        <Setting
          image={FaqsIcon}
          name="FAQs"
          description="sed do eiusmod tempor incididunt."
        />
      </NavLink>
      <NavLink
        to="limitationsandthreshold"
        style={({ isActive }) => ({
          backgroundColor: isActive ? '#fff2cc' : undefined,
          textDecoration: isActive ? 'none' : 'none',
          borderRadius: isActive ? '6px' : undefined,
        })}
      >
        <Setting image={NoteIcon} name="Limitations & Threshold" description="" />
      </NavLink>
      <NavLink
        to="/chargesandfees"
        style={({ isActive }) => ({
          backgroundColor: isActive ? '#fff2cc' : undefined,
          textDecoration: isActive ? 'none' : 'none',
          borderRadius: isActive ? '6px' : undefined,
        })}
      >
        <Setting image={NoteIcon} name="Charges & Fees" description="" />
      </NavLink>
      <NavLink
        to="termsandcondition"
        style={({ isActive }) => ({
          backgroundColor: isActive ? '#fff2cc' : undefined,
          textDecoration: isActive ? 'none' : 'none',
          borderRadius: isActive ? '6px' : undefined,
        })}
      >
        <Setting image={NoteIcon} name="Terms and Conditions" description="" />
      </NavLink>
      <NavLink
        to="privacypolicy"
        style={({ isActive }) => ({
          backgroundColor: isActive ? '#fff2cc' : undefined,
          textDecoration: isActive ? 'none' : 'none',
          borderRadius: isActive ? '6px' : undefined,
        })}
      >
        <Setting image={NoteIcon} name="Privacy and Policy" description="" />
      </NavLink>
    </div>
  );
};

export default NavBarSettings;
