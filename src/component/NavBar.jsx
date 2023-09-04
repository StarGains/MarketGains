import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import logo from "../images/logo.svg"
import './NavBar.css'

export default function NavBar({openContact}){
    //contact info card part
    
    useEffect(() => {
        AOS.init();
    }, [])
    return <nav className="navbar" data-aoso="fade-down" data-aoso-duration="1000" >
        <img src={logo} alt="" className="logo" />
        <p className="company-name">MarketGains</p>
        <button onClick={openContact}>contact</button>
    </nav>
}