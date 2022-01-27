import React from "react";
import styles from './UsefulLinks.module.css';

const usefulLinks = (props) => (
    <div className={styles.Main}>
        <h3>Useful Links</h3>
        <ul>
            <li><a href={props.links} />Privacy Policy</li>
            <li><a href={props.links} />Terms and Conditions</li>
            <li><a href={props.links} />Disclaimer</li>
            <li><a href={props.links} />Support</li>
            <li><a href={props.links} />FAQ</li>
        </ul>
    </div>
)

export default usefulLinks;
