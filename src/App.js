import Navigation from './components/Navigation/Navigation.js';
import Three from "./components/Three/Three.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="landing-page-grid-container">
        <div className="text-container">
          <h2 className="centerText">Name...</h2>
          <h1 className="centerText">Web developer</h1>
          <h2 className="centerText" style={{color: 'var(--nice-grey)'}}>Web developer</h2>
          </div>
      <Three />
      </div>
    </div>
  );
}

export default App;
