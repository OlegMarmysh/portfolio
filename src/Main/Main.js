import React from 'react';
import styles from './Main.module.css';

const Main = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hello, my name is</span>
                    <span>Oleg <span>Marmysh</span></span>
                    <h1>I am front-end developer</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}>
                      <img className={styles.image} src="https://sun9-55.userapi.com/c629212/v629212999/28ef8/conE5Y9WgA8.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
