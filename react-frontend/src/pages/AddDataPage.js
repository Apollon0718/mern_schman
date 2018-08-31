import React from 'react';

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

const AddDataPage = () => {
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
                      <Input type="select" name="select">
                        <option>Oxford</option>
                        <option>Cambridge</option>
                        <option>NYU</option>
                        <option>HARVARD</option>
                        <option>Columbia</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xl={4} lg={4} md={12}>
                    <FormGroup>
                      <Label for="exampleSelect">Year</Label>
                      <Input type="select" name="select">
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xl={4} lg={4} md={12}>
                    <FormGroup>
                      <Label for="exampleSelect">Week</Label>
                      <Input type="select" name="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xl={4} lg={4} md={12}>
                    <FormGroup>
                      <Label for="exampleSelect">Month</Label>
                      <Input type="select" name="select">
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>Apr</option>
                        <option>May</option>
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
  );
};

export default AddDataPage;
