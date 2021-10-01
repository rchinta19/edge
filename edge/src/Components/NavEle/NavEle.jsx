import React from 'react'
import './NavEle.modules.css'
import {Link} from 'react-scroll'

function NavEle() {
    return (
        <div className="nav-bar">
        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:781b5462-2a0d-4620-8d8b-46d4f98bdfa3;revision=0?component_id=82aea3fe-355b-42b9-bcbe-d34597ae78a6&api_key=CometServer1&access_token=1633105450_urn%3Aaaid%3Asc%3AUS%3A781b5462-2a0d-4620-8d8b-46d4f98bdfa3%3Bpublic_5128cf259ab2324ac35b0819bb78e073f05bc779" alt="edge-log" className="edge-logo"/>           
        <ul className="link-items">
            <li><Link activeClass="active" to="Home" spy={true} smooth={true} >Home</Link></li>
            <li><Link  to="About" spy={true} smooth={true} >ABOUT</Link></li>
            <li><Link  to="Services" spy={true} smooth={true} >SERVICES</Link></li>
            <li><Link  to="Fortfolio" spy={true} smooth={true} >PORTFOLIO</Link></li>
            <li><Link to="Carrers" spy={true} smooth={true} >CARRERS</Link></li>
            <li><Link to="Contact" spy={true} smooth={true} >CONTACT</Link></li>
        </ul>
        </div>
    )
}

export default NavEle
