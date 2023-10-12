import React from 'react';
import './Gallery.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import img2 from "../../assets/2.jpeg"
import img3 from "../../assets/3.jpeg"
import img14 from "../../assets/14.jpeg"
import img6 from "../../assets/6.jpeg"
import img7 from "../../assets/7.jpeg"
import img8 from "../../assets/8.jpeg"
import img10 from "../../assets/10.jpeg"
import img11 from "../../assets/11.jpeg"
import img19 from "../../assets/19.jpeg"

class Gallery extends React.Component{
	render(){
    const { carousel } = this.props
    if (carousel) {
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
    } else {
      return(
        <Row style={{paddingTop: 30, alignItems: 'center', justifyContent: 'center'}}>
          <CardColumns style={{border: 'none'}}>
            <Card style={{width: 340}}>
              <Card.Img variant="top" 
                src={img11}
                width='300'
                height='400'
                />
            </Card>
            <Card style={{width: 340}}>
              <Card.Img variant="top" 
                src={img7}
                width='300'
                height='240'
                />
            </Card>
          </CardColumns>
          <CardColumns style={{border: 'none'}}>
            <Card style={{width: 340}}>
              <Card.Img variant="top" 
                src={img6}
                width='300'
                height='240'
                />
            </Card>
            <Card style={{width: 340}}>
              <Card.Img variant="top" 
                src={img10}
                width='300'
                height='400'
                />
            </Card>
          </CardColumns>
          <CardColumns style={{border: 'none'}}>
            <Card style={{width: 340}}>
              <Card.Img variant="top" 
                src={img8}
                width='300'
                height='400'
                />
            </Card>
            <Card style={{width: 340}}>
              <Card.Img variant="top" 
                src={img19}
                width='300'
                height='240'
                />
            </Card>
          </CardColumns>
        </Row>
      );
    }
	}
}

export default Gallery;