import Navigation from './components/Navigation/Navigation.js';
import Three from "./components/Three/Three.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="landing-page-grid-container">
        <div><h1>Hello world.</h1></div>
      <Three />
      </div>
    </div>
  );
}

export default App;
