import React from 'react';
import './Header.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo_pertamina from "../../assets/logo_pertamina.png"


class Header extends React.Component{
	render(){
		return(
		  <Row style={{height: 60, padding:10}}>
        <Col sm={8} md={8} lg={9} style={{background: '#fff'}}>
          <div style={{fontSize: 24, textAlignVertical:'center'}}>PT Kilang Pertamina Internasional RU II Sungai Pakning</div>
        </Col>
        <Col sm={4} md={4} lg={3} float="center" style={{background: '#fff', display: 'flex', justifyContent:'flex-end'}}><img alt="" src={logo_pertamina} height="55"/></Col>
      </Row>
		);
	}
}

export default Header;