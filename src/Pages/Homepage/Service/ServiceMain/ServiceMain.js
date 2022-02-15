import React, { useRef } from 'react';
import styles from './ServiceMain.module.css';
import Services from '../Services/Services';
import phone from '../../../../Assets/Images/others/phone.png';
import transfer from '../../../../Assets/Images/others/moneyTransfer.png';
import cafe from '../../../../Assets/Images/others/cafe.png';
import tablet from '../../../../Assets/Images/others/tablet.png';
import laptop from '../../../../Assets/Images/others/laptop.png'
import { Link } from 'react-router-dom';



const ServiceMain = () => {

    const serviceRef = useRef(null);

    return (
        <div ref={serviceRef} tabIndex="-1" className={styles.ServiceMain}>
            <h2>What you are Looking For Today</h2>
            <div className={styles.Ext}>
                <Link to="/phone">
                    <Services img={phone} title='Phone'  />
                </Link>

                <Link to="/tablet">
                    <Services img={tablet} title='Tablet'/>
                </Link>
                
                <Link to="/laptop">
                    <Services img={laptop} title='Laptop'/>
                </Link>

                <Link to="/currency_converter">
                    <Services img={transfer} title='Money Transfer'/>
                </Link>

                <Link to="/cybercafe/*">
                    <Services img={cafe} title='Cyber Cafe'/>
                </Link>
            </div>
        </div>
    )
}


export default ServiceMain;
