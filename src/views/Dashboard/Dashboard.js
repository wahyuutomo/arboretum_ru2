import React from 'react';
import './Dashboard.css';
import 'react-vis/dist/style.css';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/Card';

import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ColoredLine from '../../components/Common/ColoredLine.js'

import { useHistory } from 'react-router-dom';


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
import { fetchPeopleCounter } from '../../redux/action';
import { fetchPeopleCount } from '../../api/api';

import logo_pertamina from "../../assets/logo_pertamina.png"
import img2 from "../../assets/2.jpeg"
import img3 from "../../assets/3.jpeg"
import img6 from "../../assets/6.jpeg"
import img7 from "../../assets/7.jpeg"
import img8 from "../../assets/8.jpeg"
import img9 from "../../assets/9.jpeg"
import img10 from "../../assets/10.jpeg"
import img11 from "../../assets/11.jpeg"
import img14 from "../../assets/14.jpeg"
import img16 from "../../assets/16.jpeg"
import img19 from "../../assets/19.jpeg"


const table_data = [
    {
        "no": "1",
        "name": "Nepenthes ampullaria Jack",
        "first": "51",
        "second": "56",
        "third": "56"
    },
    {
        "no": "2",
        "name": "Nepenthes rafflesiana Jack",
        "first": "49",
        "second": "60",
        "third": "70"
    },
    {
        "no": "3",
        "name": "Nepenthes bicalcarata Hook",
        "first": "34",
        "second": "42",
        "third": "54"
    },
    {
        "no": "4",
        "name": "Nepenthes mirabilis (Lour) Druce",
        "first": "40",
        "second": "43",
        "third": "50"
    },
    {
        "no": "5",
        "name": "Nepenthes sumatrana",
        "first": "5",
        "second": "7",
        "third": "15"
    },
    {
        "no": "6",
        "name": "Nepenthes spectabilis",
        "first": "10",
        "second": "11",
        "third": "20"
    },
    {
        "no": "7",
        "name": "Nepenthes albomarginata",
        "first": "32",
        "second": "32",
        "third": "32"
    },
    {
        "no": "8",
        "name": "Gomphandra capitulata",
        "first": "-",
        "second": "3",
        "third": "3"
    },
    {
        "no": "9",
        "name": "Aquilaria malacensis",
        "first": "-",
        "second": "8",
        "third": "8"
    },
    {
        "no": "10",
        "name": "Melaleuca leucadendron",
        "first": "-",
        "second": "30",
        "third": "30"
    },
    {
        "no": "11",
        "name": "Cratoxylon arbores",
        "first": "-",
        "second": "13",
        "third": "13"
    },
    {
        "no": "12",
        "name": "Syzygium aqueum",
        "first": "-",
        "second": "23",
        "third": "23"
    },
    {
        "no": "13",
        "name": "Syzygium malaccense",
        "first": "-",
        "second": "3",
        "third": "3"
    },
    {
        "no": "14",
        "name": "Citrus sp.",
        "first": "-",
        "second": "3",
        "third": "3"
    },
    {
        "no": "15",
        "name": "Hevea brasiliensis",
        "first": "-",
        "second": "58",
        "third": "58"
    },
    {
        "no": "16",
        "name": "Syzygium leptostemonum",
        "first": "-",
        "second": "80",
        "third": "80"
    },
    {
        "no": "17",
        "name": "Vitex pubescens",
        "first": "-",
        "second": "38",
        "third": "38"
    },
    {
        "no": "18",
        "name": "Macaranga trilobata",
        "first": "-",
        "second": "8",
        "third": "8"
    },
    {
        "no": "19",
        "name": "Gomphandra capitulata",
        "first": "-",
        "second": "176",
        "third": "176"
    },
    {
        "no": "20",
        "name": "Dimocarpus longan",
        "first": "-",
        "second": "15",
        "third": "15"
    },
    {
        "no": "21",
        "name": "Artocarpus heterophyllus",
        "first": "-",
        "second": "5",
        "third": "5"
    },
    {
        "no": "22",
        "name": "Nephelium lappeceum",
        "first": "-",
        "second": "3",
        "third": "3"
    },
    {
        "no": "23",
        "name": "Shorea leprosula",
        "first": "-",
        "second": "3",
        "third": "100"
    },
    {
        "no": "24",
        "name": "Setulang",
        "first": "-",
        "second": "193",
        "third": "193"
    },
    {
        "no": "25",
        "name": "Asplenium nidus",
        "first": "-",
        "second": "-",
        "third": "3"
    },
    {
        "no": "26",
        "name": "Dendobrium bigibbum",
        "first": "-",
        "second": "-",
        "third": "10"
    },
]


