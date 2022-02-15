import React, { Component } from "react";
import Aux from "../../../Hoc/Aux/Aux";
import Toolbar from "../../Toolbar/Toolbar";
import SideDrawer from "../../Sidedrawer/Sidedrawer";
import FooterMain from "../../Footer/FooterMain/FooterMain";
import styles from './MainComponent.module.css';
import RepairConsole from "./RepairConsole/RepairConsole";
import GetAquote from "../../../Extra/GetAqoute/GetAquote";
import bgPhone from '../../../Assets/Images/others/phone.png';
import bgTablet from '../../../Assets/Images/others/tablet.png';
import bgLaptop from '../../../Assets/Images/others/laptop.png';
import BaseContext from "../../../Hoc/Authcontext/BaseContext";


class MainComponent extends Component {

    static contextType = BaseContext

    state = {
        bg: {
            phone: bgPhone,
            tablet: bgTablet,
            laptop: bgLaptop
        }
    }

    componentDidMount () {
        window.scrollTo(0,0);
    }


    render () {

        let backgound = null;

        Object.keys(this.state.bg).map(item => {
            if (item === this.props.device) {
                backgound = this.state.bg[item];
            }
            return backgound;
        })

        
        
        return (
    
            <Aux>
                <Toolbar switchBar={this.props.switchBar}/>
    
                <SideDrawer backdrop={this.props.backdrop} 
                            toggleBackdrop={this.props.toggleBackdrop}
                            switch={this.props.switch}
                            navPath={this.props.path}
                            />
                <div className={styles.Main}>
                    <div className={styles.MainImg}>
                        <img src={backgound} alt={backgound} />
                    </div>

                    <div className={styles.MainPara}>
                        <h2>{this.props.device} Repair</h2>
                        <h4>Please Start by Choosing you Device</h4>
                    </div>
                </div>
    
                <div className={styles.Para}>
                    <p>Whether you have got an iMac, Macbook Pro or Macbook Air we know how important your Mac is to you and no matter what the damage to it, we understand you will want this fixed as soon as possible. At iSmash, we provide our customers with express and high-quality service.</p>
                    <p>All our iSmash stores have dedicated technicians that specialise in repairing and finding the best solution to fix your Mac. We provide a range of repairs for Macbooks and iMac which include screen replacement, battery replacement, keyboard replacement, touchpad replacement,
                        charging issues, liquid diagnostics, and data diagnostics. Book a free consultation and our technicians will provide the best solution to get your device fixed.</p>
                </div>
    
                <div className={styles.SelectPhone}>
                    {this.props.device === "laptop" ? <h2>Our Services</h2> : <h2>Select Your Device</h2>}
                    <RepairConsole Data={this.props.data} img={this.props.img} device={this.props.device} />
                </div>
    
                <GetAquote device={this.props.device}/>
    
                <FooterMain />
            </Aux>
        )
    }


}


export default MainComponent;
