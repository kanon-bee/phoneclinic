import React from "react";
import styles from './Drawtoggle.module.css';

const drawToggle = (props)  => (
    <div className={styles.Drawtoggle} onClick={props.switch}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawToggle;
