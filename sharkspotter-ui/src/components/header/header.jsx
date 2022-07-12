<<<<<<< Updated upstream
import React from 'react';
import './header.css';
import Button from '../button/button';


import "./header.css";

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="App-header">
            <h1 className="logo">
                <Link to="/" className="logo-link">Sharkspotter</Link>
            </h1>
            <section className="button-group">
                <Button link_to="/testing" type="primary" text="Report a Sighting" />
            </section>
        </header>
    );
}

=======
import React from 'react';
import './header.css';
import Button from '../button/button';

import "./header.css";

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="App-header">
            <h1 className="logo">
                <Link to="/" className="logo-link">Sharkspotter</Link>
            </h1>
            <section className="button-group">
                <Button auth={true} link_to="/testing" type="primary" text="Report a Sighting" />
            </section>
        </header>
    );
}

>>>>>>> Stashed changes
export default Header;