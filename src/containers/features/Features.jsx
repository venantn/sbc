import React from 'react';
import Feature from '../../components/feature/Feature';
import CTA from '../../components/cta/CTA';
import possibilityImage from '../../assets/image.png';
import './features.css';

const featuresData = [
  {
    title: 'Comprehensive Skills Assessment',
    text: 'We want your child to reach their full potential. At SBC, our BCBAs assess your childs communication, behavior, social, and daily living skills to determine their functional level.',
  },
  {
    title: 'Indvidualized Treatment Plans',
    text: 'Using the information gained from skills assessments, our BCBAs will develop an individualized plan of care for your child. Our treatment plan will outline how we will help your child meet their goals.',
  },
  {
    title: 'Parents as Partners',
    text: 'At SBC, we know that you play a critical role in your childs growth. We will partner with you to discuss your childs therapy and progress and will meet with you for parent training sessions. Your insight is valuable to us, and we make it our goal to include you in our efforts to help your child thrive!',
  },
  {
    title: 'Insurance',
    text: 'We believe in making ABA therapy accessible and affordable for all families. Our team is dedicated to assisting you throughout the insurance process, from verifying benefits to submitting claims on your behalf. SBC accepts Medicaid, Peachstate, Amerigroup, & private insurances accompanied by KB Deeming Waiver.',
  },
];

const Features = () => (
  <div className='sbc_cta'>
   <div className="sbc__features section__padding" id="features">
      <div className="sbc__features-heading">
       <h1 className="gradient__text">We Are Accepting New Clients</h1>
       <img src={possibilityImage} alt="possibility" />
     </div>
     <div className="sbc__features-container">
       {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
       ))}
     </div>
   
  
    </div>
    <CTA/>
   </div>
  

);

export default Features;
