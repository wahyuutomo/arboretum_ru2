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
import kda3 from "../../assets/kda3.jpeg"
import poligowo3 from "../../assets/poligowo3.jpeg"

const table_data = [
 {
   "No": 1,
   "spesies": "Acacia auriculiformis",
   "nama_lokal": "Akasia",
   "jumlah": 6,
   "pi": 0.027027,
   "ln_pi": -3.611,
   "h": 0.098
 },
 {
   "No": 2,
   "spesies": "Acacia mangium",
   "nama_lokal": "Akasia",
   "jumlah": 3,
   "pi": 0.013514,
   "ln_pi": -4.304,
   "h": 0.058
 },
 {
   "No": 3,
   "spesies": "Acrostichum aureum",
   "nama_lokal": "Pakis bakau",
   "jumlah": 3,
   "pi": 0.013514,
   "ln_pi": -4.304,
   "h": 0.058
 },
 {
   "No": 4,
   "spesies": "Acrostichum speciosum",
   "nama_lokal": "Pakis bakau",
   "jumlah": 3,
   "pi": 0.013514,
   "ln_pi": -4.304,
   "h": 0.058
 },
 {
   "No": 5,
   "spesies": "Asystasia gangetica",
   "nama_lokal": "Rumput israel",
   "jumlah": 13,
   "pi": 0.058559,
   "ln_pi": -2.838,
   "h": 0.166
 },
 {
   "No": 6,
   "spesies": "Avicennia alba",
   "nama_lokal": "Api-api",
   "jumlah": 8,
   "pi": 0.036036,
   "ln_pi": -3.323,
   "h": 0.12
 },
 {
   "No": 7,
   "spesies": "Bruguiera gymnorrhiza",
   "nama_lokal": "Bakau puteh",
   "jumlah": 13,
   "pi": 0.058559,
   "ln_pi": -2.838,
   "h": 0.166
 },
 {
   "No": 8,
   "spesies": "Bruguiera sexangula",
   "nama_lokal": "Busing",
   "jumlah": 1,
   "pi": 0.004505,
   "ln_pi": -5.403,
   "h": 0.024
 },
 {
   "No": 9,
   "spesies": "Cerbera manghas",
   "nama_lokal": "Bintaro",
   "jumlah": 4,
   "pi": 0.018018,
   "ln_pi": -4.016,
   "h": 0.072
 },
 {
   "No": 10,
   "spesies": "Cocos nucifera",
   "nama_lokal": "Kelapa",
   "jumlah": 8,
   "pi": 0.036036,
   "ln_pi": -3.323,
   "h": 0.12
 },
 {
   "No": 11,
   "spesies": "Derris trifoliata",
   "nama_lokal": "Tuba",
   "jumlah": 5,
   "pi": 0.022523,
   "ln_pi": -3.793,
   "h": 0.085
 },
 {
   "No": 12,
   "spesies": "Excoecaria agallocha",
   "nama_lokal": "Buta-buta",
   "jumlah": 14,
   "pi": 0.063063,
   "ln_pi": -2.764,
   "h": 0.174
 },
 {
   "No": 13,
   "spesies": "Ficus sp",
   "nama_lokal": "Beringin",
   "jumlah": 2,
   "pi": 0.009009,
   "ln_pi": -4.71,
   "h": 0.042
 },
 {
   "No": 14,
   "spesies": "Heritiera littoralis",
   "nama_lokal": "Dungun",
   "jumlah": 5,
   "pi": 0.022523,
   "ln_pi": -3.793,
   "h": 0.085
 },
 {
   "No": 15,
   "spesies": "Hibiscus tiliaceus",
   "nama_lokal": "Waru",
   "jumlah": 7,
   "pi": 0.031532,
   "ln_pi": -3.457,
   "h": 0.109
 },
 {
   "No": 16,
   "spesies": "Lumnitzera littorea",
   "nama_lokal": "Teruntum merah",
   "jumlah": 4,
   "pi": 0.018018,
   "ln_pi": -4.016,
   "h": 0.072
 },
 {
   "No": 17,
   "spesies": "Nypa fruticans",
   "nama_lokal": "Nipah",
   "jumlah": 3,
   "pi": 0.013514,
   "ln_pi": -4.304,
   "h": 0.058
 },
 {
   "No": 18,
   "spesies": "Phemphis acidula",
   "nama_lokal": "Stigi",
   "jumlah": 1,
   "pi": 0.004505,
   "ln_pi": -5.403,
   "h": 0.024
 },
 {
   "No": 19,
   "spesies": "Rhizophora mucronata",
   "nama_lokal": "Belukap",
   "jumlah": 2,
   "pi": 0.009009,
   "ln_pi": -4.71,
   "h": 0.042
 },
 {
   "No": 20,
   "spesies": "Rhizophora stylosa",
   "nama_lokal": "Bako kurap",
   "jumlah": 2,
   "pi": 0.009009,
   "ln_pi": -4.71,
   "h": 0.042
 },
 {
   "No": 21,
   "spesies": "Rhizopora apiculata",
   "nama_lokal": "Bakau kacang",
   "jumlah": 17,
   "pi": 0.076577,
   "ln_pi": -2.569,
   "h": 0.197
 },
 {
   "No": 22,
   "spesies": "Sesuvium portulacastrum",
   "nama_lokal": "Krokot",
   "jumlah": 37,
   "pi": 0.166667,
   "ln_pi": -1.792,
   "h": 0.299
 },
 {
   "No": 23,
   "spesies": "Sonneratia alba",
   "nama_lokal": "Prepat",
   "jumlah": 5,
   "pi": 0.022523,
   "ln_pi": -3.793,
   "h": 0.085
 },
 {
   "No": 24,
   "spesies": "Spinifex littoreus",
   "nama_lokal": "Rumput lari-lari",
   "jumlah": 4,
   "pi": 0.018018,
   "ln_pi": -4.016,
   "h": 0.072
 },
 {
   "No": 25,
   "spesies": "Xylocarpus granatum",
   "nama_lokal": "Niri/nilih",
   "jumlah": 52,
   "pi": 0.234234,
   "ln_pi": -1.451,
   "h": 0.34
 }
]

