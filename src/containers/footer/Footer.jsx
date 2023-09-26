import React from 'react';
import sbcLogo from '../../assets/logo4.png';
import './footer.css';

const Footer = () => (
  <div className="sbc__footer section__padding">
    <div className="sbc__footer-heading">
      <h1 className="gradient__text">Southern Behavior Consultants</h1>
    </div>

    <div className="sbc__footer-links">
      <div className="sbc__footer-links_logo">
        <img src={sbcLogo} alt="sbc_logo" />
        <p> Monday- Friday 8-5:30 <br /> Sat 8- 12 <br/> Sun Closed</p>
      </div>
      <div className="sbc__footer-links_div">
        <h4>General Contact Information</h4>
        <p>OFFICE (706) 870-1331</p>
        <p>FAX   (678) 765-6971</p>
        <p>EMAIL southernbehaviorconsultants@gmail.com</p>
        
      </div>
      <div className="sbc__footer-links_div">
        <h4><a href="https://www.google.com/maps/place/Southern+Behavior+Consultants/@34.0906916,-84.0155686,17z/data=!3m1!4b1!4m6!3m5!1s0x88f59360a632d0b1:0xedfdd16663e6e953!8m2!3d34.0906872!4d-84.0129883!16s%2Fg%2F11rc7s2glm?entry=ttu"> </a>Buford, Georgia Location</h4>
        <p>1384 Buford Business Blvd. </p>
        <p>Suite B500 </p>
        <p>Buford, GA 30518</p>
      </div>
      <div className="sbc__footer-links_div">
        <h4>Gainesville, Georgia Location</h4>
        <p>447 Bradford St. NW </p>
        <p>Gainesville, GA 30501</p>
      </div>
    </div>

    <div className="sbc__footer-copyright">
      <p>@2023 SOUTHERN BEHAVIOR CONSULTANTS  All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
