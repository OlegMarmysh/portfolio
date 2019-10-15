import React from 'react';
import styles from './FirstSkill.module.css';

function FirstSkill() {
  return (
      <div className={styles.firstSkill}>
          <div className={styles.content}>
              <div className={styles.avatar}>
                  <img src="" alt=""/>
              </div>
              <span>HTML&CSS</span>
              <div className={styles.description}>
                  <span>detailed skill description</span>
              </div>
          </div>
      </div>
  );
}

export default FirstSkill;