class Dashboard extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      isBusy: true,
      data:[]
    };
  }

  componentDidMount = () => {
    fetchPeopleCount().then(
      data => {
        this.setState((prevState, props) => {
          return {data: data, isBusy: false};
        })
        this.props.fetchPeopleCounter(data)
      }
    )
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
              <Row style={{background: '#fff', paddingTop: 30, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h2>PROGRAM KEANEKARAGAMAN HAYATI</h2>
                    <h3>PT PERTAMINA RU II SUNGAI PAKNING</h3>
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
                  <Card as="Button" onClick={()=>{this.props.history.push("/arboretum")}}>
                    <Card.Img variant="top" 
                      src={img9}
                      height='240'
                      />
                    <Card.Body className="text-center">
                      <Card.Title>Arboretum Gambut</Card.Title>
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
                      <Card.Title>Mangrove Pangkalan Jambi</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col style={{background: '#fff'}}>
                  <Card as="Button" onClick={()=>{this.props.history.push("/mangrove-tanjung-leban")}}>
                    <Card.Img variant="top" 
                      src={img16}
                      height='240'
                      />
                    <Card.Body className="text-center">
                      <Card.Title>Mangrove Tanjung Leban</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Latar Belakang</h3>
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
                      Sungai Pakning berada di wilayah pesisir Provinsi Riau, 
                      berseberangan dengan Pulau Bengkalis. 
                      Permasalahan umum yang nampak di wilayah Sungai Pakning antara lain kebakaran lahan dan hutan serta abrasi. 
                      Berbagai upaya telah dilakukan masyarakat dari dahulu hingga sekarang, untuk memecahkan permasalahan itu, 
                      namun masyarakat sering mengalami kegagalan baik dalam proses penanaman mangrove sebagai upaya pencegahan 
                      bencana abrasi maupun pencegahan karhutlah. Hal itu disebabkan karena kurangnya pengetahuan mengenai tatacara 
                      penanaman mangrove dan besarnya arus yang menggerus daratan mereka. Mulai tahun 2017 PT Pertamina RU II Sungai 
                      Pakning mulai memperkenalkan beberapa metode alat pemecah ombak yang digunakan untuk meningkatkan keberhasilan 
                      penanaman mangrove dan pencegahan abrasi antara lain hybrid engineering, lalu hybrid engineering yang telah 
                      dimodifikasi dan terakhir ialah triangle mangrove barrier. Di wilayah gambut Pertamina RU II Sungai Pakning juga 
                      memperkenalkan Arboretum Gambut sebagai solusinya.
                      <br></br>
                      <br></br>
                      Selain itu sebagai wujud kepedulian PT. Pertamina RU II Sungai Pakning terhadap perlindungan biodiversity mangrove 
                      maka dibangunlah Mangrove Education Center (MEC) Pangkalan Jambi sebagai tempat implementasi konservasi biodiversity 
                      ekosistem mangrove dan untuk edukasi terhadap masyarakat, Arboretum Gambut sebagai tempat pelestarian flora dan 
                      fauna di wilayah dagmbut, serta Mangrove Desa Tanjung leban sebagai wilayah konservasi pesisir.  Sebagai bagian 
                      dari pengelolaan maka PT. Pertamina RU II Sungai Pakning secara rutin melakukan pemantauan/monev perkembangan 
                      biodiversity di dalamnya. Untuk itu didalam laporan ini akan dijelaskan mengenai kenaikan indeks keanekaragaman 
                      hayati yang terjadi di masing – masing lokasi Program Keanekaragaman Hayati.
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row style={{paddingTop: 30, alignItems: 'center', justifyContent: 'center'}}>
                <CardColumns style={{border: 'none'}}>
                  <Card style={{width: 340}}>
                    <Card.Img variant="top" 
                      src={img11}
                      width='300'
                      height='400'
                      />
                  </Card>
                  <Card style={{width: 340}}>
                    <Card.Img variant="top" 
                      src={img7}
                      width='300'
                      height='240'
                      />
                  </Card>
                </CardColumns>
                <CardColumns style={{border: 'none'}}>
                  <Card style={{width: 340}}>
                    <Card.Img variant="top" 
                      src={img6}
                      width='300'
                      height='240'
                      />
                  </Card>
                  <Card style={{width: 340}}>
                    <Card.Img variant="top" 
                      src={img10}
                      width='300'
                      height='400'
                      />
                  </Card>
                </CardColumns>
                <CardColumns style={{border: 'none'}}>
                  <Card style={{width: 340}}>
                    <Card.Img variant="top" 
                      src={img8}
                      width='300'
                      height='400'
                      />
                  </Card>
                  <Card style={{width: 340}}>
                    <Card.Img variant="top" 
                      src={img19}
                      width='300'
                      height='240'
                      />
                  </Card>
                </CardColumns>
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
                    <ListGroup.Item href="https://arboretumgambut.com">Arboretum Gambut</ListGroup.Item>
                    <ListGroup.Item href="https://sekolahcintagambut.com">Sekolah Cinta Gambut</ListGroup.Item>
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
  { fetchPeopleCounter }
)(Dashboard);
