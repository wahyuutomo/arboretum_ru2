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

const table_data_species = [
    {
      "No": 1,
      "spesies": "Adenanthera pavonina",
      "nama_lokal": "Saga",
      "y2021": 0,
      "y2022": 0,
      "y2023": 3
    },
    {
      "No": 2,
      "spesies": "Aglaonema sp.",
      "nama_lokal": "Sri Rejeki",
      "y2021": 0,
      "y2022": 0,
      "y2023": 2
    },
    {
      "No": 3,
      "spesies": "Alocasia macrorrhizos",
      "nama_lokal": "Taro",
      "y2021": 8,
      "y2022": 33,
      "y2023": 3
    },
    {
      "No": 4,
      "spesies": "Alphonsea avanica",
      "nama_lokal": "Setulang",
      "y2021": 243,
      "y2022": 4,
      "y2023": 44
    },
    {
      "No": 5,
      "spesies": "Alstonia pneumatophore",
      "nama_lokal": "Pulai rawa",
      "y2021": 0,
      "y2022": 3,
      "y2023": 0
    },
    {
      "No": 6,
      "spesies": "Anacardium occidentale",
      "nama_lokal": "Jambu Mete",
      "y2021": 0,
      "y2022": 3,
      "y2023": 4
    },
    {
      "No": 7,
      "spesies": "Antidesma bunius",
      "nama_lokal": "Buni",
      "y2021": 0,
      "y2022": 3,
      "y2023": 2
    },
    {
      "No": 8,
      "spesies": "Aquilaria malaccensis",
      "nama_lokal": "Gaharu",
      "y2021": 0,
      "y2022": 0,
      "y2023": 24
    },
    {
      "No": 9,
      "spesies": "Areca catechu",
      "nama_lokal": "Pinang",
      "y2021": 9,
      "y2022": 5,
      "y2023": 3
    },
    {
      "No": 10,
      "spesies": "Arenga pinnata",
      "nama_lokal": "Aren",
      "y2021": 0,
      "y2022": 0,
      "y2023": 28
    },
    {
      "No": 11,
      "spesies": "Artocarpus heterophyllus",
      "nama_lokal": "Nangka",
      "y2021": 0,
      "y2022": 3,
      "y2023": 8
    },
    {
      "No": 12,
      "spesies": "Artocarpus integer",
      "nama_lokal": "Cempedak",
      "y2021": 0,
      "y2022": 40,
      "y2023": 3
    },
    {
      "No": 13,
      "spesies": "Asplenium nidus",
      "nama_lokal": "Paku Sarang Burung",
      "y2021": 8,
      "y2022": 5,
      "y2023": 2
    },
    {
      "No": 14,
      "spesies": "Begonia sp.",
      "nama_lokal": "Begonia",
      "y2021": 0,
      "y2022": 0,
      "y2023": 1
    },
    {
      "No": 15,
      "spesies": "Caladium bicolor",
      "nama_lokal": "Keladi Merah",
      "y2021": 15,
      "y2022": 5,
      "y2023": 2
    },
    {
      "No": 16,
      "spesies": "Caladium lindenii",
      "nama_lokal": "Keladi ",
      "y2021": 0,
      "y2022": 0,
      "y2023": 2
    },
    {
      "No": 17,
      "spesies": "Calamus rotang",
      "nama_lokal": "Rotan",
      "y2021": 0,
      "y2022": 0,
      "y2023": 10
    },
    {
      "No": 18,
      "spesies": "Calophyllum dioscurii",
      "nama_lokal": "Mentangor",
      "y2021": 0,
      "y2022": 0,
      "y2023": 5
    },
    {
      "No": 19,
      "spesies": "Citrus sp.",
      "nama_lokal": "Jeruk",
      "y2021": 0,
      "y2022": 0,
      "y2023": 6
    },
    {
      "No": 20,
      "spesies": "Cocos nucifera",
      "nama_lokal": "Kelapa",
      "y2021": 0,
      "y2022": 2,
      "y2023": 0
    },
    {
      "No": 21,
      "spesies": "Cotylelobium melanoxylon",
      "nama_lokal": "Resak",
      "y2021": 0,
      "y2022": 0,
      "y2023": 2
    },
    {
      "No": 22,
      "spesies": "Cratoxylon arborescens",
      "nama_lokal": "Geronggang",
      "y2021": 19,
      "y2022": 68,
      "y2023": 65
    },
    {
      "No": 23,
      "spesies": "Dendrodium Bigibbum",
      "nama_lokal": "Anggrek",
      "y2021": 20,
      "y2022": 80,
      "y2023": 0
    },
    {
      "No": 24,
      "spesies": "Dillenia exima",
      "nama_lokal": "Simpu",
      "y2021": 0,
      "y2022": 10,
      "y2023": 0
    },
    {
      "No": 25,
      "spesies": "Dimocarpus longan",
      "nama_lokal": "Mata Kucing",
      "y2021": 17,
      "y2022": 5,
      "y2023": 0
    },
    {
      "No": 26,
      "spesies": "Dracaena marginata",
      "nama_lokal": "Manggar",
      "y2021": 0,
      "y2022": 0,
      "y2023": 1
    },
    {
      "No": 27,
      "spesies": "Dracaena sp.",
      "nama_lokal": "Drakaena",
      "y2021": 0,
      "y2022": 0,
      "y2023": 1
    },
    {
      "No": 28,
      "spesies": "Dyera costulata",
      "nama_lokal": "Jelutung",
      "y2021": 0,
      "y2022": 0,
      "y2023": 1
    },
    {
      "No": 29,
      "spesies": "Elaeis guinensis",
      "nama_lokal": "Sawit",
      "y2021": 7,
      "y2022": 4,
      "y2023": 10
    },
    {
      "No": 30,
      "spesies": "Gomphandra capitulate",
      "nama_lokal": "Mesiro",
      "y2021": 0,
      "y2022": 11,
      "y2023": 90
    },
    {
      "No": 31,
      "spesies": "Heliconia psittacorum",
      "nama_lokal": "Supit Udang",
      "y2021": 0,
      "y2022": 0,
      "y2023": 6
    },
    {
      "No": 32,
      "spesies": "Hevea brasiliensis",
      "nama_lokal": "Karet",
      "y2021": 74,
      "y2022": 15,
      "y2023": 140
    },
    {
      "No": 33,
      "spesies": "Macaranga pruinosa",
      "nama_lokal": "Makaranga",
      "y2021": 12,
      "y2022": 15,
      "y2023": 0
    },
    {
      "No": 34,
      "spesies": "Macaranga triloba",
      "nama_lokal": "Mahang",
      "y2021": 0,
      "y2022": 0,
      "y2023": 10
    },
    {
      "No": 35,
      "spesies": "Mangifera indica",
      "nama_lokal": "Mangga",
      "y2021": 0,
      "y2022": 19,
      "y2023": 5
    },
    {
      "No": 36,
      "spesies": "Manilkara zapota",
      "nama_lokal": "Sawo",
      "y2021": 0,
      "y2022": 0,
      "y2023": 1
    },
    {
      "No": 37,
      "spesies": "Maranta arundinacea",
      "nama_lokal": "Garut",
      "y2021": 0,
      "y2022": 0,
      "y2023": 2
    },
    {
      "No": 38,
      "spesies": "Melaleuca leucadendra",
      "nama_lokal": "Gelam",
      "y2021": 35,
      "y2022": 10,
      "y2023": 47
    },
    {
      "No": 39,
      "spesies": "Melcope lunu-ancenda",
      "nama_lokal": "Kayu bukam",
      "y2021": 0,
      "y2022": 11,
      "y2023": 0
    },
    {
      "No": 40,
      "spesies": "Melicote ptelefolia",
      "nama_lokal": "Tenggek Burung",
      "y2021": 0,
      "y2022": 0,
      "y2023": 10
    },
    {
      "No": 41,
      "spesies": "Nepenthes albomarginata",
      "nama_lokal": "Kantong Beruk",
      "y2021": 40,
      "y2022": 17,
      "y2023": 3
    },
    {
      "No": 42,
      "spesies": "Nepenthes ampularia",
      "nama_lokal": "Kantung Semar",
      "y2021": 120,
      "y2022": 17,
      "y2023": 88
    },
    {
      "No": 43,
      "spesies": "Nepenthes bicalcarata",
      "nama_lokal": "Kantung Semar",
      "y2021": 75,
      "y2022": 3,
      "y2023": 2
    },
    {
      "No": 44,
      "spesies": "Nepenthes gracilis",
      "nama_lokal": "Kantong Semar Gracilis",
      "y2021": 0,
      "y2022": 6,
      "y2023": 6
    },
    {
      "No": 45,
      "spesies": "Nepenthes gracilis x ampullaria",
      "nama_lokal": "Kantung Semar",
      "y2021": 0,
      "y2022": 0,
      "y2023": 1
    },
    {
      "No": 46,
      "spesies": "Nepenthes mirabilis",
      "nama_lokal": "Kantong semar mirabilis",
      "y2021": 80,
      "y2022": 28,
      "y2023": 5
    },
    {
      "No": 47,
      "spesies": "Nepenthes rafflesiana ",
      "nama_lokal": "Kantong semar",
      "y2021": 157,
      "y2022": 20,
      "y2023": 13
    },
    {
      "No": 48,
      "spesies": "Nepenthes spectabilis",
      "nama_lokal": "Kantong Semar",
      "y2021": 30,
      "y2022": 10,
      "y2023": 4
    },
    {
      "No": 49,
      "spesies": "Nepenthes sumantrana",
      "nama_lokal": "Kantong semar sumatra",
      "y2021": 30,
      "y2022": 8,
      "y2023": 3
    },
    {
      "No": 50,
      "spesies": "Nephelium lappaceum",
      "nama_lokal": "Rambutan",
      "y2021": 0,
      "y2022": 0,
      "y2023": 5
    },
    {
      "No": 51,
      "spesies": "Persea americana",
      "nama_lokal": "Alpukat",
      "y2021": 0,
      "y2022": 7,
      "y2023": 1
    },
    {
      "No": 52,
      "spesies": "Pometia pinnata",
      "nama_lokal": "Matoa",
      "y2021": 0,
      "y2022": 0,
      "y2023": 1
    },
    {
      "No": 53,
      "spesies": "Rhodomtrus tomentosa",
      "nama_lokal": "Kalimunting ",
      "y2021": 0,
      "y2022": 11,
      "y2023": 0
    },
    {
      "No": 54,
      "spesies": "Sanseviera trifasciata",
      "nama_lokal": "Lidah Mertua",
      "y2021": 0,
      "y2022": 0,
      "y2023": 6
    },
    {
      "No": 55,
      "spesies": "Senna siamea",
      "nama_lokal": "Johar",
      "y2021": 0,
      "y2022": 71,
      "y2023": 0
    },
    {
      "No": 56,
      "spesies": "Shorea balangeran",
      "nama_lokal": "Blangeran",
      "y2021": 0,
      "y2022": 19,
      "y2023": 2
    },
    {
      "No": 57,
      "spesies": "Shorea leprosula",
      "nama_lokal": "Meranti Tembaga",
      "y2021": 150,
      "y2022": 15,
      "y2023": 10
    },
    {
      "No": 58,
      "spesies": "Shorea pauciflora",
      "nama_lokal": "Meranti",
      "y2021": 0,
      "y2022": 0,
      "y2023": 15
    },
    {
      "No": 59,
      "spesies": "Spatholobus littoralis",
      "nama_lokal": "Bajaka/kait-kait",
      "y2021": 0,
      "y2022": 0,
      "y2023": 3
    },
    {
      "No": 60,
      "spesies": "Stenochlaena palustris",
      "nama_lokal": "Iding-iding",
      "y2021": 0,
      "y2022": 20,
      "y2023": 0
    },
    {
      "No": 61,
      "spesies": "Syzygium aqueum",
      "nama_lokal": "Jambu Air ",
      "y2021": 38,
      "y2022": 23,
      "y2023": 22
    },
    {
      "No": 62,
      "spesies": "Syzygium cumini",
      "nama_lokal": "kelad merah",
      "y2021": 15,
      "y2022": 25,
      "y2023": 16
    },
    {
      "No": 63,
      "spesies": "Syzygium leptostemon",
      "nama_lokal": "Kelad tikus",
      "y2021": 80,
      "y2022": 27,
      "y2023": 52
    },
    {
      "No": 64,
      "spesies": "Syzygium malaccense",
      "nama_lokal": "Jambu Bol/jamaika",
      "y2021": 0,
      "y2022": 0,
      "y2023": 2
    },
    {
      "No": 65,
      "spesies": "Syzygium polyanthum",
      "nama_lokal": "Salam",
      "y2021": 0,
      "y2022": 0,
      "y2023": 1
    },
    {
      "No": 66,
      "spesies": "Syzygium zeylanicum",
      "nama_lokal": "Nasi Nasi",
      "y2021": 0,
      "y2022": 28,
      "y2023": 28
    },
    {
      "No": 67,
      "spesies": "Vitex pubescens",
      "nama_lokal": "Leban",
      "y2021": 42,
      "y2022": 16,
      "y2023": 18
    },
    {
      "No": 68,
      "spesies": "Vitis sp.",
      "nama_lokal": "Anggur",
      "y2021": 0,
      "y2022": 0,
      "y2023": 3
    }
]
  
