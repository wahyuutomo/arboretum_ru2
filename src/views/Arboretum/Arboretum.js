import React from "react";
import "./Arboretum.css";
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
import SingleBarChart from "../../components/Chart/SingleBarChart.js";

import { connect } from "react-redux";

import * as table_data from "./data.js";

class Arboretum extends React.Component {
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
                  <h2>Arboretum Gambut Marsawa</h2>
                </div>
              </Col>
            </Row>

            {/* DESCRIPTION */}
            <Row>
              <Col>
                <Card body style={{ border: "none" }}>
                  <div style={{ textAlign: "center" }}>
                    Bencana kebakaran hutan dan lahan yang ada di Indonesia
                    merupakan salah satu bencana rutin yang terjadi dalam
                    beberapa tahun terakhir. Imbas bencana ini menyebabkan
                    terjadinya kabut asap yang melanda tak hanya di dalam negeri
                    tetapi hingga negara – negara tetangga seperti Singapura dan
                    Malaysia. Hal ini menjadikannya tak hanya bencana lokal
                    tetapi sebagai bencana nasional. Salah satu provinsi yang
                    terdampak paling parah ialah Riau. Kebakaran lahan dan hutan
                    yang ada di Riau ini terjadi akibat beberapa hal baik secara
                    disengaja maupun tidak disengaja.
                    <br></br>
                    <br></br>
                    Menurut Wahana Lingkungan Hidup Indonesia atau Walhi,
                    kebakaran hutan dan lahan di Riau merupakan salah satu
                    bencana tahunan yang disebabkan oleh perilaku manusia. Fakta
                    lapangan menunjukkan bahwa ada faktor kesengajaan membakar
                    hutan dan lahan. Tujuan pembakaran tersebut adalah untuk
                    melakukan pembersihan lahan dalam rangka persiapan
                    pembangunan perkebunan.
                    <br></br>
                    <br></br>
                    Kebakaran lahan dan hutan ini menimbulkan kerugian baik
                    materiil hingga korban jiwa. Kebakaran juga menyebabka
                    terjadinya degradasi lahan gambut yang menimbulkan besarnya
                    emisi karbon yang lepas di udara dan juga hilangnya
                    biodiversitas di sekitarnya. (Johansen, 2015). Bahkan
                    bencana kebakaran hutan dan lahan pada tahun 2016 ini juga
                    mengakibatkan kerugian besar kurang lebih US$ 16 milyar di
                    sektor lingkungan hidup, ekonomi, wisata, maupun pendidikan
                    (CIFOR, 2018).
                    <br></br>
                    <br></br>
                    Di Sungai Pakning, Kabupaten Bengkalis, ketika terjadi
                    bencana kebakaran lahan dan hutan menimbulkan banyak
                    kerugian antara lain 86 ha lahan produktif yang terbakar,
                    terganggunya aktifitas masyarakat, hingga menimbulkan korban
                    jiwa akibat ISPA. Oleh karena itu PT Pertamina RU II Sungai
                    Paning, sebagai salah satu perusahaan yang berada di wilayah
                    Sungai Pakning, Bengkalis, Provinsi Riau ikut andil dalam
                    upaya penanganan bencana kebakaran hutan dan lahan melalui
                    program CSR (Coorporate Social Responsibility) dengan
                    Program Kampung Gambut Berdikari dengan mitra binaan Petani,
                    MPA, sekolah - sekolah dan beberapa masyarakat lainnya.
                    Salah satunya Arboretum Gambut Marsawa Program
                    Keanekaragaman Hayati yang dijadikan ebagai pusat
                    pembelajaran tanaman – tanaman gambut dan pengelolaan lahan
                    gambut. Didalamnya juga dilakukan konservasi tanaman –
                    tanaman langka seperti Kantong Semar Sumatera ataupun
                    Kantong Semar Spectabilis.
                  </div>
                </Card>
              </Col>
            </Row>

            <Row
              style={{ background: "#fff", paddingTop: 60, paddingBottom: 10 }}
            >
              <Col>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <h3>Jumlah Spesies Tanaman di Arboretum Gambut</h3>
                </div>
              </Col>
            </Row>

            {/* FLORA TABLE */}
            <DataTable
              data={table_data.flora}
              data_count={table_data.data_count.flora}
              years={[2021, 2022, 2023, 2024, 2025]}
            />

