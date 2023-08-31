import { useEffect, useRef } from "react";

export default function SVGPath({path}){
    const pathRef = useRef()
    useEffect(()=>{
        if(pathRef.current){
            let pathlength = pathRef.current.getTotalLength()
            document.querySelector("body").style.setProperty("--length", pathlength);
        }
    },[])
    return(
        <svg onClick={()=>{}} style={{position:'absolute'}} width="800" height="800" viewBox="-150 -100 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="path"  d={path.d} stroke="grey" ref={pathRef} />
            <path className="spath" d={path.d} />
            <path className="tpath" d={path.d} stroke="grey" />
        </svg>)
}