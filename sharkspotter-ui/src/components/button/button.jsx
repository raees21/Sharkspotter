import React from "react";
import "./button.css";

import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Button(props) {
  const { type, text, link_to, auth } = props;
  const { isAuthenticated, loginWithPopup, logout } = useAuth0();

  if (auth) {
    
    return isAuthenticated ? (
      <a
        onClick={() => logout({ returnTo: window.location.origin })}
        className={`generic-button ${type}`}
      >
        Log out
      </a>
    ) : (
      <a
        onClick={() => loginWithPopup()}
        className={`generic-button ${type}`}
      >
        Report a sighting
      </a>
    );
  } else {
    return (
      <Link to={`${link_to}`} className={`generic-button ${type}`}>
        {text}
      </Link>
    );
  }
}

export default Button;
