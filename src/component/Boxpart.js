import { useState,useEffect,useCallback,useRef } from "react";

export default function Boxpart(){
    const [percent, setPercent] = useState(0);
    const handleScroll = useCallback(function handleScroll(e) {
        let percentage = (window.scrollY / (ref.current.scrollHeight - window.innerHeight))
        setPercent(percentage)

    }, [])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    let ref = useRef();
    return(
        <div className="wrapper" ref={ref}>
        <div className="box">
          <div className="short-box" style={{transform:`scale(${Math.min(0.5+ 0.5*percent,1.5)})`}}>

          </div>
        </div>
      </div>
    )
}

