import React from 'react';
import styles from './Work.module.css';

const Work = (props) => {
    return (
        <div className={styles.work}>
            <div className={styles.content}>
                <div className={styles.workImg} style={props.style}>
                    <button className={styles.button}>Look</button>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div>
                    <h3 className={styles.title}>{props.title}</h3>
                </div>
                <div className={styles.description}>
                    {props.description}
                </div>
            </div>
        </div>
    );
}

export default Work;
