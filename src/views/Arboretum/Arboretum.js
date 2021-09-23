import React from 'react';
import './Arboretum.css';
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
  LineSeries,
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
   "name": "Nepenthes ampullaria Jack",
   "first": 51,
   "second": 56,
   "third": 56,
   "fourth": 120
 },
 {
   "no": 2,
   "name": "Nepenthes rafflesiana Jack",
   "first": 49,
   "second": 60,
   "third": 70,
   "fourth": 157
 },
 {
   "no": 3,
   "name": "Nepenthes bicalcarata Hook",
   "first": 34,
   "second": 42,
   "third": 54,
   "fourth": 75
 },
 {
   "no": 4,
   "name": "Nepenthes mirabilis (Lour) Druce",
   "first": 40,
   "second": 43,
   "third": 50,
   "fourth": 80
 },
 {
   "no": 5,
   "name": "Nepenthes sumatrana",
   "first": 5,
   "second": 7,
   "third": 15,
   "fourth": 30
 },
 {
   "no": 6,
   "name": "Nepenthes spectabilis",
   "first": 10,
   "second": 11,
   "third": 20,
   "fourth": 30
 },
 {
   "no": 7,
   "name": "Nepenthes albomarginata",
   "first": 32,
   "second": 32,
   "third": 32,
   "fourth": 40
 },
 {
   "no": 8,
   "name": "Gomphandra capitulata",
   "first": null,
   "second": 3,
   "third": 3,
   "fourth": 7
 },
 {
   "no": 9,
   "name": "Aquilaria malacensis",
   "first": null,
   "second": 8,
   "third": 8,
   "fourth": 10
 },
 {
   "no": 10,
   "name": "Melaleuca leucadendron",
   "first": null,
   "second": 30,
   "third": 30,
   "fourth": 35
 },
 {
   "no": 11,
   "name": "Cratoxylon arbores",
   "first": null,
   "second": 13,
   "third": 13,
   "fourth": 19
 },
 {
   "no": 12,
   "name": "Syzygium aqueum",
   "first": null,
   "second": 23,
   "third": 23,
   "fourth": 38
 },
 {
   "no": 13,
   "name": "Syzygium malaccense",
   "first": null,
   "second": 3,
   "third": 3,
   "fourth": 15
 },
 {
   "no": 14,
   "name": "Citrus sp.",
   "first": null,
   "second": 3,
   "third": 3,
   "fourth": 9
 },
 {
   "no": 15,
   "name": "Hevea brasiliensis",
   "first": null,
   "second": 58,
   "third": 58,
   "fourth": 74
 },
 {
   "no": 16,
   "name": "Syzygium leptostemonum",
   "first": null,
   "second": 80,
   "third": 80,
   "fourth": 80
 },
 {
   "no": 17,
   "name": "Vitex pubescens",
   "first": null,
   "second": 38,
   "third": 38,
   "fourth": 42
 },
 {
   "no": 18,
   "name": "Macaranga trilobata",
   "first": null,
   "second": 8,
   "third": 8,
   "fourth": 12
 },
 {
   "no": 19,
   "name": "Gomphandra capitulata",
   "first": null,
   "second": 176,
   "third": 176,
   "fourth": 256
 },
 {
   "no": 20,
   "name": "Dimocarpus longan",
   "first": null,
   "second": 15,
   "third": 15,
   "fourth": 17
 },
 {
   "no": 21,
   "name": "Artocarpus heterophyllus",
   "first": null,
   "second": 5,
   "third": 5,
   "fourth": 9
 },
 {
   "no": 22,
   "name": "Nephelium lappeceum",
   "first": null,
   "second": 3,
   "third": 3,
   "fourth": 10
 },
 {
   "no": 23,
   "name": "Shorea leprosula",
   "first": null,
   "second": 3,
   "third": 100,
   "fourth": 150
 },
 {
   "no": 24,
   "name": "Setulang",
   "first": null,
   "second": 193,
   "third": 193,
   "fourth": 243
 },
 {
   "no": 25,
   "name": "Asplenium nidus",
   "first": null,
   "second": null,
   "third": 3,
   "fourth": 8
 },
 {
   "no": 26,
   "name": "Dendobrium bigibbum",
   "first": null,
   "second": null,
   "third": 10,
   "fourth": 20
 },
 {
   "no": 27,
   "name": "Caladium bicolor",
   "first": null,
   "second": null,
   "third": null,
   "fourth": 15
 },
 {
   "no": 28,
   "name": "Alocasia macrorrhizos",
   "first": null,
   "second": null,
   "third": null,
   "fourth": 8
 }
]


