import React, { useEffect } from "react";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../Sidedrawer/Sidedrawer";
import HeaderIntro1 from "./HeaderIntro/HeaderIntro1/HeaderIntro1";
import HeaderIntro2 from "./HeaderIntro/HeaderIntro2/HeaderIntro2";
import ServiceMain from "./Service/ServiceMain/ServiceMain";
import WhyChooseUsMain from "./whyChooseUs/whyChooseUsMain/whyChooseUsMain";
import FooterMain from "../Footer/FooterMain/FooterMain";
import pic1 from '../../Assets/Images/service.png';
import pic2 from '../../Assets/Images/transfer.png';
import pic3 from '../../Assets/Images/gadget.png';
import issue from '../../Assets/Images/others/issue.png';
import clipboard from '../../Assets/Images/others/clipboard.png';
import delivery from '../../Assets/Images/others/delivery.png';
import styles from './Homepage.module.css'

const HomePage = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Toolbar switchBar={props.switchBar}/>
            <SideDrawer backdrop={props.backdrop} 
                        toggleBackdrop={props.toggleBackdrop}
                        switch={props.switch} />
            <HeaderIntro1 />

            <div className={styles.BannerMain}>

                <div className={styles.Banner}>
                    <img src={pic1} alt="pic1"/>
                    <div>
                        <h3>Mobile Servicing</h3>
                        <p>All kinds of Smartphone Services</p>
                    </div>
                </div>

                <div className={styles.Banner}>
                    <img src={pic2} alt="pic2"/>
                    <div>
                        <h3>Money Transfer</h3>
                        <p>Sends Money All Over the World</p>
                    </div>
                </div>

                <div className={styles.Banner}>
                    <img src={pic3} alt="pic3"/>
                    <div>
                        <h3>Laptop and Mobile Parts</h3>
                        <p>All Kinds of Laptop and Smartphone Accessories</p>
                    </div>
                </div>
            </div>

            <div className={styles.HeadingMain}>
                <div className={styles.Header}>
                    <h1>How Does It Works</h1>
                    <h3>Get your device Repaired in Just Three Easy Steps</h3>
                </div>

                <div className={styles.Details}>
                    <div className={styles.Subdetails}>
                        <img src={issue} alt="issue"/>
                        <h3><strong>Step 1</strong>. Tell Us Your Issue</h3>
                        <p>Tell us about your Device problem by Call or Fill up the form</p>
                    </div>
                    <div className={styles.Subdetails}>
                        <img src={clipboard} alt="clipboard"/>
                        <h3><strong>Step 2</strong>. Get Your Estimate</h3>
                        <p>We will reply you within an Hour about your appoinment time and price</p>
                    </div>
                    <div className={styles.Subdetails}>
                        <img src={delivery} alt="deliver"/>
                        <h3><strong>Step 3</strong>. Bring or Send the Device</h3>
                        <p>Once happy with price and time, you can bring or send the device </p>
                    </div>
                </div>
            </div>

            <ServiceMain />
            <WhyChooseUsMain />
            <HeaderIntro2 />
            <FooterMain />
        </div>

    )


}

export default HomePage;
