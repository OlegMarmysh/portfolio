import React from 'react';
import styles from './Contacts.module.css';
import BlockTitle from "../BlockTitle";
import {Fade} from "react-reveal";

const Contacts = (props) => {
    return (
        <div className={styles.contacts}>
            <Fade bottom>
            <div className={styles.container}>
                <BlockTitle title={'Contacts'}/>
                <div className={styles.wrapper}>
                    <input placeholder='Name' className={styles.name}/>
                    <input placeholder='e-mail' className={styles.surname}/>
                    <textarea placeholder='Message' className={styles.description}/>
                </div>
                <button className={styles.button}>Send</button>
            </div>
            </Fade>
        </div>
    );
}

export default Contacts;
