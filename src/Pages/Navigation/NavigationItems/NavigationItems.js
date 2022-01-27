import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import styles from './NavigationItems.module.css';

const navigationItems = () => (
    <nav className={styles.NavigationItems}>
        <ul>
            <NavigationItem active link="/">Home</NavigationItem>
            <NavigationItem  >Services</NavigationItem>
            <NavigationItem>Pages</NavigationItem>
            <NavigationItem>About Us</NavigationItem>
            <NavigationItem>Contact</NavigationItem>
        </ul>
    </nav>
)

export default navigationItems;
