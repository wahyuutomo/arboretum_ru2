import React from "react";
import "./Poligowo.css";
import "react-vis/dist/style.css";

import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ColoredLine from "../../components/Common/ColoredLine.js";

import Program from "../../components/Program/Program.js";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Gallery from "../../components/Gallery/Gallery.js";
import DataTable from "../../components/DataTable/DataTable.js";
import SingleBarChart from "../../components/Chart/SingleBarChart.js";

// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   VerticalBarSeries,
//   ChartLabel,
//   LabelSeries,
//   DiscreteColorLegend,
// } from "react-vis";

import { connect } from "react-redux";

import * as table_data from "./data.js";
import { copywrite } from "./data.js";

class Poligowo extends React.Component {
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
              years={[2021, 2022, 2023, 2024]}
            />

            {/* FLORA H INDEX */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={1} style={{ textAlign: "center" }}></Col>
              <Col md={5} style={{ textAlign: "center" }}>
                <div>
                  <h5>
                    Perbandingan Indeks Keanekaragaman H' Flora di Poligowo
                  </h5>
                  <SingleBarChart
                    data={table_data.h_index.flora}
                    width={500}
                    height={400}
                    min_y={1.0}
                    max_y={2.3}
                    y_title={"Index Kehati"}
                    x_title={""}
                  />
                </div>
              </Col>
              <Col md={5} style={{ textAlign: "center" }}>
                <div>
                  <h5>
                    Perbandingan Jumlah Flora di Poligowo Tahun 2021 - 2024
                  </h5>
                  <SingleBarChart
                    data={table_data.total_species.flora}
                    width={500}
                    height={400}
                    min_y={0}
                    max_y={1300}
                    y_title={"Jumlah"}
                    x_title={""}
                  />
                </div>
              </Col>
              <Col md={1} style={{ textAlign: "center" }}></Col>
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
              years={[2022, 2023, 2024]}
            />

            {/* BIRDS H INDEX */}
            {/* <Row style={{ paddingTop: 45 }}> */}
            {/*   <Col md={2} style={{ textAlign: "center" }}></Col> */}
            {/*   <Col md={8} style={{ textAlign: "center" }}> */}
            {/*     <div> */}
            {/*       <h5> */}
            {/*         Indeks Ekologi Burung di Poligowo: Indeks Keanekaragaman */}
            {/*         Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E) */}
            {/*       </h5> */}
            {/*       <XYPlot */}
            {/*         className="clustered-stacked-bar-chart-example" */}
            {/*         xType="ordinal" */}
            {/*         yDomain={[0, 6]} */}
            {/*         height={400} */}
            {/*         width={800} */}
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
            {/*           color="#61351c" */}
            {/*           data={[ */}
            {/*             { x: "H'", y: 2.96 }, */}
            {/*             { x: "R", y: 4.98 }, */}
            {/*             { x: "E", y: 0.91 }, */}
            {/*           ]} */}
            {/*         /> */}
            {/*         <LabelSeries */}
            {/*           labelAnchorX="middle" */}
            {/*           data={[ */}
            {/*             { x: "H'", y: 2.96, yOffset: -25, xOffset: -25 }, */}
            {/*             { x: "R", y: 4.98, yOffset: -25, xOffset: -25 }, */}
            {/*             { x: "E", y: 0.91, yOffset: -25, xOffset: -25 }, */}
            {/*           ]} */}
            {/*           getLabel={(d) => d.y} */}
            {/*         /> */}
            {/**/}
            {/*         <VerticalBarSeries */}
            {/*           className="clustered-stacked-bar-chart-example" */}
            {/*           barWidth={0.5} */}
            {/*           color="#3e6a00" */}
            {/*           data={[ */}
            {/*             { x: "H'", y: 2.98 }, */}
            {/*             { x: "R", y: 4.5 }, */}
            {/*             { x: "E", y: 0.96 }, */}
            {/*           ]} */}
            {/*         /> */}
            {/*         <LabelSeries */}
            {/*           labelAnchorX="middle" */}
            {/*           data={[ */}
            {/*             { x: "H'", y: 2.98, yOffset: -25, xOffset: 25 }, */}
            {/*             { x: "R", y: 4.5, yOffset: -25, xOffset: 25 }, */}
            {/*             { x: "E", y: 0.96, yOffset: -25, xOffset: 25 }, */}
            {/*           ]} */}
            {/*           getLabel={(d) => d.y} */}
            {/*         /> */}
            {/*         <DiscreteColorLegend */}
            {/*           width={180} */}
            {/*           style={{ */}
            {/*             position: "absolute", */}
            {/*             left: "650px", */}
            {/*             top: "100px", */}
            {/*           }} */}
            {/*           items={[ */}
            {/*             { title: "2022", color: "#61351c", strokeWidth: "12" }, */}
            {/*             { title: "2023", color: "#3e6a00", strokeWidth: "12" }, */}
            {/*           ]} */}
            {/*         /> */}
            {/*       </XYPlot> */}
            {/*     </div> */}
            {/*   </Col> */}
            {/*   <Col md={2} style={{ textAlign: "center" }}></Col> */}
            {/* </Row> */}

            <Row style={{ paddingTop: 45 }}>
              <Col md={1} style={{ textAlign: "center" }}></Col>
              <Col md={5} style={{ textAlign: "center" }}>
                <div>
                  <h5>
                    Perbandingan Jumlah Burung di Poligowo Tahun 2022 - 2024
                  </h5>
                  <SingleBarChart
                    data={table_data.total_species.birds}
                    width={500}
                    height={400}
                    min_y={0}
                    max_y={160}
                    y_title={"Jumlah"}
                    x_title={""}
                  />
                </div>
              </Col>
              <Col md={1} style={{ textAlign: "center" }}></Col>
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
              years={[2022, 2023, 2024]}
            />

            {/* MAMMALS H INDEX */}
            {/* <Row style={{ paddingTop: 45 }}> */}
            {/*   <Col md={2} style={{ textAlign: "center" }}></Col> */}
            {/*   <Col md={8} style={{ textAlign: "center" }}> */}
            {/*     <div> */}
            {/*       <h5> */}
            {/*         Diagram Indeks Ekologi Mamalia di Poligowo: Indeks */}
            {/*         Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks */}
            {/*         Kemerataan (E) */}
            {/*       </h5> */}
            {/*       <XYPlot */}
            {/*         className="clustered-stacked-bar-chart-example" */}
            {/*         xType="ordinal" */}
            {/*         yDomain={[0, 4]} */}
            {/*         height={400} */}
            {/*         width={800} */}
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
            {/*           color="#61351c" */}
            {/*           data={[ */}
            {/*             { x: "H'", y: 1.67 }, */}
            {/*             { x: "R", y: 2.75 }, */}
            {/*             { x: "E", y: 0.98 }, */}
            {/*           ]} */}
            {/*         /> */}
            {/*         <LabelSeries */}
            {/*           labelAnchorX="middle" */}
            {/*           data={[ */}
            {/*             { x: "H'", y: 1.67, yOffset: -25, xOffset: -25 }, */}
            {/*             { x: "R", y: 2.75, yOffset: -25, xOffset: -25 }, */}
            {/*             { x: "E", y: 0.98, yOffset: -25, xOffset: -25 }, */}
            {/*           ]} */}
            {/*           getLabel={(d) => d.y} */}
            {/*         /> */}
            {/**/}
            {/*         <VerticalBarSeries */}
            {/*           className="clustered-stacked-bar-chart-example" */}
            {/*           barWidth={0.5} */}
            {/*           color="#3e6a00" */}
            {/*           data={[ */}
            {/*             { x: "H'", y: 1.7 }, */}
            {/*             { x: "R", y: 2.0 }, */}
            {/*             { x: "E", y: 0.82 }, */}
            {/*           ]} */}
            {/*         /> */}
            {/*         <LabelSeries */}
            {/*           labelAnchorX="middle" */}
            {/*           data={[ */}
            {/*             { x: "H'", y: 1.7, yOffset: -25, xOffset: 25 }, */}
            {/*             { x: "R", y: 2.0, yOffset: -25, xOffset: 25 }, */}
            {/*             { x: "E", y: 0.82, yOffset: -25, xOffset: 25 }, */}
            {/*           ]} */}
            {/*           getLabel={(d) => d.y} */}
            {/*         /> */}
            {/*         <DiscreteColorLegend */}
            {/*           width={180} */}
            {/*           style={{ */}
            {/*             position: "absolute", */}
            {/*             left: "650px", */}
            {/*             top: "100px", */}
            {/*           }} */}
            {/*           items={[ */}
            {/*             { title: "2022", color: "#61351c", strokeWidth: "12" }, */}
            {/*             { title: "2023", color: "#3e6a00", strokeWidth: "12" }, */}
            {/*           ]} */}
            {/*         /> */}
            {/*       </XYPlot> */}
            {/*     </div> */}
            {/*   </Col> */}
            {/*   <Col md={2} style={{ textAlign: "center" }}></Col> */}
            {/* </Row> */}

            <Row style={{ paddingTop: 45 }}>
              <Col md={1} style={{ textAlign: "center" }}></Col>
              <Col md={5} style={{ textAlign: "center" }}>
                <div>
                  <h5>
                    Perbandingan Jumlah Mamalia di Poligowo Tahun 2022 - 2024
                  </h5>
                  <SingleBarChart
                    data={table_data.total_species.mammals}
                    width={500}
                    height={400}
                    min_y={0}
                    max_y={70}
                    y_title={"Jumlah"}
                    x_title={""}
                  />
                </div>
              </Col>
              <Col md={1} style={{ textAlign: "center" }}></Col>
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
              years={[2022, 2023, 2024]}
            />

            {/* HERPETOFAUNA H INDEX */}
            {/* <Row style={{ paddingTop: 45 }}> */}
            {/*   <Col md={2} style={{ textAlign: "center" }}></Col> */}
            {/*   <Col md={8} style={{ textAlign: "center" }}> */}
            {/*     <div> */}
            {/*       <h5> */}
            {/*         Diagram Indeks Ekologi Herpetofauna di Poligowo: Indeks */}
            {/*         Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks */}
            {/*         Kemerataan (E) */}
            {/*       </h5> */}
            {/*       <XYPlot */}
            {/*         className="clustered-stacked-bar-chart-example" */}
            {/*         xType="ordinal" */}
            {/*         yDomain={[0, 4]} */}
            {/*         height={400} */}
            {/*         width={800} */}
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
            {/*           color="#61351c" */}
            {/*           data={[ */}
            {/*             { x: "H'", y: 1.33 }, */}
            {/*             { x: "R", y: 1.86 }, */}
            {/*             { x: "E", y: 0.96 }, */}
            {/*           ]} */}
            {/*         /> */}
            {/*         <LabelSeries */}
            {/*           labelAnchorX="middle" */}
            {/*           data={[ */}
            {/*             { x: "H'", y: 1.33, yOffset: -25, xOffset: -25 }, */}
            {/*             { x: "R", y: 1.86, yOffset: -25, xOffset: -25 }, */}
            {/*             { x: "E", y: 0.96, yOffset: -25, xOffset: -25 }, */}
            {/*           ]} */}
            {/*           getLabel={(d) => d.y} */}
            {/*         /> */}
            {/**/}
            {/*         <VerticalBarSeries */}
            {/*           className="clustered-stacked-bar-chart-example" */}
            {/*           barWidth={0.5} */}
            {/*           color="#3e6a00" */}
            {/*           data={[ */}
            {/*             { x: "H'", y: 1.73 }, */}
            {/*             { x: "R", y: 2.4 }, */}
            {/*             { x: "E", y: 0.97 }, */}
            {/*           ]} */}
            {/*         /> */}
            {/*         <LabelSeries */}
            {/*           labelAnchorX="middle" */}
            {/*           data={[ */}
            {/*             { x: "H'", y: 1.73, yOffset: -25, xOffset: 25 }, */}
            {/*             { x: "R", y: 2.4, yOffset: -25, xOffset: 25 }, */}
            {/*             { x: "E", y: 0.97, yOffset: -25, xOffset: 25 }, */}
            {/*           ]} */}
            {/*           getLabel={(d) => d.y} */}
            {/*         /> */}
            {/*         <DiscreteColorLegend */}
            {/*           width={180} */}
            {/*           style={{ */}
            {/*             position: "absolute", */}
            {/*             left: "650px", */}
            {/*             top: "100px", */}
            {/*           }} */}
            {/*           items={[ */}
            {/*             { title: "2022", color: "#61351c", strokeWidth: "12" }, */}
            {/*             { title: "2023", color: "#3e6a00", strokeWidth: "12" }, */}
            {/*           ]} */}
            {/*         /> */}
            {/*       </XYPlot> */}
            {/*     </div> */}
            {/*   </Col> */}
            {/*   <Col md={2} style={{ textAlign: "center" }}></Col> */}
            {/* </Row> */}

            <Row style={{ paddingTop: 45 }}>
              <Col md={1} style={{ textAlign: "center" }}></Col>
              <Col md={5} style={{ textAlign: "center" }}>
                <div>
                  <h5>
                    Perbandingan Jumlah Herpetofauna di Poligowo Tahun 2022 -
                    2024
                  </h5>
                  <SingleBarChart
                    data={table_data.total_species.herpetofauna}
                    width={500}
                    height={400}
                    min_y={0}
                    max_y={30}
                    y_title={"Jumlah"}
                    x_title={""}
                  />
                </div>
              </Col>
              <Col md={1} style={{ textAlign: "center" }}></Col>
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
            <Program history={this.props.history} />

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

export default connect(mapStateToProps)(Poligowo);
