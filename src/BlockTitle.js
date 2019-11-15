import React from "react"
import t from "./blockTitle.module.css";

const BlockTitle = (props) => {
    return (
        <div className={t.blockTitle}>
            <h2 className={t.title}>{props.title}</h2>
            <div className={t.horizontalLine}>
                <div className={t.top}></div>
                <div className={t.bottom}></div>
            </div>
        </div>
    )
};

export default BlockTitle;