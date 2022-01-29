import React from 'react';
import styles from './ServiceMain.module.css';
import Services from '../Services/Services';
import repair from '../../../../Assets/Images/repair.png';
import phone from '../../../../Assets/Images/phone.jpg';
import transfer from '../../../../Assets/Images/money.png';
import cafe from '../../../../Assets/Images/cafe.png';
import accesories from '../../../../Assets/Images/accesories.png';
import electronics from '../../../../Assets/Images/electronics.png';
import tablet from '../../../../Assets/Images/tablet.jpg';
import laptop from '../../../../Assets/Images/laptop.jpg'
import { Link } from 'react-router-dom';



const ServiceMain = () => (
    <div className={styles.ServiceMain}>
        <h2>What you are Looking For Today</h2>
        <div className={styles.Ext}>
            <Link to="/phone">
                <Services img={repair} title='Phone Repair'  />
            </Link>
            <Link to="/tablet">
                <Services img={tablet} title='Tablet Repair'/>
            </Link>
            <Link to="/laptop">
                <Services img={laptop} title='Laptop Repair'/>
            </Link>
            <Link to="/pc">
                <Services img={accesories} title='Computer Assecories'/>
            </Link>
            <Link to="/mobile">
                <Services img={phone} title='Shop Phone'/>
            </Link>
            <Link to="/currency_converter">
                <Services img={transfer} title='Money Transfer'/>
            </Link>
            <Services img={electronics} title='Electronics'/>
            <Services img={cafe} title='Cyber Cafe'/>
        </div>
    </div>
)


export default ServiceMain;
