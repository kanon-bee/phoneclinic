import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationItem.module.css';
import BaseContext from '../../../Hoc/Authcontext/BaseContext';


class NavigationItem extends Component {

    static contextType = BaseContext;

    // detectWidthChange = (event) => {
    //     event.onchange = () => {

    //     }
    // }

    render () {
        let nestedLink = null;
        let dir = window.location.pathname.split('/')
        // console.log(dir);
        
        if (this.props.child === 'repairs'){
            nestedLink = <li className={styles.NavigationItem}>
                <ul className={styles.nestedLink}>
                    <Link to="/repair/phone" onClick={this.context.closeDrawer} className={dir[2] === 'phone' ? styles.active : null}>
                        Phone
                    </Link>
    
                    <Link to="/repair/tablet" onClick={this.context.closeDrawer} className={dir[2] === 'tablet' ? styles.active : null}>
                        Tablet
                    </Link>
                    
                    <Link to="/repair/laptop" onClick={this.context.closeDrawer} className={dir[2] === 'laptop' ? styles.active : null}>
                        Laptop
                    </Link>
                </ul>
                <a className={this.props.active? styles.active : null}>{this.props.children}</a>
            </li>
        }
        else if (this.props.child === 'sale'){
            nestedLink = <li className={styles.NavigationItem}>
                <ul className={styles.nestedLink} >
                    <Link to="/sale/phone" onClick={this.context.closeDrawer} className={dir[2] === 'phone' ? styles.active : null}>
                        Phone
                    </Link>
    
                    <Link to="/sale/tablet" onClick={this.context.closeDrawer} className={dir[2] === 'tablet' ? styles.active : null}>
                        Tablet
                    </Link>
                    
                    <Link to="/sale/laptop" onClick={this.context.closeDrawer} className={dir[2] === 'laptop' ? styles.active : null}>
                        Laptop
                    </Link>
                </ul>
                <a className={this.props.active? styles.active : null} >{this.props.children}</a>
            </li>
        }
        else {
            nestedLink = <li className={styles.NavigationItem}>
                <Link to={this.props.link} className={this.props.active? styles.active : null} onClick={this.context.closeDrawer}>
                    {this.props.children}
                </Link>
            </li>
            
            // <li className={styles.NavigationItem}>
            //     <a href={this.props.link} className={this.props.active ? styles.active : null}>{this.props.children}</a>
            // </li>
            
        }

    
        return (
            nestedLink
        )

    }
}

export default NavigationItem;
