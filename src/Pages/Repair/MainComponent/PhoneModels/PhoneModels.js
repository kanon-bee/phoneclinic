import React, { Component } from "react";
import PhoneModel  from "./Phonemodel/Phonemodel";
import { Link } from "react-router-dom"; 
import styles from './PhoneModels.module.css';
import Toolbar from "../../../Toolbar/Toolbar";
import FooterMain from '../../../Footer/FooterMain/FooterMain';
import Sidedrawer from '../../../Sidedrawer/Sidedrawer'
import GetAquote from "../../../../Extra/GetAqoute/GetAquote";
// import iphone from '../../../../Assets/Images/phoneRepair/apple.jpg';
// import Asus from '../../../../Assets/Images/phoneRepair/asus.jpg';
// import BlackBerry from '../../../../Assets/Images/phoneRepair/blackberry.jpg';
// import Htc from '../../../../Assets/Images/phoneRepair/htc.jpg';
// import Huawei from '../../../../Assets/Images/phoneRepair/huawei.jpg';
// import Lg from '../../../../Assets/Images/phoneRepair/lg.jpg';
// import Nexus from '../../../../Assets/Images/phoneRepair/nexus.jpg';
// import Nokia from '../../../../Assets/Images/phoneRepair/nokia.jpg';
// import OnePlus from '../../../../Assets/Images/phoneRepair/oneplus.jpg';
// import Pixel from '../../../../Assets/Images/phoneRepair/pixel.jpg';
// import Sony from '../../../../Assets/Images/phoneRepair/sony.jpg';
// import SamSung from '../../../../Assets/Images/phoneRepair/samsung.jpg';


class PhoneModels extends Component {

    
    componentDidMount(){
        window.scrollTo(0, 0)
    }

    render () {
        
        const mobile = Object.keys(this.props.data).map(item => {
            return item === this.props.model ?
                this.props.data[item].map((igkey, index) => {
                    let dir = `/${this.props.device}/${this.props.device}repair/${item}/service`;                    
                    return <Link key={index} to={dir}>
                            <PhoneModel key={igkey} device={igkey} />
                        </Link>
                }) : null;
        })
        
        return (
            <div className={styles.Main}>
                <Toolbar switchBar={this.props.switchBar} />
                
                <Sidedrawer backdrop={this.props.backdrop} 
                            toggleBackdrop={this.props.toggleBackdrop}
                            switch={this.props.switch} />

                <div className={styles.Pic}>
                    {Object.keys(this.props.pic).map(item => {
                        return item === this.props.model ? <img key={item} src={this.props.pic[item]} alt={item}/>:  null
                    })}
                </div>

                <div className={styles.Mobile}>
                    {mobile}
                </div>

                <GetAquote />

                <FooterMain />
            </div>
        )
    }
    
    
}



export default PhoneModels;
