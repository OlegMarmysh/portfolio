import React from 'react';
import styles from './Footer.module.css';
import vkIcon from '../img/vk_icon.png'
import instIcon from '../img/inst.png'
import telegramIcon from '../img/telegram.png'
import linkedinIcon from '../img/linkedinpng.png'

const Footer = (props)  => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <h2>Oleg Marmysh</h2>
                <div className={styles.icons}>
                    <a className={styles.icon} href="https://vk.com/backdown77">
                        <img  src={vkIcon} alt=""/>
                    </a>
                    <a className={styles.icon} href="https://www.instagram.com/bbara77/">
                        <img src={instIcon} alt=""/>
                    </a>
                    <a className={styles.icon} href="https://t.me/backdown959">
                        <img src={telegramIcon} alt=""/>
                    </a>
                    <a className={styles.icon} href="">
                        <img src={linkedinIcon} alt=""/>
                    </a>
                </div>
                <span>© 2019 All rights reserved</span>
            </div>

        </div>
    );
}

export default Footer;
