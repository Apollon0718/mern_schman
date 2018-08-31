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
  FormText,
} from 'reactstrap';

import Page from 'components/Page';

const ProfilePage = () => {
  return (
    <Page title="Forms" breadcrumbs={[{ name: 'Forms', active: true }]}>
      <Row>
        <Col xl={{ size: 8, offset: 2 }} lg={12} md={12}>
          <Card>
            <CardHeader>Form Grid</CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="userName" sm={2}>
                    User Name
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="userName"
                      placeholder="Full Name"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="email" sm={2}>
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email address"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password1" sm={2}>
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="password"
                      name="password1"
                      placeholder="Enter placeholder"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password2" sm={2}>
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="password"
                      name="password2"
                      placeholder="Confirm placeholder"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleFile" sm={2}>
                    Photo
                  </Label>
                  <Col sm={10}>
                    <Input type="file" name="file" />
                    <FormText color="muted">
                      You can select the image for your profile.
                    </FormText>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="checkbox2" sm={2}>
                    Checkbox
                  </Label>
                  <Col sm={{ size: 10 }}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" /> Check me out
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Save</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default ProfilePage;
