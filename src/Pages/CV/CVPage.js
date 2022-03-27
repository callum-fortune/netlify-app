import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import "./CVPage.css";

class CVPage extends Component {

    constructor(props) {

        super(props);

    }

    render() {
        return (
            <div>
                <Navigation />
                <Footer />
            </div>
        )
    }

}

export default CVPage;