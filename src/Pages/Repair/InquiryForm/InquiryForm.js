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


const InquiryForm = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
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

    let header1 = null;
    let header3 = null;
    let bgImage = null;

    if (props.device === 'phone' && props.query === 'repair') {
        header1 = <h3>Fill up the form below including Phone Make, Model, Problems and Contact Details</h3>;
        header3 = <h3>Come in to our shop and have your Phone fixed</h3>
        bgImage = bgPhone
    }
    else if( props.device === 'phone' && props.query === 'sale') {
        header1 = <h3>Fill up the form below including Phone Make, Model and Contact Details</h3>;
        header3 = <h3>Come in to our shop and get your Phone</h3>
        bgImage = bgPhone
    }
    else if( props.device === 'phone' && props.query === 'accessories') {
        header1 = <h3>Fill up the form below including Phone Make, Model and Contact Details</h3>;
        header3 = <h3>Come in to our shop and get your Phone</h3>
        bgImage = accessories;
    }
    

    if (props.device === 'tablet' && props.query === 'repair') {
        header1 = <h3>Fill up the form below including Tablet Make, Model, Problems and Contact Details</h3>;
        header3 = <h3>Come in to our shop and have your Tablet fixed</h3>
        bgImage = bgTablet;
    }
    else if( props.device === 'tablet' && props.query === 'sale') {
        header1 = <h3>Fill up the form below including Tablet Make, Model and Contact Details</h3>;
        header3 = <h3>Come in to our shop and get your Tablet</h3>
        bgImage = bgTablet;
    }
    else if( props.device === 'tablet' && props.query === 'accessories') {
        header1 = <h3>Fill up the form below including Tablet Make, Model and Contact Details</h3>;
        header3 = <h3>Come in to our shop and get your Tablet</h3>
        bgImage = accessories;
    }

    if (props.device === 'laptop' && props.query === 'repair') {
        header1 = <h3>Fill up the form below including Laptop Make, Model, Problems and Contact Details</h3>;
        header3 = <h3>Come in to our shop and have your Laptop fixed</h3>
        bgImage = bgLaptop
    }
    else if( props.device === 'laptop' && props.query === 'sale') {
        header1 = <h3>Fill up the form below including Laptop Make, Model and Contact Details</h3>;
        header3 = <h3>Come in to our shop and get your Laptop</h3>
        bgImage = bgLaptop
    }
    else if( props.device === 'laptop' && props.query === 'accessories') {
        header1 = <h3>Fill up the form below including Laptop Make, Model and Contact Details</h3>;
        header3 = <h3>Come in to our shop and get your Laptop</h3>
        bgImage = accessories;
    }



    return (
        <Aux>
            <Toolbar />
            <SideDrawer />
            <div className={styles.Img}> 
                <img src={props.img}/>
            </div>

            <div className={styles.Heading}>
                {props.query === 'sale' ? <h2>How to buy Phone from Us</h2> :
                <h2>How the Repair Process Works</h2>}

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
                    
                    {props.query === 'sale' ? <select name='condition' defaultValue="Select Phone Condition">
                        <option disabled={true}>Select Phone Condition</option>
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

                    <img src={bgImage} alt="FormPic" />

                    <div  className={styles.Subform}>
                        <h1>Phone Clinic</h1>
                        <h2>Fill up the form using your information and we will get back t you within an hour</h2>
                    </div>
                </div>
                
            </div>

            <FooterMain />

        </Aux>
    )
}

export default InquiryForm;
