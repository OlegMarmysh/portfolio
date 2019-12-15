import React from 'react';
import styles from './MyWorks.module.css';
import BlockTitle from "../BlockTitle";
import Work from "./Work";
import todoListImg from "../img/todoList.jpg"
import socialNetworkImg from "../img/socialNetwork.jpg"
import counterImg from "../img/Counter.png"

const MyWorks = (props) => {
    let state = [
        {title: 'TodoList', description: 'Short description', image: {backgroundImage: `url(${todoListImg})`}},
        {title: 'Social Network', description: 'Short description', image: {backgroundImage: `url(${socialNetworkImg})`}},
        {title: 'Counter', description: 'Short description', image: {backgroundImage: `url(${counterImg})`}}
    ];
    return (
        <div className={styles.myWorks}>
            <div className={styles.container}>
                <BlockTitle title={'My works'}/>
                <div className={styles.mainWorks}>
                    {state.map(el => <Work title={el.title} description={el.description} style={el.image}/>)}
                </div>
            </div>
        </div>
    );
};

export default MyWorks;
