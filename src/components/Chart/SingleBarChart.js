import React from 'react';
import 'react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  VerticalBarSeries,
  ChartLabel,
  LabelSeries,
} from 'react-vis';

class SingleBarChart extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		const {data, line, width, height, min_y, max_y, y_title, x_title} = this.props
		return(
			<XYPlot 
        className="clustered-stacked-bar-chart-example"
        xType="ordinal"
        yDomain={[min_y, max_y]}
        height={height} 
        width={width}>
        <XAxis />
        <YAxis />
        <ChartLabel
          text={x_title}
          className="alt-x-label"
          includeMargin={false}
          xPercent={0.6}
          yPercent={1.12}
        />
        <ChartLabel
          text={y_title}
          className="alt-y-label"
          includeMargin={false}
          xPercent={0.06}
          yPercent={0.06}
          style={{
            transform: 'rotate(-90)',
            textAnchor: 'end'
          }}
        />
        <VerticalBarSeries
          className="clustered-stacked-bar-chart-example"
          barWidth={0.5}
          color="#12939A"
          data={data}
        />
        <LabelSeries
          labelAnchorX='middle'
          data={data} 
          getLabel={d => d.y}/>
        { line ? (
            <LineSeries
              color="#000"
              strokeStyle='dashed'
              data={line} 
            />
          ) : null}
      </XYPlot>
		);
	}
}

export default SingleBarChart;
