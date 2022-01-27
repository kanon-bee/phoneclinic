import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from './phoneRepair.module.css';
import Aux from "../../../../Hoc/Aux/Aux";


class RepairItem extends Component {


    render () {
        
        let dir = null;
        if (this.props.device === "phone"){
            dir = `/phone/${this.props.model}`;
        }
        else if (this.props.device === "tablet"){
            dir = `/tablet/${this.props.model}`;
        }
        else if (this.props.device === "laptop"){
            dir = `/laptop/${this.props.model}`;
        }
    

        return (
            <Aux>
                <Link to={dir} className={styles.Main} >
                    <img src={this.props.img} />
                    <p>{this.props.model}</p>
                </Link>                
            </Aux>
        )

    }
} 

export default RepairItem;
