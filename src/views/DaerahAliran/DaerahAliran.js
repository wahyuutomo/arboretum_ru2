import React from 'react';
import './DaerahAliran.css';
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
import kda3 from "../../assets/kda3.jpeg"

import poligowo3 from "../../assets/poligowo3.jpeg"


const table_data_species = [
   {
      "No": 1,
      "spesies": "Acalypha siamensis",
      "nama_lokal": "Teh-tehan",
      "y2023": 1
   },
   {
      "No": 2,
      "spesies": "Adenium obesum",
      "nama_lokal": "Adenium",
      "y2023": 5
   },
   {
      "No": 3,
      "spesies": "Agave sp.",
      "nama_lokal": "Agave",
      "y2023": 1
   },
   {
      "No": 4,
      "spesies": "Ageratum conyzoides",
      "nama_lokal": "Bandotan",
      "y2023": 50
   },
   {
      "No": 5,
      "spesies": "Aglaonema sp.",
      "nama_lokal": "Aglonema",
      "y2023": 2
   },
   {
      "No": 6,
      "spesies": "Allamanda cathartica",
      "nama_lokal": "Alamanda",
      "y2023": 1
   },
   {
      "No": 7,
      "spesies": "Alpinia galanga",
      "nama_lokal": "Lengkuas",
      "y2023": 1
   },
   {
      "No": 8,
      "spesies": "Archidendron pauciflorum",
      "nama_lokal": "Jengkol",
      "y2023": 14
   },
   {
      "No": 9,
      "spesies": "Areca catechu",
      "nama_lokal": "Pinang",
      "y2023": 7
   },
   {
      "No": 10,
      "spesies": "Artocarpus altilis",
      "nama_lokal": "Sukun",
      "y2023": 3
   },
   {
      "No": 11,
      "spesies": "Artocarpus heterophyllus",
      "nama_lokal": "Nangka",
      "y2023": 9
   },
   {
      "No": 12,
      "spesies": "Bougainvillea spp.",
      "nama_lokal": "Bougenvil",
      "y2023": 12
   },
   {
      "No": 13,
      "spesies": "Caladium bicolor",
      "nama_lokal": "Keladi",
      "y2023": 3
   },
   {
      "No": 14,
      "spesies": "Calamus rotang",
      "nama_lokal": "Rotan",
      "y2023": 1
   },
   {
      "No": 15,
      "spesies": "Citrus sp.",
      "nama_lokal": "Jeruk",
      "y2023": 11
   },
   {
      "No": 16,
      "spesies": "Cnidoscolus aconitifolius",
      "nama_lokal": "Pepaya Jepang",
      "y2023": 1
   },
   {
      "No": 17,
      "spesies": "Cocos nucifera",
      "nama_lokal": "Kelapa",
      "y2023": 8
   },
   {
      "No": 18,
      "spesies": "Codiaeum variegatum",
      "nama_lokal": "Puring",
      "y2023": 1
   },
   {
      "No": 19,
      "spesies": "Cupressus sempervirens",
      "nama_lokal": "Cemara Lilin",
      "y2023": 2
   },
   {
      "No": 20,
      "spesies": "Curcuma longa",
      "nama_lokal": "Kunyit",
      "y2023": 4
   },
   {
      "No": 21,
      "spesies": "Curcuma zanthorrhiza",
      "nama_lokal": "Temulawak",
      "y2023": 1
   },
   {
      "No": 22,
      "spesies": "Cymbopogon citratus",
      "nama_lokal": "Serai",
      "y2023": 3
   },
   {
      "No": 23,
      "spesies": "Dracaena marginata",
      "nama_lokal": "Drakaena",
      "y2023": 4
   },
   {
      "No": 24,
      "spesies": "Durio zibethinus",
      "nama_lokal": "Durian",
      "y2023": 14
   },
   {
      "No": 25,
      "spesies": "Elaeis guineensis",
      "nama_lokal": "Sawit",
      "y2023": 4
   },
   {
      "No": 26,
      "spesies": "Euphorbia lactea",
      "nama_lokal": "Euphorbia Green",
      "y2023": 1
   },
   {
      "No": 27,
      "spesies": "Euphorbia milii",
      "nama_lokal": "Mahkota duri",
      "y2023": 3
   },
   {
      "No": 28,
      "spesies": "Euphorbia pseudocactus",
      "nama_lokal": "Euphorbia zig zag",
      "y2023": 1
   },
   {
      "No": 29,
      "spesies": "Ficus sp.",
      "nama_lokal": "Beringin",
      "y2023": 2
   },
   {
      "No": 30,
      "spesies": "Garcinia mangostana",
      "nama_lokal": "Manggis",
      "y2023": 1
   },
   {
      "No": 31,
      "spesies": "Heterophyllus integer",
      "nama_lokal": "Cempedak",
      "y2023": 1
   },
   {
      "No": 32,
      "spesies": "Hevea brasiliensis",
      "nama_lokal": "Karet",
      "y2023": 33
   },
   {
      "No": 33,
      "spesies": "Hibiscus rosa-sinensis",
      "nama_lokal": "Kembang Sepatu",
      "y2023": 3
   },
   {
      "No": 34,
      "spesies": "Ixora paludosa",
      "nama_lokal": "Asoka",
      "y2023": 10
   },
   {
      "No": 35,
      "spesies": "Jasminum multiflorum",
      "nama_lokal": "Melati",
      "y2023": 3
   },
   {
      "No": 36,
      "spesies": "Kaempferia galanga",
      "nama_lokal": "Kencur",
      "y2023": 1
   },
   {
      "No": 37,
      "spesies": "Kaktus",
      "nama_lokal": "Kaktus",
      "y2023": 1
   },
   {
      "No": 38,
      "spesies": "Lansium domesticum",
      "nama_lokal": "Duku",
      "y2023": 1
   },
   {
      "No": 39,
      "spesies": "Lantana camara",
      "nama_lokal": "Tahi Ayam",
      "y2023": 1
   },
   {
      "No": 40,
      "spesies": "leguminose",
      "nama_lokal": "leguminose",
      "y2023": 1
   },
   {
      "No": 41,
      "spesies": "Macaranga motleyana",
      "nama_lokal": "Mahang",
      "y2023": 7
   },
   {
      "No": 42,
      "spesies": "Macaranga sp.",
      "nama_lokal": "Mahang",
      "y2023": 1
   },
   {
      "No": 43,
      "spesies": "Magnolia champaca",
      "nama_lokal": "Cempaka",
      "y2023": 1
   },
   {
      "No": 44,
      "spesies": "Mangifera indica",
      "nama_lokal": "Mangga",
      "y2023": 4
   },
   {
      "No": 45,
      "spesies": "Mangifera sp. 1",
      "nama_lokal": "",
      "y2023": 3
   },
   {
      "No": 46,
      "spesies": "Manihot esculenta",
      "nama_lokal": "Singkong",
      "y2023": 1
   },
   {
      "No": 47,
      "spesies": "Maniltoa grandiflora",
      "nama_lokal": "Saputangan",
      "y2023": 2
   },
   {
      "No": 48,
      "spesies": "Melastoma malabathricum",
      "nama_lokal": "Keduduk",
      "y2023": 10
   },
   {
      "No": 49,
      "spesies": "Monstera deliciosa",
      "nama_lokal": "Monstera",
      "y2023": 1
   },
   {
      "No": 50,
      "spesies": "Musa sp.",
      "nama_lokal": "Pisang",
      "y2023": 1
   },
   {
      "No": 51,
      "spesies": "Mussaenda pubescens",
      "nama_lokal": "Nusa Indah",
      "y2023": 1
   },
   {
      "No": 52,
      "spesies": "Nephelium lappaceum",
      "nama_lokal": "Rambutan",
      "y2023": 9
   },
   {
      "No": 53,
      "spesies": "Parkia speciosa",
      "nama_lokal": "Petai",
      "y2023": 2
   },
   {
      "No": 54,
      "spesies": "Persea americana",
      "nama_lokal": "Sirsak",
      "y2023": 1
   },
   {
      "No": 55,
      "spesies": "Pometia pinnata",
      "nama_lokal": "Matoa",
      "y2023": 1
   },
   {
      "No": 56,
      "spesies": "Saccharum officinarum",
      "nama_lokal": "Tebu",
      "y2023": 2
   },
   {
      "No": 57,
      "spesies": "Sansevieria trifasciata",
      "nama_lokal": "Lidah Mertua",
      "y2023": 1
   },
   {
      "No": 58,
      "spesies": "Shorea pauciflora",
      "nama_lokal": "Meranti",
      "y2023": 1
   },
   {
      "No": 59,
      "spesies": "Shorea sp.",
      "nama_lokal": "",
      "y2023": 1
   },
   {
      "No": 60,
      "spesies": "Syzygium aqueum",
      "nama_lokal": "Jambu Air",
      "y2023": 2
   },
   {
      "No": 61,
      "spesies": "Syzygium malaccense",
      "nama_lokal": "Jambu Bol",
      "y2023": 4
   },
   {
      "No": 62,
      "spesies": "Syzygium myrtifolium",
      "nama_lokal": "Pucuk Merah",
      "y2023": 43
   },
   {
      "No": 63,
      "spesies": "Tabernaemontana sp.",
      "nama_lokal": "Mondokaki",
      "y2023": 1
   },
   {
      "No": 64,
      "spesies": "Thuja occidentalis",
      "nama_lokal": "Cemara Kipas",
      "y2023": 1
   },
   {
      "No": 65,
      "spesies": "Tridax procumbens",
      "nama_lokal": "Songgolangit",
      "y2023": 1
   },
   {
      "No": 66,
      "spesies": "Zingiber officinale",
      "nama_lokal": "Jahe",
      "y2023": 2
   },
   {
      "No": 67,
      "spesies": "Sonneratia alba",
      "nama_lokal": "Pidada",
      "y2023": 2
   },
   {
      "No": 68,
      "spesies": "Cerbera manghas",
      "nama_lokal": "Bintaro",
      "y2023": 9
   },
   {
      "No": 69,
      "spesies": "Hanguana malayana",
      "nama_lokal": "Bakung",
      "y2023": 100
   },
   {
      "No": 70,
      "spesies": "Pandanus helicopus",
      "nama_lokal": "Pandan Rawa",
      "y2023": 54
   },
   {
      "No": 71,
      "spesies": "Bambusa vulgaris",
      "nama_lokal": "Bambu Kuning",
      "y2023": 2
   },
   {
      "No": 72,
      "spesies": "Bambusa sp.",
      "nama_lokal": "Bambu",
      "y2023": 4
   }
]

