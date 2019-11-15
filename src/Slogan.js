import React from 'react';
import styles from './Slogan.module.css';
import BlockTitle from "./BlockTitle";

const Slogan = (props) => {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                <BlockTitle title={'Considering remote work'}/>
                <button className={styles.button}>Hire me</button>
            </div>
        </div>
    );
};

export default Slogan;
