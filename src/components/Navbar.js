import React from "react";
import home from './assets/home.png'
import CSS from './App.css'
import Home from './Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar(){
    return(
        <div>
            <div className="nav-bar">
                <div className="logo"><a href={Home}>Quicklink</a></div>
                    <div className="links-container">
                        <ul>
                            <li><a href={Home}>Home<FontAwesomeIcon className="homeIcon" icon="fa-solid fa-house" /></a></li>
                            <li><a href="#">Hotels</a></li>
                            <li><a href="#">Vacation rentals</a></li>
                            <li><a href="#">Cars for Hire</a></li>
                            <li><a href="#">VIP escort</a></li>
                            <li><a href="#">Discounted Deals</a></li>
                            {/* <li>
                                <div className="account">
                                    <a href="">Account</a>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Navbar;