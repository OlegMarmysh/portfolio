import React from 'react';
import styles from './Contacts.module.css';
import MainContacts from "./MainContacts";

function Contacts() {
  return (
    <div className={styles.contacts}>
        <div className={styles.container}>
            <h2>Contacts</h2>
            <MainContacts/>
            <button className={styles.button}>Send</button>
        </div>
    </div>
  );
}

export default Contacts;
