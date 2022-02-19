import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import styles from './Sidedrawer.module.css';
import Aux from "../../Hoc/Aux/Aux";
import Backdrop from '../Backdrop/Backdrop'

const SideDrawer = (props) => {

    console.log('sideDrawer');

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

export default React.memo(SideDrawer);
