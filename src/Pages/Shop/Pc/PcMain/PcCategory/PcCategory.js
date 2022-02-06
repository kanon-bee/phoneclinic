import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PcItems from '../../PcItems/PcItems';
import Aux from '../../../../../Hoc/Aux/Aux';
import styles from './PcCategory.module.css';


class PcCategory extends Component {
    

    render () {
        let item = null;
        let dir = null;

        if (this.props.device === 'pc'){
            item = Object.keys(this.props.data).map((item, index) => {
                dir = `/laptop/laptopaccessories/${item}`;
                return <Link key={index} to={dir}>
                    <PcItems key={item} img={this.props.img[item]} 
                                    items={this.props.data[item]} 
                                    details={this.props.details[item]}
                                    data={this.props.data}/>
                </Link>
            })
        }
        else {
            item = Object.keys(this.props.data).map((item, index) => {
                console.log(item)
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
                    {this.props.device === 'pc' ? <h2>Shop By Category</h2> : null}
                    
                    <div className={styles.Shop}>
                        {item}
                    </div>
                </div>
            </Aux>
        )
    }
}

export default PcCategory;
