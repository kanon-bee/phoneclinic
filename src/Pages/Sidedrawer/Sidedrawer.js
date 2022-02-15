import React, { useContext, useEffect } from "react";
import Logo from "../Logo/Logo";
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import styles from './Sidedrawer.module.css';
import Aux from "../../Hoc/Aux/Aux";
import { useLocation } from "react-router-dom";
import Backdrop from '../Backdrop/Backdrop'
import BaseContext from "../../Hoc/Authcontext/BaseContext";
import Drawtoggle from '../Drawtoggle/Drawtoggle'

const SideDrawer = (props) => {

    // useEffect(() => {
    //     console.log(props.navPath)
    // })

    return (
        <Aux>
            <Backdrop trigger={props.backdrop} click={props.toggleBackdrop}/>
            <div className={props.switch ? styles.Sidedrawer : styles.Off}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav className={styles.Nav}>
                    <NavigationItems navigationPath={props.navPath}/>
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer;
