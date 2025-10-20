import React from "react";
import "./DaerahAliran.css";
import "react-vis/dist/style.css";

import Card from "react-bootstrap/Card";

import Table from "react-bootstrap/Table";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ColoredLine from "../../components/Common/ColoredLine.js";

import Program from "../../components/Program/Program.js";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Gallery from "../../components/Gallery/Gallery.js";
import DataTable from "../../components/DataTable/DataTable.js";

import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  VerticalBarSeries,
  ChartLabel,
  LabelSeries,
} from "react-vis";

import { connect } from "react-redux";

import * as table_data from "./data.js";
import { copywrite } from "./data.js";

class DaerahAliran extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBusy: true,
      data: [],
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    console.log("props", this.props.data.data);
    return (
      <Container fluid style={{ background: "#fff" }}>
        <Row>
          <Col
            sm={1}
            style={{
              background: "linear-gradient(to bottom, #f9f9f9, #f9f9f9)",
              paddingTop: 10,
            }}
          ></Col>
          <Col>
            {/* HEADER */}
            <Header />

            {/* CAROUSEL */}
            <Gallery carousel={true} />

            <Row
              style={{ background: "#fff", paddingTop: 60, paddingBottom: 10 }}
            >
              <Col>
                <div>
                  <ColoredLine />
                </div>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <h2>{copywrite.main_title}</h2>
                </div>
              </Col>
            </Row>

            {/* DESCRIPTION */}
            <Row>
              <Col>
                <Card body style={{ border: "none" }}>
                  {copywrite.description.map((par) => {
                    return (
                      <div style={{ textAlign: "center" }}>
                        {par}
                        <br></br>
                        <br></br>
                      </div>
                    );
                  })}
                </Card>
              </Col>
            </Row>

            <Row
              style={{ background: "#fff", paddingTop: 60, paddingBottom: 10 }}
            >
              <Col>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <h3>{copywrite.flora_table_title}</h3>
                </div>
              </Col>
            </Row>

            {/* FLORA TABLE */}
            <DataTable
              data={table_data.flora}
              data_count={table_data.data_count.flora}
              years={[2023, 2024, 2025]}
            />

            {/* SPECIES COUNT */}
            {/* <Row style={{ paddingTop: 45 }}> */}
            {/*   <Col style={{ textAlign: "center" }}> */}
            {/*     <h5>Jumlah Spesies Flora di Konservasi Daerah Aliran</h5> */}
            {/*     <Table striped bordered hover size="sm"> */}
            {/*       <thead> */}
            {/*         <tr> */}
            {/*           <th style={{ textAlign: "center" }}>Tahun</th> */}
            {/*           <th style={{ textAlign: "center" }}>Jumlah Spesies</th> */}
            {/*         </tr> */}
            {/*       </thead> */}
            {/*       <tbody> */}
            {/*         {table_data.total_species.flora.map((listValue, index) => { */}
            {/*           return ( */}
            {/*             <tr key={index}> */}
            {/*               <td style={{ textAlign: "center" }}>{listValue.x}</td> */}
            {/*               <td style={{ textAlign: "center" }}>{listValue.y}</td> */}
            {/*             </tr> */}
            {/*           ); */}
            {/*         })} */}
            {/*       </tbody> */}
            {/*     </Table> */}
            {/*   </Col> */}
            {/*   <Col style={{ textAlign: "center" }}> */}
            {/*     <div> */}
            {/*       <h5>Perkembangan Biodiversitas</h5> */}
            {/*       <XYPlot */}
            {/*         className="clustered-stacked-bar-chart-example" */}
            {/*         xType="ordinal" */}
            {/*         yDomain={[0, 80]} */}
            {/*         height={400} */}
            {/*         width={400} */}
            {/*       > */}
            {/*         <XAxis /> */}
            {/*         <YAxis /> */}
            {/*         <ChartLabel */}
            {/*           text="" */}
            {/*           className="alt-x-label" */}
            {/*           includeMargin={false} */}
            {/*           xPercent={0.6} */}
            {/*           yPercent={1.12} */}
            {/*         /> */}
            {/*         <ChartLabel */}
            {/*           text="Jumlah Spesies" */}
            {/*           className="alt-y-label" */}
            {/*           includeMargin={false} */}
            {/*           xPercent={0.06} */}
            {/*           yPercent={0.06} */}
            {/*           style={{ */}
            {/*             transform: "rotate(-90)", */}
            {/*             textAnchor: "end", */}
            {/*           }} */}
            {/*         /> */}
            {/*         <VerticalBarSeries */}
            {/*           className="clustered-stacked-bar-chart-example" */}
            {/*           barWidth={0.5} */}
            {/*           color="#12939A" */}
            {/*           data={table_data.total_species.flora} */}
            {/*         /> */}
            {/*         <LabelSeries */}
            {/*           labelAnchorX="middle" */}
            {/*           data={table_data.total_species.flora} */}
            {/*           getLabel={(d) => d.y} */}
            {/*         /> */}
            {/*         <LineSeries */}
            {/*           color="#000" */}
            {/*           strokeStyle="dashed" */}
            {/*           data={table_data.total_species.flora} */}
            {/*         /> */}
            {/*       </XYPlot> */}
            {/*     </div> */}
            {/*   </Col> */}
            {/* </Row> */}

            {/* FLORA H INDEX */}
            <Row style={{ paddingTop: 30 }}>
              <Col style={{ textAlign: "center" }}>
                <h5>
                  Indeks Keanekaragaman Hayati Flora Konservasi Daerah Aliran
                </h5>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th></th>
                      <th style={{ textAlign: "center" }}>2023</th>
                      <th style={{ textAlign: "center" }}>2024</th>
                      <th style={{ textAlign: "center" }}>2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ textAlign: "center" }}>Indeks Kehati</td>
                      <td style={{ textAlign: "center" }}>3.21</td>
                      <td style={{ textAlign: "center" }}>3.5</td>
                      <td style={{ textAlign: "center" }}>3.52</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <div>
                  <h5>Index Keanekaragaman Hayati</h5>
                  <XYPlot
                    className="clustered-stacked-bar-chart-example"
                    xType="ordinal"
                    yDomain={[3.0, 4.0]}
                    height={400}
                    width={400}
                  >
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
                        transform: "rotate(-90)",
                        textAnchor: "end",
                      }}
                    />
                    <VerticalBarSeries
                      className="clustered-stacked-bar-chart-example"
                      barWidth={0.5}
                      color="#12939A"
                      data={[
                        { x: "2023", y: 3.21 },
                        { x: "2024", y: 3.5 },
                        { x: "2025", y: 3.52 },
                      ]}
                    />
                    <LabelSeries
                      labelAnchorX="middle"
                      data={[
                        { x: "2023", y: 3.21, yOffset: -25 },
                        { x: "2024", y: 3.5, yOffset: -25 },
                        { x: "2025", y: 3.52, yOffset: -25 },
                      ]}
                      getLabel={(d) => d.y}
                    />
                    <LineSeries
                      color="#000"
                      strokeStyle="dashed"
                      data={[
                        { x: "2023", y: 3.5, yOffset: -25 },
                        { x: "2024", y: 3.6, yOffset: -25 },
                        { x: "2025", y: 3.65, yOffset: -25 },
                      ]}
                    />
                  </XYPlot>
                </div>
              </Col>
            </Row>

            <Row
              style={{ background: "#fff", paddingTop: 60, paddingBottom: 10 }}
            >
              <Col>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <h3>{copywrite.bird_table_title}</h3>
                </div>
              </Col>
            </Row>

            {/* BIRDS TABLE */}
            <DataTable
              data={table_data.birds}
              data_count={table_data.data_count.birds}
              years={[2023, 2024, 2025]}
            />

            {/* BIRDS HRE */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={2} style={{ textAlign: "center" }}></Col>
              <Col style={{ textAlign: "center" }}>
                <h5>Indeks Kehati Burung Konservasi Daerah Aliran</h5>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }}>Tahun</th>
                      <th style={{ textAlign: "center" }}>H'</th>
                      <th style={{ textAlign: "center" }}>R</th>
                      <th style={{ textAlign: "center" }}>E</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table_data.hre_index.birds.map((listValue, index) => {
                      return (
                        <tr key={index}>
                          <td style={{ textAlign: "center" }}>{listValue.x}</td>
                          <td style={{ textAlign: "center" }}>{listValue.h}</td>
                          <td style={{ textAlign: "center" }}>{listValue.r}</td>
                          <td style={{ textAlign: "center" }}>{listValue.e}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col md={2} style={{ textAlign: "center" }}></Col>
            </Row>

            <Row
              style={{ background: "#fff", paddingTop: 60, paddingBottom: 10 }}
            >
              <Col>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <h3>{copywrite.mammals_table_title}</h3>
                </div>
              </Col>
            </Row>

            {/* MAMMALS TABLE */}
            <DataTable
              data={table_data.mammals}
              data_count={table_data.data_count.mammals}
              years={[2023, 2024, 2025]}
            />

            {/* MAMMALS HRE */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={2} style={{ textAlign: "center" }}></Col>
              <Col style={{ textAlign: "center" }}>
                <h5>Indeks Kehati Mamalia Konservasi Daerah Aliran</h5>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }}>Tahun</th>
                      <th style={{ textAlign: "center" }}>H'</th>
                      <th style={{ textAlign: "center" }}>R</th>
                      <th style={{ textAlign: "center" }}>E</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table_data.hre_index.mammals.map((listValue, index) => {
                      return (
                        <tr key={index}>
                          <td style={{ textAlign: "center" }}>{listValue.x}</td>
                          <td style={{ textAlign: "center" }}>{listValue.h}</td>
                          <td style={{ textAlign: "center" }}>{listValue.r}</td>
                          <td style={{ textAlign: "center" }}>{listValue.e}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col md={2} style={{ textAlign: "center" }}></Col>
            </Row>

            <Row
              style={{ background: "#fff", paddingTop: 60, paddingBottom: 10 }}
            >
              <Col>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <h3>{copywrite.herpetofauna_table_title}</h3>
                </div>
              </Col>
            </Row>

            {/* HERPETOFAUNA TABLE */}
            <DataTable
              data={table_data.herpetofauna}
              data_count={table_data.data_count.herpetofauna}
              years={[2023, 2024, 2025]}
            />

            {/* MAMMALS HRE */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={2} style={{ textAlign: "center" }}></Col>
              <Col style={{ textAlign: "center" }}>
                <h5>Indeks Kehati Herpetofauna Konservasi Daerah Aliran</h5>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }}>Tahun</th>
                      <th style={{ textAlign: "center" }}>H'</th>
                      <th style={{ textAlign: "center" }}>R</th>
                      <th style={{ textAlign: "center" }}>E</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table_data.hre_index.herpetofauna.map(
                      (listValue, index) => {
                        return (
                          <tr key={index}>
                            <td style={{ textAlign: "center" }}>
                              {listValue.x}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {listValue.h}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {listValue.r}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {listValue.e}
                            </td>
                          </tr>
                        );
                      },
                    )}
                  </tbody>
                </Table>
              </Col>
              <Col md={2} style={{ textAlign: "center" }}></Col>
            </Row>

            <Row
              style={{ background: "#fff", paddingTop: 60, paddingBottom: 10 }}
            >
              <Col>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <h3>{copywrite.dragonfly_table_title}</h3>
                </div>
              </Col>
            </Row>

            {/* DRAGONFLY TABLE */}
            <DataTable
              data={table_data.dragonfly}
              data_count={table_data.data_count.dragonfly}
              years={[2024, 2025]}
            />

            {/* DRAGONFLY HRE */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={2} style={{ textAlign: "center" }}></Col>
              <Col style={{ textAlign: "center" }}>
                <h5>Indeks Kehati Capung Konservasi Daerah Aliran</h5>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }}>Tahun</th>
                      <th style={{ textAlign: "center" }}>H'</th>
                      <th style={{ textAlign: "center" }}>R</th>
                      <th style={{ textAlign: "center" }}>E</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table_data.hre_index.dragonfly.map((listValue, index) => {
                      return (
                        <tr key={index}>
                          <td style={{ textAlign: "center" }}>{listValue.x}</td>
                          <td style={{ textAlign: "center" }}>{listValue.h}</td>
                          <td style={{ textAlign: "center" }}>{listValue.r}</td>
                          <td style={{ textAlign: "center" }}>{listValue.e}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col md={2} style={{ textAlign: "center" }}></Col>
            </Row>

            <Row
              style={{ background: "#fff", paddingTop: 60, paddingBottom: 10 }}
            >
              <Col>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <h3>{copywrite.butterfly_table_title}</h3>
                </div>
              </Col>
            </Row>

            {/* BUTTERFLY TABLE */}
            <DataTable
              data={table_data.butterfly}
              data_count={table_data.data_count.butterfly}
              years={[2024, 2025]}
            />

            {/* BUTTERFLY HRE */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={2} style={{ textAlign: "center" }}></Col>
              <Col style={{ textAlign: "center" }}>
                <h5>Indeks Kehati Kupu-kupu Konservasi Daerah Aliran</h5>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }}>Tahun</th>
                      <th style={{ textAlign: "center" }}>H'</th>
                      <th style={{ textAlign: "center" }}>R</th>
                      <th style={{ textAlign: "center" }}>E</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table_data.hre_index.butterfly.map((listValue, index) => {
                      return (
                        <tr key={index}>
                          <td style={{ textAlign: "center" }}>{listValue.x}</td>
                          <td style={{ textAlign: "center" }}>{listValue.h}</td>
                          <td style={{ textAlign: "center" }}>{listValue.r}</td>
                          <td style={{ textAlign: "center" }}>{listValue.e}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col md={2} style={{ textAlign: "center" }}></Col>
            </Row>
            <Row
              style={{ background: "#fff", paddingTop: 30, paddingBottom: 10 }}
            >
              <Col>
                <div>
                  <ColoredLine />
                </div>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <h3>Progam</h3>
                </div>
              </Col>
            </Row>

            {/* PROGRAM CARDS */}
            {<Program history={this.props.history} />}

            {/* FOOTER */}
            <Footer />
          </Col>
          <Col
            sm={1}
            style={{
              background: "linear-gradient(to left, #f9f9f9, #f9f9f9)",
              paddingTop: 10,
            }}
          ></Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.crowdInfoStore };
};

export default connect(mapStateToProps)(DaerahAliran);