const table_data_bird = [
 {
   "No": 1,
   "nama_lokal": "Burung madu polos",
   "spesies": "Anthreptes simplex (S.Muller, 1843) ",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 2,
   "y2023": 1
 },
 {
   "No": 2,
   "nama_lokal": "Kerak basi alis hitam",
   "spesies": "Acrocephalus bistrigiceps Swinhoe, 1860",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 1,
   "y2023": 0
 },
 {
   "No": 3,
   "nama_lokal": "Cipoh kacat",
   "spesies": "Aegithina tiphia (Linnaeus, 1758)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 5,
   "y2023": 0
 },
 {
   "No": 4,
   "nama_lokal": "Burung-madu bakau",
   "spesies": "Leptocoma calcostetha (Jardine, 1843)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 5,
   "y2023": 3
 },
 {
   "No": 5,
   "nama_lokal": "Burung-madu kelapa",
   "spesies": "Anthreptes malacensis (Scopoli, 1786)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 2,
   "y2023": 3
 },
 {
   "No": 6,
   "nama_lokal": "Cabai Bunga-api",
   "spesies": "Dicaeum trigonostigma (Scopoli, 1786)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 0,
   "y2023": 1
 },
 {
   "No": 7,
   "nama_lokal": "Caladi tilik",
   "spesies": "Dendrocopos moluccensis (Gmelin, 1788)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 0,
   "y2023": 2
 },
 {
   "No": 8,
   "nama_lokal": "Cingcoang biru",
   "spesies": "Brachypteryx montana Horsfield, 1821",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak Dilindungi",
   "y2022": 1,
   "y2023": 0
 },
 {
   "No": 9,
   "nama_lokal": "Cekakak belukar",
   "spesies": "Halcyon smyrnensis (Linnaeus, 1758)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 0,
   "y2023": 2
 },
 {
   "No": 10,
   "nama_lokal": "Cekakak sungai",
   "spesies": "Todirhamphus chloris (Boddaert, 1783)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 12,
   "y2023": 8
 },
 {
   "No": 11,
   "nama_lokal": "Cerek",
   "spesies": "Charadrius sp.",
   "iucn": "-",
   "cites": "-",
   "status": "-",
   "y2022": 0,
   "y2023": 3
 },
 {
   "No": 12,
   "nama_lokal": "Cinenen kelabu",
   "spesies": "Orthotomus ruficeps (Lesson, 1830) ",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 12,
   "y2023": 2
 },
 {
   "No": 13,
   "nama_lokal": "Gereja erasia",
   "spesies": "Passer montanus (Linnaeus, 1758)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 0,
   "y2023": 6
 },
 {
   "No": 14,
   "nama_lokal": "Sikatan emas",
   "spesies": "Ficedula zanthopygia (Hay, 1845)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 6,
   "y2023": 0
 },
 {
   "No": 15,
   "nama_lokal": "Jalak kerbau",
   "spesies": "Acridotheres javanicus (Cabanis, 1851) ",
   "iucn": "VU",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 2,
   "y2023": 8
 },
 {
   "No": 16,
   "nama_lokal": "Jinjing bukit",
   "spesies": "Hemipus picatus (Sykes, 1832)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 4,
   "y2023": 0
 },
 {
   "No": 17,
   "nama_lokal": "Kapinis jarum pantat putih",
   "spesies": "Hirundapus cochinchinensis (Oustalet, 1878)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 6,
   "y2023": 2
 },
 {
   "No": 18,
   "nama_lokal": "Layang-layang batu",
   "spesies": "Hirundo tahitica Gmelin, 1789 ",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 10,
   "y2023": 0
 },
 {
   "No": 19,
   "nama_lokal": "Kekep babi",
   "spesies": "Artamus leucorynchus (Linnaeus, 1771)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 0,
   "y2023": 6
 },
 {
   "No": 20,
   "nama_lokal": "Bondol rawa",
   "spesies": "Lonchura malacca (Linnaeus, 1766)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 7,
   "y2023": 0
 },
 {
   "No": 21,
   "nama_lokal": "Kirik-kirik laut",
   "spesies": "Merops philippinus Linnaeus, 1766 ",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 7,
   "y2023": 0
 },
 {
   "No": 22,
   "nama_lokal": "Kokokan laut",
   "spesies": "Butorides striata (Linnaeus, 1758)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 1,
   "y2023": 4
 },
 {
   "No": 23,
   "nama_lokal": "Takur topi emas",
   "spesies": "Psilopogon henricii (Temminck, 1831)",
   "iucn": "NT",
   "cites": "NA",
   "status": "Dilindungi",
   "y2022": 2,
   "y2023": 0
 },
 {
   "No": 24,
   "nama_lokal": "Kutilang",
   "spesies": "Pycnonotus aurigaster (Vieillot, 1818)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 4,
   "y2023": 2
 },
 {
   "No": 25,
   "nama_lokal": "Layang-layang Asia",
   "spesies": "Hirundo rustica (Linnaeus, 1758)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 0,
   "y2023": 2
 },
 {
   "No": 26,
   "nama_lokal": "Merbah mata-merah",
   "spesies": "Pycnonotus brunneus (Blyth, 1845)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 2,
   "y2023": 0
 },
 {
   "No": 27,
   "nama_lokal": "Layang-layang Batu",
   "spesies": "Hirundo tahitica (Gmelin, 1789)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 0,
   "y2023": 3
 },
 {
   "No": 28,
   "nama_lokal": "Layang-layang Loreng",
   "spesies": "Cecropis striolata (Schlegel, 1844)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 3,
   "y2023": 1
 },
 {
   "No": 29,
   "nama_lokal": "Kapinis jarum kecil",
   "spesies": "Rhaphidura leucopygialis (Blyth, 1849) ",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 5,
   "y2023": 0
 },
 {
   "No": 30,
   "nama_lokal": "Layang-layang rumah",
   "spesies": "Delichon dasypus (Bonaparte, 1850)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 9,
   "y2023": 12
 },
 {
   "No": 31,
   "nama_lokal": "Merbah belukar",
   "spesies": "Pycnonotus plumosus (Blyth, 1845)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 4,
   "y2023": 1
 },
 {
   "No": 32,
   "nama_lokal": "Merbah cerucuk",
   "spesies": "Pycnonotus goiavier (Scopoli, 1786)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 5,
   "y2023": 17
 },
 {
   "No": 33,
   "nama_lokal": "Perkutut jawa",
   "spesies": "Geopelia striata (Linnaeus, 1766)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 3,
   "y2023": 4
 },
 {
   "No": 34,
   "nama_lokal": "Raja udang meninting",
   "spesies": "Alcedo meninting (Horsfield, 1821)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 0,
   "y2023": 1
 },
 {
   "No": 35,
   "nama_lokal": "Takur tutut",
   "spesies": "Psilopogon rafflesii (R.Lesson, 1839)",
   "iucn": "NT",
   "cites": "NA",
   "status": "Dilindungi",
   "y2022": 1,
   "y2023": 1
 },
 {
   "No": 36,
   "nama_lokal": "Tekukur biasa",
   "spesies": "Spilopelia chinensis (Scopoli, 1786) ",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 2,
   "y2023": 3
 },
 {
   "No": 37,
   "nama_lokal": "Walet sapi",
   "spesies": "Collocalia esculenta (Linnaeus, 1758)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 9,
   "y2023": 14
 },
 {
   "No": 38,
   "nama_lokal": "Walet sarang hitam",
   "spesies": "Collocalia maxima (Hume, 1878)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 0,
   "y2023": 6
 },
 {
   "No": 39,
   "nama_lokal": "Walet sarang putih",
   "spesies": "Aerodramus hirundinaceus (Stresemann, 1914)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 4,
   "y2023": 7
 },
 {
   "No": 40,
   "nama_lokal": "Wiwik kelabu",
   "spesies": "Cacomantis merulinus (Scopoli, 1786)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak dilindungi",
   "y2022": 1,
   "y2023": 2
 }
]

