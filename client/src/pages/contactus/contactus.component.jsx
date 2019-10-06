import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  UncontrolledAlert,
  Badge
} from "reactstrap";

import "./contactus.style.scss";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

const INITAL_STATE = {
  formValid: false,
  fullName: "",
  email: "",
  mobileNumber: "",
  message: "",
  errors: {
    fullName: "",
    email: "",
    mobileNumber: "",
    message: ""
  }
};

export default class ContactusPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITAL_STATE;
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Full Name must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "mobileNumber":
        errors.mobileNumber =
          value.length < 8 ? "Mobile Number must be 8 characters long!" : "";
        break;
      case "message":
        errors.message =
          value.length < 5 ? "Message must be 5 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.manageErrors()) {
      if (validateForm(this.state.errors)) {
        console.info("Valid Form");
        this.setState({ ...INITAL_STATE, formValid: true });
      } else {
        console.error("Invalid Form");
      }
    }

    return false;
  };

  manageErrors = () => {
    let foundError = true;
    let errors = this.state.errors;
    if (this.state.fullName === null || this.state.fullName === "") {
      errors.fullName = "Full Name is required";
      foundError = false;
    }
    if (this.state.email === null || this.state.email === "") {
      errors.email = "Email is required";
      foundError = false;
    }
    if (this.state.mobileNumber === null || this.state.mobileNumber === "") {
      errors.mobileNumber = "Mobile Number is required";
      foundError = false;
    }
    if (this.state.message === null || this.state.message === "") {
      errors.message = "Message is required";
      foundError = false;
    }
    this.setState({ errors });
    return foundError;
  };

  render() {
    const { errors } = this.state;
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h3>Contact us</h3>
            <p>Please fill the information below</p>
            {this.state.formValid ? (
              <UncontrolledAlert color="success" fade={false}>
                Your request has been submitted Successfully!
                <br />
                We will contact you soon.
              </UncontrolledAlert>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form onSubmit={this.handleSubmit} noValidate method="post">
              <FormGroup tag="fieldset">
                <legend>Enquiry Type</legend>
                <FormGroup check inline>
                  <Label check>
                    <Input type="radio" name="formType" required /> Complain
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input type="radio" name="formType" required /> Enquiry
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup>
                <Label for="fullName">Full Name</Label>
                <Input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  placeholder="Your Full Name"
                  onChange={this.handleChange}
                  value={this.state.fullName}
                />
                {errors.fullName.length > 0 && (
                  <Badge color="danger">{errors.fullName}</Badge>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Your Email Address"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                {errors.email.length > 0 && (
                  <Badge color="danger">{errors.email}</Badge>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="mobileNumber">Mobile Number</Label>
                <Input
                  type="tel"
                  name="mobileNumber"
                  id="mobileNumber"
                  required
                  placeholder="Your Mobile Number"
                  onChange={this.handleChange}
                  value={this.state.mobileNumber}
                />
                {errors.mobileNumber.length > 0 && (
                  <Badge color="danger">{errors.mobileNumber}</Badge>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  required
                  placeholder="Your Message"
                  id="message"
                  onChange={this.handleChange}
                  value={this.state.message}
                />
                {errors.message.length > 0 && (
                  <Badge color="danger">{errors.message}</Badge>
                )}
              </FormGroup>

              <Button block>Submit Now</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
