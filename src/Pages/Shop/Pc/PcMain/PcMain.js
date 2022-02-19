import React, { Component } from "react";
import Toolbar from "../../../Toolbar/Toolbar";
import Aux from "../../../../Hoc/Aux/Aux";
import FooterMain from "../../../Footer/FooterMain/FooterMain";
import SideDrawer from "../../../Sidedrawer/Sidedrawer";
import bgLaptop from '../../../../Assets/Images/laptopSale.png';
import delivery from '../../../../Assets/Images/pcAccesories/Logo/delivery.png';
import gift from '../../../../Assets/Images/pcAccesories/Logo/gift.png';
import payment from '../../../../Assets/Images/pcAccesories/Logo/payment.png';
import styles from './PcMain.module.css';
import PcCategory from "./PcCategory/PcCategory";
import bgMobile from '../../../../Assets/Images/mobile.jpg';
import bgTablet from '../../../../Assets/Images/tabletRepair/ipad.png';
import laptopAccessory from '../../../../Assets/Images/laptopAccessory.jpg';
import phoneAccessory from '../../../../Assets/Images/phoneAccessory.jpg';
import tabletAccessory from '../../../../Assets/Images/tabletAccessory.jpg';
import GetAquote from "../../../../Extra/GetAqoute/GetAquote";

class pcMain extends Component {

    componentDidMount () {
        window.scrollTo(0, 0);
        console.log('pcMain');
    }

    render () {
        let img = null;
        let details = null;
        if (this.props.device === 'laptop' && this.props.query === 'sale'){
            img = <img src={bgLaptop} alt="BgLaptop"/>;
            details = <div className={styles.Heading}>
                <h1>Laptops</h1>
                <h2>Shop Laptops</h2>
                <p>Buy All the parts you need for your personal computer.</p>
            </div>
        }

        else if (this.props.device === 'laptop' && this.props.query === 'accessories') {
            img = <img src={laptopAccessory} alt="LaptopAccessotry"/>;
            details = <div className={styles.Heading}>
                <h1>Computer Accesories</h1>
                <h2>Shop Computer Accesories</h2>
                <p>Buy All the parts you need for your personal computer.</p>
            </div>
        }

        else if (this.props.device === 'tablet' && this.props.query === 'sale') {
            img = <img src={bgTablet} alt="BgTablet"/>;
            details = <div className={styles.Heading}>
                <h1>Tablets</h1>
                <h2>Shop Tablet PC</h2>
                <p>Buy New and Used Tablets</p>

            </div>
        }
        else if (this.props.device === 'tablet' && this.props.query === 'accessories') {
            img = <img src={tabletAccessory} alt="TabletAccessories"/>;
            details = <div className={styles.Heading}>
                <h1>Tablet Accesories</h1>
                <p>Buy All the Accesories you need for your Tablets</p>
                <p>Buy New and Used Tablets</p>

            </div>
        }
        else if (this.props.device === 'phone' && this.props.query === 'sale'){
            img = <img src={bgMobile} alt="BgMobile"/>
            details = <div className={styles.Heading}>
                <h1>SmartPhones</h1>
                <h2>Shop Smart Phones</h2>
                <p>Buy New and Used Smart Phnoes</p>
            </div>
        }
        else if (this.props.device === 'phone' && this.props.query === 'accessories'){
            img = <img src={phoneAccessory} alt="MobileAccessory"/>
            details = <div className={styles.Heading}>
                <h1>Phone Accesories</h1>
                <h2>Shop Smart Phone Accesories</h2>
                <p>Buy All the Accesories you need for your SmartPhones</p>
            </div>
        }
        

        return (
            <Aux>
                <Toolbar switchBar={this.props.switchBar}/>
        
                <SideDrawer backdrop={this.props.backdrop} 
                            toggleBackdrop={this.props.toggleBackdrop}
                            switch={this.props.switch}
                            navPath={this.props.path} />
                <div className={styles.Main}>
                    <div className={styles.Pic}>
                        {img}
                    </div>

                    {details}
        
                    
                </div>
        
                <div className={styles.Shop}>
                    <h1>Shop Safely with Phone Clinic</h1>
                    <div className={styles.Head2}>
                        <div>
                            <img src={delivery} alt="Delivery"/>
                            <p>Free Delivery</p>
                        </div>
                        <div>
                            <img src={payment} alt="Payment" />
                            <p>Secure Payment</p>
                        </div>
                        <div>
                            <img src={gift} alt="Gift" />
                            <p>Gift Voucher</p>
                        </div>
                    </div>
                </div>
        
                <div>
                    <PcCategory data={this.props.data} 
                                img={this.props.img} 
                                device={this.props.device}
                                query={this.props.query} />
                </div>

                <GetAquote device={this.props.device}/>
        
                <FooterMain />
            </Aux>
        )
        
    }

}


export default pcMain;
