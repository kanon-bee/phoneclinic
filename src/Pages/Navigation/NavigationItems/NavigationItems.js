import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import styles from './NavigationItems.module.css';

const NavigationItems = () => {

    console.log(window.location.href);

    return (
        <nav className={styles.NavigationItems}>
            <ul className={styles.ItemsLink}>
                <NavigationItem active link="/">Home</NavigationItem>
                <NavigationItem child="repairs">Repairs</NavigationItem>
                <NavigationItem child="sale">Sale</NavigationItem>
                <NavigationItem>About Us</NavigationItem>
                <NavigationItem>Contact</NavigationItem>
            </ul>
        </nav>
    )
}

export default NavigationItems;