const table_data_bird = [
   {
      "No": 1,
      "spesies": "Acridotheres javanicus (Cabanis, 1851)",
      "nama_lokal": "Jalak Kerbau",
      "iucn": "VU",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 32
   },
   {
      "No": 2,
      "spesies": "Aerodramus hirundinaceus (Stresemann, 1914)",
      "nama_lokal": "Walet Sarang Putih",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 8
   },
   {
      "No": 3,
      "spesies": "Alcedo coerulescens (Vieillot, 1818)",
      "nama_lokal": "Raja Udang Biru",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 1
   },
   {
      "No": 4,
      "spesies": "Amaurornis phoenicurus (Pennant, 1769)",
      "nama_lokal": "Kareo Padi",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 3
   },
   {
      "No": 5,
      "spesies": "Anthreptes malacensis (Scopoli, 1786)",
      "nama_lokal": "Burung Madu Kelapa",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 4
   },
   {
      "No": 6,
      "spesies": "Artamus leucoryn (Linnaeus, 1771)",
      "nama_lokal": "Kekep Babi",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 5
   },
   {
      "No": 7,
      "spesies": "Centropus sinensis (Stephens, 1815)",
      "nama_lokal": "Bubut Besar",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 1
   },
   {
      "No": 8,
      "spesies": "Cinnyris jugularis (Linnaeus, 1766)",
      "nama_lokal": "Burung Madu Sriganti",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 5
   },
   {
      "No": 9,
      "spesies": "Collocalia esculenta (Linnaeus, 1758)",
      "nama_lokal": "Walet Sapi",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 3
   },
   {
      "No": 10,
      "spesies": "Collocalia maxima (Hume, 1878)",
      "nama_lokal": "Walet Sarang Hitam",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 9
   },
   {
      "No": 11,
      "spesies": "Dicaeum cruentatum (Linnaeus, 1758)",
      "nama_lokal": "Cabai Merah",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 2
   },
   {
      "No": 12,
      "spesies": "Dicaeum trochileum (Sparrman, 1789)",
      "nama_lokal": "Cabai Jawa",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 1
   },
   {
      "No": 13,
      "spesies": "Eurystomus orientalis (Linnaeus, 1766)",
      "nama_lokal": "Tiong Lampu Biasa",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 2
   },
   {
      "No": 14,
      "spesies": "Geopelia striata (Linnaeus, 1766)",
      "nama_lokal": "Perkutut Jawa",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 6
   },
   {
      "No": 15,
      "spesies": "Halcyon smyrnensis (Linnaeus, 1758)",
      "nama_lokal": "Cekakak Belukar",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 3
   },
   {
      "No": 16,
      "spesies": "Hirundo tahitica (Gmelin, 1789)",
      "nama_lokal": "Layang-layang Batu",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 4
   },
   {
      "No": 17,
      "spesies": "Lonchura maja (Linnaeus, 1766)",
      "nama_lokal": "Bondol Haji",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 3
   },
   {
      "No": 18,
      "spesies": "Lonchura malacca (Linnaeus, 1766)",
      "nama_lokal": "Bondol Rawa",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 12
   },
   {
      "No": 19,
      "spesies": "Orthotomus ruficeps (Lesson, 1830)",
      "nama_lokal": "Cinenen Kelabu",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 2
   },
   {
      "No": 20,
      "spesies": "Passer montanus (Linnaeus, 1758)",
      "nama_lokal": "Gereja Erasia",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 26
   },
   {
      "No": 21,
      "spesies": "Pycnonotus aurigaster (Vieillot, 1818)",
      "nama_lokal": "Cucak Kutilang",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 3
   },
   {
      "No": 22,
      "spesies": "Pycnonotus goiavier (Scopoli, 1786)",
      "nama_lokal": "Merbah Cerucuk",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 5
    }
]

