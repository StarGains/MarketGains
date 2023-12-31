import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SVGPath from "../component/SVGPath";

export default function HeroPage(){
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <section className="hero-page">
            <div className="hero-text">
                <p data-aos = "fade-right" data-aos-duration="1500"className="first-line" style={{gridColumn:"1/3",gridRow:"1/2"}}>Together</p>
                <p data-aos="zoom-in" data-aos-duration="1500" id="sec" className="second-line" style={{gridColumn:"2/3",gridRow:"2/3"}}>Lets Transform our time into </p>
                <p data-aos="fade-left" data-aos-duration="1500" className="third-line" style={{gridColumn:"2/4",gridRow:"3/4"}}>Money.</p>
                <SVGPath svg={{height:'800',width:'800',viewBox:'-150 -100 300 200'}} path={{d:"M 0 -30 H 120 Q 120 -15 120 0 H 90", strokeWidth:1}}/>
                <SVGPath svg={{height:'800',width:'800',viewBox:'-150 -100 300 200'}} path={{d:"M -90 0 H -130 Q -130 35 -130 35 H 30",strokeWidth:1}}/> 
            </div>
        </section>
    )
}