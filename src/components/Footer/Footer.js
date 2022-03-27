import React, { Component } from 'react';
//import { render } from '@testing-library/react';
import './Footer.css';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <footer className="footer">
                    <div className="footer-grid-container">
                    <p className="footer-info-item">&copy; Callum Fortune 2022</p>
                    <p className="footer-info-item"><a href="/">GitHub</a></p>
                    <p className="footer-info-item"><a href="/">callumfortune03@outlook.com</a></p>
                    </div>
                </footer>
        )
    }
}

export default Footer;