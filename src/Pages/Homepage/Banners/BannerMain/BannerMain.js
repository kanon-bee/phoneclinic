import React from "react";
import Banner from '../Banner/Banner';
import pic1 from '../../../../Assets/Images/service.png';
import pic2 from '../../../../Assets/Images/transfer.png';
import pic3 from '../../../../Assets/Images/gadget.png';
import styles from './BannerMain.module.css';


const bannerMain = () => (
    <div className={styles.BannerMain}>
        <Banner img={pic1} 
                label= 'Mobile Servicing'
                details= 'All kinds of smartphone service' />
        <Banner img={pic2} 
                label= 'Money Transfer'
                details='Sends money all over the world' />
        <Banner img={pic3} 
                label= 'Laptop and Mobile Parts'
                details='All kinds of laptop and smartphone accesories' />
    </div>
)

export default bannerMain;
