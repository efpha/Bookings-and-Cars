import React from "react";
import CSS from './App.css'
import Navig from './Navbar.js';
import Body from './Body.js'
import SectionFooter from './Footer.js'

function Home(){
    return (
        <div className="container">
          <Navig/>
          <Body/>
          <SectionFooter/>
        </div>
        )
}  

export default Home;