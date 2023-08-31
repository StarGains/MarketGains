import { useEffect, useRef } from "react";

export default function SVGPath({path}){
    const pathRef = useRef()
    return(
        <svg style={{position:'absolute'}} width="800" height="800" viewBox="-150 -100 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#ff7d1e"/>
            <stop offset="100%" stopColor="#fd40e5"/>
            </linearGradient>
        </defs>
            <path style={{"--length":pathRef.current ? pathRef.current.getTotalLength: 1000 }} className="path"  d={path.d} stroke="grey" ref={pathRef} />
            <path style={{"--length":pathRef.current ? pathRef.current.getTotalLength: 1000}} fill="url(#gradient)" className="spath" d={path.d} />
            <path style={{"--length":pathRef.current ? pathRef.current.getTotalLength: 1000}} className="tpath" d={path.d} stroke="grey" />
        </svg>)
}