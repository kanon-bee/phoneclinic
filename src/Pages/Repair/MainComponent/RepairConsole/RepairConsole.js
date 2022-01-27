import React, { Component } from "react";
import PhoneRepair from "../RepairItem/RepairItem";
import styles from './RepairConsole.module.css';




class RepairConsole extends Component {    

    render () {
        const phoneRepair = Object.keys(this.props.Data).map((item, index) => {
            return <PhoneRepair key={index} device={this.props.device}
                                img={this.props.img[item]} 
                                model={this.props.device === "laptop" ? this.props.Data[item] : item } />
        })

        return (
            <div className={styles.Main}>
                {phoneRepair}
            </div>
        )
    }
}

export default RepairConsole;
