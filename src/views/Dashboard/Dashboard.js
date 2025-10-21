import React from 'react';
import './Dashboard.css';
import 'react-vis/dist/style.css';

import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ColoredLine from '../../components/Common/ColoredLine.js'
import { connect } from "react-redux";

import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Gallery from '../../components/Gallery/Gallery.js'
import Program from '../../components/Program/Program.js'

class Dashboard extends React.Component{
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
              <Header />

              {/* CAROUSEL */}
              <Gallery carousel={true}/>


              <Row style={{background: '#fff', paddingTop: 30, paddingBottom: 10}}>
                <Col>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h2>PROGRAM KEANEKARAGAMAN HAYATI</h2>
                    <h3>PT KILANG PERTAMINA INTERNASIONAL RU II SUNGAI PAKNING</h3>
                  </div>
                </Col>
              </Row>

              <Row style={{background: '#fff', paddingTop: 30, paddingBottom: 10}}>
                <Col>
                  <div>
                    <ColoredLine/>
                  </div>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Program</h3>
                  </div>
                </Col>
              </Row>

              {/* PROGRAM CARDS */}
              <Program history={this.props.history} home={true}/>

              {/* BACKGROUND AND DESCRIPTION */}
              <Row style={{background: '#fff', paddingTop: 60, paddingBottom: 10}}>
                <Col>
                  <div>
                    <ColoredLine/>
                  </div>
                  <div style={{alignItems: 'center', textAlign: 'center'}}>
                    <h3>Latar Belakang</h3>
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
                      penanaman mangrove dan besarnya arus yang menggerus daratan mereka. Mulai tahun 2017 PT Kilang Pertamina Internasional RU II Sungai 
                      Pakning mulai memperkenalkan beberapa metode alat pemecah ombak yang digunakan untuk meningkatkan keberhasilan 
                      penanaman mangrove dan pencegahan abrasi antara lain hybrid engineering, lalu hybrid engineering yang telah 
                      dimodifikasi dan terakhir ialah triangle mangrove barrier. Di wilayah gambut Kilang Pertamina Internasional RU II Sungai Pakning juga 
                      memperkenalkan Arboretum Gambut sebagai solusinya.
                      <br></br>
                      <br></br>
                      Selain itu sebagai wujud kepedulian PT. Kilang Pertamina Internasional RU II Sungai Pakning terhadap perlindungan biodiversity mangrove 
                      maka dibangunlah Mangrove Education Center (MEC) Pangkalan Jambi sebagai tempat implementasi konservasi biodiversity 
                      ekosistem mangrove dan untuk edukasi terhadap masyarakat, Arboretum Gambut sebagai tempat pelestarian flora dan 
                      fauna di wilayah dagmbut, serta Mangrove Desa Tanjung leban sebagai wilayah konservasi pesisir.  Sebagai bagian 
                      dari pengelolaan maka PT. Kilang Pertamina Internasional RU II Sungai Pakning secara rutin melakukan pemantauan/monev perkembangan 
                      biodiversity di dalamnya. Untuk itu didalam laporan ini akan dijelaskan mengenai kenaikan indeks keanekaragaman 
                      hayati yang terjadi di masing – masing lokasi Program Keanekaragaman Hayati.
                    </div>
                  </Card>
                </Col>
              </Row>

              {/* COLLASE PHOTOS */}
              <Gallery />

              {/* FOOTER */}
              <Footer />
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
)(Dashboard);
