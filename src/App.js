import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Homepage/Homepage';
import MainComponent from './Pages/Repair/MainComponent/MainComponent';
import PhoneModels from './Pages/Repair/MainComponent/PhoneModels/PhoneModels';
import RepairQuote from './Pages/Repair/MainComponent/RepairQuote/RepairQuote';
//Backgound Image

//Phone Model Logo
import apple from './Assets/Images/Logo/mobile/apple.png';
import asus from './Assets/Images/Logo/mobile/asus.png';
import blackberry from './Assets/Images/Logo/mobile/blackberry.png';
import htc from './Assets/Images/Logo/mobile/htc.png';
import huawei from './Assets/Images/Logo/mobile/huawei.png';
import lg from './Assets/Images/Logo/mobile/lg.png';
import nexus from './Assets/Images/Logo/mobile/nexus.png';
import nokia from './Assets/Images/Logo/mobile/nokia.png';
import oneplus from './Assets/Images/Logo/mobile/oneplus.png';
import pixel from './Assets/Images/Logo/mobile/pixel.png';
import samsung from './Assets/Images/Logo/mobile/samsung.png';
import sony from './Assets/Images/Logo/mobile/sony.png';
import google from './Assets/Images/Logo/tablet/google.jpeg';
import lenovo from './Assets/Images/Logo/tablet/lenovo.png';
import microsoft from './Assets/Images/Logo/tablet/microsoft.png';
import amazon from './Assets/Images/Logo/tablet/amazon.png';
//Phone Models Image
import iphone from './Assets/Images/phoneRepair/apple.jpg';
import Asus from './Assets/Images/phoneRepair/asus.jpg';
import BlackBerry from './Assets/Images/phoneRepair/blackberry.jpg';
import Htc from './Assets/Images/phoneRepair/htc.jpg';
import Huawei from './Assets/Images/phoneRepair/huawei.jpg';
import Lg from './Assets/Images/phoneRepair/lg.jpg';
import Nexus from './Assets/Images/phoneRepair/nexus.jpg';
import Nokia from './Assets/Images/phoneRepair/nokia.jpg';
import OnePlus from './Assets/Images/phoneRepair/oneplus.jpg';
import Pixel from './Assets/Images/phoneRepair/pixel.jpg';
import Sony from './Assets/Images/phoneRepair/sony.jpg';
import SamSung from './Assets/Images/phoneRepair/samsung.jpg';
//Tablet Models Image
import amazonTab from './Assets/Images/tabletRepair/amazon.jpg';
import asusTab from './Assets/Images/tabletRepair/asus.jpg';
import googleTab from './Assets/Images/tabletRepair/google.jpg';
import huaweiTab from './Assets/Images/tabletRepair/huaweiTab.jpg';
import ipadpro from './Assets/Images/tabletRepair/ipadPro.jpg';
import lenovoTab from './Assets/Images/tabletRepair/lenovo.jpg';
import microsoftTab from './Assets/Images/tabletRepair/microsoft.jpg';
import samsungTab from './Assets/Images/tabletRepair/samsungTab.jpg';
//Laptop Service Image
import battery from './Assets/Images/Logo/Laptop/battery.png';
import keyboard from './Assets/Images/Logo/Laptop/keyboard.png';
import laptop from './Assets/Images/Logo/Laptop/laptop.png';
import notebook from './Assets/Images/Logo/Laptop/notebook.png';
import power from './Assets/Images/Logo/Laptop/power.png';
import recovery from './Assets/Images/Logo/Laptop/recovery.png';
import touchpad from './Assets/Images/Logo/Laptop/touchpad.png';
import PcMain from './Pages/Shop/Pc/PcMain/PcMain';
//Pc Images
import desktop from './Assets/Images/pcAccesories/desktop.jpg';
import Keyboard from './Assets/Images/pcAccesories/keyboard.jpg';
import Laptop from './Assets/Images/pcAccesories/laptop.jpg';
import monitor from './Assets/Images/monitor/monitor.jpg';
import mouse from './Assets/Images/pcAccesories/mouse.jpg';
import utilities from './Assets/Images/pcAccesories/utilities.jpg';
import ram from './Assets/Images/pcAccesories/ram.jpg';
import speaker from './Assets/Images/pcAccesories/speaker.jpg';
import ItemDetails from './Pages/Shop/Pc/ItemDetails/ItemDetails';
import CurrencyConverter from './Pages/CurrencyConverter/CurrencyConverter';


