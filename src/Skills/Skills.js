import React from 'react';
import styles from './Skills.module.css';
import t from '../blockTitle.module.css';
import FirstSkill from "./FirstSkill";
import SecondSkill from "./SecondSkill";
import ThirdSkill from "./ThirdSkill";

function Skills() {
  return (
      <div className={styles.skills}>
        <div className={styles.container}>
            <div className={t.blockTitle}>
                <h2 className={t.title}>My skills</h2>
                <div className={t.horizontalLine}>
                    <div className={t.top}></div>
                    <div className={t.bottom}></div>
                </div>
            </div>
          <div className={styles.mainSkills}>
            <FirstSkill/>
            <SecondSkill/>
            <ThirdSkill/>
          </div>
        </div>
      </div>
  );
}

export default Skills;
