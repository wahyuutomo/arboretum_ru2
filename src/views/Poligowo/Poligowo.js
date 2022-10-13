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


// const table_data = [
//  {
//    "no": 1,
//    "nama": "Jambu mete",
//    "jumlah": 2,
//    "pi": "0,01",
//    "ln_pi": "5,26",
//    "h": "0,03"
//  },
//   {
//    "no": 2,
//    "nama": "Gaharu",
//    "jumlah": 45,
//    "pi": "0,12",
//    "ln_pi": "2,14",
//    "h": "0,25"
//  },
//  {
//    "no": 3,
//    "nama": "Nangka",
//    "jumlah": 98,
//    "pi": "0,26",
//    "ln_pi": "1,37",
//    "h": "0,35"
//  },
//  {
//    "no": 4,
//    "nama": "Pete",
//    "jumlah": 43,
//    "pi": "0,11",
//    "ln_pi": "2,19",
//    "h": "0,25"
//  },
//  {
//    "no": 5,
//    "nama": "Durian",
//    "jumlah": 4,
//    "pi": "0,01",
//    "ln_pi": "4,56",
//    "h": "0,05"
//  },
//  {
//    "no": 6,
//    "nama": "Geronggang",
//    "jumlah": 91,
//    "pi": "0,24",
//    "ln_pi": "1,44",
//    "h": "0,34"
//  },
//  {
//    "no": 7,
//    "nama": "Timah - timah",
//    "jumlah": 32,
//    "pi": "0,08",
//    "ln_pi": "2,48",
//    "h": "0,21"
//  },
//  {
//    "no": 8,
//    "nama": "Mahang",
//    "jumlah": 3,
//    "pi": "0,01",
//    "ln_pi": "4,85",
//    "h": "0,04"
//  },
//  {
//    "no": 9,
//    "nama": "Tenggek burung",
//    "jumlah": 11,
//    "pi": "0,03",
//    "ln_pi": "3,55",
//    "h": "0,10"
//  },
//  {
//    "no": 10,
//    "nama": "Medang",
//    "jumlah": 6,
//    "pi": "0,02",
//    "ln_pi": "4,16",
//    "h": "0,06"
//  },
//  {
//    "no": 11,
//    "nama": "Gelam",
//    "jumlah": 8,
//    "pi": "0,02",
//    "ln_pi": "3,87",
//    "h": "0,08"
//  },
//  {
//    "no": 12,
//    "nama": "Kelapa",
//    "jumlah": 3,
//    "pi": "0,01",
//    "ln_pi": "4,85",
//    "h": "0,04"
//  },
//  {
//    "no": 13,
//    "nama": "Nasi - nasi",
//    "jumlah": 3,
//    "pi": "0,01",
//    "ln_pi": "4,85",
//    "h": "0,04"
//  },
//  {
//    "no": 14,
//    "nama": "Serai Wangi",
//    "jumlah": 15,
//    "pi": "0,04",
//    "ln_pi": "3,24",
//    "h": "0,13"
//  },
//  {
//    "no": 15,
//    "nama": "Aren",
//    "jumlah": 20,
//    "pi": "0,05",
//    "ln_pi": "2,95",
//    "h": "0,15"
//  }
// ]

