import React, { Component } from "react";
import PhoneModel  from "./Phonemodel/Phonemodel";
import { Link } from "react-router-dom"; 
import styles from './PhoneModels.module.css';
import Toolbar from "../../../Toolbar/Toolbar";
import FooterMain from '../../../Footer/FooterMain/FooterMain';
import Sidedrawer from '../../../Sidedrawer/Sidedrawer'
import GetAquote from "../../../../Extra/GetAqoute/GetAquote";


class PhoneModels extends Component {

    
    componentDidMount(){
        window.scrollTo(0, 0);

        console.log('phoneModels');
    }

    render () {
        
        const mobile = Object.keys(this.props.data).map(item => {
            return item === this.props.model ?
                this.props.data[item].map((igkey, index) => {
                    let dir = `/repair/${this.props.device}/${item}/service`;                    
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

                <div className={styles.PicMain}>
                    <div className={styles.Pic}>
                        {Object.keys(this.props.pic).map(item => {
                            return item === this.props.model ? <img key={item} src={this.props.pic[item]} alt={item}/>:  null
                        })}
                    </div>
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
