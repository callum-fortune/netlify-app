import Navigation from './components/Navigation/Navigation.js';
import Three from "./components/Three/Three.js";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.js";
import ProjectsPage from "./Pages/Projects/ProjectsPage.js"
import PhotographyPage from "./Pages/Photography/PhotographyPage.js"
import CVPage from "./Pages/CV/CVPage.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/photography" element={<PhotographyPage />}/>
        <Route path="/cv" element={<CVPage />}/>
      </Routes>
    </div>
  );
}

export default App;
