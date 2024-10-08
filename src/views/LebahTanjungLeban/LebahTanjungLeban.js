import React from "react";
import "./LebahTanjungLeban.css";
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

// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   LineSeries,
//   VerticalBarSeries,
//   ChartLabel,
//   LabelSeries,
// } from "react-vis";

import { connect } from "react-redux";

import * as table_data from "./data.js";
import { copywrite } from "./data.js";

class LebahTanjungLeban extends React.Component {
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
              years={[2024]}
            />

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
              years={[2024]}
            />

            {/* BIRDS HRE */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={2} style={{ textAlign: "center" }}></Col>
              <Col style={{ textAlign: "center" }}>
                <h5>Indeks Kehati Burung Eduwisata Lebah Madu Tanjung Leban</h5>
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
              years={[2024]}
            />

            {/* MAMMALS HRE */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={2} style={{ textAlign: "center" }}></Col>
              <Col style={{ textAlign: "center" }}>
                <h5>
                  Indeks Kehati Mamalia Eduwisata Lebah Madu Tanjung Leban
                </h5>
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
              years={[2024]}
            />

            {/* MAMMALS HRE */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={2} style={{ textAlign: "center" }}></Col>
              <Col style={{ textAlign: "center" }}>
                <h5>
                  Indeks Kehati Herpetofauna Eduwisata Lebah Madu Tanjung Leban
                </h5>
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
              years={[2024]}
            />

            {/* DRAGONFLY HRE */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={2} style={{ textAlign: "center" }}></Col>
              <Col style={{ textAlign: "center" }}>
                <h5>Indeks Kehati Capung Eduwisata Lebah Madu Tanjung Leban</h5>
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
              years={[2024]}
            />

            {/* BUTTERFLY HRE */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={2} style={{ textAlign: "center" }}></Col>
              <Col style={{ textAlign: "center" }}>
                <h5>
                  Indeks Kehati Kupu-kupu Eduwisata Lebah Madu Tanjung Leban
                </h5>
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

export default connect(mapStateToProps)(LebahTanjungLeban);
