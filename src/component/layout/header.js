import React from 'react';
import CardImg from '../assets/images/card-c.png';
import { Navbar, Nav } from 'react-bootstrap';
import './style/header.scss';
const Header = () => {
  return (
    <Navbar expand="xl">
      <a className="name-logo" href="https://www.securiwiser.com/">
        <img src={CardImg} alt="logo" />
      </a>
      <div className="cat-name">
        <h2 className="cat">Certificates</h2>
        <div className="cat-pates">
          <p className="cat-n-1">Dashboard </p>
          <span> > </span>
          <p className="cat-n-2">Add Certificate</p>
        </div>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <div className="buttons">
          <a style={{ textDecoration: 'none' }} href="https://app.securiwiser.com/">
            <button className="sw-secondary-btn-1 sw-nav-links sw-font-weight-md btn-1">
              Login
            </button>
          </a>
          <a style={{ textDecoration: 'none' }} href="https://app.securiwiser.com/signup">
            <button className="sw-primary-btn sw-nav-links sw-font-weight-md btn-2">
              Get Started - It´s free
            </button>
          </a>
        </div> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
