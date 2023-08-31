import { useEffect } from "react";
import SVGPath from "../component/SVGPath";

export default function HeroPage(){
    useEffect(()=>{
        // let path = [0];
        document.querySelector("body").style.setProperty("--length", 1000);
    },[])
    return(
        <section className="hero-page">
            <div className="hero-text">
                <p className="first-line" style={{gridColumn:"1/3",gridRow:"1/2"}}>Together</p>
                <p className="second-line" style={{gridColumn:"2/3",gridRow:"2/3",fontSize:'2rem'}}>Lets Transform our time into </p>
                <p className="third-line" style={{gridColumn:"2/4",gridRow:"3/4"}}>Money</p>
                <SVGPath path={{d:"M 0 -30 H 120 Q 120 -15 120 0 H 90"}}/>
                <SVGPath path={{d:"M -90 0 H -130 Q -130 35 -130 35 H 30"}}/> 
            </div>
        </section>
    )
}