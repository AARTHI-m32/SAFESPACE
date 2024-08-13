
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Image = () => {
  return (
    <div className="about1">
    <Carousel interval={2000} className='carosel'>
      <Carousel.Item className='caroselholder'>
        <img
          className="caroselimage"
          src="./images/carosel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Flood</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='caroselholder'>
        <img
          className="caroselimage"
          src="./images/carosel2.webp"
          alt="Second slide"
        />
        <Carousel.Caption>         
          <p>Volcanic Eruption</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='caroselholder'>
        <img
          className="caroselimage"
          src="./images/carosel3.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>Cyclone</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='caroselholder'>
        <img
          className="caroselimage"
          src="./images/carosel4.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>Thunder & Lightning</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='caroselholder'>
        <img
          className="caroselimage"
          src="./images/carosel5.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p>Forest Fire</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <p className="caroselp">
   <span>Welcome to SAFESPACE!!!</span><br/> <br/>

        Disasters, both natural and human-made,pose significant challenges to communities
       worldwide. Natural disasters, such as earthquakes floods, and hurricanes, often strike with little
warning, leaving devastation in their wake. On the other hand, human-made disasters, including
industrial accidents, terrorism, and large-scale environmental degradation, can disrupt lives and 
 economies in profound ways. At SafeSpace, our mission is to provide timely and accurate 
 information to help individuals and communities prepare for, respond to, and recover from these events.
 By fostering collaboration and resource sharing,we aim to build resilient communities capable of overcoming 
 any disaster that comes their way.


    </p>
    </div>
  );
};

export default Image;
