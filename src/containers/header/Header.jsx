import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/imagetitle.png';
import './header.css';

const Header = () => (
  <div className="sbc__header section__padding" id="home">
    <div className="sbc__header-content">
      <h1 className="gradient__text">Supporting Your Journey One Milestone at a Time: Southern Behavior Consultants</h1>
      <p>SBC is dedicated to empowering individuals and families with the tools and support they need to thrive. </p> 
      <p>With a focus on evidence-based practices and individualized treatment plans, we strive to create a nurturing and positive environment that fosters growth and progress.</p>

      <div className="sbc__header-content__input">
        
      </div>

      
    </div>

    <div className="sbc__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
