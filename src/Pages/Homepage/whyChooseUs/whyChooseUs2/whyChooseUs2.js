import React, { useEffect } from "react";
import styles from './whyChooseUs2.module.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons';


const WhyChooseUs2 = (props) => {

    useEffect(() =>{
        aos.init({duration: 1900})
    }, [])

    return (
        <div data-aos='fade-left' className={styles.Main}>
            <div className={styles.smile}>
                <FontAwesomeIcon className={styles.Smile} icon={faSmileBeam}/>
            </div>
            <div className={styles.Para}>
                <h3>{props.title}</h3>
                <p>{props.para}</p>
            </div>
        </div>
    )
}

export default WhyChooseUs2;
