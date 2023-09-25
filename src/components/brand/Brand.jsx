import React from 'react';

import './brand.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa';


const Brand = () => (
  <div className="sbc__brand section__padding">
       <div className="social-media-bar">
      <a href="https://www.facebook.com/people/Southern-Behavior-Consultants/100070150774485/" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.google.com/maps/place/Southern+Behavior+Consultants/@34.0906872,-84.0129883,15z/data=!4m6!3m5!1s0x88f59360a632d0b1:0xedfdd16663e6e953!8m2!3d34.0906872!4d-84.0129883!16s%2Fg%2F11rc7s2glm?entry=ttu" target="_blank" rel="noopener noreferrer">
        <FaGoogle/>
      </a>
      <a href="https://www.instagram.com/southernbehaviorconsultants/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>

    </div>
  </div>
);

export default Brand;
