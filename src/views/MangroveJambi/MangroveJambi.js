import React from 'react';
import './MangroveJambi.css';
import 'react-vis/dist/style.css';

import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ColoredLine from '../../components/Common/ColoredLine.js'

import Program from '../../components/Program/Program.js'
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Gallery from '../../components/Gallery/Gallery.js'
import DataTable from '../../components/DataTable/DataTable.js'


import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  ChartLabel,
  LabelSeries,
  DiscreteColorLegend
} from 'react-vis';

import { connect } from "react-redux";

import * as table_data from "./data.js"
import { copywrite } from "./data.js"


class MangroveJambi extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      isBusy: true,
      data:[]
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  render(){
    console.log('props', this.props.data.data)
    return (
        <Container fluid style={{background: '#fff'}}>
          <Row>
            <Col sm={1} style={{background: 'linear-gradient(to bottom, #f9f9f9, #f9f9f9)', paddingTop: 10}}>
            </Col>
            <Col >
              {/* HEADER */}
              <Header />

              {/* CAROUSEL */}
              <Gallery carousel={true} />

              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div>
                    <ColoredLine/>
                  </div>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h2>{copywrite.main_title}</h2>
                  </div>
                </Col>
              </Row>

              {/* DESCRIPTION */}
              <Row>
                <Col>
                  <Card body style={{border: 'none'}}>
                    {copywrite.description.map((par) => {
                      return (
                        <div style={{textAlign: 'center'}}>{par}<br></br><br></br></div>
                      );
                    })}
                  </Card>
                </Col>
              </Row>

              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>{copywrite.flora_table_title}</h3>
                  </div>
                </Col>
              </Row>

              {/* FLORA TABLE */}
              <DataTable data={table_data.flora} data_count={table_data.data_count.flora} years={[2022,2023]}/>

              {/* FLORA H INDEX */}
              <Row style={{paddingTop: 30}}>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
                <Col md={8} style={{textAlign: 'center'}}>
                  <div style={{textAlign: 'center', justifyContent: 'center'}}>
                    <h5>Indeks Kehati (H') Flora Mangrove Pangkalan Jambi</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[2.1, 3]}
                      height={400} 
                      width={600}>
                      <XAxis />
                      <YAxis />
                      <ChartLabel
                        text=""
                        className="alt-x-label"
                        includeMargin={false}
                        xPercent={0.6}
                        yPercent={1.12}
                      />
                      <ChartLabel
                        text="Indeks Kehati"
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
                        data={table_data.h_index.flora}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={table_data.h_index.flora} 
                        getLabel={d => d.y}/>
                    </XYPlot>
                  </div>
                </Col>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
              </Row>

              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>{copywrite.bird_table_title}</h3>
                  </div>
                </Col>
              </Row>

              {/* BIRDS TABLE */}
              <DataTable data={table_data.birds} data_count={table_data.data_count.birds} years={[2022,2023]}/>

              {/* BIRDS H INDEX */}
              <Row style={{paddingTop: 45}}>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
                <Col md={8} style={{textAlign: 'center'}}>
                  <div style={{justifyContent: 'center'}}>
                    <h5>Diagram Perbandingan Indeks Ekologi Burung Tahun 2021 - 2023 di Mangrove Education Center Pangkalan Jambi: Indeks Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E)</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 7.0]}
                      height={400} 
                      width={800}>
                      <XAxis />
                      <YAxis />
                      <ChartLabel
                        text=""
                        className="alt-x-label"
                        includeMargin={false}
                        xPercent={0.6}
                        yPercent={1.12}
                      />
                      <ChartLabel
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
                        color="#c68240"
                        data={[
                          {x: 'H\'', y: 2.86},
                          {x: 'R', y: 4.48},
                          {x: 'E', y: 0.74},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 2.86, yOffset: -25, xOffset: -45},
                          {x: 'R', y: 4.48, yOffset: -25, xOffset: -45},
                          {x: 'E', y: 0.89, yOffset: -25, xOffset: -45},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#61351c"
                        data={[
                          {x: 'H\'', y: 3.17},
                          {x: 'R', y: 5.89},
                          {x: 'E', y: 0.93},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 3.17, yOffset: -25, xOffset: 0},
                          {x: 'R', y: 5.89, yOffset: -25, xOffset: 0},
                          {x: 'E', y: 0.93, yOffset: -25, xOffset: 0},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#3e6a00"
                        data={[
                          {x: 'H\'', y: 3.17},
                          {x: 'R', y: 6.3},
                          {x: 'E', y: 0.92},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 3.17, yOffset: -25, xOffset: 35},
                          {x: 'R', y: 6.3, yOffset: -25, xOffset: 35},
                          {x: 'E', y: 0.92, yOffset: -25, xOffset: 35},
                        ]} 
                        getLabel={d => d.y}/>
                      
                    </XYPlot>
                    <DiscreteColorLegend
                      width={180}
                      style={{position: 'absolute', left: '650px', top: '150px'}}
                      items={[
                        {title: "2021", color: "#c68240", strokeWidth: "12"},
                        {title: "2022", color: "#61351c", strokeWidth: "12"},
                        {title: "2023", color: "#3e6a00", strokeWidth: "12"}
                      ]}
                    />
                  </div>
                </Col>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
              </Row>


              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>{copywrite.mammals_table_title}</h3>
                  </div>
                </Col>
              </Row>

              {/* MAMMALS TABLE */}
              <DataTable data={table_data.mammals} data_count={table_data.data_count.mammals} years={[2022,2023]}/>

              {/* MAMMALS H INDEX */}
              <Row style={{paddingTop: 45}}>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
                <Col md={8} style={{textAlign: 'center'}}>
                  <div>
                    <h5>Diagram Perbandingan Indeks Ekologi Mamalia Tahun 2021 - 2023 di Mangrove Education Center Pangkalan Jambi: Indeks Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E)</h5>

                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 2.4]}
                      height={400} 
                      width={800}>
                      <XAxis />
                      <YAxis />
                      <ChartLabel
                        text=""
                        className="alt-x-label"
                        includeMargin={false}
                        xPercent={0.6}
                        yPercent={1.12}
                      />
                      <ChartLabel
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
                        color="#c68240"
                        data={[
                          {x: 'H\'', y: 1.12},
                          {x: 'R', y: 1.04},
                          {x: 'E', y: 0.89},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.12, yOffset: -25, xOffset: -45},
                          {x: 'R', y: 1.04, yOffset: -25, xOffset: -45},
                          {x: 'E', y: 0.81, yOffset: -25, xOffset: -45},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#61351c"
                        data={[
                          {x: 'H\'', y: 1.27},
                          {x: 'R', y: 1.37},
                          {x: 'E', y: 0.92},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.27, yOffset: -25, xOffset: 0},
                          {x: 'R', y: 1.37, yOffset: -25, xOffset: 0},
                          {x: 'E', y: 0.92, yOffset: -25, xOffset: 0},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#3e6a00"
                        data={[
                          {x: 'H\'', y: 1.3},
                          {x: 'R', y: 0.97},
                          {x: 'E', y: 0.94},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.3, yOffset: -25, xOffset: 45},
                          {x: 'R', y: 0.97, yOffset: -25, xOffset: 45},
                          {x: 'E', y: 0.94, yOffset: -25, xOffset: 45},
                        ]} 
                        getLabel={d => d.y}/>
                    </XYPlot>
                    <DiscreteColorLegend
                      width={180}
                      orientation="vertical"
                      style={{position: 'absolute', left: '700px', top: '150px'}}
                      items={[
                        {title: "2021", color: "#c68240", strokeWidth: "12"},
                        {title: "2022", color: "#61351c", strokeWidth: "12"},
                        {title: "2023", color: "#3e6a00", strokeWidth: "12"}
                      ]}
                    />
                  </div>
                </Col>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
              </Row>

              {/* HERPETOFAUNA TABLE */}
              <DataTable data={table_data.herpetofauna} data_count={table_data.data_count.herpetofauna} years={[2022,2023]}/>

              {/* HERPETOFAUNA H INDEX */}
              <Row style={{paddingTop: 45}}>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
                <Col md={8} style={{textAlign: 'center'}}>
                  <div>
                    <h5>Diagram Indeks Ekologi Herpetofauna Tahun 2022 dan 2023 di Mangrove Education Center Pangkalan Jambi: Indeks Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E)</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 3.0]}
                      height={400} 
                      width={800}>
                      <XAxis />
                      <YAxis />
                      <ChartLabel
                        text=""
                        className="alt-x-label"
                        includeMargin={false}
                        xPercent={0.6}
                        yPercent={1.12}
                      />
                      <ChartLabel
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
                        color="#61351c"
                        data={[
                          {x: 'H\'', y: 1.2},
                          {x: 'R', y: 2.06},
                          {x: 'E', y: 0.74},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.2, yOffset: -25, xOffset: -25},
                          {x: 'R', y: 2.06, yOffset: -25, xOffset: -25},
                          {x: 'E', y: 0.81, yOffset: -25, xOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#3e6a00"
                        data={[
                          {x: 'H\'', y: 1.26},
                          {x: 'R', y: 1.41},
                          {x: 'E', y: 0.78},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.26, yOffset: -25, xOffset: 25},
                          {x: 'R', y: 1.41, yOffset: -25, xOffset: 25},
                          {x: 'E', y: 0.78, yOffset: -25, xOffset: 25},
                        ]} 
                        getLabel={d => d.y}/>
                      <DiscreteColorLegend
                      width={180}
                      style={{position: 'absolute', left: '650px', top: '100px'}}
                      items={[
                        {title: "2022", color: "#61351c", strokeWidth: "12"},
                        {title: "2023", color: "#3e6a00", strokeWidth: "12"}
                      ]}
                    />
                    </XYPlot>
                  </div>
                </Col>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
              </Row>

              <Row style={{background: '#fff', paddingTop: 30, paddingBottom: 10}}>
                <Col>
                  <div>
                    <ColoredLine/>
                  </div>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Progam</h3>
                  </div>
                </Col>
              </Row>

              {/* PROGRAM CARDS */}
              {<Program history={this.props.history}/>}

              {/* FOOTER */}
              <Footer />
            </Col>
            <Col sm={1} style={{background: 'linear-gradient(to left, #f9f9f9, #f9f9f9)', paddingTop: 10}}>
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
)(MangroveJambi);
