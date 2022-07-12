import React from 'react';
import './button.css';

function Button(props)  {

    const {type, text}  = props;

    return (
        <a href="#" className={`generic-button ${type}`}>{text}</a>
    );
}

export default Button;