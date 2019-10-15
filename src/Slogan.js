import React from 'react';
import styles from './Slogan.module.css';
import t from "./blockTitle.module.css";

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
          <div className={t.blockTitle}>
              <h2 className={t.title}>Considering remote work</h2>
              <div className={t.horizontalLine}>
                  <div className={t.top}></div>
                  <div className={t.bottom}></div>
              </div>
        <button className={styles.button}>Hire me</button>
      </div>
      </div>
    </div>
  );
}

export default Slogan;
