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
import Modal from 'react-modal';
import ContactInfo from './component/ContactInfo';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const customStyles = {
    content: {
      borderRadius:'10px',
      width:'700px',
      height:'350px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

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
       <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
    
      <ContactInfo closeModal={closeModal}/>
      </Modal>
      <Gradient />
      <NavBar openContact={openModal} />
      <HeroPage />
      <div style={{position:'relative'}}>
      <SVGPath viewBox={`50 -600 2000 2220`} path={{d:"M-11 19.3937C127.546 -27.2771 418.51 -14.0092 474 412.429C453.191 681.286 327.059 1219 -11 1219"}}/>
      <Boxpart />
      </div>
      {/* <Services />
      <TermsAndConditions /> */}
    </div>
  );
}
export default App;
