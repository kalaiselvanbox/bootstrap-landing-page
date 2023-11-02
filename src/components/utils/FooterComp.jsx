import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function FooterComp() {
  return (
    <Container fluid>
      <Row>
        <Col
          style={{ background: "rgb(74, 97, 97)" }}
          className="col-12 col-md-6 text-center  text-light"
        >
          <address className="text-start p-3">
            <h3 style={{ color: "yellow" }}>Head Office : </h3>
            <p>No: 123, koil street,</p>
            <p>Village</p>
            <p>Taluk, Didstrict</p>
            <p>Contact: +91 9876543210</p>
          </address>
        </Col>
        <Col
          style={{ background: "rgb(74, 97, 97)" }}
          className="col-12 col-md-6 text-center text-light"
        >
          <address className="text-start p-3">
            <h3 style={{ color: "yellow" }}>Branch Office : </h3>
            <p>No: 123, koil street,</p>
            <p>Village</p>
            <p>Taluk, Didstrict</p>
            <p>Contact: +91 9876543210</p>
          </address>
        </Col>
      </Row>
    </Container>
  );
}
