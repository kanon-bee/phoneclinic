import React, { useEffect } from "react";
import styles from './GetAquote.module.css';

const GetAquote = (props) => {

    useEffect(() => {
        console.log('GetAQoute');
    }, [])
    
    let msg = null;
    
    if (props.device === 'pc' || 'laptop') {
        msg = <div className={styles.Main}>
                <h3>Cant find what you looking for</h3>
                <h4>Call Us On</h4>
                <div>
                    <h4>Phone Clinic</h4>
                    <h4>020 7237 2724</h4>
                    <h4>271 Old kent Road</h4>
                </div>
                
            </div>
    }
    else {
        msg = <div className={styles.Main}>
                <h2>Cant find your device in the list</h2>
                <button>Get a Quote</button>
            </div>
    }

    return (
        msg    
    )
}

export default React.memo(GetAquote);
