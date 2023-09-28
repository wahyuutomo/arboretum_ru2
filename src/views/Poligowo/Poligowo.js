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
  LabelSeries,
  DiscreteColorLegend
} from 'react-vis';

import { connect } from "react-redux";

import logo_pertamina from "../../assets/logo_pertamina.png"
import img2 from "../../assets/2.jpeg"
import img3 from "../../assets/3.jpeg"
import img6 from "../../assets/6.jpeg"
import img9 from "../../assets/9.jpeg"
import img14 from "../../assets/14.jpeg"
import poligowo3 from "../../assets/poligowo3.jpeg"
import kda3 from "../../assets/kda3.jpeg"



const table_data_spesies = [
  {
    "No": 1,
    "spesies": "Acasia auriculiformis",
    "nama_lokal": "Akasia",
    "y2021": 0,
    "y2022": 6,
    "y2023": 6
  },
  {
    "No": 2,
    "spesies": "Alstonia pneumatophore",
    "nama_lokal": "Pulai Rawa",
    "y2021": 32,
    "y2022": 5,
    "y2023": 5
  },
  {
    "No": 3,
    "spesies": "Anacardium occidentale",
    "nama_lokal": "Jambu Mete",
    "y2021": 2,
    "y2022": 3,
    "y2023": 12
  },
  {
    "No": 4,
    "spesies": "Aquilaria malacensis",
    "nama_lokal": "Gaharu",
    "y2021": 0,
    "y2022": 45,
    "y2023": 27
  },
  {
    "No": 5,
    "spesies": "Archidendron pauciflorum",
    "nama_lokal": "Jengkol",
    "y2021": 0,
    "y2022": 0,
    "y2023": 30
  },
  {
    "No": 6,
    "spesies": "Arenga pinnata",
    "nama_lokal": "Aren",
    "y2021": 20,
    "y2022": 20,
    "y2023": 0
  },
  {
    "No": 7,
    "spesies": "Artocarpus altilis",
    "nama_lokal": "Sukun",
    "y2021": 0,
    "y2022": 0,
    "y2023": 1
  },
  {
    "No": 8,
    "spesies": "Artocarpus heterophyllus",
    "nama_lokal": "Nangka",
    "y2021": 98,
    "y2022": 253,
    "y2023": 260
  },
  {
    "No": 9,
    "spesies": "Chamaedaphne calyculata",
    "nama_lokal": "Centingi",
    "y2021": 0,
    "y2022": 5,
    "y2023": 0
  },
  {
    "No": 10,
    "spesies": "Citrus sp.",
    "nama_lokal": "Jeruk",
    "y2021": 0,
    "y2022": 0,
    "y2023": 4
  },
  {
    "No": 11,
    "spesies": "Cocos nucifera",
    "nama_lokal": "kelapa",
    "y2021": 3,
    "y2022": 2,
    "y2023": 2
  },
  {
    "No": 12,
    "spesies": "Cratoxylon arborescens",
    "nama_lokal": "Geronggang",
    "y2021": 91,
    "y2022": 1,
    "y2023": 21
  },
  {
    "No": 13,
    "spesies": "Cymbopogon nardus",
    "nama_lokal": "Serai wangi",
    "y2021": 0,
    "y2022": 15,
    "y2023": 15
  },
  {
    "No": 14,
    "spesies": "Durio sp. ",
    "nama_lokal": "Durian",
    "y2021": 4,
    "y2022": 1,
    "y2023": 1
  },
  {
    "No": 15,
    "spesies": "Elaeis guinensis",
    "nama_lokal": "Sawit",
    "y2021": 0,
    "y2022": 5,
    "y2023": 17
  },
  {
    "No": 16,
    "spesies": "Gomphandra capitulate",
    "nama_lokal": "Malasiro/Masiro",
    "y2021": 45,
    "y2022": 146,
    "y2023": 44
  },
  {
    "No": 17,
    "spesies": "Hevea brasiliensis",
    "nama_lokal": "Karet",
    "y2021": 0,
    "y2022": 205,
    "y2023": 360
  },
  {
    "No": 18,
    "spesies": "Laucaena leucocephala",
    "nama_lokal": "Petai cina",
    "y2021": 43,
    "y2022": 10,
    "y2023": 10
  },
  {
    "No": 19,
    "spesies": "Macaranga trilobata",
    "nama_lokal": "Mahang",
    "y2021": 3,
    "y2022": 3,
    "y2023": 2
  },
  {
    "No": 20,
    "spesies": "Mangifera indica",
    "nama_lokal": "Mangga",
    "y2021": 0,
    "y2022": 2,
    "y2023": 2
  },
  {
    "No": 21,
    "spesies": "Melaleuca leucadendra",
    "nama_lokal": "Gelam",
    "y2021": 0,
    "y2022": 0,
    "y2023": 11
  },
  {
    "No": 22,
    "spesies": "Melastoma sp.",
    "nama_lokal": "Melastoma",
    "y2021": 0,
    "y2022": 0,
    "y2023": 2
  },
  {
    "No": 23,
    "spesies": "Melicope lunu ankeda",
    "nama_lokal": "Tengek Burung",
    "y2021": 11,
    "y2022": 6,
    "y2023": 268
  },
  {
    "No": 24,
    "spesies": "Moringa oleifera",
    "nama_lokal": "Kelor",
    "y2021": 0,
    "y2022": 0,
    "y2023": 1
  },
  {
    "No": 25,
    "spesies": "Parcia speciosa",
    "nama_lokal": "Petai",
    "y2021": 15,
    "y2022": 43,
    "y2023": 45
  },
  {
    "No": 26,
    "spesies": "Phoebe",
    "nama_lokal": "Medang",
    "y2021": 6,
    "y2022": 11,
    "y2023": 0
  },
  {
    "No": 27,
    "spesies": "Pometia pinnata",
    "nama_lokal": "Matoa",
    "y2021": 0,
    "y2022": 0,
    "y2023": 15
  },
  {
    "No": 28,
    "spesies": "Syzigium zeylanicum",
    "nama_lokal": "Nasi – nasi",
    "y2021": 0,
    "y2022": 3,
    "y2023": 3
  },
  {
    "No": 29,
    "spesies": "Syzygium aqueum",
    "nama_lokal": "Jambu Air ",
    "y2021": 0,
    "y2022": 1,
    "y2023": 0
  },
  {
    "No": 30,
    "spesies": "Syzygium leptostemon",
    "nama_lokal": "Kelat Tikus",
    "y2021": 0,
    "y2022": 0,
    "y2023": 6
  },
  {
    "No": 31,
    "spesies": "Syzygium oleina",
    "nama_lokal": "Pucuk Merah",
    "y2021": 0,
    "y2022": 2,
    "y2023": 0
  },
  {
    "No": 32,
    "spesies": "Syzygium oleina",
    "nama_lokal": "Pucuk Merah",
    "y2021": 0,
    "y2022": 0,
    "y2023": 5
  },
  {
    "No": 33,
    "spesies": "Uncaria elliptica",
    "nama_lokal": "",
    "y2021": 0,
    "y2022": 129,
    "y2023": 0
  },
  {
    "No": 34,
    "spesies": "Vaccinium varingifolium",
    "nama_lokal": " ",
    "y2021": 8,
    "y2022": 1,
    "y2023": 1
  },
  {
    "No": 35,
    "spesies": "Vitex pubescens",
    "nama_lokal": "Leban",
    "y2021": 0,
    "y2022": 5,
    "y2023": 6
  }
]