const table_data_mamalia = [
 {
   "No": 1,
   "nama_lokal": "Bajing Kelapa",
   "spesies": "Callosciurus notatus (Boddaert, 1785)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak Dilindungi",
   "y2022": 3,
   "y2023": 2
 },
 {
   "No": 2,
   "nama_lokal": "Monyet Ekor Panjang",
   "spesies": "Macaca fascicularis (Raffles, 1821)",
   "iucn": "EN",
   "cites": "II",
   "status": "Tidak Dilindungi",
   "y2022": 1,
   "y2023": 9
 },
 {
   "No": 3,
   "nama_lokal": "Babi Hutan",
   "spesies": "Sus scrofa Linnaeus, 1758",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak Dilindungi",
   "y2022": 2,
   "y2023": 0
 },
 {
   "No": 4,
   "nama_lokal": "Simpai Hitam Sumatera",
   "spesies": "Presbytis melalophos",
   "iucn": "EN",
   "cites": "II",
   "status": "Dilindungi",
   "y2022": 5,
   "y2023": 4
 },
 {
   "No": 5,
   "nama_lokal": "Lutung Kelabu",
   "spesies": "Trachypithecus cristatus (Raffles, 1821)",
   "iucn": "VU",
   "cites": "II",
   "status": "Dilindungi",
   "y2022": 0,
   "y2023": 6
 }
]

