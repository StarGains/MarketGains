import './App.css';
import Boxpart from "./component/Boxpart";
import Gradient from './component/Gradients';
import NavBar from './component/NavBar';
import HeroPage from './scenes/HeroPage';
import Services from './scenes/Services';
import TermsAndConditions from './scenes/TermsAndConditions';

function App() {
  return (
    <div className="App">
      <Gradient />
      <NavBar />
      <HeroPage />
      <Boxpart />
      <Services />
      <TermsAndConditions />
    </div>
  );
}
export default App;
