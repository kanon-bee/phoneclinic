import React from "react";
import styles from './QuickLinks.module.css';

const quickLinks = (props) => (
    <div className={styles.Main}>
        <h3>Quick Links</h3>
        <ul>
            <li><a href={props.link} />About Us</li>
            <li><a href={props.link} />Services</li>
            <li><a href={props.link} />Appoinment</li>
            <li><a href={props.link} />Contact</li>
        </ul>
    </div>
)

export default quickLinks;