// const table_data_2 = [
//  {
//    "no": 1,
//    "nama": "Jambu mete",
//    "jumlah": 2,
//    "pi": "0,01",
//    "ln_pi": "5,26",
//    "h": "0,03"
//  },
//  {
//    "no": 2,
//    "nama": "Gaharu",
//    "jumlah": 45,
//    "pi": "0,12",
//    "ln_pi": "2,14",
//    "h": "0,28"
//  },
//  {
//    "no": 3,
//    "nama": "Nangka",
//    "jumlah": 30,
//    "pi": "0,26",
//    "ln_pi": "1,37",
//    "h": "0,22"
//  },
//  {
//    "no": 4,
//    "nama": "Pete",
//    "jumlah": 43,
//    "pi": "0,11",
//    "ln_pi": "2,19",
//    "h": "0,25"
//  },
//  {
//    "no": 5,
//    "nama": "Durian",
//    "jumlah": 4,
//    "pi": "0,01",
//    "ln_pi": "4,56",
//    "h": "0,05"
//  },
//  {
//    "no": 6,
//    "nama": "Geronggang",
//    "jumlah": 91,
//    "pi": "0,24",
//    "ln_pi": "1,44",
//    "h": "0,34"
//  },
//  {
//    "no": 7,
//    "nama": "Timah - timah",
//    "jumlah": 32,
//    "pi": "0,08",
//    "ln_pi": "2,48",
//    "h": "0,21"
//  },
//  {
//    "no": 8,
//    "nama": "Mahang",
//    "jumlah": 3,
//    "pi": "0,01",
//    "ln_pi": "4,85",
//    "h": "0,04"
//  },
//  {
//    "no": 9,
//    "nama": "Tenggek burung",
//    "jumlah": 11,
//    "pi": "0,03",
//    "ln_pi": "3,55",
//    "h": "0,10"
//  },
//  {
//    "no": 10,
//    "nama": "Medang",
//    "jumlah": 6,
//    "pi": "0,02",
//    "ln_pi": "4,16",
//    "h": "0,06"
//  },
//  {
//    "no": 11,
//    "nama": "Gelam",
//    "jumlah": 8,
//    "pi": "0,02",
//    "ln_pi": "3,87",
//    "h": "0,08"
//  },
//  {
//    "no": 12,
//    "nama": "Kelapa",
//    "jumlah": 3,
//    "pi": "0,01",
//    "ln_pi": "4,85",
//    "h": "0,04"
//  },
//  {
//    "no": 13,
//    "nama": "Nasi - nasi",
//    "jumlah": 3,
//    "pi": "0,01",
//    "ln_pi": "4,85",
//    "h": "0,04"
//  },
//  {
//    "no": 14,
//    "nama": "Serai Wangi",
//    "jumlah": 15,
//    "pi": "0,04",
//    "ln_pi": "3,24",
//    "h": "0,13"
//  },
//  {
//    "no": 15,
//    "nama": "Aren",
//    "jumlah": 20,
//    "pi": "0,05",
//    "ln_pi": "2,95",
//    "h": "0,15"
//  }
// ]

