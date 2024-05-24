import React from "react";
import cssbody from './Body.css'

function Body(){
    return(
        <div className="container">
            <div className="card-location-desc">
                <h1 className="location-desc">Access our services from anywhere in the globe.</h1>
            </div>
            <div className="card-container">
                <div className="card">
                    <h2 className="assistance-description">Book a flight with us and get 10% discount.<br/></h2>
                    <button className="btn-available">Catch Flight</button>
                </div>
                <div className="card">
                    <h2 className="assistance-description">Compare rental car deals to find the<br/>right one.</h2>
                    <button className="btn-available">Find Rental Car</button>
                </div>
                <div className="card">
                    <h2 className="assistance-description">Compare hotels from<br/>100s of sites.<br/></h2>
                    <button className="btn-available">Get An Hotel</button>
                </div>
                <div className="card">
                    <h2 className="assistance-description">Compare hotels from<br/>100s of sites.<br/></h2>
                    <button className="btn-available">Get An Hotel</button>
                </div>
            </div>            
        </div>
    )
}

export default Body;
