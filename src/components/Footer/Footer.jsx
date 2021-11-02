import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-icon">
          <a href="/#">
            <img src="./assets/icons/facebook_icon.svg" alt="Ir a Facebook" />
          </a>
        </li>
        <li className="footer-icon">
          <a href="/#">
            <img src="./assets/icons/linkedin_icon.svg" alt="Ir a Linkedin" />
          </a>
        </li>
        <li className="footer-icon">
          <a href="/#">
            <img src="./assets/icons/instagram_icon.svg" alt="Ir a Instagram" />
          </a>
        </li>
        <li className="footer-icon">
          <a href="/#">
            <img src="./assets/icons/twitter_icon.svg" alt="Ir a Twitter" />
          </a>
        </li>
      </ul>
      <div className="logo-container">
        <Link to={`/`}>
          <img src="./assets/images/logo.svg" alt="Logo Toroto" />
        </Link>
      </div>
    </div>
  );
};
