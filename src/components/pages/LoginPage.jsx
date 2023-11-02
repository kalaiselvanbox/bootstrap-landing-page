import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function LoginPage() {
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
            <h2 className="formHeading m-auto">Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              {/* <Row className="mb-3">
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
              </Row> */}
              {/* <Row>
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
              </Row> */}
              <Row>
                <Form.Group
                  className="w-100 mt-2"
                  as={Col}
                  sm="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a email.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group
                  className="w-100 mt-2"
                  as={Col}
                  sm="12"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
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
              <Link to="register">Register</Link>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