const table_data_bird = [
  {
    "No": 1,
    "nama_lokal": "Cikrak bambu",
    "spesies": "Abroscopus superciliaris",
    "y2022": 0,
    "y2023": 3
  },
  {
    "No": 2,
    "nama_lokal": "Cipoh Kacat",
    "spesies": "Aegithina tiphia (Linnaeus, 1758)",
    "y2022": 3,
    "y2023": 1
  },
  {
    "No": 3,
    "nama_lokal": "Burung Madu Kelapa",
    "spesies": "Anthreptes malacensis (Scopoli, 1786)",
    "y2022": 1,
    "y2023": 4
  },
  {
    "No": 4,
    "nama_lokal": "Bubut Alang-alang",
    "spesies": "Centropus bengalensis (Gmelin, 1788)",
    "y2022": 1,
    "y2023": 1
  },
  {
    "No": 5,
    "nama_lokal": "Bubut Besar",
    "spesies": "Centropus sinensis (Stephens, 1815)",
    "y2022": 2,
    "y2023": 2
  },
  {
    "No": 6,
    "nama_lokal": "Layang-layang Rumah",
    "spesies": "Delichon dasypus (Bonaparte, 1850)",
    "y2022": 3,
    "y2023": 4
  },
  {
    "No": 7,
    "nama_lokal": "Caladi Tilik",
    "spesies": "Dendrocopos moluccensis (Gmelin, 1788)",
    "y2022": 0,
    "y2023": 5
  },
  {
    "No": 8,
    "nama_lokal": "Srigunting Batu",
    "spesies": "Dicrurus paradiseus (Linnaeus, 1766)",
    "y2022": 1,
    "y2023": 2
  },
  {
    "No": 9,
    "nama_lokal": "Pelatuk Besi",
    "spesies": "Dinopium javanense (Ljungh, 1797)",
    "y2022": 0,
    "y2023": 2
  },
  {
    "No": 10,
    "nama_lokal": "Perkutut Jawa",
    "spesies": "Geopelia striata (Linnaeus, 1766)",
    "y2022": 4,
    "y2023": 2
  },
  {
    "No": 11,
    "nama_lokal": "Kapinis Jarum Pantat Putih",
    "spesies": "Hirundapus cochinchinensis (Oustalet, 1878)",
    "y2022": 4,
    "y2023": 4
  },
  {
    "No": 12,
    "nama_lokal": "Layang-layang Batu",
    "spesies": "Hirundo tahitica (Gmelin, 1789)",
    "y2022": 0,
    "y2023": 4
  },
  {
    "No": 13,
    "nama_lokal": "Walet Palem asia",
    "spesies": "Hydrochous gigas (Hartert & Butler, 1901)",
    "y2022": 0,
    "y2023": 4
  },
  {
    "No": 14,
    "nama_lokal": "Kehicap Ranting",
    "spesies": "Hypothymis azurea (Boddaert, 1783)",
    "y2022": 5,
    "y2023": 0
  },
  {
    "No": 15,
    "nama_lokal": "Pelanduk Semak",
    "spesies": "Malacocincla sepiaria (Horsfield, 1821)",
    "y2022": 2,
    "y2023": 1
  },
  {
    "No": 16,
    "nama_lokal": "Sikatan Bubik",
    "spesies": "Muscicapa latirostris Raffles, 1822",
    "y2022": 2,
    "y2023": 0
  },
  {
    "No": 17,
    "nama_lokal": "Cinenen Belukar",
    "spesies": "Orthotomus atrogularis Temminck, 1836",
    "y2022": 3,
    "y2023": 1
  },
  {
    "No": 18,
    "nama_lokal": "Cinenen Kelabu",
    "spesies": "Orthotomus ruficeps (Lesson, 1830) ",
    "y2022": 3,
    "y2023": 3
  },
  {
    "No": 19,
    "nama_lokal": "Takur Tutut",
    "spesies": "Psilopogon rafflesii (R.Lesson, 1839)",
    "y2022": 1,
    "y2023": 0
  },
  {
    "No": 20,
    "nama_lokal": "Merbah Belukar",
    "spesies": "Pycnonotus plumosus (Blyth, 1845)",
    "y2022": 2,
    "y2023": 2
  },
  {
    "No": 21,
    "nama_lokal": "Kapinis Jarum Kecil",
    "spesies": "Rhaphidura leucopygialis (Blyth, 1849)",
    "y2022": 0,
    "y2023": 6
  },
  {
    "No": 22,
    "nama_lokal": "Kipasan Belang",
    "spesies": "Rhipidura javanica (Sparrman, 1788)",
    "y2022": 1,
    "y2023": 0
  },
  {
    "No": 23,
    "nama_lokal": "Tekukur Biasa",
    "spesies": "Spilopelia chinensis (Scopoli, 1786) ",
    "y2022": 5,
    "y2023": 4
  },
  {
    "No": 24,
    "nama_lokal": "Cekakak Sungai",
    "spesies": "Todirhamphus chloris (Boddaert, 1783)",
    "y2022": 4,
    "y2023": 2
  },
  {
    "No": 25,
    "nama_lokal": "Punai Gading",
    "spesies": "Treron vernans (Linnaeus, 1771)",
    "y2022": 1,
    "y2023": 5
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
    "y2022": 4,
    "y2023": 3
  },
  {
    "No": 2,
    "nama_lokal": "Lutung Kelabu",
    "spesies": "Trachypithecus cristatus (Raffles, 1821)",
    "iucn": "VU",
    "cites": "II",
    "status": "Dilindungi",
    "y2022": 6,
    "y2023": 7
  },
  {
    "No": 3,
    "nama_lokal": "Tupai",
    "spesies": "Tupaia glis (Diard, 1820)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak Dilindungi",
    "y2022": 4,
    "y2023": 0
  },
  {
    "No": 4,
    "nama_lokal": "Monyet Ekor Panjang",
    "spesies": "Macaca fascicularis (Raffles, 1821)",
    "iucn": "EN",
    "cites": "II",
    "status": "Tidak Dilindungi",
    "y2022": 4,
    "y2023": 9
  },
  {
    "No": 5,
    "nama_lokal": "Simpai Hitam Sumatera",
    "spesies": "Presbytis melalophos",
    "iucn": "EN",
    "cites": "II",
    "status": "Dilindungi",
    "y2022": 5,
    "y2023": 4
  },
  {
    "No": 7,
    "nama_lokal": "Sigung",
    "spesies": "Mydaus javanensis (Desmarest, 1818)",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak Dilindungi",
    "y2022": 0,
    "y2023": 1
  }
]

