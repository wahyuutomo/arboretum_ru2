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
        <Container fluid style={{background: 'linear-gradient(to top, #ffffff, #eeeeee)'}}>
          <Row>
            <Col sm={3} style={{background: 'linear-gradient(to bottom, #232b2b, #232b2b)', paddingTop: 10}}>
              <Sidebar />
            </Col>
            <Col >
              <Row>
                <Col style={{padding: 30}}>
                  <div style={{color:'#999', fontSize: 20}}>Dashboard</div>
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
                        <TimeLineChart 
                          data={data}
                          width={850}
                          height={300}
                          min_y={0}
                          max_y={300}
                          x_title='Time'
                          y_title='People Count'
                          time_type='daily'
                        />
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
