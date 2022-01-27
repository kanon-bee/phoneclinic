import React from "react";
import DrawToggle from "../Drawtoggle/Drawtoggle";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import styles from './Toolbar.module.css';

const toolbar = (props) => (
    <div className={styles.Toolbar}>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
        <DrawToggle switch={props.switchBar}/>
    </div>
)

export default toolbar;
