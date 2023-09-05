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
      borderRadius: '10px',
      width: '70%',
      height: 'min-content',
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
  useEffect(() => {
    console.log(percent)
  }, [percent])

  return (
    <div className="App">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ContactInfo closeModal={closeModal} />
      </Modal>
      <Gradient />
      <NavBar openContact={openModal} />
      <HeroPage />
      <div style={{position:'relative'}}>
        <SVGPath svg={{width:'1920',height:'1080', viewBox:'0 0 1440 709'}} path={{d:"M-0.000154656 4.57922C212.022 7.36982 347.714 37.5073 444.794 98.9625C558.954 171.064 620.07 286.424 688.681 453.122C695.6 466.965 701.942 483.693 722.122 483.693C742.302 483.693 749.221 466.965 756.14 453.122C824.751 287.578 885.867 172.217 1000.03 98.9627C1096.36 37.9829 1231.21 7.83826 1440 4.64919", strokeWidth:3}}/>
        <SVGPath svg={{width:'1920',height:'1080', viewBox:'0 0 1440 709'}} path={{d:"M7.26476e-05 313.913C194.266 304.127 339.431 324.037 444.794 377.56C554.014 432.449 621.279 523.38 658.35 652.787C666.639 681.72 692.314 702.881 722.411 702.881V702.881C752.507 702.881 778.182 681.72 786.471 652.787C823.543 523.38 890.808 432.449 1000.03 377.56C1104.53 323.389 1247.69 304.321 1440 313.668",strokeWidth:3}}/>
        <Boxpart />
      </div>
      <Services />
      <TermsAndConditions />
    </div>
  );
}
export default App;
