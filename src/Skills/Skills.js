import React from 'react';
import styles from './Skills.module.css';
import BlockTitle from "../BlockTitle";
import Skill from "./Skill";
import reactIcon from '../img/React_logo_vector.png'
import jsIcon from '../img/js_logo.png'
import html_cssIcon from '../img/html_css.png'

const Skills = (props) => {
    let state = [
        {title: 'HTML&CSS' , description: 'detailed skill description', img: html_cssIcon},
        {title: 'JavaScript' , description: 'detailed skill description', img: jsIcon},
        {title: 'React' , description: 'detailed skill description', img: reactIcon}
    ]
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <BlockTitle title={'My skills'}/>
                <div className={styles.wrapper}>
                    {state.map(el => <Skill title={el.title} description={el.description} img={el.img}/>)}
                </div>
            </div>
        </div>
    );
};

export default Skills;
