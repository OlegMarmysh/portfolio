import React from 'react';
import styles from './ThirdSkill.module.css';

function ThirdSkill() {
  return (
    <div className={styles.thirdSkill}>
      <img src="" alt=""/>
      <div className={styles.content}>
          <div className={styles.avatar}>
              <img src="" alt=""/>
          </div>
          <span>React</span>
      </div>
        <div className={styles.description}>
            <span>detailed skill description</span>
        </div>
    </div>
  );
}

export default ThirdSkill;
