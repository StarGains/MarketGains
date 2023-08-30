import { useEffect } from "react";
import NavBar from "../component/NavBar";

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
<svg onClick={()=>{}} style={{position:'absolute'}} width="800" height="800" viewBox="-150 -100 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stopColor="#ff7d1e"/>
      <stop offset="100%" stopColor="#fd40e5"/>
    </linearGradient>
  </defs>
    <path className="path"  d="M 0 -30 H 120 Q 120 -15 120 0 H 90" stroke="grey" />
    <path className="spath" d="M 0 -30 H 120 Q 120 -15 120 0 H 90" />
    <path className="tpath" d="M 0 -30 H 120 Q 120 -15 120 0 H 90" stroke="grey" />
    <path className="path"  d="M -90 0 H -130 Q -130 35 -130 35 H 30" stroke="grey" />
    <path className="spath" d="M -90 0 H -130 Q -130 35 -130 35 H 30" />
    <path className="tpath" d="M -90 0 H -130 Q -130 35 -130 35 H 30" stroke="grey" />
</svg>
            </div>
        </section>
    )
}