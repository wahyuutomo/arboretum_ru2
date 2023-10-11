import React from 'react';
import './Footer.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColoredLine from '../../components/Common/ColoredLine.js'
// import ListGroup from 'react-bootstrap/ListGroup';


class Footer extends React.Component{
	render(){
		return(
		  <div>
        <Row style={{paddingTop: 30}}>
          <Col>
            <ColoredLine/>
          </Col>
        </Row>
        <Row style={{paddingTop: 20, paddingLeft: 30, paddingBottom: 10, height: 200, background: '#fff'}}>
          <Col>
            {/*<h5>Websites</h5>
            <ListGroup variant="flush">
              <ListGroup.Item><a href="https://arboretumgambut.com">Arboretum Gambut</a></ListGroup.Item>
              <ListGroup.Item><a href="https://sekolahcintagambut.com">Sekolah Cinta Gambut</a></ListGroup.Item>
            </ListGroup>*/}
            <h5>Contact Us</h5>
            Address: <br></br>Sungai Pakning, Bukit Batu, Bengkalis Regency, Riau 28761
          </Col>
          <Col></Col>
          <Col>
            {/*<h5>Contact Us</h5>
            Address: <br></br>Sungai Pakning, Bukit Batu, Bengkalis Regency, Riau 28761*/}
          </Col>
        </Row>
        <Row style={{paddingTop: 10}}>
          <Col>
            <ColoredLine/>
          </Col>
        </Row>
        <Row style={{paddingBottom: 40}}>
          <Col>
            © Copyright PT Pertamina(Persero) RU II Sungai Pakning 2020. All Rights Reserved.
          </Col>
        </Row>       
      </div>
		);
	}
}

export default Footer;