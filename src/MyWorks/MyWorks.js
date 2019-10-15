import React from 'react';
import styles from './MyWorks.module.css';
import FirstWork from "./FirstWork";
import SecondWork from "./SecondWork";

function MyWorks() {
  return (
    <div className={styles.myWorks}>
        <div className={styles.container}>
          <h3>My works</h3>
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
