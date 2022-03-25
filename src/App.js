import Navigation from './components/Navigation/Navigation.js';
import Three from "./components/Three/Three.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="landing-page-grid-container">
        <div className="text-container">
          <h1 className="centerText">Name...</h1>
          <h1 className="centerText">Web developer</h1>
          </div>
      <Three />
      </div>
    </div>
  );
}

export default App;