            {/* FLORA SPECIES COUNT */}
            <Row style={{ paddingTop: 45 }}>
              <Col style={{ textAlign: "center" }}>
                <h5>Jumlah Spesies di Arboretum Gambut Tahun 2019-2025</h5>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }}>Tahun</th>
                      <th style={{ textAlign: "center" }}>Jumlah Spesies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table_data.total_species.flora.map((listValue, index) => {
                      return (
                        <tr key={index}>
                          <td style={{ textAlign: "center" }}>{listValue.x}</td>
                          <td style={{ textAlign: "center" }}>{listValue.y}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <div>
                  <h5>Perkembangan Biodiversitas</h5>

                  <SingleBarChart
                    data={table_data.total_species.flora}
                    width={500}
                    height={400}
                    min_y={0}
                    max_y={100}
                    y_title={"Jumlah Spesies"}
                    x_title={""}
                  />
                </div>
              </Col>
            </Row>

            {/* FLORA H INDEX */}
            <Row style={{ paddingTop: 30 }}>
              <Col style={{ textAlign: "center" }}>
                <h5>
                  Indeks Keanekaragaman Hayati Arboretum Gambut Tahun 2019-2025
                </h5>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th style={{ textAlign: "center" }}>Tahun</th>
                      <th style={{ textAlign: "center" }}>Indeks Kehati</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table_data.h_index.flora.map((listValue, index) => {
                      return (
                        <tr key={index}>
                          <td style={{ textAlign: "center" }}>{listValue.x}</td>
                          <td style={{ textAlign: "center" }}>{listValue.y}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <div>
                  <h5>Index Keanekaragaman Hayati</h5>
                  <SingleBarChart
                    data={table_data.h_index.flora}
                    width={500}
                    height={400}
                    min_y={0}
                    max_y={5}
                    y_title={"Index Kehati"}
                    x_title={""}
                  />
                </div>
              </Col>
            </Row>

            <Row
              style={{ background: "#fff", paddingTop: 60, paddingBottom: 10 }}
            >
              <Col>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <h3>Jumlah Spesies Burung di Arboretum Gambut</h3>
                </div>
              </Col>
            </Row>

            {/* BIRDS TABLE */}
            <DataTable
              data={table_data.birds}
              data_count={table_data.data_count.birds}
              years={[2022, 2023, 2024, 2025]}
            />

            {/* BIRDS H INDEX */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={4} style={{ textAlign: "center" }}></Col>
              <Col md={4} style={{ textAlign: "center" }}>
                <div>
                  <h5>H' Burung</h5>
                  <SingleBarChart
                    data={table_data.h_index.birds}
                    line={table_data.h_index_lines.birds}
                    width={500}
                    height={400}
                    min_y={2.5}
                    max_y={3.5}
                    y_title={"Indeks Kehati"}
                    x_title={""}
                  />
                </div>
              </Col>
              <Col md={4} style={{ textAlign: "center" }}></Col>
            </Row>

            <Row
              style={{ background: "#fff", paddingTop: 60, paddingBottom: 10 }}
            >
              <Col>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <h3>Jumlah Spesies Mamalia di Arboretum Gambut</h3>
                </div>
              </Col>
            </Row>

            {/* MAMMALS TABLE */}
            <DataTable
              data={table_data.mammals}
              data_count={table_data.data_count.mammals}
              years={[2022, 2023, 2024, 2025]}
            />

            {/* MAMMALS H INDEX */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={4} style={{ textAlign: "center" }}></Col>
              <Col md={4} style={{ textAlign: "center" }}>
                <div>
                  <h5>H' Mamalia</h5>
                  <SingleBarChart
                    data={table_data.h_index.mammals}
                    line={table_data.h_index_lines.mammals}
                    width={500}
                    height={400}
                    min_y={0}
                    max_y={2}
                    y_title={"Indeks Kehati"}
                    x_title={""}
                  />
                </div>
              </Col>
              <Col md={4} style={{ textAlign: "center" }}></Col>
            </Row>

            <Row
              style={{ background: "#fff", paddingTop: 60, paddingBottom: 10 }}
            >
              <Col>
                <div style={{ alignItems: "center", textAlign: "center" }}>
                  <h3>Jumlah Spesies Herpetofauna di Arboretum Gambut</h3>
                </div>
              </Col>
            </Row>

            {/* HERPETOFAUNA TABLE */}
            <DataTable
              data={table_data.herpetofauna}
              data_count={table_data.data_count.herpetofauna}
              years={[2022, 2023, 2024, 2025]}
            />

            {/* HERPETOFAUNA H INDEX */}
            <Row style={{ paddingTop: 45 }}>
              <Col md={4} style={{ textAlign: "center" }}></Col>
              <Col md={4} style={{ textAlign: "center" }}>
                <div>
                  <h5>H' Herpetofauna</h5>
                  <SingleBarChart
                    data={table_data.h_index.herpetofauna}
                    line={table_data.h_index_lines.herpetofauna}
                    width={500}
                    height={400}
                    min_y={0}
                    max_y={2.4}
                    y_title={"Indeks Kehati"}
                    x_title={""}
                  />
                </div>
              </Col>
              <Col md={4} style={{ textAlign: "center" }}></Col>
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

export default connect(mapStateToProps)(Arboretum);
