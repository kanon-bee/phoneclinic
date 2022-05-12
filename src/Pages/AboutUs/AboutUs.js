import React, { useEffect } from 'react'
import styles from './AboutUs.module.css';
import Aux from '../../Hoc/Aux/Aux';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../Sidedrawer/Sidedrawer';
import FooterMain from '../Footer/FooterMain/FooterMain';
import aboutUsImage from '../../Assets/Images/aboutUs.jpg';
import call from '../../Assets/Images/call.png';
import email from '../../Assets/Images/email.png';
import tablet from '../../Assets/Images/tablet.png';
import phone from '../../Assets/Images/phoneRepair/iphone.png';
import laptop from '../../Assets/Images/laptop/laptopLogo/hp.png';
import money from '../../Assets/Images/moneyTransfer.png';
import exchange from '../../Assets/Images/exchange.png';
import accessories from '../../Assets/Images/accessories.png';


const AboutUs = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);

        if (window.location.pathname === '/contact') {
            document.getElementById('contact').scrollIntoView();
        }

        // console.log('AboutUs')

    }, [])


    return (
        <Aux>
            <Toolbar switchBar={props.switchBar}/>
            <SideDrawer backdrop={props.backdrop} 
                        toggleBackdrop={props.toggleBackdrop}
                        switch={props.switch} />

            <div className={styles.Main}>
                <div className={styles.MainImg}>
                    <img src={aboutUsImage} alt="about us"/>
                </div>

                <div className={styles.MainPara}>
                    <h1>About Phone Clinic</h1>
                    
                    <div className={styles.SubPara}>
                        <div className={styles.para}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                        </div>

                        <div className={styles.para}>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </div>

                    </div>

                </div>
            </div>

            <div className={styles.ServiceMain}>
                <h1>Services We Offer</h1>
                <h3>At Phone Clinic You will get the following Services</h3>
                <div className={styles.Services}>
                    <div className={styles.service} alt="Phone">
                        <img src={phone}/>
                        <div className={styles.details}>
                            <h2>Phone Repair</h2>
                            <p>We repair Phone of All different kinds of Make and Model</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={tablet} alt="tablet"/>
                        <div className={styles.details}>
                            <h2>Tablet Repair</h2>
                            <p>We repair Tablet of All different kinds of Make and Model</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={laptop} alt="laptop"/>
                        <div className={styles.details}>
                            <h2>Laptop Repair</h2>
                            <p>We repair Laptop of All different kinds of Make and Model</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={accessories} alt="accessories"/>
                        <div className={styles.details}>
                            <h2>All Accessories</h2>
                            <p>We have accessories for all different types of Phone, Tablet and Laptop</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={money} alt="money"/>
                        <div className={styles.details}>
                            <h2>Money Transfer</h2>
                            <p>We send money all over the world through Western Union, Ria, MoneyGram etc</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={exchange} alt="exchange"/>
                        <div className={styles.details}>
                            <h2>Currency Exchange</h2>
                            <p>We also exchange money to almost all currencies</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className={styles.ContactMain}>
                <h1>Contact Us</h1>
                <div className={styles.SubContact}>
                    <h3>If you need to contact us</h3>

                    <div className={styles.Contacts}>
                        <div className={styles.Contact}>
                            <img src={call} alt="call"/>
                            <div>
                                <h3>By Phone</h3>
                                <p>020 7237 2724</p>
                            </div>
                        </div>

                        <div className={styles.Contact}>
                            <img src={email} alt="email"/>
                            <div>
                                <h3>By Email</h3>
                                <p>phoneclinic@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterMain />
        </Aux>
    )
}

export default React.memo(AboutUs);
