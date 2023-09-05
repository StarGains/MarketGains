import { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SVGPath({ svg, path }) {
    const [pathLength, setPathLength] = useState();
    const pathRef = useRef()
    useEffect(() => {
        if (pathRef.current) {
            setPathLength(pathRef.current.getTotalLength())
        }
    }, [pathRef])
    return <>
        <svg style={{ position: 'absolute' }} width={svg.width} height={svg.height} viewBox={svg.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path strokeWidth={path.strokeWidth} ref={pathRef} d={path.d} stroke="grey" />
            <path strokeWidth={path.strokeWidth} strokeDasharray={pathLength} strokeDashoffset={pathLength} d={path.d} stroke="orange">
                <animate attributeName="stroke-dashoffset" values={`0;${pathLength*2}`} dur="2s" begin="0" repeatCount="indefinite" />
            </path>
            <path strokeWidth={path.strokeWidth} strokeDasharray={pathLength} strokeDashoffset={pathLength} d={path.d} stroke="grey">
                <animate attributeName="stroke-dashoffset" values={`0;${pathLength*2}`} dur="2s" begin="0.2" repeatCount="indefinite" />
            </path>
        </svg>
        </>
}