import React from 'react';
import styles from './MyWorks.module.css';
import FirstWork from "./FirstWork";
import SecondWork from "./SecondWork";
import t from "../blockTitle.module.css";

function MyWorks() {
  return (
    <div className={styles.myWorks}>
        <div className={styles.container}>
          <div className={t.blockTitle}>
            <h2 className={t.title}>My works</h2>
            <div className={t.horizontalLine}>
              <div className={t.top}></div>
              <div className={t.bottom}></div>
            </div>
          </div>
          <div className={styles.mainWorks}>
            <FirstWork/>
            <SecondWork/>
            <SecondWork/>
          </div>
        </div>
    </div>
  );
}

export default MyWorks;
