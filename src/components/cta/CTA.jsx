import React from 'react';
import './cta.css';
const email = 'southernbehaviorconsultants@gmail.com';
const phoneNumber = '+17068701331';
const CTA = () => (
  <div className="sbc__cta">
    <div className="sbc__cta-content">
      <p>Contact us to get started</p>      
      <a href={`mailto:${email}`}><h3>Take the first step.  Reach out today</h3> </a>
    </div>
    <div className="sbc__cta-btn">
      <button type="button">
        <a href={`mailto:${email}`}>Email Us</a>
      </button>
      <button type="button">
        <a href={`tel:${phoneNumber}`}>Call Us</a>
      </button>
    </div>
  </div>
);

export default CTA;
