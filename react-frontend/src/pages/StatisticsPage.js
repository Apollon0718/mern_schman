import Page from 'components/Page';
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import SchoolService from '../services/SchoolService';
import axios from 'axios';
import {Link} from 'react-router-dom';
class StatisticsPage extends Component {

  constructor(props){
    super(props);
    this.id = this.props.match.params.id;
    this.state = {
      school: {
        _id: '',
        name: '',
        statistics: []
      }
    }
    this.getSchoolService = new SchoolService();
    this.tableRow = this.tableRow.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentWillReceiveProps () {
    const id = this.props.match.params.id;
    
    this.getData(id);
/*     axios.get('http://localhost:4200/api/school/'+id)
    .then(res => {
      this.setState({ school: res.data });
      this.forceUpdate();
      // this.render();
    })
    .catch(function (error) {
      console.log(error);
    }); */
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    this.getData(id);
  }

  getData(id){
    axios.get('http://localhost:4200/api/school/'+id)
    .then(res => {
      this.setState({ school: res.data });
      // this.forceUpdate();
      // this.render();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  tableRow(){
    if (this.state.school.statistics instanceof Array) {
      return this.state.school.statistics.map(function (data, i) {
        return  (           
          <tr key={i}>
            <td>{i+1}</td>
            <td>{data.year}</td>
            <td>{data.week}</td>
            <td>{data.month}</td>
            <td>{data.elect_eur}</td>
            <td>{data.elect_kwh}</td>
            <td>{data.heating_eur}</td>
            <td>{data.heating_kwh}</td>
            <td>{data.water_eur}</td>
            <td>{data.water_litres}</td>
            <td><Link to={"/school/"+this.id+"/edit/"+data._id} className="btn btn-primary">Edit</Link></td>
            <td>
                <form>
                    <input type="submit" value="Delete" className="btn btn-danger" />
                </form>
            </td>
          </tr>
        );
      }.bind(this))
    }
  }

  render() {
    return (
      <Page
        title="Tables"
        breadcrumbs={[{ name: 'tables', active: true }]}
        className="TablePage">
          <Row>
            <Col>
              <Card className="mb-6">
                <CardHeader>school statistics</CardHeader>
                <CardBody>
                  <Row>
                    <Col md={12}>
                      <Card body>
                        <Table striped>
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Year</th>
                              <th>Week</th>
                              <th>Month</th>
                              <th>Electricity euro</th>
                              <th>Electricity kwh</th>
                              <th>Heating euro</th>
                              <th>Heating kwh</th>
                              <th>Water euro</th>
                              <th>Water litres</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.tableRow()}
                          </tbody>
                        </Table>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </Page>
    )
  }
  // render() { 
  //   return (  );
  // }
}
 
export default StatisticsPage;

