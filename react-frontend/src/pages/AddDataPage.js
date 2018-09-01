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

  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      schoolData: {
                  _id: '',
                  year: '',
                  week: '',
                  month: '',
                  elect_eur: '',
                  elect_kwh: '',
                  heating_eur: '',
                  heating_kwh: '',
                  water_eur: '',
                  water_litres: '' ,       
                  }
    };
    this.addSchoolService = new SchoolService();
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:4200/api/schools')
    .then(response => {
      this.setState({ schools: response.data });
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  schoolOption(){
    if (this.state.schools instanceof Array) {
      return this.state.schools.map(function(school, i){
        return <option value={school._id} id={school._id} key={i}>{school.name}</option>;
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
    return months.map(function(month, i) {
      return <option value={i} key={i}>{month}</option>;
    })
  }

  onChange(event) {
    const schoolData = Object.assign({}, this.state.schoolData);
    schoolData[event.target.name] = event.target.value;
    this.setState({schoolData});
  }

  handleSubmit(event){
    event.preventDefault();
    // this.addSchoolService.sendSchoolData(this.state.schoolData);
    console.log(this.state.schoolData);
    console.log("read this form data");
    this.addSchoolService.sendSchoolData(this.state.schoolData);
  }

  render() { 
    const schoolData = this.state.schoolData;
    return (
      <Page title="Add Data" breadcrumbs={[{ name: 'Add data', active: true }]}>
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>ADD DATA</CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <Row>
                    <Col md={12}>
                      <FormGroup>
                        <Label for="exampleSelect">School Name</Label>
                        <Input type="select" name="_id" value={schoolData._id} onChange={this.onChange}>
                          <option disabled selected>Select school</option>
                          {this.schoolOption()}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xl={4} lg={4} md={12}>
                      <FormGroup>
                        <Label for="exampleSelect">Year</Label>
                        <Input type="select" name="year" value={schoolData.year} onChange={this.onChange}>
                          {this.yearOptions()}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xl={4} lg={4} md={12}>
                      <FormGroup>
                        <Label for="exampleSelect">Week</Label>
                        <Input type="select" name="week" value={schoolData.week} onChange={this.onChange}>
                          {this.weekOptions()}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xl={4} lg={4} md={12}>
                      <FormGroup>
                        <Label for="exampleSelect">Month</Label>
                        <Input type="select" name="month" value={schoolData.month} onChange={this.onChange}>
                          {this.monthOptions()}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={12}>
                      <FormGroup>
                        <Label for="elect_eur">Electricity euro</Label>
                        <Input
                          type="text"
                          name="elect_eur"
                          placeholder="Electricity euro"
                          value={schoolData.elect_euro}
                          onChange={this.onChange}
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
                          value={schoolData.elect_kwh}
                          onChange={this.onChange}
                        />
                      </FormGroup>                  
                    </Col>
                    <Col lg={6} md={12}>
                      <FormGroup>
                        <Label for="heat_eur">Heating euro</Label>
                        <Input
                          type="text"
                          name="heating_eur"
                          placeholder="Heating euro"
                          value={schoolData.heating_euro}
                          onChange={this.onChange}
                        />
                      </FormGroup>                  
                    </Col>
                    <Col lg={6} md={12}>
                      <FormGroup>
                        <Label for="heat_kwh">Heating KWH</Label>
                        <Input
                          type="text"
                          name="heating_kwh"
                          placeholder="Heating KWH"
                          value={schoolData.heating_kwh}
                          onChange={this.onChange}
                        />
                      </FormGroup>                  
                    </Col>
                    <Col lg={6} md={12}>
                      <FormGroup>
                        <Label for="water_eur">Water euro</Label>
                        <Input
                          type="text"
                          name="water_eur"
                          placeholder="Water euro"
                          value={schoolData.water_euro}
                          onChange={this.onChange}
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
                          value={schoolData.water_litres}
                          onChange={this.onChange}
                        />
                      </FormGroup>                  
                    </Col>
                    <Col md={12}>
                    <Button type="submit">Save Data</Button>
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


