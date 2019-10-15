import React from 'react';
import styles from './Skills.module.css';
import FirstSkill from "./FirstSkill";
import SecondSkill from "./SecondSkill";
import ThirdSkill from "./ThirdSkill";

function Skills() {
  return (
      <div className={styles.skills}>
        <div className={styles.container}>
          <h3>My skills</h3>
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
