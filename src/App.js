import Navigation from './components/Navigation/Navigation.js';
import Three from "./components/Three/Three.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="landing-page-grid-container">
        <div className="text-container">
          <h2 className="centerText">Hi I'm</h2>
          <h1 className="centerText" style={{color: 'var(--bright-green'}}>CALLUM FORTUNE</h1>
          <h2 className="centerText" style={{color: 'var(--nice-grey)'}}>Web developer wannabe</h2>
          <p className="centerText" style={{color: 'var(--nice-grey)'}}>Welcome to my page, I'm glad you're here. Check out my programming projects or browse my collection of photos taken on my adventures...</p>
        </div>
        <div className="three-object">
          <Three />
        </div>
      </div>
    </div>
  );
}

export default App;
