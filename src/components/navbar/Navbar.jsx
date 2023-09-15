import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo4.png';
import {BrowserRouter as Router,Route,Switch,Link, Redirect} from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sbc__navbar">
      <div className="sbc__navbar-links">
        <div className="sbc__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="sbc__navbar-links_container">
          <p> <Link to="/">Home</Link> </p>
          <p> <Link to="/about">About Us</Link> </p>
          <p> <Link to="/team">The Team</Link> </p>
          <p> <Link to="/clients">Potential Clients</Link> </p>
          <p> <Link to="/careers">Careers</Link> </p>
          
        </div>
      </div>
      <div className="sbc__navbar-sign">
      
      </div>
      <div className="sbc__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="darkblue" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="darkblue" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="sbc__navbar-menu_container scale-up-center">
          <div className="sbc__navbar-menu_container-links">
            <p> <Link to="/">Home</Link> </p>
            <p> <Link to="/about">About Us</Link> </p>
            <p> <Link to="/team">The Team</Link> </p>
            <p> <Link to="/clients">Potential Clients</Link> </p>
           <p> <Link to="/careers">Careers</Link> </p>
          </div>
        
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
