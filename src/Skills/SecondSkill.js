import React from 'react';
import styles from './SecondSkill.module.css';

function SecondSkill() {
    return (
        <div className={styles.secondSkill}>
            <img src="" alt=""/>
            <div className={styles.content}>
                <div className={styles.avatar}>
                    <img src="" alt=""/>
                </div>
                <span>JS</span>
            </div>
            <div className={styles.description}>
                <span>detailed skill description</span>
            </div>
        </div>
    )
}

export default SecondSkill;
