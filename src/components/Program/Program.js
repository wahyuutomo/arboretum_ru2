import React from 'react';
import './Program.css';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from "../../assets/2.jpeg"
import img6 from "../../assets/6.jpeg"
import kda3 from "../../assets/kda3.jpeg"
import img9 from "../../assets/9.jpeg"
import poligowo3 from "../../assets/poligowo3.jpeg"

class Program extends React.Component{
	render(){
		return(
		<Row>
            <Col style={{background: '#fff'}}>
              <Card style={{borderWidth:0}} as="Button" onClick={()=>{this.props.history.push("/home")}}>
                <Card.Img variant="top" 
                  src={img6}
                  height='240'
                  />
                <Card.Body className="text-center">
                  <Card.Title className="text-center">Home</Card.Title>
                </Card.Body>
                
              </Card>
            </Col>
            <Col style={{background: '#fff'}}>
              <Card style={{borderWidth:0}} as="Button" onClick={()=>{this.props.history.push("/arboretum")}}>
                <Card.Img variant="top" 
                  src={img9}
                  height='240'
                  />
                <Card.Body className="text-center">
                  <Card.Title className="text-center">Arboretum Gambut</Card.Title>
                </Card.Body>
                
              </Card>
            </Col>
            <Col style={{background: '#fff'}}>
              <Card style={{borderWidth:0}} as="Button" onClick={()=>{this.props.history.push("/mangrove-pangkalan-jambi")}}>
                <Card.Img variant="top" 
                  src={img2}
                  height='240'
                  />
                <Card.Body className="text-center">
                  <Card.Title className="text-center">Mangrove Pangkalan Jambi</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{background: '#fff'}}>
              <Card style={{borderWidth:0}} as="Button" onClick={()=>{this.props.history.push("/poligowo")}}>
                <Card.Img variant="top" 
                  src={poligowo3}
                  height='240'
                  />
                <Card.Body className="text-center">
                  <Card.Title className="text-center">Penanaman Tanaman Kayu Khas Gambut Metode Poligowo</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{background: '#fff'}}>
              <Card style={{borderWidth:0}} as="Button" onClick={()=>{this.props.history.push("/konservasi-daerah-aliran")}}>
                <Card.Img variant="top" 
                  src={kda3}
                  height='240'
                  />
                <Card.Body className="text-center">
                  <Card.Title>Konservasi Daerah Aliran Sungai Dayang</Card.Title>
                </Card.Body>
                
              </Card>
            </Col>
         </Row>
		);
	}
}

export default Program;