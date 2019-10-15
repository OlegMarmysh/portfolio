import React from 'react';
import styles from './Contacts.module.css';
import MainContacts from "./MainContacts";
import t from "../blockTitle.module.css";

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={t.blockTitle}>
                    <h2 className={t.title}>Contacts</h2>
                    <div className={t.horizontalLine}>
                        <div className={t.top}></div>
                        <div className={t.bottom}></div>
                    </div>
                    <MainContacts/>
                    <button className={styles.button}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
