import React from 'react';
import './Gallery.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel from 'react-bootstrap/Carousel';

import img2 from "../../assets/2.jpeg"
import img3 from "../../assets/3.jpeg"
import img14 from "../../assets/14.jpeg"

class Gallery extends React.Component{
	render(){
		return(
		  <Row>
            <Col style={{padding: 0}}>    
              <Carousel style={{height: 400}}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img2}
                    alt="First slide"
                    height="400"
                  />
                  <Carousel.Caption>
                    <h3> </h3>
                    <p> </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img14}
                    alt="Third slide"
                    height="400"
                  />

                  <Carousel.Caption>
                    <h3> </h3>
                    <p> </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    height="400"
                  />

                  <Carousel.Caption>
                    <h3> </h3>
                    <p> </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col> 
          </Row>
		);
	}
}

export default Gallery;