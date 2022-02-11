import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const navigationItem = (props) => {
    let nestedLink = null;
    if (props.child === 'repairs'){
        nestedLink = <ul className={styles.nestedLink}>
            <Link to="/phone/phonerepair">
                <p>Phone</p>
            </Link>

            <Link to="/tablet/tabletrepair">
                <p>Tablet</p>
            </Link>
            
            <Link to="/laptop/laptoprepair">
                <p>Laptop</p>
            </Link>
        </ul>
    }
    else if (props.child === 'sale'){
        nestedLink = <ul className={styles.nestedLink}>
            <Link to="/phone/phonesale">
                <p>Phone</p>
            </Link>
            
            <Link to="tablet/tabletsale">
                <p>Tablet</p>
            </Link>
            
            <Link to="laptop/laptopsale">
                <p>Laptop</p>
            </Link>
        </ul>
    }

    return (
        <li className={styles.NavigationItem}>
            <a href={props.link} className={props.active? styles.active : null}>{props.children}</a>
            {nestedLink}
        </li>
    )
}

export default navigationItem;
