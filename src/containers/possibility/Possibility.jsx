import React from 'react';
import possibilityImage from '../../assets/rbt.webp';
import './possibility.css';

const Possibility = () => (
  <div className="sbc__possibility section__padding" id="possibility">
    <div className="sbc__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="sbc__possibility-content">
    <a href="https://www.linkedin.com/company/southernbehaviorconsultants" target="_blank" rel="noopener noreferrer"><h4>Visit Us On LinkedIn</h4></a>
      <h1 className="gradient__text">We Are Hiring</h1>
      <p>Are you a dedicated Board Certified Behavior Analyst or Registered Behavior Technician whose passion is to provide high quality, results-oriented behavior intervention and therapy to children with Autism Spectrum Disorder? If your answer is yes, Southern Behavior Consultants is looking for you!  BCBAs and RBTs who are motivated to change the lives of the clients they serve are encouraged to apply! </p>
      <a href="https://www.indeed.com/cmp/Southern-Behavior-Consultants/about" target="_blank" rel="noopener noreferrer"><h4>Visit Us On Indeed</h4></a>
    </div>
  </div>
);

export default Possibility;
