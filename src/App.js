import './App.css';
import Boxpart from "./component/Boxpart";
import NavBar from './component/NavBar';
import LandingPage from './scenes/LandingPage';
function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Boxpart />
      <section></section>
      <section></section>
    </div>
  );
}
export default App;
