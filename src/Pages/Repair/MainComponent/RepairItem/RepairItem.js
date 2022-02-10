import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from './phoneRepair.module.css';
import Aux from "../../../../Hoc/Aux/Aux";


class RepairItem extends Component {


    render () {
        
        let dir = null;
        if (this.props.device === "phone"){
            dir = `/phone/phonerepair/${this.props.model}`;
        }
        else if (this.props.device === "tablet"){
            dir = `/tablet/tabletrepair/${this.props.model}`;
        }
        else if (this.props.device === "laptop"){
            dir = `/laptop/laptoprepair/${this.props.dir}/service`;
        }
        console.log(dir);
    

        return (
            <Aux>
                <Link to={dir} className={styles.Main} >
                    <img src={this.props.img} alt={this.props.img}/>
                    <p>{this.props.model}</p>
                </Link>                
            </Aux>
        )

    }
} 

export default RepairItem;