const table_data_species = [
 {
   "No": 1,
   "Spesies": "Acasia mangium",
   "nama_lokal": "Akasia",
   "y2021": null,
   "y2022": 6
 },
 {
   "No": 2,
   "Spesies": "Alstonia pneumatophore",
   "nama_lokal": "Pulai Rawa",
   "y2021": 32,
   "y2022": 5
 },
 {
   "No": 3,
   "Spesies": "Anacardium occidentale",
   "nama_lokal": "Jambu Mete",
   "y2021": 2,
   "y2022": 3
 },
 {
   "No": 4,
   "Spesies": "Arenga pinnata",
   "nama_lokal": "Aren",
   "y2021": 20,
   "y2022": 20
 },
 {
   "No": 5,
   "Spesies": "Artocarpus heterophyllus",
   "nama_lokal": "Nangka",
   "y2021": 98,
   "y2022": 253
 },
 {
   "No": 6,
   "Spesies": "Aquilaria malacensis",
   "nama_lokal": "Gaharu",
   "y2021": null,
   "y2022": 45
 },
 {
   "No": 7,
   "Spesies": "Chamaedaphne calyculata",
   "nama_lokal": "Centingi",
   "y2021": null,
   "y2022": 5
 },
 {
   "No": 8,
   "Spesies": "Cocos nucifera",
   "nama_lokal": "kelapa",
   "y2021": 3,
   "y2022": 2
 },
 {
   "No": 9,
   "Spesies": "Cratoxylon arborescens",
   "nama_lokal": "Geronggang",
   "y2021": 91,
   "y2022": 1
 },
 {
   "No": 10,
   "Spesies": "Cymbopogon nardus",
   "nama_lokal": "Serai wangi",
   "y2021": null,
   "y2022": 15
 },
 {
   "No": 11,
   "Spesies": "Durio sp.",
   "nama_lokal": "Durian",
   "y2021": 4,
   "y2022": 1
 },
 {
   "No": 12,
   "Spesies": "Elaeis guinensis",
   "nama_lokal": "Sawit",
   "y2021": null,
   "y2022": 5
 },
 {
   "No": 13,
   "Spesies": "Gomphandra capitulate",
   "nama_lokal": "Malasiro",
   "y2021": 45,
   "y2022": 146
 },
 {
   "No": 14,
   "Spesies": "Hevea brasiliensis",
   "nama_lokal": "Karet",
   "y2021": null,
   "y2022": 205
 },
 {
   "No": 15,
   "Spesies": "Laucaena leucocephala",
   "nama_lokal": "Petai cina",
   "y2021": 43,
   "y2022": 10
 },
 {
   "No": 16,
   "Spesies": "Mangifera indica",
   "nama_lokal": "Mangga",
   "y2021": null,
   "y2022": 2
 },
 {
   "No": 17,
   "Spesies": "Macaranga trilobata",
   "nama_lokal": "Mahang",
   "y2021": 3,
   "y2022": 3
 },
 {
   "No": 18,
   "Spesies": "Parcia speciosa",
   "nama_lokal": "Petai",
   "y2021": 15,
   "y2022": 43
 },
 {
   "No": 19,
   "Spesies": "Phoebe",
   "nama_lokal": "Medang",
   "y2021": 6,
   "y2022": 11
 },
 {
   "No": 20,
   "Spesies": "Syzigium zeylanicum",
   "nama_lokal": "Nasi – nasi",
   "y2021": null,
   "y2022": 3
 },
 {
   "No": 21,
   "Spesies": "Melicope lunu ankeda",
   "nama_lokal": "Tengek Burung",
   "y2021": 11,
   "y2022": 6
 },
 {
   "No": 22,
   "Spesies": "Uncaria elliptica",
   "nama_lokal": "",
   "y2021": null,
   "y2022": 129
 },
 {
   "No": 23,
   "Spesies": "Syzygium aqueum",
   "nama_lokal": "Jambu Air",
   "y2021": null,
   "y2022": 1
 },
 {
   "No": 24,
   "Spesies": "Syzygium oleina",
   "nama_lokal": "Pucuk Merah",
   "y2021": null,
   "y2022": 2
 },
 {
   "No": 25,
   "Spesies": "Vaccinium varingifolium",
   "nama_lokal": "",
   "y2021": 8,
   "y2022": 1
 },
 {
   "No": 26,
   "Spesies": "Vitex pubescens",
   "nama_lokal": "Leban",
   "y2021": null,
   "y2022": 5
 }
]

