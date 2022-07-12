import React from 'react';
import './button.css';

import { Link } from "react-router-dom";

function Button(props)  {

    const {type, text, link_to}  = props;

    return (
        <Link to={`${link_to}`} className={`generic-button ${type}`}>{text}</Link>
    );
}

export default Button;