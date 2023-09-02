import './App.css';
import 'aos/dist/aos.css';
import Boxpart from "./component/Boxpart";
import Gradient from './component/Gradients';
import NavBar from './component/NavBar';
import HeroPage from './scenes/HeroPage';
import Services from './scenes/Services';
import TermsAndConditions from './scenes/TermsAndConditions';
import SVGPath from './component/SVGPath';
import { useEffect, useState, useCallback } from 'react';

function App() {
  const [percent, setPercent] = useState(0)
  const handleMouse = useCallback(function handleMouse(e) {
    setPercent(e.clientX)
  }, [])
  useEffect(() => {
    window.addEventListener('mousemove', handleMouse)
    return () => {
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [handleMouse])
  useEffect(()=>{
    console.log(percent)
  },[percent])

  return (
    <div className="App">
      <Gradient />
      <NavBar />
      <HeroPage />
      <div style={{position:'relative'}}>
      <SVGPath viewBox={`386 -600 475 2220`} path={{d:"M-11 19.3937C127.546 -27.2771 418.51 -14.0092 474 412.429C453.191 681.286 327.059 1219 -11 1219"}}/>
      <Boxpart />
      </div>
      <Services />
      <TermsAndConditions />
    </div>
  );
}
export default App;
