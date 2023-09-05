import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import logo from "../images/logo.svg"
export default function NavBar({openContact}){
    useEffect(() => {
        AOS.init();
    }, [])
    return <nav data-aos="fade-down" data-aos-duration="1000" className="nav-bar">
        <img src={logo} alt="" className="logo" />
        <p className="company-name">MarketGains</p>
        <button onClick={openContact}>contact</button>
    </nav>
}