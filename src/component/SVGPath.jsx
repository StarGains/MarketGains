import { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SVGPath({ path, viewBox }) {
    const [pathLength, setPathLength] = useState();
    const pathRef = useRef()
    useEffect(() => {
        if (pathRef.current) {
            setPathLength(pathRef.current.getTotalLength())
        }
    }, [pathRef])
    return <>
        <svg style={{ position: 'absolute' }} width="800" height="800" viewBox={viewBox? viewBox: "-150 -100 300 200"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path ref={pathRef} d={path.d} stroke="grey" />
            <path strokeDasharray={pathLength} strokeDashoffset={pathLength} d={path.d} stroke="orange">
                <animate attributeName="stroke-dashoffset" values={`0;${pathLength*2}`} dur="2s" begin="0" repeatCount="indefinite" />
            </path>
            <path strokeDasharray={pathLength} strokeDashoffset={pathLength} d={path.d} stroke="grey">
                <animate attributeName="stroke-dashoffset" values={`0;${pathLength*2}`} dur="2s" begin="0.2" repeatCount="indefinite" />
            </path>
        </svg>
        </>
}