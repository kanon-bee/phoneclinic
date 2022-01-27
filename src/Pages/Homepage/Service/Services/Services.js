import React, { useEffect } from 'react';
import styles from './Services.module.css';
import aos from 'aos';
import 'aos/dist/aos.css';


const Services = (props) => {

    useEffect(() => {
        aos.init({duration: 1500});
    }, [])

    return (
        <div  data-aos="fade-down-left" data-aos-easing="ease-out-cubic" className={styles.Services}>
            <span className={styles.Icon}>
                <img src={props.img} alt={props.title}/>
                <p>{props.title}</p>
            </span>
        </div>
    )
}

export default Services;