const table_data_herpetofauna = [
 {
   "No": 1,
   "nama_lokal": "Cicak Rumah Asia",
   "spesies": "Hemidactylus frenatus Schlegel, 1836",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak Dilindungi",
   "y2022": 3,
   "y2023": 0
 },
 {
   "No": 2,
   "nama_lokal": "Biawak Air",
   "spesies": "Varanus salvator (Laurenti, 1768)",
   "iucn": "LC",
   "cites": "II",
   "status": "Tidak Dilindungi",
   "y2022": 1,
   "y2023": 4
 },
 {
   "No": 3,
   "nama_lokal": "Kadal Bakau",
   "spesies": "Emoia atrocostata (Lesson, 1830)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak Dilindungi",
   "y2022": 1,
   "y2023": 0
 },
 {
   "No": 4,
   "nama_lokal": "Buaya",
   "spesies": "Crocodylidae",
   "iucn": "LC",
   "cites": "II",
   "status": "Tidak Dilindungi",
   "y2022": 1,
   "y2023": 0
 },
 {
   "No": 5,
   "nama_lokal": "Ular Tambak",
   "spesies": "Cerberus rynchops (Schneider, 1799)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak Dilindungi",
   "y2022": 1,
   "y2023": 11
 },
 {
   "No": 6,
   "nama_lokal": "Ular Air Macaley's",
   "spesies": "Pseudoferania polylepis (Fisher, 1886)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak Dilindungi",
   "y2022": 0,
   "y2023": 2
 },
 {
   "No": 7,
   "nama_lokal": "Ular Cincin Emas",
   "spesies": "Boiga dendrophila (Heinrich Boie, 1827)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak Dilindungi",
   "y2022": 0,
   "y2023": 1
 },
 {
   "No": 8,
   "nama_lokal": "Ular Pucuk",
   "spesies": "Ahaetulla prasina (Heinrich Boie, 1827)",
   "iucn": "LC",
   "cites": "NA",
   "status": "Tidak Dilindungi",
   "y2022": 0,
   "y2023": 1
 }
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
                  <div>
                    <ColoredLine/>
                  </div>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h2>Mangrove Desa Pangkalan Jambi</h2>
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
                    <h3>Indeks Keanekaragaman Hayati (H') Flora Mangrove Pangkalan Jambi 2023</h3>
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
                        <th style={{textAlign: 'center'}}>Nama Lokal</th>
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
                            <td style={{textAlign: 'center'}}>{listValue.spesies}</td>
                            <td style={{textAlign: 'center'}}>{listValue.nama_lokal}</td>
                            <td style={{textAlign: 'center'}}>{listValue.jumlah}</td>
                            <td style={{textAlign: 'center'}}>{listValue.pi}</td>
                            <td style={{textAlign: 'center'}}>{listValue.ln_pi}</td>
                            <td style={{textAlign: 'center'}}>{listValue.h}</td>
                          </tr>
                        );
                      })}
                      <tr>
                        <td colSpan="3">Jumlah</td>
                        <td style={{textAlign: 'center'}}>222</td>
                        <td style={{textAlign: 'center'}}></td>
                        <td style={{textAlign: 'center'}}></td>
                        <td style={{textAlign: 'center'}}>2.67</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

              <Row style={{paddingTop: 45}}>
                <Col style={{textAlign: 'center'}}>
                  <h5>Indeks Kehati (H') Flora Mangrove Pangkalan Jambi Tahun 2017-2023</h5>
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
                      <tr>
                        <td style={{textAlign: 'center'}}>2022</td>
                        <td style={{textAlign: 'center'}}>2.64</td>
                      </tr>
                      <tr>
                        <td style={{textAlign: 'center'}}>2023</td>
                        <td style={{textAlign: 'center'}}>2.67</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col style={{textAlign: 'center'}}>
                  <div>
                    <h5>Indeks Kehati (H') Flora dari tahun 2017 - 2023 di Mangrove Education Center (MEC) Pangkalan Jambi</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 2.8]}
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
                        data={[
                          {x: '2017', y: 1.32},
                          {x: '2018', y: 1.42},
                          {x: '2019', y: 1.78},
                          {x: '2020', y: 1.83},
                          {x: '2021', y: 2.31},
                          {x: '2022', y: 2.64},
                          {x: '2023', y: 2.67},
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
                          {x: '2022', y: 2.64, yOffset: -25},
                          {x: '2023', y: 2.67, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                    </XYPlot>
                  </div>
                </Col>
              </Row>

              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Burung di Mangrove Pangkalan Jambi</h3>
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
                      <tr>
                        <td style={{textAlign: 'center'}}>2022</td>
                        <td style={{textAlign: 'center'}}>2023</td>
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
                        <td style={{textAlign: 'center'}}>137</td>
                        <td style={{textAlign: 'center'}}>127</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>


              <Row style={{paddingTop: 45}}>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
                <Col md={8} style={{textAlign: 'center'}}>
                  <div style={{justifyContent: 'center'}}>
                    <h5>Diagram Perbandingan Indeks Ekologi Burung Tahun 2021 - 2023 di Mangrove Education Center Pangkalan Jambi: Indeks Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E)</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 7.0]}
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
                        color="#c68240"
                        data={[
                          {x: 'H\'', y: 2.86},
                          {x: 'R', y: 4.48},
                          {x: 'E', y: 0.74},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 2.86, yOffset: -25, xOffset: -45},
                          {x: 'R', y: 4.48, yOffset: -25, xOffset: -45},
                          {x: 'E', y: 0.89, yOffset: -25, xOffset: -45},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#61351c"
                        data={[
                          {x: 'H\'', y: 3.17},
                          {x: 'R', y: 5.89},
                          {x: 'E', y: 0.93},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 3.17, yOffset: -25, xOffset: 0},
                          {x: 'R', y: 5.89, yOffset: -25, xOffset: 0},
                          {x: 'E', y: 0.93, yOffset: -25, xOffset: 0},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#3e6a00"
                        data={[
                          {x: 'H\'', y: 3.17},
                          {x: 'R', y: 6.3},
                          {x: 'E', y: 0.92},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 3.17, yOffset: -25, xOffset: 35},
                          {x: 'R', y: 6.3, yOffset: -25, xOffset: 35},
                          {x: 'E', y: 0.92, yOffset: -25, xOffset: 35},
                        ]} 
                        getLabel={d => d.y}/>
                      
                    </XYPlot>
                    <DiscreteColorLegend
                      width={180}
                      style={{position: 'absolute', left: '650px', top: '150px'}}
                      items={[
                        {title: "2021", color: "#c68240", strokeWidth: "12"},
                        {title: "2022", color: "#61351c", strokeWidth: "12"},
                        {title: "2023", color: "#3e6a00", strokeWidth: "12"}
                      ]}
                    />
                  </div>
                </Col>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
              </Row>



              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Mamalia di Mangrove Pangkalan Jambi</h3>
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
                      <tr>
                        <td style={{textAlign: 'center'}}>2022</td>
                        <td style={{textAlign: 'center'}}>2023</td>
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
                        <td style={{textAlign: 'center'}}>137</td>
                        <td style={{textAlign: 'center'}}>127</td>
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
                    <h5>Diagram Perbandingan Indeks Ekologi Mamalia Tahun 2021 - 2023 di Mangrove Education Center Pangkalan Jambi: Indeks Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E)</h5>

                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 3.0]}
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
                        color="#c68240"
                        data={[
                          {x: 'H\'', y: 1.12},
                          {x: 'R', y: 1.04},
                          {x: 'E', y: 0.89},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.12, yOffset: -25, xOffset: -45},
                          {x: 'R', y: 1.04, yOffset: -25, xOffset: -45},
                          {x: 'E', y: 0.81, yOffset: -25, xOffset: -45},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#61351c"
                        data={[
                          {x: 'H\'', y: 1.27},
                          {x: 'R', y: 1.37},
                          {x: 'E', y: 0.92},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.27, yOffset: -25, xOffset: 0},
                          {x: 'R', y: 1.37, yOffset: -25, xOffset: 0},
                          {x: 'E', y: 0.92, yOffset: -25, xOffset: 0},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#3e6a00"
                        data={[
                          {x: 'H\'', y: 1.3},
                          {x: 'R', y: 0.97},
                          {x: 'E', y: 0.94},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.3, yOffset: -25, xOffset: 45},
                          {x: 'R', y: 0.97, yOffset: -25, xOffset: 45},
                          {x: 'E', y: 0.94, yOffset: -25, xOffset: 45},
                        ]} 
                        getLabel={d => d.y}/>
                    </XYPlot>
                    <DiscreteColorLegend
                      width={180}
                      style={{position: 'absolute', left: '650px', top: '150px'}}
                      items={[
                        {title: "2021", color: "#c68240", strokeWidth: "12"},
                        {title: "2022", color: "#61351c", strokeWidth: "12"},
                        {title: "2023", color: "#3e6a00", strokeWidth: "12"}
                      ]}
                    />
                  </div>
                </Col>
                <Col md={2} style={{textAlign: 'center'}}>
                </Col>
              </Row>



              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Jumlah Spesies Herpetofauna di Mangrove Pangkalan Jambi</h3>
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
                      <tr>
                        <td style={{textAlign: 'center'}}>2022</td>
                        <td style={{textAlign: 'center'}}>2023</td>
                      </tr>
                    </thead>
                    <tbody>
                      {table_data_herpetofauna.map(( listValue, index ) => {
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
                        <td style={{textAlign: 'center'}}>7</td>
                        <td style={{textAlign: 'center'}}>19</td>
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
                    <h5>Diagram Indeks Ekologi Herpetofauna Tahun 2022 dan 2023 di Mangrove Education Center Pangkalan Jambi: Indeks Keanekaragaman Jenis (H’); Indeks Kekayaan Jenis (R); Indeks Kemerataan (E)</h5>
                    <XYPlot 
                      className="clustered-stacked-bar-chart-example"
                      xType="ordinal"
                      yDomain={[0, 3.0]}
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
                          {x: 'H\'', y: 1.2},
                          {x: 'R', y: 2.06},
                          {x: 'E', y: 0.74},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.2, yOffset: -25, xOffset: -25},
                          {x: 'R', y: 2.06, yOffset: -25, xOffset: -25},
                          {x: 'E', y: 0.81, yOffset: -25, xOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>

                      <VerticalBarSeries
                        className="clustered-stacked-bar-chart-example"
                        barWidth={0.5}
                        color="#3e6a00"
                        data={[
                          {x: 'H\'', y: 1.26},
                          {x: 'R', y: 1.41},
                          {x: 'E', y: 0.78},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: 'H\'', y: 1.26, yOffset: -25, xOffset: 25},
                          {x: 'R', y: 1.41, yOffset: -25, xOffset: 25},
                          {x: 'E', y: 0.78, yOffset: -25, xOffset: 25},
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
)(MangroveJambi);