const table_data_mamalia = [
   {
      "No": 1,
      "spesies": "Collosciurus notatus (Boddaert, 1785)",
      "nama_lokal": "Bajing Kelapa",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 4
   },
   {
      "No": 2,
      "spesies": "Macaca fascicularis (Raffles, 1821)",
      "nama_lokal": "Monyet Ekor Panjang",
      "iucn": "EN",
      "cites": "II",
      "status": "Tidak Dilindungi",
      "y2023": 20
   },
   {
      "No": 3,
      "spesies": "Presbytis melalophos (Raffles, 1821)",
      "nama_lokal": "Simpai Hitam",
      "iucn": "EN",
      "cites": "II",
      "status": "Dilindungi",
      "y2023": 7
   },
   {
      "No": 4,
      "spesies": "Prionailurus bengalensis (Kerr, 1792)",
      "nama_lokal": "Kucing Hutan",
      "iucn": "LC",
      "cites": "II",
      "status": "Dilindungi",
      "y2023": 2
   },
   {
      "No": 5,
      "spesies": "Sus scrofa (Linnaeus, 1758)",
      "nama_lokal": "Babi hutan",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 2
    }
]

const table_data_heterofauna = [
   {
      "No": 1,
      "spesies": "Bufo melanostictus",
      "nama_lokal": "Kodok bangkong kolong",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 2
   },
   {
      "No": 2,
      "spesies": "Crocodylus porosus",
      "nama_lokal": "Buaya muara",
      "iucn": "LC",
      "cites": "II",
      "status": "Dilindungi",
      "y2023": 1
   },
   {
      "No": 3,
      "spesies": "Fejervarya cancrivora",
      "nama_lokal": "Katak sawah",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 2
   },
   {
      "No": 5,
      "spesies": "Hemidactylus frenatus ",
      "nama_lokal": "Cicak rumah",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 2
   },
   {
      "No": 6,
      "spesies": "Hemidactylus platyurus",
      "nama_lokal": "Cicak pohon",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 1
   },
   {
      "No": 7,
      "spesies": "Hylarana baramica",
      "nama_lokal": "Kongkang baram",
      "iucn": "LC",
      "cites": "NA",
      "status": "Tidak Dilindungi",
      "y2023": 11
   },
   {
      "No": 8,
      "spesies": "Ophiopohagus hannah",
      "nama_lokal": "Ular kobra raja",
      "iucn": "VU",
      "cites": "II",
      "status": "Tidak Dilindungi",
      "y2023": 1
   },
   {
      "No": 9,
      "spesies": "Varanus salvator",
      "nama_lokal": "Biawak air",
      "iucn": "LC",
      "cites": "II",
      "status": "Tidak Dilindungi",
      "y2023": 1
   }
]

