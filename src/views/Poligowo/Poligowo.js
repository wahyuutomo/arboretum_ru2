import React from 'react';
import './Poligowo.css';
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
   "nama": "Jambu mete",
   "jumlah": 2,
   "pi": "0,01",
   "ln_pi": "5,26",
   "h": "0,03"
 },
  {
   "no": 2,
   "nama": "Gaharu",
   "jumlah": 45,
   "pi": "0,12",
   "ln_pi": "2,14",
   "h": "0,25"
 },
 {
   "no": 3,
   "nama": "Nangka",
   "jumlah": 98,
   "pi": "0,26",
   "ln_pi": "1,37",
   "h": "0,35"
 },
 {
   "no": 4,
   "nama": "Pete",
   "jumlah": 43,
   "pi": "0,11",
   "ln_pi": "2,19",
   "h": "0,25"
 },
 {
   "no": 5,
   "nama": "Durian",
   "jumlah": 4,
   "pi": "0,01",
   "ln_pi": "4,56",
   "h": "0,05"
 },
 {
   "no": 6,
   "nama": "Geronggang",
   "jumlah": 91,
   "pi": "0,24",
   "ln_pi": "1,44",
   "h": "0,34"
 },
 {
   "no": 7,
   "nama": "Timah - timah",
   "jumlah": 32,
   "pi": "0,08",
   "ln_pi": "2,48",
   "h": "0,21"
 },
 {
   "no": 8,
   "nama": "Mahang",
   "jumlah": 3,
   "pi": "0,01",
   "ln_pi": "4,85",
   "h": "0,04"
 },
 {
   "no": 9,
   "nama": "Tenggek burung",
   "jumlah": 11,
   "pi": "0,03",
   "ln_pi": "3,55",
   "h": "0,10"
 },
 {
   "no": 10,
   "nama": "Medang",
   "jumlah": 6,
   "pi": "0,02",
   "ln_pi": "4,16",
   "h": "0,06"
 },
 {
   "no": 11,
   "nama": "Gelam",
   "jumlah": 8,
   "pi": "0,02",
   "ln_pi": "3,87",
   "h": "0,08"
 },
 {
   "no": 12,
   "nama": "Kelapa",
   "jumlah": 3,
   "pi": "0,01",
   "ln_pi": "4,85",
   "h": "0,04"
 },
 {
   "no": 13,
   "nama": "Nasi - nasi",
   "jumlah": 3,
   "pi": "0,01",
   "ln_pi": "4,85",
   "h": "0,04"
 },
 {
   "no": 14,
   "nama": "Serai Wangi",
   "jumlah": 15,
   "pi": "0,04",
   "ln_pi": "3,24",
   "h": "0,13"
 },
 {
   "no": 15,
   "nama": "Aren",
   "jumlah": 20,
   "pi": "0,05",
   "ln_pi": "2,95",
   "h": "0,15"
 }
]

const table_data_2 = [
 {
   "no": 1,
   "nama": "Jambu mete",
   "jumlah": 2,
   "pi": "0,01",
   "ln_pi": "5,26",
   "h": "0,03"
 },
 {
   "no": 2,
   "nama": "Gaharu",
   "jumlah": 45,
   "pi": "0,12",
   "ln_pi": "2,14",
   "h": "0,28"
 },
 {
   "no": 3,
   "nama": "Nangka",
   "jumlah": 30,
   "pi": "0,26",
   "ln_pi": "1,37",
   "h": "0,22"
 },
 {
   "no": 4,
   "nama": "Pete",
   "jumlah": 43,
   "pi": "0,11",
   "ln_pi": "2,19",
   "h": "0,25"
 },
 {
   "no": 5,
   "nama": "Durian",
   "jumlah": 4,
   "pi": "0,01",
   "ln_pi": "4,56",
   "h": "0,05"
 },
 {
   "no": 6,
   "nama": "Geronggang",
   "jumlah": 91,
   "pi": "0,24",
   "ln_pi": "1,44",
   "h": "0,34"
 },
 {
   "no": 7,
   "nama": "Timah - timah",
   "jumlah": 32,
   "pi": "0,08",
   "ln_pi": "2,48",
   "h": "0,21"
 },
 {
   "no": 8,
   "nama": "Mahang",
   "jumlah": 3,
   "pi": "0,01",
   "ln_pi": "4,85",
   "h": "0,04"
 },
 {
   "no": 9,
   "nama": "Tenggek burung",
   "jumlah": 11,
   "pi": "0,03",
   "ln_pi": "3,55",
   "h": "0,10"
 },
 {
   "no": 10,
   "nama": "Medang",
   "jumlah": 6,
   "pi": "0,02",
   "ln_pi": "4,16",
   "h": "0,06"
 },
 {
   "no": 11,
   "nama": "Gelam",
   "jumlah": 8,
   "pi": "0,02",
   "ln_pi": "3,87",
   "h": "0,08"
 },
 {
   "no": 12,
   "nama": "Kelapa",
   "jumlah": 3,
   "pi": "0,01",
   "ln_pi": "4,85",
   "h": "0,04"
 },
 {
   "no": 13,
   "nama": "Nasi - nasi",
   "jumlah": 3,
   "pi": "0,01",
   "ln_pi": "4,85",
   "h": "0,04"
 },
 {
   "no": 14,
   "nama": "Serai Wangi",
   "jumlah": 15,
   "pi": "0,04",
   "ln_pi": "3,24",
   "h": "0,13"
 },
 {
   "no": 15,
   "nama": "Aren",
   "jumlah": 20,
   "pi": "0,05",
   "ln_pi": "2,95",
   "h": "0,15"
 }
]

