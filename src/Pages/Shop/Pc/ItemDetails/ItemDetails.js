import React, { Component } from "react";
import k1 from '../../../../Assets/Images/keyboard/k1.jpg';
import k2 from '../../../../Assets/Images/keyboard/k2.jpg';
import k3 from '../../../../Assets/Images/keyboard/k3.jpg';
import k4 from '../../../../Assets/Images/keyboard/k4.jpg';
import k5 from '../../../../Assets/Images/keyboard/k5.jpg';
import k6 from '../../../../Assets/Images/keyboard/k6.jpg';
import k7 from '../../../../Assets/Images/keyboard/k7.jpg';
import k8 from '../../../../Assets/Images/keyboard/k8.jpg';
import l1 from '../../../../Assets/Images/laptop/l1.jpg';
import l2 from '../../../../Assets/Images/laptop/l2.jpg';
import l3 from '../../../../Assets/Images/laptop/l3.jpg';
import l4 from '../../../../Assets/Images/laptop/l4.jpg';
import l5 from '../../../../Assets/Images/laptop/l5.jpg';
import l6 from '../../../../Assets/Images/laptop/l6.jpg';
import l7 from '../../../../Assets/Images/laptop/l7.jpg';
import l8 from '../../../../Assets/Images/laptop/l8.jpg';
import s1 from '../../../../Assets/Images/monitor/s1.jpg';
import s2 from '../../../../Assets/Images/monitor/s2.jpg';
import s3 from '../../../../Assets/Images/monitor/s3.jpg';
import s4 from '../../../../Assets/Images/monitor/s4.jpg';
import s5 from '../../../../Assets/Images/monitor/s5.jpg';
import s6 from '../../../../Assets/Images/monitor/s6.jpg';
import s7 from '../../../../Assets/Images/monitor/s7.jpg';
import s8 from '../../../../Assets/Images/monitor/s8.jpg';
import m1 from '../../../../Assets/Images/mouse/m1.jpg';
import m2 from '../../../../Assets/Images/mouse/m2.jpg';
import m3 from '../../../../Assets/Images/mouse/m3.jpg';
import m4 from '../../../../Assets/Images/mouse/m4.jpg';
import m5 from '../../../../Assets/Images/mouse/m5.jpg';
import m6 from '../../../../Assets/Images/mouse/m6.jpg';
import m7 from '../../../../Assets/Images/mouse/m7.jpg';
import m8 from '../../../../Assets/Images/mouse/m8.jpg';
import r1 from '../../../../Assets/Images/ram/r1.jpg';
import r2 from '../../../../Assets/Images/ram/r2.jpg';
import r3 from '../../../../Assets/Images/ram/r3.jpg';
import r4 from '../../../../Assets/Images/ram/r4.jpg';
import r5 from '../../../../Assets/Images/ram/r5.jpg';
import r6 from '../../../../Assets/Images/ram/r6.jpg';
import r7 from '../../../../Assets/Images/ram/r7.jpg';
import r8 from '../../../../Assets/Images/ram/r8.jpg';
import sp1 from '../../../../Assets/Images/speaker/sp1.jpg';
import sp2 from '../../../../Assets/Images/speaker/sp2.jpg';
import sp3 from '../../../../Assets/Images/speaker/sp3.jpg';
import sp4 from '../../../../Assets/Images/speaker/sp4.jpg';
import sp5 from '../../../../Assets/Images/speaker/sp5.jpg';
import sp6 from '../../../../Assets/Images/speaker/sp6.jpg';
import sp7 from '../../../../Assets/Images/speaker/sp7.jpg';
import sp8 from '../../../../Assets/Images/speaker/sp8.jpg';
import ItemListings from "../../ItemListings/ItemListings";
//All Phone models Images
import asus1 from '../../../../Assets/Images/mobile/asus1.jpeg';
import asus2 from '../../../../Assets/Images/mobile/asus2.jpg';
import asus3 from '../../../../Assets/Images/mobile/asus3.jpg';
import asus4 from '../../../../Assets/Images/mobile/asus4.jpg';
import htc1 from '../../../../Assets/Images/mobile/htc1.jpg';
import htc2 from '../../../../Assets/Images/mobile/htc2.jpg';
import htc3 from '../../../../Assets/Images/mobile/htc3.jpg';
import htc4 from '../../../../Assets/Images/mobile/htc4.jpg';
import iphone1 from '../../../../Assets/Images/mobile/iphone1.jpg';
import iphone2 from '../../../../Assets/Images/mobile/iphone2.jpg';
import iphone3 from '../../../../Assets/Images/mobile/iphone3.jpg';
import iphone4 from '../../../../Assets/Images/mobile/iphone4.jpg';
import nokia1 from '../../../../Assets/Images/mobile/nokia1.jpg';
import nokia2 from '../../../../Assets/Images/mobile/nokia2.jpg';
import nokia3 from '../../../../Assets/Images/mobile/nokia3.jpg';
import nokia4 from '../../../../Assets/Images/mobile/nokia4.jpg';
import samsung1 from '../../../../Assets/Images/mobile/samsung1.jpg';
import samsung2 from '../../../../Assets/Images/mobile/samsung2.jpg';
import samsung3 from '../../../../Assets/Images/mobile/samsung3.jpg';
import samsung4 from '../../../../Assets/Images/mobile/samsung4.jpg';


