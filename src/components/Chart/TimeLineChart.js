import React from 'react';
import 'react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,  
} from 'react-vis';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class TimeLineChart extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		const {data, width, height, min_y, max_y, num_ticks, y_title, x_title, time_type} = this.props
		return(
			<Container>
				<Row>
					<Col>
						<XYPlot xType="time" yDomain={[min_y, max_y]} width={width} height={height} style={{}}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <XAxis
                title={x_title}
                style={{
                  line: {stroke: '#ADDDE1'},
                  ticks: {stroke: '#ADDDE1'},
                  text: {stroke: 'none', fill: '##0084b4', fontWeight: 600}
                }}
                tickFormat={function tickFormat(d){
                  const date = new Date(d)
                  if (time_type === 'daily'){
                    return date.toISOString().substr(11, 5)
                  } else if (time_type === 'weekly'){
                    return date.toISOString().substr(5, 5)
                  } else {
                    return date.toISOString()
                  }
                  
                 }}
                tickTotal = {num_ticks}

              />
              <YAxis 
                title={y_title}
                style={{
                  line: {stroke: '#ADDDE1'},
                  ticks: {stroke: '#ADDDE1'},
                  text: {stroke: 'none', fill: '#0084b4', fontWeight: 600},
                }}

              />
              <LineSeries
                className="third-series"
                //curve={'curveMonotoneX'}
                data={data}
                color="#0084b4"
              /> 
            </XYPlot>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default TimeLineChart;
