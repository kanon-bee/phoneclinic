import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import Aux from "../../../Hoc/Aux/Aux";
import Toolbar from "../../Toolbar/Toolbar";
import SideDrawer from "../../Sidedrawer/Sidedrawer";
import GetAquote from "../../../Extra/GetAqoute/GetAquote";
import FooterMain from "../../Footer/FooterMain/FooterMain";
import styles from './ItemListings.module.css'

class ItemListings extends Component {

    state = {
        pageNumber: 0
    }

    changePage = ({ selected }) => {
        let currentPage = {...this.state.pageNumber};
        currentPage = selected;

        this.setState({ pageNumber: currentPage })
    }

    render () {
        let displayItem = null;
        let product = this.props.product;
        console.log(product);
        
        //Pagination system
        let pageVisited = 0;

        const itemPerpage = 3;
        pageVisited = this.state.pageNumber * itemPerpage;
        displayItem = Object.keys(product).slice(pageVisited, pageVisited+itemPerpage).map(item => {
            return <div key={item} className={styles.Items}>
                <img src={product[item]['img']} />
                <div className={styles.Details}>
                    {/* <h3>{product[item]['price']}</h3> */}
                    <h3>{product[item]['details']}</h3>
                </div>
            </div>
        });
        console.log(displayItem);

        const pageCount = Math.ceil(Object.keys(product).length / itemPerpage)

        

        if (Object.keys(this.props.product).length === 0) {
            displayItem = <h3 className={styles.Empty}>Sorry No Item</h3>
        }


        return (
            <Aux>
                <Toolbar switchBar={this.props.switchBar}/>
                
                <SideDrawer backdrop={this.props.backdrop} 
                            toggleBackdrop={this.props.toggleBackdrop}
                            switch={this.props.switch} />

                <div className={styles.Main}>
                    {displayItem}
                </div>

                <div className={styles.PaginationMain}>
                    <ReactPaginate 
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={this.changePage}
                        containerClassName={styles.paginationBtn}
                        previousLinkClassName={styles.previousBtn}
                        nextLinkClassName={styles.nextBtn}
                        desabledLinkClassName={styles.disable}
                        activeLinkClassName={styles.active}/>
                </div>

                <div>
                    <GetAquote device="pc"/>
                </div>


                <FooterMain />

            </Aux>

        )
    }

}

export default ItemListings;
