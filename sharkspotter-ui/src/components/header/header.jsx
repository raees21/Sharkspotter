import React from 'react';
import './header.css';

function Header()  {

    return (
        <header className="App-header">
            <h1 className="logo">Sharkspotter</h1>
            <section className="button-group">
                <a href="#" className="login-button">Login</a>
                <a href="#" className="register-button">Register</a>
            </section>
        </header>
    );
}

export default Header;