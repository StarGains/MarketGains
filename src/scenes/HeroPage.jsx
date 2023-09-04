import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SVGPath from "../component/SVGPath";
import "./HeroPage.css"

export default function HeroPage(){
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <section className="hero-page">
            <div className="hero-text">
                <p data-aoso = "fade-right" data-aoso-duration="1500"className="first-line" style={{gridColumn:"1/3",gridRow:"1/2"}}>Together</p>
                <p data-aoso="zoom-in" data-aoso-duration="1500" className="second-line" style={{gridColumn:"2/3",gridRow:"2/3",fontSize:'2rem'}}>Lets Transform our time into </p>
                <p data-aoso="fade-left" data-aoso-duration="1500" className="third-line" style={{gridColumn:"2/4",gridRow:"3/4"}}>Money.</p>
                <SVGPath path={{d:"M 0 -30 H 120 Q 120 -15 120 0 H 90"}}/>
                <SVGPath path={{d:"M -90 0 H -130 Q -130 35 -130 35 H 30"}}/> 
            </div>
        </section>
    )
}