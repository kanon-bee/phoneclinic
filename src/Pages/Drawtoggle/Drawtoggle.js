import React, { useContext } from "react";
import styles from './Drawtoggle.module.css';
import BaseContext from "../../Hoc/Authcontext/BaseContext";

const DrawToggle = (props)  => {

    const context = useContext(BaseContext);

    return (
        <div className={styles.Drawtoggle} onClick={props.switch}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawToggle;
