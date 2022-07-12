import React from 'react';
import './header.css';
import Button from '../button/button';


import "./header.css";

function Header() {
    return (
        <header className="App-header">
            <h1 className="logo">Sharkspotter</h1>
            <section className="button-group">
                <Button link_to="/testing" type="primary" text="Report a Sighting" />
            </section>
        </header>
    );
}

export default Header;