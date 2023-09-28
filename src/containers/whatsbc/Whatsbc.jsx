import React from 'react';
import Feature from '../../components/feature/Feature';
import Slide from '../../components/slide/Slide';
import {Link} from "react-router-dom";
import './whatsbc.css';


const Whatsbc = () => (
  <div className="sbc__whatsbc section__margin" id="wsbc">
    <div className="sbc__whatsbc-heading">
      <h1 className="gradient__text">Who We Are</h1>
    </div>
    <div className="sbc__whatsbc-feature">
      <Feature title= "ABA Done Right" text="SBC provides Applied Behavior Analysis (ABA) therapy and behavior intervention for clients aged two to eighteen in Gwinnett, Hall, Forsyth, Dawson, Barrow, and nearby Georgia counties. Over 90% of our clients start at our clinic, achieve social skills with peers, and smoothly transition to home and community settings. We are dedicated to fostering growth, ensuring personalized care, and creating a brighter future for every child we serve." />
    </div>

    <Slide/>
    
    <div className="sbc__whatsbc-heading">
      <h1 className="gradient__text">Why We Work</h1>
      {/*<p><Link to="/team">Meet the team that makes it happen </Link></p>*/}
    </div>
    <div className="sbc__whatsbc-container">
      <Feature title="Fun and Engaging" text="We make sure therapy is challenging, fun,and encourages enthusiastic participation." />
      <Feature title="Personalized" text="At SBC, we understand that every individual is unique, and we believe in tailoring our interventions to suit the specific needs of each child. " />
      <Feature title="State of the Art" text=" Our state-of-the-art clinics offers a safe and welcoming space for your child to learn and develop essential skills in communication, social interaction, behavior management, and more." />
    </div>

  </div>
);

export default Whatsbc;
