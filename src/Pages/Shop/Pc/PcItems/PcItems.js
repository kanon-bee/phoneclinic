import React from 'react';
import styles from './PcItems.module.css';

const pcItems = (props) => {

    // const list = props.details.map((item, index) => {
    //     return <li key={index} >{item}</li>
    // })

    return (
        <div className={props.device === 'mobile' ? styles.Mobile : styles.Main}>
            <img src={props.img} alt={props.img}/>
            <div>
                <h3>{props.items}</h3>
                {/* <ul>
                    {list}
                </ul> */}
            </div>
        </div>
    )
}

export default pcItems;
