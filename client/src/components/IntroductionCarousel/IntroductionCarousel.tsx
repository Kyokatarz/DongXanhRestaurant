import React from 'react'
import { Carousel } from 'react-bootstrap'

import './IntroductionCarousel.scss'

const IntroductionCarousel = () => {
  return (
    <Carousel className="IntroductionCarousel" interval={60000}>
      <Carousel.Item>
        <img src="https://via.placeholder.com/1000x1000" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://via.placeholder.com/1000x1000" alt="Third slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://via.placeholder.com/1000x1000" alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default IntroductionCarousel