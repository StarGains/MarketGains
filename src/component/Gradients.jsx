import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Gradient({gradients}){
    return(
        <svg style={{display:'none'}} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#ff7d1e"/>
            <stop offset="100%" stopColor="#fd40e5"/>
            </linearGradient>
        </defs>
        </svg>)
}