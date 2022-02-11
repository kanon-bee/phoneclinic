import React from "react";
import { Link } from "react-router-dom";
import styles from './HeaderIntro1.module.css';

const headerIntro1 = () => (
    <div className={styles.HeaderIntro1}>
        <h2><strong>Excellent Services For Repairing Your Broken Gadget</strong></h2>
        <p className={styles.para}>We Repair All sorts of smart Devices and We provide the Best services in South East London</p>
        <Link to="phone/phonerepair/*" className={styles.btn}><p>Book Appoinment</p></Link>
    </div>
)

export default headerIntro1;
