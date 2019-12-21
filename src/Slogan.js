import React from 'react';
import styles from './Slogan.module.css';
import BlockTitle from "./BlockTitle";
import {Fade} from "react-reveal";

const Slogan = (props) => {
    return (
        <div className={styles.slogan}>
            <Fade bottom>
            <div className={styles.container}>
                <BlockTitle title={'Considering remote work'}/>
                <button className={styles.button}>Hire me</button>
            </div>
            </Fade>
        </div>
    );
};

export default Slogan;
