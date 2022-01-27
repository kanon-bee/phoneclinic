import react from "react";
import styles from './Banner.module.css';

const banner = (props) => (
    <div className={styles.Banner}>
        <img src={props.img}/>
        <div>
            <h3>{props.label}</h3>
            <p>{props.details}</p>
        </div>
    </div>
)

export default banner;
