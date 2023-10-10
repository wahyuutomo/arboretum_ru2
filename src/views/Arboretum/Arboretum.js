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
import kda3 from "../../assets/kda3.jpeg"
import img9 from "../../assets/9.jpeg"
import img14 from "../../assets/14.jpeg"
import poligowo3 from "../../assets/poligowo3.jpeg"

import * as table_data from "./data.js"


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
              {/* HEADER */}
              <Row style={{height: 60, padding:10}}>
                <Col sm={8} md={8} lg={9} style={{background: '#fff'}}>
                  <div style={{fontSize: 24, textAlignVertical:'center'}}>Pertamina RU II Sungai Pakning</div>
                </Col>
                <Col sm={4} md={4} lg={3} float="center" style={{background: '#fff', display: 'flex', justifyContent:'flex-end'}}><img alt="" src={logo_pertamina} height="35"/></Col>
              </Row>

              {/* CAROUSEL */}
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

              {/* DESCRIPTION */}
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
                    <h3>Jumlah Spesies Tanaman di Arboretum Gambut</h3>
                  </div>
                </Col>
              </Row>

              {/* FLORA TABLE */}
              <Row>
                <Col>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>No</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Ilmiah</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Lokal</th>
                        <th colspan="5" style={{textAlign: 'center'}}>Jumlah</th>
                      </tr>
                      <tr>
                        <td style={{textAlign: 'center'}}>2021</td>
                        <td style={{textAlign: 'center'}}>2022</td>
                        <td style={{textAlign: 'center'}}>2023</td>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data.flora.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.spesies}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama_lokal}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2021}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2022}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2023}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="3">Jumlah</td>
                        {table_data.data_count.flora.map(( listValue, index ) => {
                        return (
                            <td style={{textAlign: 'center'}}>{listValue.y}</td>
                        );
                        })}
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

              {/* FLORA SPECIES COUNT */}
              <Row style={{paddingTop: 45}}>
                <Col style={{textAlign: 'center'}}>
                  <h5>Jumlah Spesies di Arboretum Gambut Tahun 2019-2023</h5>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th style={{textAlign: 'center'}}>Tahun</th>
                        <th style={{textAlign: 'center'}}>Jumlah Spesies</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data.total_species.flora.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{listValue.x}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
                <Col style={{textAlign: 'center'}}>
                  <div>
                    <h5>Perkembangan Biodiversitas</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 60]}
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
                        data={table_data.total_species.flora}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={table_data.total_species.flora} 
                        getLabel={d => d.y}/>
                      {/*<LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={jumlah_spesies} 
                      />*/}
                    </XYPlot>
                  </div>
                </Col>
              </Row>

              {/* FLORA H INDEX */}
              <Row style={{paddingTop: 30}}>
                <Col style={{textAlign: 'center'}}>
                  <h5>Indeks Keanekaragaman Hayati Arboretum Gambut Tahun 2019-2023</h5>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th style={{textAlign: 'center'}}>Tahun</th>
                        <th style={{textAlign: 'center'}}>Indeks Kehati</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data.h_index.flora.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{listValue.x}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
                <Col style={{textAlign: 'center'}}>
                  <div>
                    <h5>Index Keanekaragaman Hayati</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 5]}
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
                     {/* <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={[
                          //{x: '2018', y: 1.7, yOffset: -25},
                          {x: '2019', y: 2.12, yOffset: -25},
                          {x: '2020', y: 2.54, yOffset: -25},
                          {x: '2021', y: 2.96, yOffset: -25},
                          {x: '2022', y: 3.30, yOffset: -25},
                          {x: '2023', y: 3.36, yOffset: -25},
                        ]} 
                      />*/}
                    </XYPlot>
                  </div>
                </Col>
              </Row>

              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Burung di Arboretum Gambut</h3>
                  </div>
                </Col>
              </Row>

              {/* BIRDS TABLE */}
              <Row>
                <Col>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>No</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Ilmiah</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Lokal</th>
                        <th colspan="5" style={{textAlign: 'center'}}>Jumlah</th>
                      </tr>
                      <tr>
                        <td style={{textAlign: 'center'}}>2022</td>
                        <td style={{textAlign: 'center'}}>2023</td>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data.birds.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.spesies}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama_lokal}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2022}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2023}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="3">Jumlah</td>
                        {table_data.data_count.birds.map(( listValue, index ) => {
                        return (
                            <td style={{textAlign: 'center'}}>{listValue.y}</td>
                        );
                        })}
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              
              {/* BIRDS H INDEX */}
              <Row style={{paddingTop: 45}}>
                <Col md={4} style={{textAlign: 'center'}}>
                </Col>
                <Col md={4} style={{textAlign: 'center'}}>
                  <div>
                    <h5>H' Burung</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[2.5, 3]}
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
                        data={table_data.h_index.birds}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={table_data.h_index.birds} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={table_data.h_index_lines.birds} 
                      />
                    </XYPlot>
                  </div>
                </Col>
                <Col md={4} style={{textAlign: 'center'}}>
                </Col>
              </Row>


              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Mamalia di Arboretum Gambut</h3>
                  </div>
                </Col>
              </Row>

              {/* MAMMALS TABLE */}
              <Row>
                <Col>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>No</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Ilmiah</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Lokal</th>
                        <th colspan="2" style={{textAlign: 'center'}}>Jumlah</th>
                      </tr>
                      <tr>
                        <td style={{textAlign: 'center'}}>2022</td>
                        <td style={{textAlign: 'center'}}>2023</td>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data.mammals.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.spesies}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama_lokal}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2022}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2023}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="3">Jumlah</td>
                        {table_data.data_count.mammals.map(( listValue, index ) => {
                        return (
                            <td style={{textAlign: 'center'}}>{listValue.y}</td>
                        );
                        })}
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

              {/* MAMMALS H INDEX */}
              <Row style={{paddingTop: 45}}>
                <Col md={4} style={{textAlign: 'center'}}>
                </Col>
                <Col md={4} style={{textAlign: 'center'}}>
                  <div>
                    <h5>H' Mamalia</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 2]}
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
                        text=""
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
                        data={table_data.h_index.mammals}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={table_data.h_index.mammals} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={table_data.h_index_lines.mammals} 
                      />
                    </XYPlot>
                  </div>
                </Col>
                <Col md={4} style={{textAlign: 'center'}}>
                </Col>
              </Row>

              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Herpetofauna di Arboretum Gambut</h3>
                  </div>
                </Col>
              </Row>

              {/* HERPETOFAUNA TABLE */}
              <Row>
                <Col>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>No</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Ilmiah</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Lokal</th>
                        <th colspan="2" style={{textAlign: 'center'}}>Jumlah</th>
                      </tr>
                      <tr>
                        <td style={{textAlign: 'center'}}>2022</td>
                        <td style={{textAlign: 'center'}}>2023</td>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data.hepertofauna.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.spesies}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama_lokal}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2022}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2023}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="3">Jumlah</td>
                        {table_data.data_count.herpetofauna.map(( listValue, index ) => {
                        return (
                            <td style={{textAlign: 'center'}}>{listValue.y}</td>
                        );
                        })}
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

              {/* HERPETOFAUNA H INDEX */}
              <Row style={{paddingTop: 45}}>
                <Col md={4} style={{textAlign: 'center'}}>
                </Col>
                <Col md={4} style={{textAlign: 'center'}}>
                  <div>
                    <h5>H' Herpetofauna</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 2]}
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
                        text=""
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
                        data={table_data.h_index.herpetofauna}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={table_data.h_index.herpetofauna} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={table_data.h_index_lines.herpetofauna} 
                      />
                    </XYPlot>
                  </div>
                </Col>
                <Col md={4} style={{textAlign: 'center'}}>
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
                <Col style={{background: '#fff'}}>
                  <Card style={{borderWidth:0}} as="Button" onClick={()=>{this.props.history.push("/konservasi-daerah-aliran")}}>
                    <Card.Img variant="top" 
                      src={kda3}
                      height='240'
                      />
                    <Card.Body className="text-center">
                      <Card.Title>Konservasi Daerah Aliran Sungai Dayang</Card.Title>
                    </Card.Body>
                    
                  </Card>
                </Col>
              </Row>

              {/* FOOTER */}
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
