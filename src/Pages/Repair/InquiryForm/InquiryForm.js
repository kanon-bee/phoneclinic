import React, { useEffect } from 'react'
import Aux from '../../../Hoc/Aux/Aux';
import emailjs from '@emailjs/browser';
import styles from './InquiryForm.module.css';
import Toolbar from '../../Toolbar/Toolbar';
import SideDrawer from '../../Sidedrawer/Sidedrawer';
import FooterMain from '../../Footer/FooterMain/FooterMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature, faPhoneAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import bgPhone from '../../../Assets/Images/phoneRepair.png';
import bgTablet from '../../../Assets/Images/tabletRepair.png'
import bgLaptop from '../../../Assets/Images/laptopRepair.png';
import accessories from '../../../Assets/Images/accessories.jpg';
import banner from '../../../Assets/Images/banner.png';
import aos from 'aos';
import 'aos/dist/aos.css';

const InquiryForm = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        aos.init({duration: 1500});
    })

    function sendInquiry (event) {
        event.preventDefault();
        if (props.query === 'sale') {
            emailjs.sendForm('service_zla7qih', 'template_l2gzp1a', event.target, 'user_cEwV4WZvDeX8VQnYqIdlW')
                .then((result) => {
                    alert('Your Query has been sent');
                }, (error) => {
                    console.log(error.text);
                });
            event.target.reset();
        }
        else {
            emailjs.sendForm('service_zla7qih', 'template_gyuauft', event.target, 'user_cEwV4WZvDeX8VQnYqIdlW')
                .then((result) => {
                    alert('Your Query has been sent');
                }, (error) => {
                    console.log(error.text);
                });
            event.target.reset();
        }
    };

    let mainHeader = null;
    let header1 = null;
    let header3 = null;
    let para1 = null;
    let para2 = null;

    if (props.device === 'phone' && props.query === 'repair') {
        mainHeader = <h2>How to Repair from us</h2>
        header1 = <h3>Fill up the form below including Phone Make, Model, Problems and Contact Details</h3>;
        header3 = <h3>Come in to our shop and have your Phone fixed</h3>
        para1 = <p>We sell all sorts of Mobile Phone Ranging from GSM CDMA to most recent smart phones</p>
        para2 = <h4>Please fill up the form Using your device Make Model and problems</h4>
    }
    else if( props.device === 'phone' && props.query === 'sale') {
        mainHeader = <h2>How to buy Phone from us</h2>
        header1 = <h3>Fill up the form below including Phone Make, Model and Contact Details</h3>;
        header3 = <h3>Come in to our shop and get your Phone</h3>
        para2 = <h4>Please fill up the form Using your device Make, Model Color and storage</h4>
    }
    else if( props.device === 'phone' && props.query === 'accessories') {
        mainHeader = <h2>How to buy Accessories from us</h2>
        header1 = <h3>Fill up the form below including Phone Make, Model and Contact Details</h3>;
        header3 = <h3>Come in to our shop and get your Phone</h3>
        para1 = <p>We sell all sorts of Mobile Accessories Ranging from GSM CDMA to most recent smart phones</p>
        para2 = <h4>Please fill up the form Using your required Accessories</h4>
    }
    if (props.device === 'tablet' && props.query === 'repair') {
        mainHeader = <h2>How to Repair from us</h2>
        header1 = <h3>Fill up the form below including Tablet Make, Model, Problems and Contact Details</h3>;
        header3 = <h3>Come in to our shop and have your Tablet fixed</h3>
        para2 = <h4>Please fill up the form Using your device Make Model and problems</h4>
    }
    else if( props.device === 'tablet' && props.query === 'sale') {
        mainHeader = <h2>How to buy Tablet from us</h2>
        header1 = <h3>Fill up the form below including Tablet Make, Model and Contact Details</h3>;
        header3 = <h3>Come in to our shop and get your Tablet</h3>
        para1 = <p>We sell all sorts of Tablet PC iPad, Samsung Galaxy  Series, Amazon Kindle fire and many more</p>
        para2 = <h4>Please fill up the form Using your device Make, Model, Color and Storage </h4>
    }
    else if( props.device === 'tablet' && props.query === 'accessories') {
        mainHeader = <h2>How to buy accessories from us</h2>
        header1 = <h3>Fill up the form below including Tablet Make, Model and Contact Details</h3>;
        para1 = <p>We sell all sorts of Tablet Accessories including Cover, Charger, Headphone and Many more</p>
        header3 = <h3>Come in to our shop and get your Tablet</h3>
        para2 = <h4>Please fill up the form Using your Required Accessories</h4>
    }

    if (props.device === 'laptop' && props.query === 'repair') {
        mainHeader = <h2>How to Repair from us</h2>
        header1 = <h3>Fill up the form below including Laptop Make, Model, Problems and Contact Details</h3>;
        header3 = <h3>Come in to our shop and have your Laptop fixed</h3>
        para2 = <h4>Please fill up the form Using your device Make Model and problems</h4>
    }
    else if( props.device === 'laptop' && props.query === 'sale') {
        mainHeader = <h2>How to buy Laptop from us</h2>
        header1 = <h3>Fill up the form below including Laptop Make, Model and Contact Details</h3>;
        header3 = <h3>Come in to our shop and get your Laptop</h3>
        para1 = <p>We sell all sorts of Laptop including Macbook, HP, Sony, Dell, Samsung</p>
        para2 = <h4>Please fill up the form Using your device Make, Model, Color and Storage</h4>
    }
    else if( props.device === 'laptop' && props.query === 'accessories') {
        mainHeader = <h2>How to buy accessories from us</h2>
        header1 = <h3>Fill up the form below including Laptop Make, Model and Contact Details</h3>;
        header3 = <h3>Come in to our shop and get your Laptop</h3>
        para1 = <p>We sell all sorts of Laptp Accessories including Laptop parts and accessories like cable, bag, charger etc</p>
        para2 = <h4>Please fill up the form Using your Required Accessories</h4>
    }



    return (
        <Aux>
            <Toolbar />
            <SideDrawer />
            <div className={styles.Img}> 
                <div data-aos="fade-down-right" data-aos-easing="ease-out-cubic" className={styles.Subimg}>
                    <img src={props.img}/>
                </div>

                <div className={styles.Subpara}>
                    <h1>Phone Clinic</h1>
                    <div className={styles.ParaHeader}>
                        {para2}
                        <div className={styles.Subparaheader}>
                            <h4>We will get back to you within an hour</h4>
                            <h4>Or Call 020 7237 2724</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.MainHeading}>
                <div data-aos="fade-right" data-aos-easing="ease-out-cubic" className={styles.MainImg}>
                    <img src={banner} alt={banner}/>
                </div>

                <div className={styles.MainHeadingPara}>
                    <div  className={styles.Subform}>
                        <h2>Phone Clinic</h2>
                        {para1}
                        <p>Quite often we remain busy serving our customer, for that our website aren't always updated with our stock</p>
                        <p>If you cant find what you looking for, Please fill up the form</p>
                        <p><strong>Or Call 020 7237 2724</strong></p>
                    </div>
                </div>
            </div>

            <div className={styles.Heading}>
                {mainHeader}

                <div className={styles.SubHeading}>
                    <div className={styles.Subs}>
                        <FontAwesomeIcon icon={faFileSignature} className={styles.Font}/>
                        {header1}
                    </div>

                    <div className={styles.Subs}>
                        <FontAwesomeIcon icon={faPhoneAlt} className={styles.Font}/>
                        <h3>You will receive a phone call about your appoinment time and price within an hour</h3>
                    </div>

                    <div className={styles.Subs}>
                        <FontAwesomeIcon icon={faStore} className={styles.Font}/>
                        {header3}
                    </div>
                </div>
            </div>


            <div className={styles.FormMain}>
                <form onSubmit={sendInquiry} className={styles.Form}>
                    <div className={styles.Phone}>
                        <input readOnly name='serviceType' value={props.query} className={styles.Hidden} />
                        <input readOnly name='deviceName' value={props.device} className={styles.Hidden} />
                        <input type="text" required placeholder='Make' name='make'/>
                        <input type="text" required placeholder='Model' name='model'/>
                    </div>
                    {props.query === 'sale' ? <div className={styles.Phone}>
                        <input type="text" placeholder='Color' name='color'/>
                        <input type="text" placeholder='Storage' name='storage'/>
                    </div>:

                    <textarea name='problem' required rows={7} cols={30} placeholder='Whats the Problem' />
                    }
                    
                    {props.query === 'sale' ? <select name='condition' defaultValue="Select Condition">
                        <option disabled={true}>Select Condition</option>
                        <option value="new">New</option>
                        <option value="used" >Used</option>
                    </select>:

                    <select name='duration' defaultValue="Select Service Type">
                        <option disabled={true}>Select Service Type</option>
                        <option value="Normal">Normal</option>
                        <option value="Urgent">Urgent</option>
                    </select>
                    }


                    <textarea name='message' rows={7} cols={30} placeholder='Additional Information' />

                    <div className={styles.Phone}>
                        <input type="text" required placeholder='Your Name' name='name'/>
                        <input type="text" required placeholder='Phone Number' name='contact'/>
                    </div>

                    <button type='submit' >Send Inquiry</button>

                </form>
                
                <div className={styles.formPic}>

                    <img data-aos="fade-down-left" data-aos-easing="ease-out-cubic" src={props.img} alt="FormPic" />

                    <div  className={styles.Subform}>
                        <h1>Phone Clinic</h1>
                        <h2>Fill up the form using your information and we will get back t you within an hour</h2>
                    </div>
                </div>
                
            </div>

            <div className={styles.Contact}>
                <h2>Alternatively you can call us on</h2>
                <h3>020 7237 2724</h3>
            </div>

            <FooterMain />

        </Aux>
    )
}

export default InquiryForm;