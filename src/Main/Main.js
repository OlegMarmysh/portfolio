import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <span>Hello, my name is</span>
          <span>Oleg <span>Marmysh</span></span>
          <h1>I am front-end developer</h1>
        </div>
        <div className={styles.photo}>
          <div className={styles.image}/>
        </div>
        </div>
    </div>
  );
}

export default Main;