const table_data_bird = [
 {
   "No": 1,
   "nama_lokal": "Jalak Kerbau",
   "spesies": "Acridotheres javanicus (Cabanis, 1851)",
   "y2022": 3
 },
 {
   "No": 2,
   "nama_lokal": "Walet Sarang Putih",
   "spesies": "Aerodramus hirundinaceus (Stresemann, 1914)",
   "y2022": 4
 },
 {
   "No": 3,
   "nama_lokal": "Burung Madu Kelapa",
   "spesies": "Anthreptes malacensis (Scopoli, 1786)",
   "y2022": 13
 },
 {
   "No": 4,
   "nama_lokal": "Pijantung Kampung",
   "spesies": "Arachnothera crassirostris (Reichenbach, 1853)",
   "y2022": 4
 },
 {
   "No": 5,
   "nama_lokal": "Kekep Babi",
   "spesies": "Artamus leucoryn (Linnaeus, 1771)",
   "y2022": 7
 },
 {
   "No": 6,
   "nama_lokal": "Layang-layang Loreng",
   "spesies": "Cecropis striolata (Schlegel, 1844)",
   "y2022": 10
 },
 {
   "No": 7,
   "nama_lokal": "Bubut Alang-alang",
   "spesies": "Centropus bengalensis (Gmelin, 1788)",
   "y2022": 2
 },
 {
   "No": 8,
   "nama_lokal": "Bubut Besar",
   "spesies": "Centropus sinensis (Stephens, 1815)",
   "y2022": 5
 },
 {
   "No": 9,
   "nama_lokal": "Walet Sapi",
   "spesies": "Collocalia esculenta (Linnaeus, 1758)",
   "y2022": 9
 },
 {
   "No": 10,
   "nama_lokal": "Layang-layang Rumah",
   "spesies": "Delichon dasypus (Bonaparte, 1850)",
   "y2022": 7
 },
 {
   "No": 11,
   "nama_lokal": "Cabai Merah",
   "spesies": "Dicaeum cruentatum (Linnaeus, 1758)",
   "y2022": 4
 },
 {
   "No": 12,
   "nama_lokal": "Cabai Jawa",
   "spesies": "Dicaeum trochileum (Sparrman, 1789)",
   "y2022": 5
 },
 {
   "No": 13,
   "nama_lokal": "Elang tikus",
   "spesies": "Elanus caeruleus (Desfontaines, 1789)",
   "y2022": 2
 },
 {
   "No": 14,
   "nama_lokal": "Perkutut Jawa",
   "spesies": "Geopelia striata (Linnaeus, 1766)",
   "y2022": 8
 },
 {
   "No": 19,
   "nama_lokal": "Kapasan Kemiri",
   "spesies": "Lalage nigra (J.R.Forster, 1781)",
   "y2022": 2
 },
 {
   "No": 20,
   "nama_lokal": "Bondol Haji",
   "spesies": "Lonchura maja (Linnaeus, 1766)",
   "y2022": 6
 },
 {
   "No": 21,
   "nama_lokal": "Burung Madu Sriganti",
   "spesies": "Nectarinia jugularis (Linnaeus, 1766)",
   "y2022": 7
 },
 {
   "No": 22,
   "nama_lokal": "Kutilang",
   "spesies": "Pycnonotus aurigaster (Vieillot, 1818)",
   "y2022": 9
 },
 {
   "No": 23,
   "nama_lokal": "Merbah Cerucuk",
   "spesies": "Pycnonotus goiavier (Scopoli, 1786)",
   "y2022": 11
 },
 {
   "No": 24,
   "nama_lokal": "Kapinis Jarum Kecil",
   "spesies": "Rhaphidura leucopygialis (Blyth, 1849)",
   "y2022": 10
 },
 {
   "No": 25,
   "nama_lokal": "Tekukur Biasa",
   "spesies": "Spilopelia chinensis (Scopoli, 1786)",
   "y2022": 6
 },
 {
   "No": 26,
   "nama_lokal": "Punai Gading",
   "spesies": "Treron vernans (Linnaeus, 1771)",
   "y2022": 6
 }
]

const table_data_mamalia = [
 {
   "No": 1,
   "nama_lokal": "Babi",
   "spesies": "Sus scrofa Linnaeus, 1758",
   "y2022": 1
 },
 {
   "No": 2,
   "nama_lokal": "Beruk Mentawai",
   "spesies": "Macaca nemestrina (Linnaeus, 1766)",
   "y2022": 1
 },
 {
   "No": 3,
   "nama_lokal": "Lutung Kelabu",
   "spesies": "Trachypithecus cristatus (Raffles, 1821)",
   "y2022": 1
 },
 {
   "No": 4,
   "nama_lokal": "Monyet Ekor Panjang",
   "spesies": "Macaca fascicularis (Raffles, 1821)",
   "y2022": 1
 },
 {
   "No": 5,
   "nama_lokal": "Musang",
   "spesies": "Viverridae",
   "y2022": 1
 },
 {
   "No": 6,
   "nama_lokal": "Tupai",
   "spesies": "Tupaia glis (Diard, 1820)",
   "y2022": 3
 }
]

