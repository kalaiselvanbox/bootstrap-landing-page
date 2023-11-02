import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slide from '../utils/Slide';
import SampleContent from "../utils/SampleContent";
import CharacterData from './CharacterData';
import CardComponent from '../utils/CardComponent';

export default function Home() {
  return (
    <div>
      <Container fluid>
        <Row className="carouselRow justify-content-center align-item-center">
          <Col lg={8} className="carouselCol coup-0">
            <Slide />
          </Col>
        </Row>
      </Container>
      <SampleContent />
      <CardComponent />
    </div>
  );
}