class DaerahAliran extends React.Component{
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
                    <h2>Konservasi Daerah Aliran Sungai Dayang</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card body style={{border: 'none'}}>
                    <div style={{textAlign: 'center'}}>
                      Daerah Aliran Sungai (DAS) merupakan suatu kawasan daratan yang dibatasi oleh pembatas lanskap 
                      yang berfungsi untuk menerima, mengumpulkan air hujan, sedimen, dan unsur hara serta mengalirkannya 
                      menuju ke laut atau danau. Daerah Aliran Sungai memiliki peranan penting dalam sumber daya hidrologi, 
                      terutama dalam mengalirkan air, menjaga kondisi lanskap ketika puncak hujan, menjaga kualitas 
                      air dan mengurangi pembuangan massa permukaan tanah. Berdasarkan fungsinya, daerah aliran sungai 
                      terbagi menjadi 3 bagian, yaitu 1) Daerah aliran sungai hulu; 2) Daerah aliran sungai tengah; 
                      3) Daerah aliran sungai hilir. Salah satu sungai di Kabupaten Bengkalis yang menjadi daerah aliran 
                      sungai tengah adalah Sungai Dayang.
                      <br></br>
                      <br></br>
                      Sungai Dayang yang merupakan Sub Daerah Aliran Sungai Siak mengalir menuju muaranya di Selat 
                      Bangkalis. Letak Sungai Dayang yang ada di tengah menyebabkan sungai ini sangat vital bagi 
                      kehidupan masyarakat yang ada di sekitarnya, terutama dalam aspek sosial dan ekonomi. Akan 
                      tetapi seperti yang dialami banyak daerah aliran sungai lainnya, kondisi Sungai Dayang juga 
                      dipengaruhi oleh tata guna lahan di daratannya. Alih fungsi lahan dan berkurangnya area aliran 
                      air akan menurunkan kondisi perairan sungai dan proses-proses hidrologis dalam wilayah DAS.
                      <br></br>
                      <br></br>
                      Berdasarkan pengukuran yang dilakukan oleh PT Kilang Pertamina Internasional Refinery Unit II 
                      Produksi Sungai Pakning pada Tahun 2018 dan 2019 melalui titik-titik survey di sepanjang Sungai 
                      Dayang, terutama di Dusun Beringin, Desa Lubuk Muda, Kecamatan Siak Kecil, Kabupaten Bengkalis, 
                      terdapat beberapa indikator yang menunjukkan degradasi kualitas air Sungai Dayang seperti, pH, 
                      warna, Chemical Oxygen Demand (COD), berasa, dan berbau. Hal tersebut tidak sesuai dengan standar 
                      Peraturan Menteri Kesehatan Republik Indonesia No. 32 Tahun 2017.
                      <br></br>
                      <br></br>
                      Mengingat pentingnya peran Sungai Dayang bagi masyarakat sekitar dan fungsinya dalam ekosistem, 
                      PT Kilang Pertamina Internasional Refinery Unit II Produksi Sungai Pakning bersama masyarakat Desa 
                      Lubuk Muda mengembangkan Program Konservasi Daerah Aliran Sungai Dayang guna mempertahankan 
                      kelestarian dari Sungai Dayang dan memperbaiki kondisi di sekitar DAS Dayang.
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Tanaman di Konservasi Daerah Aliran</h3>
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
                        <td style={{textAlign: 'center'}}>2023</td>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data_species.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.spesies}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama_lokal}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2023}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="3">Jumlah</td>
                        <td style={{textAlign: 'center'}}>501</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

              <Row style={{paddingTop: 45}}>
                <Col style={{textAlign: 'center'}}>
                  <h5>Jumlah Spesies di Konservasi Daerah Aliran Tahun 2018-2022</h5>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th style={{textAlign: 'center'}}>2023</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{textAlign: 'center'}}>Jumlah Spesies</td>
                        <td style={{textAlign: 'center'}}>72</td>
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
                      yDomain={[0, 80]}
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
                          {x: '2023', y: 72},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2023', y: 72, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={[
                          {x: '2023', y: 75, yOffset: -25},
                        ]} 
                      />
                    </XYPlot>
                  </div>
                </Col>
              </Row>
              <Row style={{paddingTop: 30}}>
                <Col style={{textAlign: 'center'}}>
                  <h5>Indeks Keanekaragaman Hayati Konservasi Daerah Aliran Tahun 2018-2022</h5>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th style={{textAlign: 'center'}}>2023</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{textAlign: 'center'}}>Indeks Kehati</td>
                        <td style={{textAlign: 'center'}}>3.21</td>
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
                      yDomain={[0, 3.5]}
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
                          {x: '2023', y: 3.21},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2023', y: 3.21, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={[
                          {x: '2023', y: 3.50, yOffset: -25},
                        ]} 
                      />
                    </XYPlot>
                  </div>
                </Col>
              </Row>


              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Burung di Konservasi Daerah Aliran</h3>
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
                            <td style={{textAlign: 'center'}}>{listValue.y2023}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="6">Jumlah</td>
                        <td style={{textAlign: 'center'}}>140</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>


              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Mamalia di Konservasi Daerah Aliran</h3>
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
                            <td style={{textAlign: 'center'}}>{listValue.y2023}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="6">Jumlah</td>
                        <td style={{textAlign: 'center'}}>43</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>


              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Hepertofauna di Konservasi Daerah Aliran</h3>
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
                      {table_data_heterofauna.map(( listValue, index ) => {
                        return (
                          <tr key={index}>
                            <td style={{textAlign: 'center'}}>{index + 1}</td>
                            <td style={{textAlign: 'center'}}>{listValue.spesies}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama_lokal}</td>
                            <td style={{textAlign: 'center'}}>{listValue.iucn}</td>
                            <td style={{textAlign: 'center'}}>{listValue.cites}</td>
                            <td style={{textAlign: 'center'}}>{listValue.status}</td>
                            <td style={{textAlign: 'center'}}>{listValue.y2023}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="6">Jumlah</td>
                        <td style={{textAlign: 'center'}}>21</td>
                      </tr>
                    </tbody>
                  </Table>
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
)(DaerahAliran);
