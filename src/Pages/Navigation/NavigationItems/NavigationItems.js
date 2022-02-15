import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import styles from './NavigationItems.module.css';

const NavigationItems = (props) => {

    const dirName = window.location.pathname.split('/');

    // console.log(window.location)


    return (
        <nav className={styles.NavigationItems}>
            <ul className={styles.ItemsLink}>
                <NavigationItem active={dirName[1] === '' ? true: false} link="/">Home</NavigationItem>

                <NavigationItem active={dirName[1] === 'repair' ? true: false} child="repairs" >Repairs</NavigationItem>

                <NavigationItem active={dirName[1] === 'sale' ? true: false} child="sale" >Sale</NavigationItem>

                <NavigationItem active={dirName[1] === 'accessories' ? true: false} link="/">Accessories</NavigationItem>

                <NavigationItem active={dirName[1] === 'about' ? true: false} link="/">About Us</NavigationItem>

            </ul>
        </nav>
    )
}

export default NavigationItems;
