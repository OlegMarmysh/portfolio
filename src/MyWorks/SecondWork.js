import React from 'react';
import styles from './SecondWork.module.css';

function SecondWork() {
    return (
        <div className={styles.secondWork}>
            <img src="" alt=""/>
            <div className={styles.content}>
                <button className={styles.button}>Look</button>
                <div className={styles.description}>
                    <div>
                        <span>The name of the project</span>
                    </div>
                    <div>
                        <span>Short description</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondWork;