class Arboretum extends React.Component{
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
                    <h2>Arboretum Gambut Marsawa</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card body style={{border: 'none'}}>
                    <div style={{textAlign: 'center'}}>
                      Bencana kebakaran hutan dan lahan yang ada di Indonesia merupakan salah satu bencana 
                      rutin yang terjadi dalam beberapa tahun terakhir. Imbas bencana ini menyebabkan terjadinya 
                      kabut asap yang melanda tak hanya di dalam negeri tetapi hingga negara – negara tetangga 
                      seperti Singapura dan Malaysia. Hal ini menjadikannya tak hanya bencana lokal tetapi 
                      sebagai bencana nasional. Salah satu provinsi yang terdampak paling parah ialah Riau. 
                      Kebakaran lahan dan hutan yang ada di Riau ini terjadi akibat beberapa hal baik secara 
                      disengaja maupun tidak disengaja.
                      <br></br>
                      <br></br>
                      Menurut Wahana Lingkungan Hidup Indonesia atau Walhi, kebakaran hutan dan lahan di Riau 
                      merupakan salah satu bencana tahunan yang disebabkan oleh perilaku manusia. Fakta lapangan 
                      menunjukkan bahwa ada faktor kesengajaan membakar hutan dan lahan. Tujuan pembakaran 
                      tersebut adalah untuk melakukan pembersihan lahan dalam rangka persiapan pembangunan 
                      perkebunan.
                      <br></br>
                      <br></br>
                      Kebakaran lahan dan hutan ini menimbulkan kerugian baik materiil hingga korban jiwa. 
                      Kebakaran juga menyebabka terjadinya degradasi lahan gambut yang menimbulkan besarnya 
                      emisi karbon yang lepas di udara dan juga hilangnya biodiversitas di sekitarnya. 
                      (Johansen, 2015). Bahkan bencana kebakaran hutan dan lahan pada tahun 2016 ini juga 
                      mengakibatkan kerugian besar kurang lebih US$ 16 milyar di sektor lingkungan hidup, 
                      ekonomi, wisata, maupun pendidikan (CIFOR, 2018). 
                      <br></br>
                      <br></br>
                      Di Sungai Pakning, Kabupaten Bengkalis, ketika terjadi bencana kebakaran lahan dan hutan 
                      menimbulkan banyak kerugian antara lain 86 ha lahan produktif yang terbakar, terganggunya 
                      aktifitas masyarakat, hingga menimbulkan korban jiwa akibat ISPA.  Oleh karena itu PT 
                      Pertamina RU II Sungai Paning, sebagai salah satu perusahaan yang berada di wilayah Sungai 
                      Pakning, Bengkalis, Provinsi Riau ikut andil dalam upaya penanganan bencana kebakaran hutan 
                      dan lahan melalui program CSR (Coorporate Social Responsibility) dengan Program Kampung 
                      Gambut Berdikari dengan mitra binaan Petani, MPA, sekolah - sekolah dan beberapa masyarakat 
                      lainnya. Salah satunya Arboretum Gambut Marsawa Program Keanekaragaman Hayati yang dijadikan 
                      ebagai pusat pembelajaran tanaman – tanaman gambut dan pengelolaan lahan gambut. Didalamnya 
                      juga dilakukan konservasi tanaman – tanaman langka seperti Kantong Semar Sumatera ataupun 
                      Kantong Semar Spectabilis.
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Tanaman di Arboretum Gambut Tahun 2018 - 2021</h3>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>No</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Ilmiah</th>
                        <th colspan="4" style={{textAlign: 'center'}}>Jumlah</th>
                      </tr>
                      <tr>
                        <td style={{textAlign: 'center'}}>2018</td>
                        <td style={{textAlign: 'center'}}>2019</td>
                        <td style={{textAlign: 'center'}}>2020</td>
                        <td style={{textAlign: 'center'}}>2021</td>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.name}</td>
                            <td style={{textAlign: 'center'}}>{listValue.first}</td>
                            <td style={{textAlign: 'center'}}>{listValue.second}</td>
                            <td style={{textAlign: 'center'}}>{listValue.third}</td>
                            <td style={{textAlign: 'center'}}>{listValue.fourth}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="2">Jumlah</td>
                        <td style={{textAlign: 'center'}}>221</td>
                        <td style={{textAlign: 'center'}}>913</td>
                        <td style={{textAlign: 'center'}}>1066</td>
                        <td style={{textAlign: 'center'}}>1609</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row style={{paddingTop: 45}}>
                <Col style={{textAlign: 'center'}}>
                  <h5>Jumlah Spesies di Arboretum Gambut Tahun 2018-2021</h5>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th style={{textAlign: 'center'}}>2018</th>
                        <th style={{textAlign: 'center'}}>2019</th>
                        <th style={{textAlign: 'center'}}>2020</th>
                        <th style={{textAlign: 'center'}}>2021</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{textAlign: 'center'}}>Jumlah Spesies</td>
                        <td style={{textAlign: 'center'}}>13</td>
                        <td style={{textAlign: 'center'}}>24</td>
                        <td style={{textAlign: 'center'}}>26</td>
                        <td style={{textAlign: 'center'}}>28</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col style={{textAlign: 'center'}}>
                  <div>
                    <h5>Perkembangan Biodiversitas</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 35]}
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
                        text="Jumlah Spesies"
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
                          {x: '2018', y: 13},
                          {x: '2019', y: 24},
                          {x: '2020', y: 26},
                          {x: '2021', y: 28},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2018', y: 13, yOffset: -25},
                          {x: '2019', y: 24, yOffset: -25},
                          {x: '2020', y: 26, yOffset: -25},
                          {x: '2021', y: 28, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={[
                          {x: '2018', y: 16, yOffset: -25},
                          {x: '2019', y: 20, yOffset: -25},
                          {x: '2020', y: 25, yOffset: -25},
                          {x: '2021', y: 30, yOffset: -25},
                        ]} 
                      />
                    </XYPlot>
                  </div>
                </Col>
              </Row>
              <Row style={{paddingTop: 30}}>
                <Col style={{textAlign: 'center'}}>
                  <h5>Indeks Keanekaragaman Hayati Arboretum Gambut Tahun 2018-2021</h5>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th style={{textAlign: 'center'}}>2018</th>
                        <th style={{textAlign: 'center'}}>2019</th>
                        <th style={{textAlign: 'center'}}>2020</th>
                        <th style={{textAlign: 'center'}}>2021</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{textAlign: 'center'}}>Indeks Kehati</td>
                        <td style={{textAlign: 'center'}}>1.37</td>
                        <td style={{textAlign: 'center'}}>2.55</td>
                        <td style={{textAlign: 'center'}}>2.69</td>
                        <td style={{textAlign: 'center'}}>2.72</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col style={{textAlign: 'center'}}>
                  <div>
                    <h5>Index Keanekaragaman Hayati</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 3]}
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
                          {x: '2018', y: 1.37},
                          {x: '2019', y: 2.55},
                          {x: '2020', y: 2.69},
                          {x: '2021', y: 2.72},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2018', y: 1.37, yOffset: -25},
                          {x: '2019', y: 2.55, yOffset: -25},
                          {x: '2020', y: 2.69, yOffset: -25},
                          {x: '2021', y: 2.72, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={[
                          {x: '2018', y: 1.7, yOffset: -25},
                          {x: '2019', y: 2.12, yOffset: -25},
                          {x: '2020', y: 2.54, yOffset: -25},
                          {x: '2021', y: 2.96, yOffset: -25},
                        ]} 
                      />
                    </XYPlot>
                  </div>
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
                      <Card.Title>Mangrove Pangkalan Jambi</Card.Title>
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
)(Arboretum);
