import React,{ Component, useContext } from "react";
import styles from './Backdrop.module.css';
import BaseContext from "../../Hoc/Authcontext/BaseContext";

const Backdrop = (props)  => {
    
    const x = useContext(BaseContext);

    return (
        <div className={props.trigger ? styles.Backdrop : null} onClick={props.click}>

        </div>
    )
        

}

export default Backdrop;
