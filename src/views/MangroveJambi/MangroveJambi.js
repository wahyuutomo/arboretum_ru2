import React from 'react';
import './MangroveJambi.css';
import 'react-vis/dist/style.css';

import Card from 'react-bootstrap/Card';

import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ColoredLine from '../../components/Common/ColoredLine.js'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  ChartLabel,
  LabelSeries
} from 'react-vis';

import { connect } from "react-redux";

import logo_pertamina from "../../assets/logo_pertamina.png"
import img2 from "../../assets/2.jpeg"
import img3 from "../../assets/3.jpeg"
import img6 from "../../assets/6.jpeg"
import img9 from "../../assets/9.jpeg"
import img14 from "../../assets/14.jpeg"
import poligowo3 from "../../assets/poligowo3.jpeg"

const table_data = [
 {
   "no": 1,
   "nama": "Paku Laut",
   "jumlah": 14099,
   "pi": "0,166",
   "ln_pi": "1,79",
   "h": "0,30"
 },
 {
   "no": 2,
   "nama": "Api-Api Putih",
   "jumlah": 1700,
   "pi": "0,020",
   "ln_pi": "3,91",
   "h": "0,08"
 },
 {
   "no": 3,
   "nama": "Tancang Putih",
   "jumlah": 3951,
   "pi": "0,047",
   "ln_pi": "3,07",
   "h": "0,14"
 },
 {
   "no": 4,
   "nama": "Tancang Merah",
   "jumlah": 4551,
   "pi": "0,054",
   "ln_pi": "2,92",
   "h": "0,16"
 },
 {
   "no": 5,
   "nama": "Tingi",
   "jumlah": 200,
   "pi": "0,002",
   "ln_pi": "6,05",
   "h": "0,01"
 },
 {
   "no": 6,
   "nama": "Gadelan",
   "jumlah": 130,
   "pi": "0,002",
   "ln_pi": "6,48",
   "h": "0,01"
 },
 {
   "no": 7,
   "nama": "Buta-Buta",
   "jumlah": 8500,
   "pi": "0,100",
   "ln_pi": "2,30",
   "h": "0,23"
 },
 {
   "no": 8,
   "nama": "Bakau Kacang",
   "jumlah": 20400,
   "pi": "0,241",
   "ln_pi": "1,42",
   "h": "0,34"
 },
 {
   "no": 9,
   "nama": "Angrek tanduk rusa",
   "jumlah": 682,
   "pi": "0,008",
   "ln_pi": "4,82",
   "h": "0,04"
 },
 {
   "no": 10,
   "nama": "Sempur akar",
   "jumlah": 909,
   "pi": "0,011",
   "ln_pi": "4,53",
   "h": "0,05"
 },
 {
   "no": 11,
   "nama": "Ketoer",
   "jumlah": 545,
   "pi": "0,006",
   "ln_pi": "5,05",
   "h": "0,03"
 },
 {
   "no": 12,
   "nama": "Senduduk",
   "jumlah": 2045,
   "pi": "0,024",
   "ln_pi": "3,72",
   "h": "0,09"
 },
 {
   "no": 13,
   "nama": "Akar kait-kait",
   "jumlah": 2727,
   "pi": "0,032",
   "ln_pi": "3,44",
   "h": "0,11"
 },
 {
   "no": 14,
   "nama": "keduduk merah",
   "jumlah": 7137,
   "pi": "0,084",
   "ln_pi": "2,47",
   "h": "0,21"
 },
 {
   "no": 15,
   "nama": "Perepat",
   "jumlah": 4551,
   "pi": "0,054",
   "ln_pi": "2,92",
   "h": "0,16"
 },
 {
   "no": 16,
   "nama": "nyirih",
   "jumlah": 11417,
   "pi": "0,135",
   "ln_pi": "2,00",
   "h": "0,27"
 },
 {
   "no": 17,
   "nama": "nyuruh",
   "jumlah": 197,
   "pi": "0,002",
   "ln_pi": "6,06",
   "h": "0,01"
 },
 {
   "no": 18,
   "nama": "waru",
   "jumlah": 37,
   "pi": "0,000",
   "ln_pi": "7,74",
   "h": "0,00"
 },
 {
   "no": 19,
   "nama": "Nipah",
   "jumlah": 695,
   "pi": "0,008",
   "ln_pi": "4,80",
   "h": "0,04"
 },
 {
   "no": 20,
   "nama": "Beluntas",
   "jumlah": 267,
   "pi": "0,003",
   "ln_pi": "5,76",
   "h": "0,02"
 }
]

