import React from 'react';
import styles from './Skill.module.css';

const Skill = (props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.content}>
                <div className={styles.avatar}>
                    <img src={props.img} alt=""/>
                </div>
                <h3  className={styles.title}>{props.title}</h3>
                <div className={styles.description}>
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    );
};

export default Skill;