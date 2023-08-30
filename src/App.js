import './App.css';
import Boxpart from "./component/Boxpart";
import NavBar from './component/NavBar';
import HeroPage from './scenes/HeroPage';
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroPage />
      <Boxpart />
      <section></section>
      <section></section>
    </div>
  );
}
export default App;
