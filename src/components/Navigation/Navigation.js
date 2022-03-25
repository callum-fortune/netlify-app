import React, { Component } from 'react';
//import { render } from '@testing-library/react';
import './Navigation.css';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleOpen : false
        }
    }

    toggleNav = () => {
            return this.setState({toggleOpen: !this.state.toggleOpen});
    }

    render(){
        return (
            <span style={{display: 'block', padding: 10, position: 'absolute', zIndex: 1}}>
                <h1 className="nav-header">&lt;callumfortune.com /&gt;</h1>
                <ul className={`nav-links-container ${this.state.toggleOpen ? 'nav-mobile-open' : ''}`}>
                    <li className="nav-link"><a href="/">Projects</a></li>
                    <li className="nav-link"><a href="/">Photography</a></li>
                    <li className="nav-link"><a href="/">CV</a></li>
                    <li className="nav-link"><a href="/"><button>Log in</button></a></li>
                </ul>
                <button className="nav-toggle" onClick={this.toggleNav}>{this.state.toggleOpen ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}</button>
            </span>
        )
    }
}

export default Navigation;