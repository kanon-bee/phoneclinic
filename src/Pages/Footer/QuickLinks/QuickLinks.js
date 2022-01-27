import React from "react";
import { Link } from "react-router-dom";
import styles from './QuickLinks.module.css';

const quickLinks = (props) => (
    <div className={styles.Main}>
        <h3>Quick Links</h3>
        <ul>
            <Link to="/">
                <li>About Us</li>
            </Link>
            <Link to="/">
                <li>Services</li>
            </Link><Link to="/">
                <li>Appoinment</li>
            </Link><Link to="/">
                <li>Contact</li>
            </Link>
        </ul>
    </div>
)

export default quickLinks;
