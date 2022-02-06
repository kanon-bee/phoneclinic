import React, { Component } from "react";
import Toolbar from "../../../Toolbar/Toolbar";
import Aux from "../../../../Hoc/Aux/Aux";
import FooterMain from "../../../Footer/FooterMain/FooterMain";
import SideDrawer from "../../../Sidedrawer/Sidedrawer";
import bgMain from '../../../../Assets/Images/pcAccesories/pc.png';
import delivery from '../../../../Assets/Images/pcAccesories/Logo/delivery.png';
import gift from '../../../../Assets/Images/pcAccesories/Logo/gift.png';
import payment from '../../../../Assets/Images/pcAccesories/Logo/payment.png';
import styles from './PcMain.module.css';
import PcCategory from "./PcCategory/PcCategory";
import bgMobile from '../../../../Assets/Images/mobile.jpg';
import GetAquote from "../../../../Extra/GetAqoute/GetAquote";

class pcMain extends Component {

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    render () {
        let img = null;
        let details = null;
        if (this.props.device === 'laptop'){
            img = <img src={bgMain} alt="BgMain"/>;
            details = <div className={styles.Heading}>
                <h1>PC Accesories</h1>
                <h2>Shop PC Accesories</h2>
                <p>Buy All the parts you need for your personal computer.</p>
            </div>
        }
        else {
            img = <img src={bgMobile} alt="BgMobile"/>
            details = <div className={styles.Heading}>
                <h1>SmartPhones</h1>
                <h2>Shop Smart Phones</h2>
                <p>Buy New and Used Smart Phnoes</p>
            </div>
        }
        

        
        
        return (
            <Aux>
                <Toolbar switchBar={this.props.switchBar}/>
        
                <SideDrawer backdrop={this.props.backdrop} 
                            toggleBackdrop={this.props.toggleBackdrop}
                            switch={this.props.switch} />
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
                                details={this.props.details}
                                device={this.props.device} />
                </div>

                <GetAquote device={this.props.device}/>
        
                <FooterMain />
            </Aux>
        )
        
    }

}


export default pcMain;
