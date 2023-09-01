import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect, useCallback, useRef } from "react";

export default function Card({ card }) {
    useEffect(() => {
        AOS.init();
    }, [])
    let ref = useRef();
    return (
        // data - aos = "zoom-in" data - aos - duration="1500" 
        <div className="card-wrapper" ref={ref}>
            <img src={card.src} alt="" />
            <h3>{card.heading}</h3>
            <p>
                Traders and Investors in India use our stable and reliable platforms regularlyTradings have risk and also brings a lot of fortune.
                It was like rollercoaster that depends on the market to go forward.
            </p>
            {card.footer && <h3>{card.footer}</h3>}
        </div>
    )
}

