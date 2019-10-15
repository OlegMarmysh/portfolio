import React from 'react';
import styles from './MainContacts.module.css';

function MainContacts() {
  return (
    <div className={styles.mainContacts}>
        <input placeholder='Name' className={styles.name}/>
        <input placeholder='e-mail' className={styles.surname}/>
        <textarea placeholder='Message' className={styles.description}/>
    </div>
  );
}

export default MainContacts;
