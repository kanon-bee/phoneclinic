import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import styles from './Sidedrawer.module.css';
import Aux from "../../Hoc/Aux/Aux";
import Backdrop from '../Backdrop/Backdrop'

const sideDrawer = (props) => (
    <Aux>
        <Backdrop trigger={props.backdrop} click={props.toggleBackdrop}/>
        <div className={props.switch ? styles.Sidedrawer : styles.Off}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.Nav}>
                <NavigationItems />
            </nav>
        </div>
    </Aux>
)

export default sideDrawer;