const table_data_2 = [
    {
        "no": "1",
        "nama": "Paku Laut",
        "jumlah": "14099",
        "pi": "0.453",
        "ln_pi": "0.79",
        "h": "0.36"
    },
    {
        "no": "2",
        "nama": "Api-Api Putih",
        "jumlah": "1600",
        "pi": "0.051",
        "ln_pi": "2.97",
        "h": "0.15"
    },
    {
        "no": "3",
        "nama": "Tancang Putih",
        "jumlah": "1700",
        "pi": "0.055",
        "ln_pi": "2.91",
        "h": "0.16"
    },
    {
        "no": "4",
        "nama": "Tancang Merah",
        "jumlah": "1700",
        "pi": "0.055",
        "ln_pi": "2.91",
        "h": "0.16"
    },
    {
        "no": "5",
        "nama": "Tingi",
        "jumlah": "200",
        "pi": "0.006",
        "ln_pi": "5.05",
        "h": "0.03"
    },
    {
        "no": "6",
        "nama": "Gadelan",
        "jumlah": "130",
        "pi": "0.004",
        "ln_pi": "5.48",
        "h": "0.02"
    },
    {
        "no": "7",
        "nama": "Buta-Buta",
        "jumlah": "833",
        "pi": "0.027",
        "ln_pi": "3.62",
        "h": "0.10"
    },
    {
        "no": "8",
        "nama": "Bakau Kacang",
        "jumlah": "4900",
        "pi": "0.157",
        "ln_pi": "1.85",
        "h": "0.29"
    },
    {
        "no": "9",
        "nama": "Angrek tanduk rusa",
        "jumlah": "227",
        "pi": "0.007",
        "ln_pi": "4.92",
        "h": "0.04"
    },
    {
        "no": "10",
        "nama": "Sempur akar",
        "jumlah": "909",
        "pi": "0.029",
        "ln_pi": "3.53",
        "h": "0.10"
    },
    {
        "no": "11",
        "nama": "Ketoer",
        "jumlah": "545",
        "pi": "0.017",
        "ln_pi": "4.05",
        "h": "0.07"
    },
    {
        "no": "12",
        "nama": "Senduduk",
        "jumlah": "2045",
        "pi": "0.066",
        "ln_pi": "2.72",
        "h": "0.18"
    },
    {
        "no": "13",
        "nama": "Akar kait-kait",
        "jumlah": "909",
        "pi": "0.029",
        "ln_pi": "3.53",
        "h": "0.10"
    },
    {
        "no": "14",
        "nama": "keduduk merah",
        "jumlah": "455",
        "pi": "0.015",
        "ln_pi": "4.23",
        "h": "0.06"
    },
    {
        "no": "15",
        "nama": "Perepat",
        "jumlah": "370",
        "pi": "0.012",
        "ln_pi": "4.43",
        "h": "0.05"
    },
    {
        "no": "16",
        "nama": "nyirih",
        "jumlah": "120",
        "pi": "0.004",
        "ln_pi": "5.56",
        "h": "0.02"
    },
    {
        "no": "17",
        "nama": "nyuruh",
        "jumlah": "97",
        "pi": "0.003",
        "ln_pi": "5.77",
        "h": "0.02"
    },
    {
        "no": "18",
        "nama": "waru",
        "jumlah": "15",
        "pi": "0.000",
        "ln_pi": "7.64",
        "h": "0.00"
    },
    {
        "no": "19",
        "nama": "Nipah",
        "jumlah": "235",
        "pi": "0.008",
        "ln_pi": "4.89",
        "h": "0.04"
    },
    {
        "no": "20",
        "nama": "Beluntas",
        "jumlah": "56",
        "pi": "0.002",
        "ln_pi": "6.32",
        "h": "0.01"
    },
]

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
              <Row style={{height: 60, padding:10}}>
                <Col sm={8} md={8} lg={9} style={{background: '#fff'}}>
                  <div style={{fontSize: 24, textAlignVertical:'center'}}>Pertamina RU II Sungai Pakning</div>
                </Col>
                <Col sm={4} md={4} lg={3} float="center" style={{background: '#fff', display: 'flex', justifyContent:'flex-end'}}><img alt="" src={logo_pertamina} height="35"/></Col>
              </Row>
              <Row>
                <Col style={{padding: 0}}>    
                  <Carousel style={{height: 400}}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                        height="400"
                      />
                      <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img14}
                        alt="Third slide"
                        height="400"
                      />

                      <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        height="400"
                      />

                      <Carousel.Caption>
                        <h3> </h3>
                        <p> </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h2>Mangrove Desa Pangkalan Jambi</h2>
                  </div>
                  <div>
                    <ColoredLine/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card body style={{border: 'none'}}>
                    <div style={{textAlign: 'center'}}>
                      Abrasi merupakan salah satu bencana yang sering dijumpai di wilayah Indonesia karena 
                      sebagian besar wilayahnya adalah lautan. Selain karena faktor alam, abrasi yang sering 
                      terjadi di Indonesia juga disebabkan oleh kerusakan hutan mangrove. Saat ini hutan mangrove 
                      sedang mengalami tekanan yang berat dan mengalami kekurangan luasan di beberapa kawasan 
                      pesisir terutama di wilayah yang berbatasan dengan laut lepas, sehingga akan membuat warga 
                      yang ada di pesisir menderita bila terjadi air pasang.
                      <br></br>
                      <br></br>
                      Permasalahan abrasi ini juga terjadi di Riau, salah satunya di Desa Pangkalan Jambi, 
                      Kabupaten Bengkalis. Lokasi desa yang berada di pesisir Riau dan kerusakan mangrove yang 
                      cukup parah menyebabkan abrasi yang ada saat ini menjadi semakin parah. Saat ini daratan 
                      yang ada di Desa Pangkalan Jambi telah mundur sejauh 115 meter.
                      <br></br>
                      <br></br>
                      Berbagai upaya telah dilakukan kelompok mangrove Harapan Bersama mulai tahun 2004 hingga 
                      sekarang, namun kelompok sering mengalami kegagalan dalam proses penanaman mangrove sebagai 
                      upaya pencegahan bencana abrasi karena kurangnya pengetahuan mengenai tatacara penanaman 
                      mangrove dan besarnya arus yang menggerus daratan mereka. Mulai tahun 2017 PT Pertamina RU 
                      II Sungai Pakning mulai memperkenalkan beberapa metode alat pemecah ombak yang digunakan 
                      untuk meningkatkan keberhasilan penanaman mangrove dan pencegahan abrasi antara lain hybrid 
                      engineering, lalu hybrid engineering yang telah di modifikasi dan terakhir ialah triangle 
                      mangrove barrier. 
                      <br></br>
                      <br></br>
                      Sebagai wujud kepedulian PT. Pertamina RU II Sungai Pakning terhadap perlindungan 
                      biodiversity mangrove maka dibangunlah Mangrove Education Center (MEC) Pangkalan Jambi 
                      sebagai tempat implementasi konservasi biodiversity ekosistem mangrove dan untuk edukasi 
                      terhadap masyarakat.  Sebagai bagian dari pengelolaan Mangrove Education Center (MEC) maka 
                      PT. Pertamina RU II Sungai Pakning Field secara rutin melakukan pemantauan/monev perkembangan 
                      odiversity didalamnya.
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Indeks Keanekaragaman Hayati (H') Flora Mangrove Pangkalan Jambi 2021</h3>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th style={{textAlign: 'center'}}>No</th>
                        <th style={{textAlign: 'center'}}>Nama Ilmiah</th>
                        <th style={{textAlign: 'center'}}>Jumlah</th>
                        <th style={{textAlign: 'center'}}>Pi</th>
                        <th style={{textAlign: 'center'}}>In (Pi)</th>
                        <th style={{textAlign: 'center'}}>H'</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama}</td>
                            <td style={{textAlign: 'center'}}>{listValue.jumlah}</td>
                            <td style={{textAlign: 'center'}}>{listValue.pi}</td>
                            <td style={{textAlign: 'center'}}>{listValue.ln_pi}</td>
                            <td style={{textAlign: 'center'}}>{listValue.h}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="2">Jumlah</td>
                        <td style={{textAlign: 'center'}}>84740</td>
                        <td style={{textAlign: 'center'}}></td>
                        <td style={{textAlign: 'center'}}></td>
                        <td style={{textAlign: 'center'}}>2.31</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Indeks Keanekaragaman Hayati (H') Flora Mangrove Pangkalan Jambi 2020</h3>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th style={{textAlign: 'center'}}>No</th>
                        <th style={{textAlign: 'center'}}>Nama Ilmiah</th>
                        <th style={{textAlign: 'center'}}>Jumlah</th>
                        <th style={{textAlign: 'center'}}>Pi</th>
                        <th style={{textAlign: 'center'}}>In (Pi)</th>
                        <th style={{textAlign: 'center'}}>H'</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data_2.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama}</td>
                            <td style={{textAlign: 'center'}}>{listValue.jumlah}</td>
                            <td style={{textAlign: 'center'}}>{listValue.pi}</td>
                            <td style={{textAlign: 'center'}}>{listValue.ln_pi}</td>
                            <td style={{textAlign: 'center'}}>{listValue.h}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="2">Jumlah</td>
                        <td style={{textAlign: 'center'}}>31145</td>
                        <td style={{textAlign: 'center'}}></td>
                        <td style={{textAlign: 'center'}}></td>
                        <td style={{textAlign: 'center'}}>1.83</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row style={{paddingTop: 45}}>
                <Col style={{textAlign: 'center'}}>
                  <h5>Indeks Kehati (H') Flora Mangrove Pangkalan Jambi Tahun 2017-2021</h5>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th style={{textAlign: 'center'}}>Tahun</th>
                        <th style={{textAlign: 'center'}}>Index Kehati (H')</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{textAlign: 'center'}}>2017</td>
                        <td style={{textAlign: 'center'}}>1.32</td>
                      </tr>
                      <tr>
                        <td style={{textAlign: 'center'}}>2018</td>
                        <td style={{textAlign: 'center'}}>1.42</td>
                      </tr>
                      <tr>
                        <td style={{textAlign: 'center'}}>2019</td>
                        <td style={{textAlign: 'center'}}>1.78</td>
                      </tr>
                      <tr>
                        <td style={{textAlign: 'center'}}>2020</td>
                        <td style={{textAlign: 'center'}}>1.83</td>
                      </tr>
                      <tr>
                        <td style={{textAlign: 'center'}}>2021</td>
                        <td style={{textAlign: 'center'}}>2.31</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col style={{textAlign: 'center'}}>
                  <div>
                    <h5>Indeks Kehati Mangrove Pangkalan Jambi Tahun 2017 - 2021</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 2.5]}
                      height={400} 
                      width={400}>
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
                        data={[
                          {x: '2017', y: 1.32},
                          {x: '2018', y: 1.42},
                          {x: '2019', y: 1.78},
                          {x: '2020', y: 1.83},
                          {x: '2021', y: 2.31},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2017', y: 1.32, yOffset: -25},
                          {x: '2018', y: 1.42, yOffset: -25},
                          {x: '2019', y: 1.78, yOffset: -25},
                          {x: '2020', y: 1.83, yOffset: -25},
                          {x: '2021', y: 2.31, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                    </XYPlot>
                  </div>
                </Col>
              </Row>

              <Row style={{background: '#fff', paddingTop: 30, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Progam</h3>
                  </div>
                  <div>
                    <ColoredLine/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col style={{background: '#fff'}}>
                  <Card as="Button" onClick={()=>{this.props.history.push("/home")}}>
                    <Card.Img variant="top" 
                      src={img6}
                      height='240'
                      />
                    <Card.Body className="text-center">
                      <Card.Title className="text-center">Home</Card.Title>
                    </Card.Body>
                    
                  </Card>
                </Col>
                <Col style={{background: '#fff'}}>
                  <Card as="Button" onClick={()=>{this.props.history.push("/arboretum")}}>
                    <Card.Img variant="top" 
                      src={img9}
                      height='240'
                      />
                    <Card.Body className="text-center">
                      <Card.Title className="text-center">Arboretum Gambut</Card.Title>
                    </Card.Body>
                    
                  </Card>
                </Col>
                <Col style={{background: '#fff'}}>
                  <Card as="Button" onClick={()=>{this.props.history.push("/mangrove-pangkalan-jambi")}}>
                    <Card.Img variant="top" 
                      src={img2}
                      height='240'
                      />
                    <Card.Body className="text-center">
                      <Card.Title className="text-center">Mangrove Pangkalan Jambi</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col style={{background: '#fff'}}>
                  <Card as="Button" onClick={()=>{this.props.history.push("/poligowo")}}>
                    <Card.Img variant="top" 
                      src={poligowo3}
                      height='240'
                      />
                    <Card.Body className="text-center">
                      <Card.Title className="text-center">Penanaman Tanaman Kayu Khas Gambut Metode Poligowo</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row style={{paddingTop: 30}}>
                <Col>
                  <ColoredLine/>
                </Col>
              </Row>
              <Row style={{paddingTop: 20, paddingLeft: 30, paddingBottom: 10, height: 200, background: '#fff'}}>
                <Col>
                  <h5>Websites</h5>
                  <ListGroup variant="flush">
                    <ListGroup.Item><a href="https://arboretumgambut.com">Arboretum Gambut</a></ListGroup.Item>
                    <ListGroup.Item><a href="https://sekolahcintagambut.com">Sekolah Cinta Gambut</a></ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col></Col>
                <Col>
                  <h5>Contact Us</h5>
                  Address: <br></br>Sungai Pakning, Bukit Batu, Bengkalis Regency, Riau 28761
                </Col>
              </Row>
              <Row style={{paddingTop: 10}}>
                <Col>
                  <ColoredLine/>
                </Col>
              </Row>
              <Row style={{paddingBottom: 40}}>
                <Col>
                  © Copyright PT Pertamina(Persero) RU II Sungai Pakning 2020. All Rights Reserved.
                </Col>
              </Row> 
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
