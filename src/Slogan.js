import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <h2>Рассматриваю вариант удаленной работы</h2>
        <button className={styles.button}>Нанять меня</button>
      </div>

    </div>
  );
}

export default Slogan;
