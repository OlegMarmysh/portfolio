import React from 'react';
import logo from '../logo.svg';
import styles from './NavMenu.module.css';

function NavMenu() {
  return (
    <div className={styles.navMenu}>
        <a href="#" className="link">Main</a>
        <a href="#" className="link">Skills</a>
        <a href="#" className="link">Projects</a>
        <a href="#" className="link">Contacts</a>
    </div>
  );
}

export default NavMenu;
