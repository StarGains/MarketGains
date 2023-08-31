import { useState, useEffect, useCallback, useRef } from "react";
import logo from '../images/logo.svg'
import profile from '../images/profile.svg'
export default function Boxpart() {
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
  }, [handleScroll])
  let ref = useRef();
  return (
    <div className="wrapper" ref={ref}>
      <div className="box">
        <div className="short-box" style={{ transform: `scale(${Math.min(0.5 + 0.5 * percent, 1)})` }}>
          <div className="inner-box" style={{opacity:`${percent}`}}>
            <div className="inner-sidebar">
              <div><img src={logo} alt="" className="img" /><div>MarketGains</div></div>
              <p>Navigate the market's waves with knowledge as your compass,discipline as your anchor, and intuition as your sail</p>
              <p>In the world of trading, influence flows to those who master thi s triumvirate."</p>
            </div>
            <div className="inner-nav">
              <nav>
              <p>MarketCap</p>
              <p>Volume</p>
              <p>All Time High</p>
              <img src={profile} alt="" />
              </nav>
            </div>
            <div className="inner-graph">
              <div className="graph">
              <svg width="465" height="330" viewBox="0 0 465 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 304.114L16.2883 282.546L29.0229 304.114L50.6164 257.822L62.2437 277.286L82.7298 322L123.148 168.919L139.205 206.269L172.426 126.309L192.912 198.378L230.562 91.5899L244.958 119.471L254.37 91.5899L292.021 235.202L349.049 36.3546L359.569 67.9176L380.056 9L407.186 106.845L421.581 54.2403L440.407 97.9025L462 36.3546" stroke="url(#paint0_linear_79_21)" strokeDasharray="1428" strokeDashoffset={1428*(1-Math.min(percent,1))} strokeOpacity="0.7" strokeWidth="5" />
                <defs>
                  <linearGradient id="paint0_linear_79_21" x1="-10.5" y1="270" x2="450.5" y2="41" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF0000" />
                    <stop offset="1" stopColor="#00FF29" />
                  </linearGradient>
                </defs>
              </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

