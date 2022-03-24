import Navigation from './components/Navigation/Navigation.js';
import Three from "./components/Three/Three.js";

function App() {
  return (
    <div className="App">
     <Navigation />
     <div style={{display: 'block', height: 200}} ></div>
     <Three />
    </div>
  );
}

export default App;
