import React from'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => (
    <div className={styles.Logo}>
        <Link to="/">
            <h2>Phone Clinic</h2>
        </Link>
    </div>

)

export default Logo;
