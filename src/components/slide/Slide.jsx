

import './slide.css';
import { slide1, slide2, slide3, slide4, slide5 } from './imports';
import React, { Component } from 'react';

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [slide1, slide2, slide3, slide4, slide5],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.changeImg();
  }

  changeImg = () => {
    const { images, currentIndex } = this.state;
    this.setState({
      currentIndex: (currentIndex + 1) % images.length,
    });
    setTimeout(this.changeImg, 3000); // Change image every 3 seconds (3000 milliseconds)
  };

  render() {
    const { images, currentIndex } = this.state;

    return (
      <div className="sbc__slide-container">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
      </div>
    );
  }
}

export default Slide;
