import React from 'react';
import './Dashboard.css';
import 'react-vis/dist/style.css';

import CardX from '../../components/Card/Card';
import CardXHeader from '../../components/Card/CardHeader';
import CardXBody from '../../components/Card/CardBody';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ColoredLine from '../../components/Common/ColoredLine.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import TimeLineChart from '../../components/Chart/TimeLineChart.js'

import { connect } from "react-redux";
import { fetchPeopleCounter } from '../../redux/action';
import { fetchPeopleCount } from '../../api/api';

import logo_pertamina from "../../assets/logo_pertamina.png"

const MSEC_DAILY = 86400000;
const timestamp = new Date('July 9 2020').getTime();

var week_data = [
          {x: timestamp + MSEC_DAILY, y: 312},
          {x: timestamp + MSEC_DAILY * 2, y: 135},
          {x: timestamp + MSEC_DAILY * 3, y: 415},
          {x: timestamp + MSEC_DAILY * 4, y: 312}
        ]

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      isBusy: true,
      data:[]
    };
  }

  componentDidMount = () => {
    fetchPeopleCount().then(
      data => {
        this.setState((prevState, props) => {
          return {data: data, isBusy: false};
        })
        this.props.fetchPeopleCounter(data)
      }
    )
  }

  render(){
    const data = this.props.data.data

    console.log('props', this.props.data.data)
    return (
        <Container fluid style={{background: '#fff'}}>
          <Row>
            <Col sm={1} style={{background: 'linear-gradient(to bottom, #f9f9f9, #f9f9f9)', paddingTop: 10}}>
            </Col>
            <Col >
              <Row style={{height: 60, padding:10}}>
                <Col sm={8} md={8} lg={9} style={{background: '#fff'}}></Col>
                <Col sm={4} md={4} lg={3} float="center" style={{background: '#fff', display: 'flex', justifyContent:'flex-end'}}><img src={logo_pertamina} height="35"/></Col>
              </Row>
              <Row>
                <Col style={{padding: 0}}>
                  <img src="https://cdn.idntimes.com/content-images/community/2019/11/474b414c-3467-4a8b-b3a4-b0e013ce5c42-notebook3-1-ebddd88e8f326d68a31894cec8dc936c_600x400.jpg" 
                       alt="new"
                       height="400"
                       width="1100"/>
                </Col>
              </Row>
              <Row style={{height: 20, paddingBottom: 40}}><Col><ColoredLine/></Col></Row>
              <Row>
                <Col style={{}}>
                  {this.state.isBusy && <div>Loading</div>}
                  {!this.state.isBusy &&
                  <div>
                    <Card chart>
                      <Card.Header style={{background: 'linear-gradient(to right, #00b643, #006f02)', paddingTop: 10, color: '#fff'}}> 
                        <h5>Hourly Flow</h5>
                      </Card.Header>
                      <Card.Body>
                        aaaaa
                      </Card.Body>           
                    </Card>
                    <Card chart>
                      <Card.Header style={{background: 'linear-gradient(to right, #00b643, #006f02)', paddingTop: 10, color: '#fff'}}>
                        <h5>Daily Flow</h5>
                      </Card.Header>
                      <Card.Body>
                        <TimeLineChart 
                          data={week_data}
                          width={850}
                          height={300}
                          min_y={0}
                          max_y={500}
                          x_title='Time'
                          y_title='People Count'
                          time_type='weekly'
                          num_ticks={week_data.length}
                        />
                      </Card.Body>
                    </Card>
                  </div>
                  }
                </Col>
              </Row>
              <Row style={{height: 20}}><Col></Col></Row>
              <Row>
                <Col style={{}}>
                  <Card body>Table</Card>
                </Col>
              </Row>
              <Row style={{height: 20}}><Col></Col></Row>
              <Row>
                <Col>
                  <Card body className="text-center"><h2>Footer</h2></Card>  
                </Col>
              </Row>
            </Col>
            <Col sm={1} style={{background: 'linear-gradient(to bottom, #f9f9f9, #f9f9f9)', paddingTop: 10}}>
            </Col>
          </Row>
        </Container>
    );
  }
}

const mapStateToProps = state => {
    return { data: state.crowdInfoStore };
};

export default connect(
  mapStateToProps,
  { fetchPeopleCounter }
)(Dashboard);
