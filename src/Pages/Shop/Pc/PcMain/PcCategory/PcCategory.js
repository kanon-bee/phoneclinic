import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PcItems from '../../PcItems/PcItems';
import Aux from '../../../../../Hoc/Aux/Aux';
import styles from './PcCategory.module.css';


class PcCategory extends Component {
    

    render () {
        let item = null;

        if (this.props.device === 'pc'){
            item = Object.keys(this.props.data).map((item, index) => {
                return <Link key={index} to={item}>
                    <PcItems key={item} img={this.props.img[item]} 
                                    items={this.props.data[item]} 
                                    details={this.props.details[item]}
                                    data={this.props.data}/>
                </Link>
            })
        }
        else {
            item = Object.keys(this.props.data).map((item, index) => {
                return <Link key={index} to={item}>
                    <PcItems key={item} 
                            img={this.props.img[item]} 
                            items={item}
                            device={this.props.device} />
                </Link>
            })
        }

        
        
        return (
            <Aux>
                <div className={styles.Main}>
                    <h2>Shop By Category</h2>
                    <div className={styles.Shop}>
                        {item}
                    </div>
                </div>
            </Aux>
        )
    }
}

export default PcCategory;