const table_data_bird = [
  {
    "No": 1,
    "spesies": "Jalak Kerbau",
    "nama_lokal": "Acridotheres javanicus (Cabanis, 1851) ",
    "iucn": "VU",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 3,
    "y2023": 6
  },
  {
    "No": 2,
    "spesies": "Walet Sarang Putih",
    "nama_lokal": "Aerodramus hirundinaceus (Stresemann, 1914)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 4,
    "y2023": 5
  },
  {
    "No": 3,
    "spesies": "Burung Madu Kelapa",
    "nama_lokal": "Anthreptes malacensis (Scopoli, 1786)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 13,
    "y2023": 2
  },
  {
    "No": 4,
    "spesies": "Pijantung Kampung",
    "nama_lokal": "Arachnothera crassirostris (Reichenbach, 1853)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 4,
    "y2023": 0
  },
  {
    "No": 5,
    "spesies": "Kekep Babi",
    "nama_lokal": "Artamus leucoryn (Linnaeus, 1771)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 7,
    "y2023": 0
  },
  {
    "No": 6,
    "spesies": "Layang-layang Loreng",
    "nama_lokal": "Cecropis striolata (Schlegel, 1844)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 10,
    "y2023": 0
  },
  {
    "No": 7,
    "spesies": "Bubut Alang-alang",
    "nama_lokal": "Centropus bengalensis (Gmelin, 1788)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 2,
    "y2023": 0
  },
  {
    "No": 8,
    "spesies": "Bubut Besar",
    "nama_lokal": "Centropus sinensis (Stephens, 1815)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 5,
    "y2023": 1
  },
  {
    "No": 9,
    "spesies": "Walet Sapi",
    "nama_lokal": "Collocalia esculenta (Linnaeus, 1758)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 9,
    "y2023": 4
  },
  {
    "No": 10,
    "spesies": "Layang-layang Rumah",
    "nama_lokal": "Delichon dasypus (Bonaparte, 1850)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 7,
    "y2023": 0
  },
  {
    "No": 11,
    "spesies": "Cabai Merah",
    "nama_lokal": "Dicaeum cruentatum (Linnaeus, 1758)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 4,
    "y2023": 0
  },
  {
    "No": 12,
    "spesies": "Cabai Jawa",
    "nama_lokal": "Dicaeum trochileum (Sparrman, 1789)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 5,
    "y2023": 0
  },
  {
    "No": 13,
    "spesies": "Elang tikus",
    "nama_lokal": "Elanus caeruleus (Desfontaines, 1789)",
    "iucn": "LC",
    "cites": "II",
    "status": "Tidak dilindungi",
    "y2022": 2,
    "y2023": 2
  },
  {
    "No": 14,
    "spesies": "Perkutut Jawa",
    "nama_lokal": "Geopelia striata (Linnaeus, 1766)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 8,
    "y2023": 4
  },
  {
    "No": 15,
    "spesies": "Kapasan Kemiri",
    "nama_lokal": "Lalage nigra (J.R.Forster, 1781)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 2,
    "y2023": 2
  },
  {
    "No": 16,
    "spesies": "Bondol Haji",
    "nama_lokal": "Lonchura maja (Linnaeus, 1766)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 6,
    "y2023": 4
  },
  {
    "No": 17,
    "spesies": "Burung Madu Sriganti",
    "nama_lokal": "Nectarinia jugularis (Linnaeus, 1766)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 7,
    "y2023": 2
  },
  {
    "No": 18,
    "spesies": "Kutilang",
    "nama_lokal": "Pycnonotus aurigaster (Vieillot, 1818)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 9,
    "y2023": 0
  },
  {
    "No": 19,
    "spesies": "Merbah Cerucuk",
    "nama_lokal": "Pycnonotus goiavier (Scopoli, 1786)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 11,
    "y2023": 7
  },
  {
    "No": 20,
    "spesies": "Kapinis Jarum Kecil",
    "nama_lokal": "Rhaphidura leucopygialis (Blyth, 1849) ",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 10,
    "y2023": 3
  },
  {
    "No": 21,
    "spesies": "Tekukur Biasa",
    "nama_lokal": "Spilopelia chinensis (Scopoli, 1786) ",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 6,
    "y2023": 0
  },
  {
    "No": 22,
    "spesies": "Punai Gading",
    "nama_lokal": "Treron vernans (Linnaeus, 1771)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 6,
    "y2023": 3
  },
  {
    "No": 23,
    "spesies": "Blekok Cina",
    "nama_lokal": "Ardeola bacchus (Bonaparte, 1855)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 0,
    "y2023": 1
  },
  {
    "No": 24,
    "spesies": "Walet palem asia",
    "nama_lokal": "Cypsiurus balasiensis Gray, 1829",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 0,
    "y2023": 2
  },
  {
    "No": 25,
    "spesies": "Caladi Tilik",
    "nama_lokal": "Dendrocopos moluccensis (Gmelin, 1788)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 0,
    "y2023": 3
  },
  {
    "No": 26,
    "spesies": "Ayam Hutan Merah",
    "nama_lokal": "Gallus gallus (Linnaeus, 1758)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 0,
    "y2023": 2
  },
  {
    "No": 27,
    "spesies": "Kapinis Jarum Gedang",
    "nama_lokal": "Hirundapus giganteus (Temminck, 1825)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 0,
    "y2023": 3
  },
  {
    "No": 28,
    "spesies": "Pelatuk Kijang",
    "nama_lokal": "Micropternus brachyurus (Vieillot, 1818)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 0,
    "y2023": 2
  },
  {
    "No": 29,
    "spesies": "Cekakak Sungai",
    "nama_lokal": "Todirhamphus chloris (Boddaert, 1783)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 0,
    "y2023": 2
  }
]

