import React from "react";
import { Link } from "react-router-dom";
import styles from './QuickLinks.module.css';

const quickLinks = (props) => (
    <div className={styles.Main}>
        <h3>Quick Links</h3>
        <ul>
            <Link to="/aboutus">
                <li>About Us</li>
            </Link>
            <Link to="/service" >
                <li>Services</li>
            </Link><Link to="/inquiry">
                <li>Appoinment</li>
            </Link><Link to="/contact">
                <li>Contact</li>
            </Link>
        </ul>
    </div>
)

export default quickLinks;
