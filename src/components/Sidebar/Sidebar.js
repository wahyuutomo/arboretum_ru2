import React from 'react';
import './Sidebar.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { NavLink } from "react-router-dom";
import ColoredLine from '../../components/Common/ColoredLine.js'

class Sidebar extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		const { key } = this.props
		return(
			<Container>
				<Row style={{height: 75, alignItems:'center' }}>
          <Col style={{color: '#ffffff', textAlign: 'center', fontSize: 24 }}>Crowd Analytics</Col>
        </Row>
        <Row style={{height: 20}}>
        	<Col>
        		<ColoredLine color='#414a4c' />
        	</Col>
        </Row>
        <Row>
          <Col style={{height: 100}}>
          	<NavLink to={'/home'} key={key}>
	            <Row>
	            	<Col style={{height: 100}}>
									<Row style={{height: 90, alignItems: 'center', justifyContent: 'center', padding: 3}}>
										<Row style={{height: 60, width: 300, alignItems: 'center', justifyContent: 'center', color:'#fff' }}>Option 1</Row>
									</Row>
									<Row style={{height: 90, alignItems: 'center', justifyContent: 'center', padding: 3}}>
										<Row style={{height: 60, width: 300, alignItems: 'center', justifyContent: 'center', color:'#fff' }}>Option 2</Row>
									</Row>
									<Row style={{height: 90, alignItems: 'center', justifyContent: 'center', padding: 3}}>
										<Row style={{height: 60, width: 300, alignItems: 'center', justifyContent: 'center', color:'#fff' }}>Option 3</Row>
									</Row>
									<Row style={{height: 90, alignItems: 'center', justifyContent: 'center', padding: 3}}>
										<Row style={{height: 60, width: 300, alignItems: 'center', justifyContent: 'center', color:'#fff' }}>Option 4</Row>
									</Row>
	            	</Col>
	            </Row>
            </NavLink>
          </Col>
        </Row>
			</Container>
		);
	}
}

export default Sidebar;