class App extends Component {

  state = {

    backDropValue: false,
    
    sideBar: false,

    brand: {


      apple: ['iPhone 6', 'iPhone 6 Plus','iPhone 6s', 'iPhone 6s Plus', 'iPhone 7', 'iPhone 7 Plus', 'iPhone SE', 'iPhone 8', 'iPhone 8 Plus', 'iPhone X'
              , 'iPhone XS', 'iPhone XS Max', 'iPhone XR', 'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max', 'iPhone 12', 'iPhone 12 mini', 'iPhone 12 Pro',
                  'iPhone 12 Pro Max', 'iPhone 13', 'iPhone 13 Mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max'],
  
      samsung: ['Galaxy Note Series', 'Galaxy S Series', 'Galaxy A Series', 'Galaxy J Series', 'Galaxy Tab Series'],
      
      htc: ['HTC 10', 'HTC One M9', 'HTC U11', 'HTC U12'],
      
      sony: ['Sony Xperia XZ', 'Sony Xperia XZ Premium', 'Somy Xperia XA', 'Sony Xperia X Compact',
              'Sony Xperia X', 'Sony Xperia Z5 Premium', 'Sony Xperia Z5 Compact', 'Sony Xperia Z3 Plus/Z4',
                'Sony Xperia Z5', 'Sony Xperia Z3 Compact', 'Sony Xperia Z3', 'Sony Xperia Z2', 'Sony Xperia Z1 Compact',
              'Sony Xperia 10 Plus', 'Sony Xperia 10', 'Sony Xperia XZ2', 'Sony Xperia XZ3', 'Sony Xperia XA1 Ultra',
              'Sony Xperia XZ1', 'Sony Xperia XZ1 Compact'],
      
      lg: ['LG G5', 'LG K8(2016)', 'LG V30', 'LG V40', 'LG G4', 'LG G3', 'LG Nexus 5X'],
      
      nexus: ['LG Huawei P20', 'Huawei P30 lite', 'Huawei P40 lite', 'LG Nexus 5X'],
      
      nokia: ['Microsoft Nokia Lumia 1520', 'Microsoft Nokia Lumia 1320', 'Nokia 8', 'Nokia 6.1'],
      
      blackberry: ['Blackberry DTEK 60', 'Blackberry Key One', 'Blackberry Key Two', 'Blackberry DTEK 50', 'Blackberry Playbook'],
      
      pixel: ['Google Pixel 2', 'Google Pixel 2 XL', 'Google Pixel 3', 'Google Pixel 3 XL', 'Google Pixel 3A',
              'Google Pixel 3A XL', 'Google Pixel 4', 'Google Pixel 4 XL', 'Google Pixel 4A', 'Google Pixel 5', 'Google Pixel XL'],
      
      huawei: ['Huawei P20 Lite', 'Huawei P20 Pro', 'Huawei P30', 'Huawei P30 Pro', 'Huawei P40 5G', 'Huawei Honor 10',
              'Huawei Honor 9', 'Huawei Honor 9 Lite', 'Huawei P Smart', 'Huawei P Smart 2019', 'Huawei P Smart 2020',
              'Huawei P10', 'Huawei P9 Plus', 'Huawei P9 Lite', 'Huawei P9', 'Huawei Y6', 'Huawei Y7',
              'Huawei P8 Lite', 'Huawei P8 Lite(2017)', 'Huawei P20', 'Huawei P30 lite', 'Huawei P40 lite',
              'Huawei Honor 20 Lite', 'Huawei Honor 8', 'Huawei Honor 7', 'Huawei Honor 8X', 'Huawei Mate 20 Lite',
              'Huawei Mate 10 Pro', 'Huawei Mate 20', 'Huawei Mate 20 Pro'],
      
      oneplus: ['OnePlus 5', 'OnePlus 5T', 'OnePlus 6', 'OnePlus 6T', 'OnePlus 7 Pro', 'OnePlus 7T',
              'OnePlus 8Pro', 'OnePlus 8T', 'OnePlus 3T', 'OnePlus 3', 'OnePlus 7'],
  
      asus: ['ROG Phone 5s Pro', 'ROG Phone 5s', 'Zenfone 8 Flip', 'Zenfone 8', 'Zenfone 7 Pro', 'Zenfone 7',
              'Zenfone 6', 'Zenfone Live', 'Zenfone Max Plus', 'Zenfone Max Shot', 'Zenfone Max',
              'Zenfone Lite', 'ROG Phone ZS600KL', 'Zenfone 5z', 'Zenfone 5', 'Zenfone 4', 'Zenfone 4 Pro', 'Zenfone 4 Selfie',
              'Zenfone 4 Max', 'Zenfone 4 Max Pro']
    },


    tablet: {
      apple: ['Apple iPad Mini 2019', 'Apple iPad Pro 12.9"', 'Apple iPad 2018', 'Apple iPad Pro 10.5',
            'Apple iPad Pro 9.7', 'Apple iPad Pro', 'Apple iPad Mini 4', 'Apple iPad Mini 3', 'Apple iPad Air 2',
            'Apple iPad Mini 2013', 'Apple iPad Air', 'Apple iPad Mini', 'Apple iPad 4', 'Apple iPad 3',
            'Apple iPad 2'],
      samsung: ['SAMSUNG Galaxy Tab S7', 'Samsung Galaxy Tab S7+', 'Samsung Galaxy Tab S7 FE', 
                'Samsung Galaxy Tab S6 Lite', 'Samsung Galaxy Tab A7', 'Samsung Tab A7 Lite',
                'SAMSUNG Galaxy Tab A'],
      amazon: ['Amazon Fire HD 8 (2018)', 'Amazon Fire HD 10 (2017)', 'Amazon Fire 7 (2017)', 'Amazon Fire HD 8 (2017)',
              'Amazon Fire HD 8 (2016)', 'Amazon Fire Kids Edition', 'Amazon Fire HD 8', 'Amazon Fire HD 10',
              'Amazon Fire 7" (2015)', 'Amazon Fire HD Kids 7"', 'Amazon Kindle Fire HDX 8.9"', 'Amazon Kindle Fire HDX 7"'],
      lenovo: ['Lenovo E7', 'Lenovo E8', 'Lenovo E10', 'Lenovo M10', 'Lenovo P10', 'Lenovo Miix 630',
              'Lenovo Thinkpad X1', 'Lenovo Tab 7', 'Lenovo Yoga A12'],
      huawei: ['Huawei MediaPad M5 Pro', 'Huawei MediaPad M5 8.4 Tablet', 'Huawei MediaPad M5 Lite', 
              'Huawei MediaPad T3 10', 'Huawei MediaPad T3 8'],
      microsoft: ['Microsoft Surface Pro 6', 'Microsoft Surface Go', 'Microsoft Surface Book 2',
                'Microsoft Surface Pro (2017)', 'Microsoft Surface Pro 4', 'Microsoft Surface 3',
                'Microsoft Surface Pro 3', 'Microsoft Surface 2', 'Microsoft Surface Pro 2', 'Microsoft Surface Pro', 'Microsoft Surface RT'],
      asus: ['Asus ZenPad C 7.0', 'Asus ZenPad S 8.0', 'Asus Zenpad 10', 'Asus Transformer Book T100 Chi', 'Asus Transf. Book T300 Chi',
            'Asus Transformer Book T90 Chi', 'ASUS Transformer Pad TF103C', 'ASUS Transformer Pad TF103'],
      google: ['Google Pixel Slate', 'Google Pixel C', 'Google/HTC Nexus 9', 'Google/Asus Nexus 7 II',
              'Google/Samsung Nexus 10', 'Google/Asus Nexus 7 II']
    },

    phoneLogo: {
      apple: apple,
      asus: asus,
      blackberry: blackberry,
      htc: htc, 
      huawei: huawei, 
      lg: lg, 
      nexus: nexus, 
      nokia: nokia, 
      oneplus: oneplus, 
      pixel: pixel, 
      samsung: samsung, 
      sony: sony
    },

    phonePic: {
      apple: iphone,
      asus: Asus,
      blackberry: BlackBerry,
      htc: Htc,
      huawei: Huawei,
      lg: Lg,
      nexus: Nexus,
      nokia: Nokia,
      oneplus: OnePlus,
      pixel: Pixel,
      samsung: SamSung,
      sony: Sony
    },
    
    
    tabletLogo: {
      apple: apple,
      huawei: huawei,  
      samsung: samsung,
      lenovo: lenovo,
      microsoft: microsoft,
      asus: asus,
      google: google,
      amazon: amazon
    },

    tabletPic: {
      amazon: amazonTab,
      asus: asusTab,
      google: googleTab,
      huawei: huaweiTab,
      apple: ipadpro,
      lenovo: lenovoTab,
      microsoft: microsoftTab,
      samsung: samsungTab
    },

    laptopPic: {
      battery: battery,
      keyboard: keyboard,
      laptop: laptop,
      notebook: notebook,
      power: power,
      recovery: recovery,
      touchpad: touchpad
    },

    laptop: {
      battery: 'Battery Replacement',
      keyboard: 'Keyboard Replacement',
      laptop: 'Liquid Damage',
      notebook: 'Screen Repair',
      power: 'Charging Issue',
      recovery: 'Data Recovery',
      touchpad: 'Touchpad Repair'

    },

    pcCategory: {
      desktop: 'Desktop',
      keyboard: 'Keyboard',
      laptop: 'Laptop',
      monitor: 'Monitor',
      mouse: 'Mouse',
      utilities: 'Utilities',
      ram: 'Ram',
      speaker: 'Bluetooth Speaker'
    },

    pcImage: {
      desktop: desktop,
      keyboard: Keyboard,
      laptop: Laptop,
      monitor: monitor,
      mouse: mouse,
      utilities: utilities,
      ram: ram,
      speaker: speaker
    },

    pcDetails: {
      desktop: ['Join With Us Today', 'Join With Us Today', 'Join With Us Today'],
      keyboard: ['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'],
      laptop: ['consectetur adipiscing', 'consectetur adipiscing', 'consectetur adipiscing'],
      monitor: [' sed do eiusmod', ' sed do eiusmod', ' sed do eiusmod'],
      mouse: ['tempor incididunt ut', 'tempor incididunt ut', 'tempor incididunt ut'],
      utilities: ['labore et dolore magna', 'labore et dolore magna', 'labore et dolore magna'],
      ram: ['aliqua. Quis ipsum', 'aliqua. Quis ipsum', 'aliqua. Quis ipsum'],
      speaker: ['suspendisse ultrices', 'suspendisse ultrices', 'suspendisse ultrices'],
    }

  }


