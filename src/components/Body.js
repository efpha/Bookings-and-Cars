import React from "react";
import cssbody from './Body.css'

function Body(){
    return(
        <div className="container">
            <div className="card-location-desc">
                <h1 className="location-desc">We serve you across entire USA</h1>
            </div>
            <div className="card-container">
                <div className="card">
                    <h2 className="assistance-description">Book a flight with us and 10% discount</h2>
                    <button className="btn-available">Find flight</button>
                </div>
                <div className="card">
                    <h2 className="assistance-description"><br/>hire</h2>
                    <button className="btn-available">Hire Cars</button>
                </div>
                <div className="card">
                    <h2 className="assistance-description">VIP escorts for occasions such as <br/>weddings and others</h2>
                    <button className="btn-available">Get escorted</button>
                </div>
            </div>            
        </div>
    )
}

export default Body;
