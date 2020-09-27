import React from 'react';
import './Dashboard.css';
import 'react-vis/dist/style.css';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

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
import img18 from "../../assets/18.jpeg"
import img19 from "../../assets/19.jpeg"
import img20 from "../../assets/20.jpeg"
import edu_game from "../../assets/edu_game.png"


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
    const data = this.props.data.data

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
                <Col sm={4} md={4} lg={3} float="center" style={{background: '#fff', display: 'flex', justifyContent:'flex-end'}}><img src={logo_pertamina} height="35"/></Col>
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
                  <Card as="a" onClick={()=>window.open("https://arboretumgambut.com", "_blank")}>
                    <Card.Img variant="top" 
                      src={img19}
                      height='240'
                      />
                    <Card.Body className="text-center">
                      <Card.Title>Arboretum Gambut</Card.Title>
                    </Card.Body>
                    
                  </Card>
                </Col>
                <Col style={{background: '#fff'}}>
                  <Card as="a" onClick={()=>window.open("http://sekolahcintagambut.com", "_blank")}>
                    <Card.Img variant="top" 
                      src={img10}
                      height='240'
                      />
                    <Card.Body className="text-center">
                      <Card.Title>Sekolah Cinta Gambut</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col style={{background: '#fff'}}>
                  <Card as="a" onClick={()=>window.open("https://games.covid-19.sekolahcintagambut.com/home", "_blank")}>
                    <Card.Img variant="top" 
                      src={edu_game}
                      height='240'
                      />
                    <Card.Body className="text-center">
                      <Card.Title>Covid-19 Education Game</Card.Title>
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
                    <div style={{textAlign: 'center'}}><a>
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
                      </a>
                      <br></br>
                      <br></br>
                      <a>
                      Selain itu sebagai wujud kepedulian PT. Pertamina RU II Sungai Pakning terhadap perlindungan biodiversity mangrove 
                      maka dibangunlah Mangrove Education Center (MEC) Pangkalan Jambi sebagai tempat implementasi konservasi biodiversity 
                      ekosistem mangrove dan untuk edukasi terhadap masyarakat, Arboretum Gambut sebagai tempat pelestarian flora dan 
                      fauna di wilayah dagmbut, serta Mangrove Desa Tanjung leban sebagai wilayah konservasi pesisir.  Sebagai bagian 
                      dari pengelolaan maka PT. Pertamina RU II Sungai Pakning secara rutin melakukan pemantauan/monev perkembangan 
                      biodiversity di dalamnya. Untuk itu didalam laporan ini akan dijelaskan mengenai kenaikan indeks keanekaragaman 
                      hayati yang terjadi di masing – masing lokasi Program Keanekaragaman Hayati.
                    </a></div>
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
                      src={img9}
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
                      src={img16}
                      width='300'
                      height='240'
                      />
                  </Card>
                </CardColumns>
              </Row>
              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Tanaman di Arboretum Gambut Tahun 2018 - 2020</h3>
                  </div>
                  <div>
                    <ColoredLine/>
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
                        <th colspan="3" style={{textAlign: 'center'}}>Jumlah</th>
                      </tr>
                      <tr>
                        <td style={{textAlign: 'center'}}>2018</td>
                        <td style={{textAlign: 'center'}}>2019</td>
                        <td style={{textAlign: 'center'}}>2020</td>
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
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="2">Jumlah</td>
                        <td style={{textAlign: 'center'}}>221</td>
                        <td style={{textAlign: 'center'}}>913</td>
                        <td style={{textAlign: 'center'}}>1066</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row style={{paddingTop: 45}}>
                <Col style={{textAlign: 'center'}}>
                  <h5>Jumlah Spesies di Arboretum Gambut Tahun 2018-2020</h5>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th style={{textAlign: 'center'}}>2018</th>
                        <th style={{textAlign: 'center'}}>2019</th>
                        <th style={{textAlign: 'center'}}>2020</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{textAlign: 'center'}}>Jumlah Spesies</td>
                        <td style={{textAlign: 'center'}}>13</td>
                        <td style={{textAlign: 'center'}}>24</td>
                        <td style={{textAlign: 'center'}}>26</td>
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
                      yDomain={[0, 30]}
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
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2018', y: 13, yOffset: -25},
                          {x: '2019', y: 24, yOffset: -25},
                          {x: '2020', y: 26, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={[
                          {x: '2018', y: 13, yOffset: -25},
                          {x: '2019', y: 19.5, yOffset: -25},
                          {x: '2020', y: 26, yOffset: -25},
                        ]} 
                      />
                    </XYPlot>
                  </div>
                </Col>
              </Row>
              <Row style={{paddingTop: 30}}>
                <Col style={{textAlign: 'center'}}>
                  <h5>Indeks Keanekaragaman Hayati Arboretum Gambut Tahun 2018-2020</h5>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th style={{textAlign: 'center'}}>2018</th>
                        <th style={{textAlign: 'center'}}>2019</th>
                        <th style={{textAlign: 'center'}}>2020</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{textAlign: 'center'}}>Indeks Kehati</td>
                        <td style={{textAlign: 'center'}}>1.37</td>
                        <td style={{textAlign: 'center'}}>2.55</td>
                        <td style={{textAlign: 'center'}}>2.69</td>
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
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2018', y: 1.37, yOffset: -25},
                          {x: '2019', y: 2.55, yOffset: -25},
                          {x: '2020', y: 2.69, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={[
                          {x: '2018', y: 1.37, yOffset: -25},
                          {x: '2019', y: 2.03, yOffset: -25},
                          {x: '2020', y: 2.69, yOffset: -25},
                        ]} 
                      />
                    </XYPlot>
                  </div>
                </Col>
              </Row>
              <Row style={{paddingTop: 60}}>
                <Col>
                  <ColoredLine/>
                </Col>
              </Row>
              <Row style={{paddingTop: 20, paddingLeft: 30, paddingBottom: 30, height: 240, background: '#fff'}}>
                <Col>
                  <h5>Websites</h5>
                  <ListGroup variant="flush">
                    <ListGroup.Item href="https://arboretumgambut.com">Arboretum Gambut</ListGroup.Item>
                    <ListGroup.Item href="https://sekolahcintagambut.com">Sekolah Cinta Gambut</ListGroup.Item>
                    <ListGroup.Item href="https://games.covid-19.sekolahcintagambut.com/home">Covid-19 Education Game</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col></Col>
                <Col>
                  <h5>Contact Us</h5>
                  <a>Address: <br></br>Sungai Pakning, Bukit Batu, Bengkalis Regency, Riau 28761</a>
                </Col>
              </Row>
              <Row style={{paddingTop: 10}}>
                <Col>
                  <ColoredLine/>
                </Col>
              </Row>
              <Row style={{paddingBottom: 60}}>
                <Col>
                  <a>© Copyright PT Pertamina(Persero) RU II Sungai Pakning 2020. All Rights Reserved.</a>
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