const table_data_mamalia = [
  {
    "No": 1,
    "spesies": "Babi",
    "nama_lokal": "Sus scrofa Linnaeus, 1758",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 1,
    "y2023": 3
  },
  {
    "No": 2,
    "spesies": "Beruk Mentawai",
    "nama_lokal": "Macaca nemestrina (Linnaeus, 1766)",
    "iucn": "EN",
    "cites": "II",
    "status": "Dilindungi",
    "y2022": 1,
    "y2023": 10
  },
  {
    "No": 3,
    "spesies": "Lutung Kelabu",
    "nama_lokal": "Trachypithecus cristatus (Raffles, 1821)",
    "iucn": "VU",
    "cites": "II",
    "status": "Dilindungi",
    "y2022": 1,
    "y2023": 7
  },
  {
    "No": 4,
    "spesies": "Monyet Ekor Panjang",
    "nama_lokal": "Macaca fascicularis (Raffles, 1821)",
    "iucn": "EN",
    "cites": "II",
    "status": "Tidak dilindungi",
    "y2022": 1,
    "y2023": 13
  },
  {
    "No": 5,
    "spesies": "Musang",
    "nama_lokal": "Viverridae",
    "iucn": "-",
    "cites": "-",
    "status": "-",
    "y2022": 1,
    "y2023": 1
  },
  {
    "No": 6,
    "spesies": "Tupai",
    "nama_lokal": "Tupaia glis (Diard, 1820)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Dilindungi",
    "y2022": 3,
    "y2023": 0
  },
  {
    "No": 7,
    "spesies": "Bajing Kelapa",
    "nama_lokal": "Collosciurus notatus (Boddaert, 1785)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 0,
    "y2023": 1
  },
  {
    "No": 8,
    "spesies": "Sigung",
    "nama_lokal": "Mydaus javanensis (Desmarest, 1818)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak dilindungi",
    "y2022": 0,
    "y2023": 1
  },
  {
    "No": 9,
    "spesies": "Kucing Hutan",
    "nama_lokal": "Prionailurus bengalensis (Kerr, 1792)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Dilindungi",
    "y2022": 0,
    "y2023": 2
  }
]

