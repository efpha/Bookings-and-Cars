import React from "react";
import cssfooter from './Footer.css' 

function Footer(){
    let year = new Date().getFullYear();
return(
    <footer>
        <hr/>
        <section className="footer-container">
            <h6 className="footer-txt">
                Copyright © {year} Quicklink Limited and its affiliated companies. All rights reserved.
            </h6>
            <h5>Designed and developed by <a href="mailto:syncdv3gmail.com">Keffa muthuri</a> 
            </h5>

        </section>
    </footer>
)
}
export default Footer;