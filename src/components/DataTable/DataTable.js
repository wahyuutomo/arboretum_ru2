import React from 'react';
import './DataTable.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


class DataTable extends React.Component{

	render(){
		const { data, data_count, years } = this.props
		console.log("data_keys: ", Object.keys(data[0]))
		return(
		  <Row>
        <Col>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>No</th>
                <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Ilmiah</th>
                <th rowspan="2" style={{textAlign: 'center', textAlignVertical: 'center' }}>Nama Lokal</th>
                <th colspan={years.length} style={{textAlign: 'center'}}>Jumlah</th>
              </tr>
              <tr>
              	{years.map((year) =>{
              		return (
              			<td style={{textAlign: 'center'}}>{year}</td>
              		);
              	})}
              </tr>
            </thead>
            <tbody>
              {data.map(( listValue, index ) => {
                return (
                  <tr key={index}>
                    <td style={{textAlign: 'center'}}>{index + 1}</td>
                    <td style={{textAlign: 'center'}}>{listValue.spesies}</td>
                    <td style={{textAlign: 'center'}}>{listValue.nama_lokal}</td>
                    {years.map((year) =>{
                    	switch(year){
                    		case 2021: 
	                    		return (
				              			<td style={{textAlign: 'center'}}>{listValue.y2021}</td>
				              		);
				              	case 2022: 
	                    		return (
				              			<td style={{textAlign: 'center'}}>{listValue.y2022}</td>
				              		);
				              	case 2023: 
	                    		return (
				              			<td style={{textAlign: 'center'}}>{listValue.y2023}</td>
				              		);
				              	default:
				              	return (
				              			<td style={{textAlign: 'center'}}>{listValue.y2023}</td>
				              		);
                    	};
		              	})}
                  </tr>
                );
              })}
              <tr>
                <td colSpan="3">Jumlah</td>
                {data_count.map(( listValue, index ) => {
                return (
                    <td style={{textAlign: 'center'}}>{listValue.y}</td>
                );
                })}
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
		);
	}
}

export default DataTable;