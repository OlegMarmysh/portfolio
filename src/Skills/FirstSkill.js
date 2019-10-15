import React from 'react';
import styles from './Skills.module.css';

function FirstSkill() {
  return (
      <div className={styles.skill}>
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
