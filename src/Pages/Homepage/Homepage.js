import React, { useEffect } from "react";
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../Sidedrawer/Sidedrawer";
import HeaderIntro1 from "./HeaderIntro/HeaderIntro1/HeaderIntro1";
import HeaderIntro2 from "./HeaderIntro/HeaderIntro2/HeaderIntro2";
import BannerMain from "./Banners/BannerMain/BannerMain";
import ServiceMain from "./Service/ServiceMain/ServiceMain";
import WhyChooseUsMain from "./whyChooseUs/whyChooseUsMain/whyChooseUsMain";
import FooterMain from "../Footer/FooterMain/FooterMain";

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
            <BannerMain />
            <HeaderIntro2 />
            <ServiceMain />
            <WhyChooseUsMain />
            <FooterMain />
        </div>

    )


}

export default HomePage;