class ItemDetails extends Component {

    state = {

        laptop: {
            keyboard: {
                k1: {price: '£20', available: true, img: k1, details: 'Gaming Keyboard RGB USB Wired Rainbow Keyboard'},
                k2: {price: '£20', available: true, img: k2, details: 'Amazon Basics Matte Black Wired Keyboard, UK QWERTY Layout'},
                k3: {price: '£20', available: true, img: k3, details: 'Bactlit Gaming Keyboard,Rii RK100 Plus 7 Color Rainbow LED Backlit Mechanical Keyboard'},
                k4: {price: '£20', available: true, img: k4, details: 'Microsoft Wireless Desktop 900 Keyboard and Mouse - Black'},
                k5: {price: '£20', available: true, img: k5, details: 'Microsoft Wireless Desktop 850 Keyboard'},
                k6: {price: '£20', available: true, img: k6, details: 'Microsoft Wireless Desktop 900 Keyboard and Mouse - Black'},
                k7: {price: '£20', available: true, img: k7, details: 'Amazon Basics Matte Black Wired Keyboard, UK QWERTY Layout'},
                k8: {price: '£20', available: true, img: k8, details: 'Microsoft Wireless Desktop 850 Keyboard'},
            },
    
            laptop: {
                l1: {price: '£120', available: true, img: l1, details: 'Microsoft Wireless Desktop 850 Keyboard'},            
                l2: {price: '£130', available: true, img: l2, details: 'Microsoft Wireless Desktop 850 Keyboard'},
                l3: {price: '£220', available: true, img: l3, details: 'Microsoft Wireless Desktop 850 Keyboard'},
                l4: {price: '£220', available: true, img: l4, details: 'Microsoft Wireless Desktop 850 Keyboard'},
                l5: {price: '230', available: true, img: l5, details: 'Lorem Ipsum is simply dummy text of the printing and typesetting'},
                l6: {price: '240', available: true, img: l6, details: 'industry. Lorem Ipsum has been the industrys standard dummy'},
                l7: {price: '250', available: true, img: l7, details: 'text ever since the 1500s, when an unknown printer took a galley'},
                l8: {price: '260', available: true, img: l8, details: 'text ever since the 1500s, when an unknown printer took a galley'}
            },
    
            monitor: {
                s1: {price: '300', available: true, img: s1, details: 'of type and scrambled it to make a type specimen book. It has'},
                s2: {price: '310', available: true, img: s2, details: 'of type and scrambled it to make a type specimen book. It has'},
                s3: {price: '320', available: true, img: s3, details: 'of type and scrambled it to make a type specimen book. It has'},
                s4: {price: '330', available: true, img: s4, details: 'of type and scrambled it to make a type specimen book. It has'},
                s5: {price: '340', available: true, img: s5, details: 'of type and scrambled it to make a type specimen book. It has'},
                s6: {price: '350', available: true, img: s6, details: 'of type and scrambled it to make a type specimen book. It has'},
                s7: {price: '360', available: true, img: s7, details: 'of type and scrambled it to make a type specimen book. It has'},
                s8: {price: '370', available: true, img: s8, details: 'of type and scrambled it to make a type specimen book. It has'}
            },
            mouse: {
                m1: {price: '20', available: true, img: m1, details: 'survived not only five centuries, but also the leap into electronic'},
                m2: {price: '30', available: true, img: m2,details: 'survived not only five centuries, but also the leap into electronic'},
                m3: {price: '40', available: true, img: m3,details: 'survived not only five centuries, but also the leap into electronic'},
                m4: {price: '50', available: true, img: m4,details: 'survived not only five centuries, but also the leap into electronic'},
                m5: {price: '60', available: true, img: m5,details: 'survived not only five centuries, but also the leap into electronic'},
                m6: {price: '70', available: true, img: m6,details: 'survived not only five centuries, but also the leap into electronic'},
                m7: {price: '80', available: true, img: m7,details: 'survived not only five centuries, but also the leap into electronic'},
                m8: {price: '90', available: true, img: m8, details: 'survived not only five centuries, but also the leap into electronic'}
            },
            ram: {
                r1: {price: '100', available: true, img: r1,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r2: {price: '110', available: true, img: r2,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r3: {price: '120', available: true, img: r3,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r4: {price: '130', available: true, img: r4,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r5: {price: '140', available: true, img: r5,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r6: {price: '150', available: true, img: r6,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r7: {price: '160', available: true, img: r7,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'},
                r8: {price: '170', available: true, img: r8,details: 'Contrary to popular belief, Lorem Ipsum is not simply random text'}
            },
            speaker: {
                sp1: {price: '50', available: true, img: sp1,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp2: {price: '60', available: true, img: sp2,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp3: {price: '70', available: true, img: sp3,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp4: {price: '80', available: true, img: sp4,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp5: {price: '90', available: true, img: sp5,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp6: {price: '100', available: true, img: sp6,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp7: {price: '110', available: true, img: sp7,details: 'It has roots in a piece of classical Latin literature from 45 BC'},
                sp8: {price: '120', available: true, img: sp8,details: 'It has roots in a piece of classical Latin literature from 45 BC'}
            },
            utilities: {
                
            },

            desktop: {
    
            },
        },

        phone: {
            apple: {
                iphonex: {details: 'iPhone X', price: '120', available: true, img: iphone1},
                iphone11: {details: 'iPhone 11', price: '120', available: true, img: iphone2},
                iphone12: {details: 'iPhone 12', price: '120', available: true, img: iphone3},
                iphone13: {details: 'iPhone 13', price: '120', available: true, img: iphone4}
            },

            samsung: {
                S20: {details: 'S20', price: '120', available: true, img: samsung1},
                galaxyz: {details: 'Galaxt Z', price: '120', available: true, img: samsung2},
                s21: {details: 'S21', price: '120', available: true, img: samsung3},
                a10: {details: 'A10', price: '120', available: true, img: samsung4}
            },

            htc: {
                dream: {details: 'Dream', price: '120', available: true, img: htc1},
                sapphire: {details: 'Sapphire', price: '120', available: true, img: htc2},
                hero: {details: 'Hero', price: '120', available: true, img: htc3},
                one: {details: 'One', price: '120', available: true, img: htc4}
            },

            nokia: {
                8110: {details: '8110', price: '120', available: true, img: nokia1},
                8000: {details: '8000', price: '120', available: true, img: nokia2},
                6310: {details: '6310', price: '120', available: true, img: nokia3},
                5310: {details: '5310', price: '120', available: true, img: nokia4}
            },

            sony: {

            },

            lg: {

            },

            nexus: {

            },

            blackberry: {

            },

            pixel: {

            },

            huawei: {

            },

            oneplus: {

            },

            asus: {
                rog5: {details: 'ROG5', price: '120', available: true, img: asus1},
                rog3: {details: 'ROG3', price: '120', available: true, img: asus2},
                rog6z: {details: 'ROG6z', price: '120', available: true, img: asus3},
                rog8: {details: 'ROG8', price: '120', available: true, img: asus4},
            }
        },
        

        pageNumber: 0

    }

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    render () {

        const product = this.state[this.props.product][this.props.device];
        // console.log(this.props.product);

        return (
            <ItemListings product={product} 
                            route={this.props.product} 
                            device={this.props.device}
                            query={this.props.query}
                            />
        )
    }

}

export default ItemDetails;
