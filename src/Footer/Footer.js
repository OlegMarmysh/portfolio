import React from 'react';
import styles from './Footer.module.css';
import Icons from "./Icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h2>Oleg Marmysh</h2>
        <Icons/>
        <span> 2019 All rights reserved</span>
      </div>

    </div>
  );
}

export default Footer;
