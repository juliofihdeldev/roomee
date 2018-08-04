import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const Footer = () => (
  <footer className="footer has-text-centered heading is-6 has-background-grey">
    <div className="columns">
      <div className="column">
        <div className="has-text-grey-light has-text-weight-bold is-size-6">
          Company
        </div>
        <div className="has-text-white-bis has-text-weight-semibold is-size-7">  
          <ul> Blog </ul>
          <ul> Status </ul>
          <ul> Contact Us </ul>
          <ul> @roomeeproject </ul>
        </div>
      </div>
      <div className="column">
        <div className="has-text-grey-light has-text-weight-bold is-size-6">
          Support
        </div>
        <div className="has-text-white-bis has-text-weight-semibold is-size-7">  
          <ul>Trouble Shooting</ul>
          <ul>Common Questions</ul>
          <ul>Report a Bug</ul>
          <ul>Get Help</ul>
        </div>
      </div>
      <div className="column">
        <div className="has-text-grey-light has-text-weight-bold is-size-6">
          Connect
        </div>  
          <ul><i class="fab fa-facebook-square icon is-medium"></i></ul>
          <ul><i class="fab fa-twitter icon is-medium"></i></ul>
          <ul><i class="fab fa-instagram icon is-medium"></i></ul>
          <ul><i class="fab fa-google icon is-medium"></i></ul>
      </div>
    </div>
    
  </footer>
);

export default Footer;
    // <footer className="footer has-text-centered heading is-6">
    //   by the roomee project
    // </footer>