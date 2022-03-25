import Navigation from './components/Navigation/Navigation.js';
import Three from "./components/Three/Three.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <section className="page-section">
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
      </section>
      <section className="page-section about-me">
        <div className="about-me-grid-container">
          <div className="about-me-main-img"><img src="assets/aboutmeimg.png" /></div>
          <div className="about-me-text-container">
            <h2>&lt;About Me&gt;</h2>
            <h3>Hi, I'm Callum, a computer science and mathematics student from Crewe, Cheshire. Having taught myself the ways of web-technologies I have built my own little corner of the web here to help me build my web kingdom. I am currently learning React for the MERN stack so please don't mind if this website does anything stupid.</h3>
            <br />
            <ul style={{fontSize: "2rem", display: "inline"}}>
              <li style={{marginRight: "20px", display: "inline"}}><a href=""><i className="fa fa-facebook" ></i></a></li>
              <li style={{marginRight: "20px", display: "inline"}}><a href=""><i className="fa fa-instagram" ></i></a></li>
            </ul>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-grid-container">
          <p className="footer-info-item">&copy; Callum Fortune 2022</p>
          <p className="footer-info-item"><a href="/">GitHub</a></p>
          <p className="footer-info-item"><a href="/">callumfortune03@outlook.com</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
