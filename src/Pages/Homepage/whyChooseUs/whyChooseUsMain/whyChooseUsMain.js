import React from "react";
import WhyChooseUs1 from "../whyChooseUs1/whyChooseUs1";
import WhyChooseUsImage from "../whyChosseUsImage/whyChooseUsImage";
import WhyChooseUs2 from "../whyChooseUs2/whyChooseUs2";
import styles from './whyChooseUsMain.module.css';

const whyChooseUsMain = () => (
    <div className={styles.Main}>
        <h2>Why Choose Us</h2>
        <div className={styles.Sub}>
            <div>
                <WhyChooseUs1 title='Same Day Reapairs'
                            para='Like our name suggest, we provide while you wait service for most of the repairs.' />
                <WhyChooseUs1 title='High Quality Spare Parts'
                            para='We provide 30 days repair warranty' />
                <WhyChooseUs1 title='Experienced Expertise'
                            para='We are in mobile phone service from more than 12 years' />
            </div>
            <div className={styles.Img}>
                <WhyChooseUsImage />
            </div>
            <div>
                <WhyChooseUs2 title='30 DAYS WARRANTY'
                            para='All our repair service comes with 30 days warranty, subject to no physical or liquid damage.'/>
                <WhyChooseUs2 title='Secure Payment'
                            para='We are SSL certified , hence your payment details are secured'/>
                <WhyChooseUs2 title='No Fix No Fee'
                            para='We’ll not charge anything, if we aren’t able to fix your device.'/>
            </div>
        </div>
    </div>
)

export default whyChooseUsMain;
