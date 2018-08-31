import React, { Component } from 'react';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  // FormText,
  // FormFeedback,
} from 'reactstrap';

import Page from 'components/Page';
import axios from 'axios';
import SchoolService from '../services/SchoolService';

class AddDataPage extends Component {
  state = { 
    schools: []
  }

  constructor(props) {
    super(props);
    this.state = {schools: []};
    this.addSchoolService = new SchoolService();
  }
  componentWillMount(){
    axios.get('http://localhost:4200/api/schools')
    .then(response => {
      this.setState({ schools: response.data });
      console.log(this.state.schools);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  schoolOption(){
    if (this.state.schools instanceof Array) {
      return this.state.schools.map(function(school, i){
        return <option value={school.name} id={school._id} key={i}>{school.name}</option>;
      })
    }
  }

  yearOptions(){
      var years = [];
      var i = 0;
      for (let year = 2010; year < 2020; year++) {
        years[i] = year;
        i++;
      }      
      return years.map(function(year, i) {
        return <option value={year} key={i}>{year}</option>;
      })
  }

  weekOptions(){
    var weeks = [];
    var i = 0;
    for (let week = 1; week < 55; week++) {
      weeks[i] = week;
      i++;
    }      
    return weeks.map(function(week, i) {
      return <option value={week} key={i}>{week}</option>;
    })
  }
    monthOptions(){
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      /* var i = 0;
      for (let month = 1; month < 12; month++) {
        months[i] = month;
        i++;
      }      */ 
      return months.map(function(month, i) {
        return <option value={month} key={i} id={i}>{month}</option>;
      })
    }

  render() { 
    return (
      <Page title="Add Data" breadcrumbs={[{ name: 'Add data', active: true }]}>
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>ADD DATA</CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md={12}>
                      <FormGroup>
                        <Label for="exampleSelect">School Name</Label>
                        <Input type="select" name="name">
                          <option disabled selected>Select school</option>
                          {this.schoolOption()}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xl={4} lg={4} md={12}>
                      <FormGroup>
                        <Label for="exampleSelect">Year</Label>
                        <Input type="select" name="year">
                          {this.yearOptions()}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xl={4} lg={4} md={12}>
                      <FormGroup>
                        <Label for="exampleSelect">Week</Label>
                        <Input type="select" name="week">
                          {this.weekOptions()}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xl={4} lg={4} md={12}>
                      <FormGroup>
                        <Label for="exampleSelect">Month</Label>
                        <Input type="select" name="month">
                          {this.monthOptions()}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={12}>
                      <FormGroup>
                        <Label for="elect_euro">Electricity euro</Label>
                        <Input
                          type="text"
                          name="elect_euro"
                          placeholder="Electricity euro"
                        />
                      </FormGroup>                  
                    </Col>
                    <Col lg={6} md={12}>
                      <FormGroup>
                        <Label for="elect_kwh">Electricity KWH</Label>
                        <Input
                          type="text"
                          name="elect_kwh"
                          placeholder="Electricity KWH"
                        />
                      </FormGroup>                  
                    </Col>
                    <Col lg={6} md={12}>
                      <FormGroup>
                        <Label for="heat_euro">Heating euro</Label>
                        <Input
                          type="text"
                          name="heat_euro"
                          placeholder="Heating euro"
                        />
                      </FormGroup>                  
                    </Col>
                    <Col lg={6} md={12}>
                      <FormGroup>
                        <Label for="heat_kwh">Heating KWH</Label>
                        <Input
                          type="text"
                          name="heat_kwh"
                          placeholder="Heating KWH"
                        />
                      </FormGroup>                  
                    </Col>
                    <Col lg={6} md={12}>
                      <FormGroup>
                        <Label for="water_euro">Water euro</Label>
                        <Input
                          type="text"
                          name="water_euro"
                          placeholder="Water euro"
                        />
                      </FormGroup>                  
                    </Col>
                    <Col lg={6} md={12}>
                      <FormGroup>
                        <Label for="water_litres">Water litres</Label>
                        <Input
                          type="text"
                          name="water_litres"
                          placeholder="Water litres"
                        />
                      </FormGroup>                  
                    </Col>
                    <Col md={12}>
                    <Button>Save Data</Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    )
  
    
  }
}
 
export default AddDataPage;


