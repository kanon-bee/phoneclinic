import React, { useEffect } from "react";
import DrawToggle from "../Drawtoggle/Drawtoggle";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import styles from './Toolbar.module.css';

const Toolbar = (props) => {

    // useEffect(() => {

    // }, [])

    console.log('toolbar');

    return (
        <div className={styles.Toolbar}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
            <DrawToggle switch={props.switchBar}/>
        </div>
    )
}

export default React.memo(Toolbar);
