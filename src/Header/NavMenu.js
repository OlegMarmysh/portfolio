import React from 'react';
import styles from './NavMenu.module.css';

const NavMenu = (props) => {
  return (
    <div className={styles.navMenu}>
        <a href="#" className="link">Main</a>
        <a href="#" className="link">Skills</a>
        <a href="#" className="link">Projects</a>
        <a href="#" className="link">Contacts</a>
    </div>
  );
};

export default NavMenu;