const table_data_herpetofauna = [
  {
    "No": 1,
    "nama_lokal": "Biawak Air",
    "spesies": "Varanus salvator (Laurenti, 1768)",
    "y2022": 1,
    "y2023": 3
  },
  {
    "No": 2,
    "nama_lokal": "Kobra Raja",
    "spesies": "Ophiophagus hannah (Cantor, 1836)",
    "y2022": 2,
    "y2023": 2
  },
  {
    "No": 3,
    "nama_lokal": "Ular Pucuk",
    "spesies": "Ahaetulla prasina (Boie, 1827)",
    "y2022": 1,
    "y2023": 0
  },
  {
    "No": 4,
    "nama_lokal": "Ular Tampar",
    "spesies": "Dendrelaphis pictus (Gmelin, 1789)",
    "y2022": 1,
    "y2023": 0
  },
  {
    "No": 5,
    "nama_lokal": "Kadal Kebun",
    "spesies": "Eutropis multifasciata (Kuhl, 1820)",
    "y2022": 0,
    "y2023": 1
  },
  {
    "No": 6,
    "nama_lokal": "Ular Sanca Batik",
    "spesies": "Python reticulatus (Schneider, 1801)",
    "y2022": 0,
    "y2023": 1
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
                        <td style={{textAlign: 'center'}}>2023</td>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data_spesies.map(( listValue, index ) => {
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
                        <td style={{textAlign: 'center'}}>381</td>
                        <td style={{textAlign: 'center'}}>928</td>
                        <td style={{textAlign: 'center'}}>1182</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

              <Row style={{paddingTop: 45}}>
                <Col md={1} style={{textAlign: 'center'}}>
                </Col>
                <Col md={5} style={{textAlign: 'center'}}>
                  <div>
                    <h5>Perbandingan Indeks Keanekaragaman H' Flora di Poligowo</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[1.0, 2.3]}
                      height={400} 
                      width={500}>
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
                          {x: '2023', y: 2.13},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2021', y: 1.26, yOffset: -25},
                          {x: '2022', y: 2.1, yOffset: -25},
                          {x: '2023', y: 2.13, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                    </XYPlot>
                  </div>
                </Col>
                <Col md={5} style={{textAlign: 'center'}}>
                  <div>
                    <h5>Perbandingan Jumlah Flora di Poligowo Tahun 2021 - 2023</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 1300]}
                      height={400} 
                      width={500}>
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
                          {x: '2021', y: 381},
                          {x: '2022', y: 928},
                          {x: '2023', y: 1182},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2021', y: 381, yOffset: -25},
                          {x: '2022', y: 928, yOffset: -25},
                          {x: '2023', y: 1182, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                    </XYPlot>
                  </div>
                </Col>
                <Col md={1} style={{textAlign: 'center'}}>
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
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>IUCN</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>CITES</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>P.106/2018</th>
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
                            <td style={{textAlign: 'center'}}>{listValue.iucn}</td>
                            <td style={{textAlign: 'center'}}>{listValue.cites}</td>
                            <td style={{textAlign: 'center'}}>{listValue.status}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2022}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2023}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="6">Jumlah</td>
                        <td style={{textAlign: 'center'}}>140</td>
                        <td style={{textAlign: 'center'}}>60</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>


              <Row style={{paddingTop: 45}}>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
                <Col md={8} style={{textAlign: 'center'}}>
                  <div>
                    <h5>Indeks Ekologi Burung di Poligowo: Indeks Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E)</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 6]}
                      height={400} 
                      width={800}>
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
                        color="#61351c"
                        data={[
                          {x: 'H\'', y: 2.96},
                          {x: 'R', y: 4.98},
                          {x: 'E', y: 0.91},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 2.96, yOffset: -25, xOffset: -25},
                          {x: 'R', y: 4.98, yOffset: -25, xOffset: -25},
                          {x: 'E', y: 0.91, yOffset: -25, xOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#3e6a00"
                        data={[
                          {x: 'H\'', y: 2.98},
                          {x: 'R', y: 4.5},
                          {x: 'E', y: 0.96},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 2.98, yOffset: -25, xOffset: 25},
                          {x: 'R', y: 4.5, yOffset: -25, xOffset: 25},
                          {x: 'E', y: 0.96, yOffset: -25, xOffset: 25},
                        ]} 
                        getLabel={d => d.y}/>
                      <DiscreteColorLegend
                      width={180}
                      style={{position: 'absolute', left: '650px', top: '100px'}}
                      items={[
                        {title: "2022", color: "#61351c", strokeWidth: "12"},
                        {title: "2023", color: "#3e6a00", strokeWidth: "12"}
                      ]}
                    />
                    </XYPlot>

                  </div>
                </Col>
                <Col md={2} style={{textAlign: 'center'}}>
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
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>IUCN</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>CITES</th>
                        <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>P.106/2018</th>
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
                            <td style={{textAlign: 'center'}}>{listValue.iucn}</td>
                            <td style={{textAlign: 'center'}}>{listValue.cites}</td>
                            <td style={{textAlign: 'center'}}>{listValue.status}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2022}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2023}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="6">Jumlah</td>
                        <td style={{textAlign: 'center'}}>8</td>
                        <td style={{textAlign: 'center'}}>38</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

              <Row style={{paddingTop: 45}}>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
                <Col md={8} style={{textAlign: 'center'}}>
                  <div>
                    <h5>Diagram Indeks Ekologi Mamalia di Poligowo: Indeks Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E)</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 4]}
                      height={400} 
                      width={800}>
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
                        color="#61351c"
                        data={[
                          {x: 'H\'', y: 1.67},
                          {x: 'R', y: 2.75},
                          {x: 'E', y: 0.98},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.67, yOffset: -25, xOffset: -25},
                          {x: 'R', y: 2.75, yOffset: -25, xOffset: -25},
                          {x: 'E', y: 0.98, yOffset: -25, xOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#3e6a00"
                        data={[
                          {x: 'H\'', y: 1.70},
                          {x: 'R', y: 2.00},
                          {x: 'E', y: 0.82},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.70, yOffset: -25, xOffset: 25},
                          {x: 'R', y: 2.00, yOffset: -25, xOffset: 25},
                          {x: 'E', y: 0.82, yOffset: -25, xOffset: 25},
                        ]} 
                        getLabel={d => d.y}/>
                      <DiscreteColorLegend
                      width={180}
                      style={{position: 'absolute', left: '650px', top: '100px'}}
                      items={[
                        {title: "2022", color: "#61351c", strokeWidth: "12"},
                        {title: "2023", color: "#3e6a00", strokeWidth: "12"}
                      ]}
                    />
                    </XYPlot>
                  </div>
                </Col>
                <Col md={2} style={{textAlign: 'center'}}>
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
                            <td style={{textAlign: 'center'}}>{listValue.y2023}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="3">Jumlah</td>
                        <td style={{textAlign: 'center'}}>5</td>
                        <td style={{textAlign: 'center'}}>7</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

              <Row style={{paddingTop: 45}}>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
                <Col md={8} style={{textAlign: 'center'}}>
                  <div>
                    <h5>Diagram Indeks Ekologi Herpetofauna di Poligowo: Indeks Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E)</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 4]}
                      height={400} 
                      width={800}>
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
                        color="#61351c"
                        data={[
                          {x: 'H\'', y: 1.33},
                          {x: 'R', y: 1.86},
                          {x: 'E', y: 0.96},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.33, yOffset: -25, xOffset: -25},
                          {x: 'R', y: 1.86, yOffset: -25, xOffset: -25},
                          {x: 'E', y: 0.96, yOffset: -25, xOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#3e6a00"
                        data={[
                          {x: 'H\'', y: 1.73},
                          {x: 'R', y: 2.40},
                          {x: 'E', y: 0.97},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.73, yOffset: -25, xOffset: 25},
                          {x: 'R', y: 2.40, yOffset: -25, xOffset: 25},
                          {x: 'E', y: 0.97, yOffset: -25, xOffset: 25},
                        ]} 
                        getLabel={d => d.y}/>
                      <DiscreteColorLegend
                      width={180}
                      style={{position: 'absolute', left: '650px', top: '100px'}}
                      items={[
                        {title: "2022", color: "#61351c", strokeWidth: "12"},
                        {title: "2023", color: "#3e6a00", strokeWidth: "12"}
                      ]}
                    />
                    </XYPlot>
                  </div>
                </Col>
                <Col md={2} style={{textAlign: 'center'}}>
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