const table_data_hepertofauna = [
  {
    "No": 1,
    "spesies": "Varanus salvator (Laurenti, 1768)",
    "nama_lokal": "Biawak",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak Dilindungi",
    "y2022": 0,
    "y2023": 2
  },
  {
    "No": 2,
    "spesies": "Hemidactylus frenatus (Schlegel, 1836)",
    "nama_lokal": "Cicak Rumah",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak Dilindungi",
    "y2022": 1,
    "y2023": 1
  },
  {
    "No": 3,
    "spesies": "Ophiopohagus hannah (Cantor, 1836)",
    "nama_lokal": "Ular Kobra Raja",
    "iucn": "VU",
    "cites": "II",
    "status": "Tidak Dilindungi",
    "y2022": 0,
    "y2023": 1
  },
  {
    "No": 4,
    "spesies": "Malayopython reticulatus (Schneider, 1801)",
    "nama_lokal": "Ular Sanca Batik",
    "iucn": "LC",
    "cites": "NA",
    "status": "Tidak Dilindungi",
    "y2022": 0,
    "y2023": 2
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
                    <h3>Jumlah Spesies Tanaman di Arboretum Gambut</h3>
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
                      {table_data_species.map(( listValue, index ) => {
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
                        <td style={{textAlign: 'center'}}>1324</td>
                        <td style={{textAlign: 'center'}}>725</td>
                        <td style={{textAlign: 'center'}}>853</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

              <Row style={{paddingTop: 45}}>
                <Col style={{textAlign: 'center'}}>
                  <h5>Jumlah Spesies di Arboretum Gambut Tahun 2019-2023</h5>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th style={{textAlign: 'center'}}>2019</th>
                        <th style={{textAlign: 'center'}}>2020</th>
                        <th style={{textAlign: 'center'}}>2021</th>
                        <th style={{textAlign: 'center'}}>2022</th>
                        <th style={{textAlign: 'center'}}>2023</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{textAlign: 'center'}}>Jumlah Spesies</td>
                        <td style={{textAlign: 'center'}}>24</td>
                        <td style={{textAlign: 'center'}}>26</td>
                        <td style={{textAlign: 'center'}}>28</td>
                        <td style={{textAlign: 'center'}}>41</td>
                        <td style={{textAlign: 'center'}}>58</td>
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
                        data={[
                          {x: '2019', y: 24},
                          {x: '2020', y: 26},
                          {x: '2021', y: 28},
                          {x: '2022', y: 41},
                          {x: '2023', y: 58},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2019', y: 24, yOffset: -25},
                          {x: '2020', y: 26, yOffset: -25},
                          {x: '2021', y: 28, yOffset: -25},
                          {x: '2022', y: 41, yOffset: -25},
                          {x: '2023', y: 58, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={[
                          {x: '2019', y: 20, yOffset: -25},
                          {x: '2020', y: 25, yOffset: -25},
                          {x: '2021', y: 30, yOffset: -25},
                          {x: '2022', y: 43, yOffset: -25},
                          {x: '2023', y: 58, yOffset: -25},
                        ]} 
                      />
                    </XYPlot>
                  </div>
                </Col>
              </Row>
              <Row style={{paddingTop: 30}}>
                <Col style={{textAlign: 'center'}}>
                  <h5>Indeks Keanekaragaman Hayati Arboretum Gambut Tahun 2019-2023</h5>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th></th>
                        <th style={{textAlign: 'center'}}>2019</th>
                        <th style={{textAlign: 'center'}}>2020</th>
                        <th style={{textAlign: 'center'}}>2021</th>
                        <th style={{textAlign: 'center'}}>2022</th>
                        <th style={{textAlign: 'center'}}>2023</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{textAlign: 'center'}}>Indeks Kehati</td>
                        <td style={{textAlign: 'center'}}>2.55</td>
                        <td style={{textAlign: 'center'}}>2.69</td>
                        <td style={{textAlign: 'center'}}>2.72</td>
                        <td style={{textAlign: 'center'}}>3.10</td>
                        <td style={{textAlign: 'center'}}>3.16</td>
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
                        data={[
                          //{x: '2018', y: 1.37},
                          {x: '2019', y: 2.55},
                          {x: '2020', y: 2.69},
                          {x: '2021', y: 2.72},
                          {x: '2022', y: 3.10},
                          {x: '2023', y: 3.16},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          //{x: '2018', y: 1.37, yOffset: -25},
                          {x: '2019', y: 2.55, yOffset: -25},
                          {x: '2020', y: 2.69, yOffset: -25},
                          {x: '2021', y: 2.72, yOffset: -25},
                          {x: '2022', y: 3.10, yOffset: -25},
                          {x: '2023', y: 3.16, yOffset: -25},
                        ]} 
                        getLabel={d => d.y}/>
                      <LineSeries
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
                      />
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
                      {table_data_bird.map(( listValue, index ) => {
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
                        <td style={{textAlign: 'center'}}>48</td>
                        <td style={{textAlign: 'center'}}>62</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

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
                        data={[
                          {x: '2021', y: 2.89},
                          {x: '2022', y: 2.8},
                          {x: '2023', y: 2.92},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2021', y: 2.89, yOffset: 20},
                          {x: '2022', y: 2.8, yOffset: 20},
                          {x: '2023', y: 2.92, yOffset: 20},
                        ]} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={[
                          {x: '2021', y: 2.86, yOffset: -25},
                          {x: '2022', y: 2.87, yOffset: -25},
                          {x: '2023', y: 2.89, yOffset: -25},
                        ]} 
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
                        <td style={{textAlign: 'center'}}>23</td>
                        <td style={{textAlign: 'center'}}>24</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

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
                        data={[
                          {x: '2021', y: 0.69},
                          {x: '2022', y: 1.59},
                          {x: '2023', y: 1.42},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2021', y: 0.69, yOffset: 20},
                          {x: '2022', y: 1.59, yOffset: 20},
                          {x: '2023', y: 1.42, yOffset: 20},
                        ]} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={[
                          {x: '2021', y: 0.8, yOffset: -25},
                          {x: '2022', y: 1.2, yOffset: -25},
                          {x: '2023', y: 1.7, yOffset: -25},
                        ]} 
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
                      {table_data_hepertofauna.map(( listValue, index ) => {
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
                        <td style={{textAlign: 'center'}}>23</td>
                        <td style={{textAlign: 'center'}}>24</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>


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
                        data={[
                          {x: '2021', y: 0},
                          {x: '2022', y: 0.37},
                          {x: '2023', y: 1.33},
                        ]}
                      />
                      <LabelSeries
                        labelAnchorX='middle'

                        data={[
                          {x: '2021', y: 0, yOffset: -20},
                          {x: '2022', y: 0.37, yOffset: -10},
                          {x: '2023', y: 1.33, yOffset: -20},
                        ]} 
                        getLabel={d => d.y}/>
                      <LineSeries
                        color="#000"
                        strokeStyle='dashed'
                        data={[
                          {x: '2021', y: 0.0, yOffset: -25},
                          {x: '2022', y: 0.55, yOffset: -25},
                          {x: '2023', y: 1.2, yOffset: -25},
                        ]} 
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
)(Arboretum);
