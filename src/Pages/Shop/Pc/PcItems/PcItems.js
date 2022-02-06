import React from 'react';
import styles from './PcItems.module.css';

const pcItems = (props) => {

    return (
        <div className={props.device === 'mobile' || 'phoneaccessories' ? styles.Mobile : styles.Main}>
            <img src={props.img} alt={props.img}/>
            <div>
                <h3>{props.items}</h3>
            </div>
        </div>
    )
}

export default pcItems;