class Poligowo extends React.Component{
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
                  <div>
                    <ColoredLine/>
                  </div>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h2>Penanaman Tanaman Kayu Khas Gambut Metode Poligowo</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card body style={{border: 'none'}}>
                    <div style={{textAlign: 'center'}}>
                      Indonesia memiliki wilayah gambut yang luas yang tersebar dibeberapa provinsi. 
                      Salah satu provinsi dengan ekosistem mangrove yang luas ialah di Provinsi Riau. 
                      Ekosistem gambut seringkali dicap sebagai wilayah sumber bencana, saat kemarau tiba 
                      sering terjadi kebakaran lahan dan hutan tetapi saat musim penghujan tiba sering kali 
                      terjadi banjur. Sehingga keberadaan lahan gambut ini menjadi krusial apabila tidak 
                      dikelola dengan baik.
                      <br></br>
                      <br></br>
                      Oleh karena itu PT Kilang Pertamina Internasional RU II Sungai Paning, sebagai salah 
                      satu perusahaan yang berada di wilayah Sungai Pakning, Bengkalis, Provinsi Riau ikut 
                      andil dalam upaya pelestarian keanekaragaman hayati terutama pada ekosistem gambut. 
                      Salah satunya melalui Program Pelestarian Tanaman Khas Gambut Dengan Metode Penanaman 
                      Bibit Nanas Dan Tanaman Kayu Secara Polikultur Jajar Legowo (Poligowo).
                      <br></br>
                      <br></br>
                      Kendala utama dalam upaya pelestarian gambut ini ialah seringnya terjadi benturan antar 
                      kepentingan atara konservasi dengan ekonomi. Masyarakat jarang mau melakukan konservasi 
                      karena merasa dampak konservasi tersebut hanya berdampak pada perbaikan lingkungan saja 
                      tanpa memberikan manfaat ekonomi kepada mereka. Untuk itu PT Kilang Pertamina Internasional 
                      RU II Sungai Paning membuat program Pelestarian Tanaman Khas Gambut Dengan Metode Penanaman 
                      Bibit Nanas Dan Tanaman Kayu Secara Polikultur Jajar Legowo (Poligowo). 
                      <br></br>
                      <br></br>
                      Program ini membuat upaya konservasi dapat dilakukan beriringan dengan kegiatan ekonomi 
                      masyarakat. Sehingga dengan adanya manfaat ekonomi tersebut, kegiatan konservasi yang 
                      dilakukan akan mampu juga memberikan dampak ekonomi kepada masyarakat, sehingga masyarakat 
                      mau melakukan konservasi tersebut. Dengan adanya program ini juga sangat membantu penghijauan 
                      terutama pada lahan – lahan gambut yang ,mulai kritis dan rawan terbakar. Dengan adanya 
                      program ini juga mampu mencegah kebakaran karena lahan yang digunakan menjadi terawat dan 
                      tidak berpotensi terhadap kebakaran. Program ini dilakukan di lahan seluas 2,5 ha yang berada 
                      di dusun Kampung Jawa, Kelurahan Sungai Pakning, Kecamatan Bukit Batu, Kabupaten Bengkalis.
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Indeks Keanekaragaman Hayati (H') Program Poligowo 2021</h3>
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
                        <td colSpan="2" style={{textAlign: 'center'}}>Jumlah</td>
                        <td style={{textAlign: 'center'}}>384</td>
                        <td style={{textAlign: 'center'}}></td>
                        <td style={{textAlign: 'center'}}></td>
                        <td style={{textAlign: 'center'}}>1,26</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Indeks Keanekaragaman Hayati (H') Program Poligowo 2020</h3>
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
                        <td colSpan="2" style={{textAlign: 'center'}}>Jumlah</td>
                        <td style={{textAlign: 'center'}}>316</td>
                        <td style={{textAlign: 'center'}}></td>
                        <td style={{textAlign: 'center'}}></td>
                        <td style={{textAlign: 'center'}}>1,22</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row style={{paddingTop: 45}}>
                <Col style={{textAlign: 'center'}}>
                </Col>
                <Col style={{textAlign: 'center'}}>
                  <div>
                    <h5>Indeks Kehati Program Poligowo</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[1.0, 1.3]}
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
                          {x: '2020', y: 1.22},
                          {x: '2021', y: 1.26},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2020', y: 1.22, yOffset: -25},
                          {x: '2021', y: 1.26, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                    </XYPlot>
                  </div>
                </Col>
                <Col style={{textAlign: 'center'}}>
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
              <Row>
                <Col style={{background: '#fff'}}>
                  <Card style={{borderWidth:0}} as="Button" onClick={()=>{this.props.history.push("/home")}}>
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
                  <Card style={{borderWidth:0}} as="Button" onClick={()=>{this.props.history.push("/arboretum")}}>
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
                  <Card style={{borderWidth:0}} as="Button" onClick={()=>{this.props.history.push("/mangrove-pangkalan-jambi")}}>
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
                  <Card style={{borderWidth:0}} as="Button" onClick={()=>{this.props.history.push("/poligowo")}}>
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
)(Poligowo);
