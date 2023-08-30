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
        <div className="wrapper">
            <div className="bp" ref={ref} style={{ transform: `scale(${0.5 + 0.08 * percent})` }}>
                <p>this is the box part</p>
            </div>
        </div>
    )
}

