import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container style={{ minHeight: "100vh" }} className="d-flex ">
      <Row className="justify-content-center w-100">
        <Col className="col-md-6">
          <Card className="p-3  my-5 regCard">
            <h2 className="formHeading m-auto">Register</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group
                  className="w-100 mt-3"
                  as={Col}
                  sm="12"
                  controlId="validationCustom01"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue=""
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  className="w-100 mt-2"
                  as={Col}
                  sm="12"
                  controlId="validationCustom02"
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue=""
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  className="w-100 mt-2"
                  as={Col}
                  sm="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3 mt-2">
                <Form.Group
                  className="w-100"
                  as={Col}
                  sm="12"
                  controlId="validationCustom03"
                >
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  className="w-100 mt-2"
                  as={Col}
                  sm="12"
                  controlId="validationCustom04"
                >
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="State" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  className="w-100 mt-2"
                  as={Col}
                  sm="12"
                  controlId="validationCustom05"
                >
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3 mt-2">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Row>
                <Button className="m-auto" type="submit">
                  Submit form
                </Button>
              </Row>
            </Form>
            <Row className="justify-content-between mx-2 my-4 formLink">
              <Link>forgot password</Link>
              <Link>Login</Link>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