const table_data_herpetofauna = [
 {
   "No": 1,
   "nama_lokal": "Biawak Air",
   "spesies": "Varanus salvator (Laurenti, 1768)",
   "y2022": 1
 },
 {
   "No": 2,
   "nama_lokal": "Kobra Raja",
   "spesies": "Ophiophagus hannah (Cantor, 1836)",
   "y2022": 2
 },
 {
   "No": 3,
   "nama_lokal": "Ular Pucuk",
   "spesies": "Ahaetulla prasina (Boie, 1827)",
   "y2022": 1
 },
 {
   "No": 4,
   "nama_lokal": "Ular Tampar",
   "spesies": "Dendrelaphis pictus (Gmelin, 1789)",
   "y2022": 1
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
                    <h3>Keanekaragaman Hayati Program Poligowo</h3>
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
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Lokal</th>
                        <th colspan="5" style={{textAlign: 'center'}}>Jumlah</th>
                      </tr>
                      <tr>
                        <td style={{textAlign: 'center'}}>2021</td>
                        <td style={{textAlign: 'center'}}>2022</td>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data_species.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.Spesies}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama_lokal}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2021}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2022}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="3">Jumlah</td>
                        <td style={{textAlign: 'center'}}>221</td>
                        <td style={{textAlign: 'center'}}>913</td>
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
                    <h5>Perbandingan Indeks Keanekaragaman H' Flora di Poligowo</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[1.0, 2.3]}
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
                          {x: '2021', y: 1.26},
                          {x: '2022', y: 2.1},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2021', y: 1.26, yOffset: -25},
                          {x: '2022', y: 2.1, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                    </XYPlot>
                  </div>
                </Col>
                <Col style={{textAlign: 'center'}}>
                </Col>
              </Row>

              <Row style={{paddingTop: 45}}>
                <Col style={{textAlign: 'center'}}>
                </Col>
                <Col style={{textAlign: 'center'}}>
                  <div>
                    <h5>Perbandingan Jumlah Flora di Poligowo Tahun 2021 dan 2022</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 1000]}
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
                        text="Jumlah"
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
                          {x: '2021', y: 384},
                          {x: '2022', y: 928},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2021', y: 384, yOffset: -25},
                          {x: '2022', y: 928, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                    </XYPlot>
                  </div>
                </Col>
                <Col style={{textAlign: 'center'}}>
                </Col>
              </Row>


              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Burung di Poligowo</h3>
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
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Lokal</th>
                        <th colspan="5" style={{textAlign: 'center'}}>Jumlah</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data_bird.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.spesies}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama_lokal}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2022}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="3">Jumlah</td>
                        <td style={{textAlign: 'center'}}>140</td>
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
                    <h5>Indeks Ekologi Burung di Poligowo: Indeks Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E)</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 6.0]}
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
                          {x: 'H\'', y: 2.96},
                          {x: 'R', y: 4.98},
                          {x: 'E', y: 0.91},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 2.96, yOffset: -25},
                          {x: 'R', y: 4.98, yOffset: -25},
                          {x: 'E', y: 0.91, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                    </XYPlot>
                  </div>
                </Col>
                <Col style={{textAlign: 'center'}}>
                </Col>
              </Row>



              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Mamalia di Poligowo</h3>
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
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Lokal</th>
                        <th colspan="5" style={{textAlign: 'center'}}>Jumlah</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data_mamalia.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.spesies}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama_lokal}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2022}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="3">Jumlah</td>
                        <td style={{textAlign: 'center'}}>8</td>
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
                    <h5>Diagram Indeks Ekologi Mamalia di Poligowo: Indeks Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E)</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 4.0]}
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
                          {x: 'H\'', y: 1.67},
                          {x: 'R', y: 2.75},
                          {x: 'E', y: 0.98},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.67, yOffset: -25},
                          {x: 'R', y: 2.75, yOffset: -25},
                          {x: 'E', y: 0.98, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                    </XYPlot>
                  </div>
                </Col>
                <Col style={{textAlign: 'center'}}>
                </Col>
              </Row>



              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Herpetofauna di Poligowo</h3>
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
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Lokal</th>
                        <th colspan="5" style={{textAlign: 'center'}}>Jumlah</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data_herpetofauna.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.spesies}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama_lokal}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2022}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="3">Jumlah</td>
                        <td style={{textAlign: 'center'}}>5</td>
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
                    <h5>Diagram Indeks Ekologi Herpetofauna di Poligowo: Indeks Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E)</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 3.0]}
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
                          {x: 'H\'', y: 1.33},
                          {x: 'R', y: 1.86},
                          {x: 'E', y: 0.96},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.33, yOffset: -25},
                          {x: 'R', y: 1.86, yOffset: -25},
                          {x: 'E', y: 0.96, yOffset: -25},
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
