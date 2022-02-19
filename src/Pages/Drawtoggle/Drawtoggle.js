import React, { useEffect } from "react";
import styles from './Drawtoggle.module.css';


const DrawToggle = (props)  => {

    useEffect(() => {
    }, []);
    
    console.log('DrawToggle');

    return (
        <div className={styles.Drawtoggle} onClick={props.switch}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default React.memo(DrawToggle);
