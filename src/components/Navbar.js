import React, { useState } from "react";
import logo from './../img/logo.svg'
import search from './../img/search.svg'
import icon from './../img/Icon.svg'
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className="Navbar">
      <img src={logo} alt="Logo" className="nav-logo" />


      <div className={`nav-items ${isOpen && "open"}`}>
        
      <a className="nav-item">Home</a>
        <a className="nav-item" >Courses</a>
        <a className="nav-item" >Contact us</a>
        <div className="searchbox-text">
          <div className="search-box">
            <img src={search} alt="search" className="search" />
            <input className="search-input" placeholder="What do you want to learn?" />
          </div>
            <div className="explore-more">
            <p className="explore-more-text">Explore</p>
            <img src={icon} alt="down-icon" className="explore-more-icon" />
            </div>
          </div>
        <a className="nav-item">Sign in </a>
        <a className="button box-account">Create an account</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </nav>
    <div className="bar-line"></div>
    </>
  );
};

export default Navbar;
