import React from 'react';
import styles from './MyWorks.module.css';
import BlockTitle from "../BlockTitle";
import Work from "./Work";

const MyWorks = (props) => {
    let state = [
        {title: 'TodoList', description: 'Short description'},
        {title: 'Social Network', description: 'Short description'},
        {title: 'Counter', description: 'Short description'}
    ]
    return (
        <div className={styles.myWorks}>
            <div className={styles.container}>
                <BlockTitle title={'My works'}/>
                <div className={styles.mainWorks}>
                    {state.map(el => <Work title={el.title} description={el.description}/>)}
                </div>
            </div>
        </div>
    );
};

export default MyWorks;