  toggleBackdrop= () => {
  const current = this.state.backDropValue;
  this.setState({backDropValue: !current, sideBar: false});
  }

  toggleSidebar= () => {
    this.setState({sideBar: true, backDropValue: true})
  }


  render () {

    return (
      <BrowserRouter>
        <div className='App'>
            <Routes>
              <Route path="/" exact element={<HomePage switchBar={this.toggleSidebar} 
                                                        backdrop={this.state.backDropValue}
                                                        toggleBackdrop={this.toggleBackdrop}
                                                        switch={this.state.sideBar}/>} />

              <Route path="/phone/*" element={<MainComponent switchBar={this.toggleSidebar} 
                                                      backdrop={this.state.backDropValue}
                                                      toggleBackdrop={this.toggleBackdrop}
                                                      switch={this.state.sideBar}
                                                      device="phone"
                                                      data={this.state.brand}
                                                      img={this.state.phoneLogo}
                                                      />} />
              
              {Object.keys(this.state.brand).map(item => {
                let dir = `/phone/${item}` ;
                return <Route key={item} path={dir} element={<PhoneModels model={item}
                                                    key={item}
                                                    pic={this.state.phonePic}
                                                    data={this.state.brand}
                                                    device="phone"
                                                    switchBar={this.toggleSidebar} 
                                                    backdrop={this.state.backDropValue}
                                                    toggleBackdrop={this.toggleBackdrop}
                                                    switch={this.state.sideBar}/>} 
                                                    />
              })}

          
              {Object.keys(this.state.brand).map(item => {
                let dir = `/phone/${item}/service`;
                return <Route key={item} path={dir} element={<RepairQuote switchBar={this.toggleSidebar} 
                                                      key={item}
                                                      brand={item}
                                                      backdrop={this.state.backDropValue}
                                                      toggleBackdrop={this.toggleBackdrop}
                                                      switch={this.state.sideBar}
                                                      pic={this.state.phonePic[item]}/>} />
              })}

              <Route path="/tablet" element={<MainComponent switchBar={this.toggleSidebar} 
                                                      backdrop={this.state.backDropValue}
                                                      toggleBackdrop={this.toggleBackdrop}
                                                      switch={this.state.sideBar}
                                                      device="tablet"
                                                      data={this.state.tablet}
                                                      img={this.state.tabletLogo}/>} />
              
              {Object.keys(this.state.tablet).map(item => {
                let dir = `/tablet/${item}` ;
                return <Route key={item} path={dir} element={<PhoneModels model={item}
                                                    key={item}
                                                    data={this.state.tablet}
                                                    pic={this.state.tabletPic}
                                                    device="tablet"
                                                    switchBar={this.toggleSidebar} 
                                                    backdrop={this.state.backDropValue}
                                                    toggleBackdrop={this.toggleBackdrop}
                                                    switch={this.state.sideBar}/>} 
                                                    />
              })}

              {Object.keys(this.state.tablet).map(item => {
                              let dir = `/tablet/${item}/service`;
                              return <Route key={item} path={dir} element={<RepairQuote switchBar={this.toggleSidebar} 
                                                                    key={item}
                                                                    brand={item}
                                                                    pic={this.state.tabletPic[item]}
                                                                    backdrop={this.state.backDropValue}
                                                                    toggleBackdrop={this.toggleBackdrop}
                                                                    switch={this.state.sideBar}/>} />
                            })}

              <Route path="/laptop" element={<MainComponent switchBar={this.toggleSidebar} 
                                                    backdrop={this.state.backDropValue}
                                                    toggleBackdrop={this.toggleBackdrop}
                                                    switch={this.state.sideBar}
                                                    device="laptop"
                                                    data={this.state.laptop}
                                                    img={this.state.laptopPic}/>} />

              <Route path ="/pc/*" element={<PcMain switchBar={this.toggleSidebar} 
                                                    backdrop={this.state.backDropValue}
                                                    toggleBackdrop={this.toggleBackdrop}
                                                    switch={this.state.sideBar}
                                                    data={this.state.pcCategory}
                                                    img={this.state.pcImage}
                                                    details={this.state.pcDetails}
                                                    device="pc"/>}/>
                    
              {Object.keys(this.state.pcCategory).map((item, index) => {
                let dir = `/pc/${item}`
                return <Route key={index} path={dir} element={<ItemDetails key={item} 
                                                    switchBar={this.toggleSidebar} 
                                                    backdrop={this.state.backDropValue}
                                                    toggleBackdrop={this.toggleBackdrop}
                                                    switch={this.state.sideBar}
                                                    product="pc"
                                                    device={item}/>}/>
              })}

                <Route path ="/mobile/*" element={<PcMain switchBar={this.toggleSidebar} 
                                                    backdrop={this.state.backDropValue}
                                                    toggleBackdrop={this.toggleBackdrop}
                                                    switch={this.state.sideBar}
                                                    data={this.state.brand}
                                                    img={this.state.phoneLogo}
                                                    device="mobile"/>}/>

              {Object.keys(this.state.brand).map((item, index) => {
                let dir = `/mobile/${item}`;
                return <Route key={item}path={dir} element={<ItemDetails key={index} 
                                                    switchBar={this.toggleSidebar} 
                                                    backdrop={this.state.backDropValue}
                                                    toggleBackdrop={this.toggleBackdrop}
                                                    switch={this.state.sideBar}
                                                    product="mobile"
                                                    device={item} />}/>
              })}

              <Route path="/currency_converter" element={<CurrencyConverter switchBar={this.toggleSidebar} 
                                                    backdrop={this.state.backDropValue}
                                                    toggleBackdrop={this.toggleBackdrop}
                                                    switch={this.state.sideBar}/>}/>


            </Routes>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
