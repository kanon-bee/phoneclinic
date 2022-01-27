import React from "react";
import styles from './Phonemodel.module.css';

const phoneModel = (props) => (
    <div className={styles.Main}>
        <h2>{props.device}</h2>
        <p>View Options </p>
    </div>
)

export default phoneModel;
