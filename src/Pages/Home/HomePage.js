import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Three from "../../components/Three/Three.js"
import '../../App.css';
import "./HomePage.css";

class HomePage extends Component {

    constructor(props) {

        super(props);

    };

    render(){
        return (
            <span>
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
                <section className="page-section photography">
                    <div className="photography-text-container">
                        <h1>&lt;My Photographs&gt;</h1>
                        <h2>A short collection...</h2>
                    </div>
                    <div className="photo-thumbnails-grid-container" >
                        <div className="photo-thumbnail-container">
                            <div className="photo-thumbnail-img-container">
                                <img src="assets/images/IMG_1109.jpg" alt="" />
                            </div>
                            <div className="photo-thumbnail-desc-container" >
                                <span>
                                    <h1>Date:</h1><h2>25/03/22</h2>
                                </span>
                                <span>
                                    <h1>Location:</h1><h2>Home</h2>
                                </span>
                            </div>
                        </div>
                        <div className="photo-thumbnail-container">
                            <div className="photo-thumbnail-img-container">
                                <img src="assets/images/IMG_1701[1]-2.jpg" alt="" />
                            </div>
                            <div className="photo-thumbnail-desc-container" >
                                <span>
                                    <h1>Date:</h1><h2>25/03/22</h2>
                                </span>
                                <span>
                                    <h1>Location:</h1><h2>Home</h2>
                                </span>
                            </div>
                        </div>
                        <div className="photo-thumbnail-container">
                            <div className="photo-thumbnail-img-container">
                                <img src="assets/images/IMG_1773.jpg" alt="" />
                            </div>
                            <div className="photo-thumbnail-desc-container" >
                                <span>
                                    <h1>Date:</h1><h2>25/03/22</h2>
                                </span>
                                <span>
                                    <h1>Location:</h1><h2>Home</h2>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="photography-view-more-container">
                        <h1>Why stop here? Check out more photos on my photography page...</h1>
                        <Link to="photography"><button>Lets go</button></Link>
                    </div>
                </section>
                <section className="page-section projects">
                    <h1>&lt;Projects section&gt;</h1>
                </section>
                <Footer />
            </span>
        )
    }

}

export default HomePage;