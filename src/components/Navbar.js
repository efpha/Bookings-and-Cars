import React, { useState, useEffect } from "react";
import home from './assets/home.png'
import CSS from './App.css'
import Home from './Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isAlertVisible, setIsAlertVisible] = useState(true);

    useEffect(() => {
        // Set a timeout to hide the alert after 5 seconds
        const timer = setTimeout(() => {
            setIsAlertVisible(false);
        }, 5000);

        // Clear the timeout if the component is unmounted before 5 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isAlertVisible && <div className="alert">Responsiveness underway!</div>}
            <div className="nav-bar">
                <div className="logo"><a href={Home}>Quicklink</a></div>
                <div className="links-container">
                    <ul>
                        <li><a href={Home}>Home<FontAwesomeIcon className="homeIcon" icon={faHouse} /></a></li>
                        <li><a href="#">Flights<FontAwesomeIcon className="homeIcon" icon={faPlaneDeparture} /></a></li>
                        <li><a href="#">Stays<FontAwesomeIcon className="homeIcon" icon={faBed} /></a></li>
                        <li><a href="#">Car Hires<FontAwesomeIcon className="homeIcon" icon={faCar} /></a></li>
                        <li><a href="#">Packages<FontAwesomeIcon className="homeIcon" icon={faUmbrellaBeach} /></a></li>
                        <FontAwesomeIcon icon="fa-solid fa-bed" />
                        {/* <li>
                            <div className="account">
                                <a href="">Account</a>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
