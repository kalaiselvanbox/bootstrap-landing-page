import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CardComponent() {
  return (
    <Container fluid className="my-3">
      <h3 className="text-center text-secondary bg-transparent mt-5">
        character strength
      </h3>
      <hr className="w-50" />
      <Row>
        <Col className="col-12 col-sm-4">
          <Card className="w-100" style={{ background: "#75a5a5" }}>
            <Card.Img
              variant="top"
              src="https://www.animaker.com/hub/wp-content/uploads/2023/03/Goofy_transparent.webp"
            />
            <Card.Body className="text-light p-2">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col className="col-12 col-sm-8 my-3 my-sm-0">
          <Card
            style={{ background: "#75a5a5" }}
            className="w-100 h-100 p-5 text-success text-justify justify-content-center text-light"
          >
            <h4 className="mx-auto my-3">Character</h4>
            
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              facere magnam officiis nobis corporis perspiciatis modi? Dolor
              nulla aliquam alias reiciendis odit commodi consequatur nostrum
              mollitia molestiae sint. Alias, est!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              mollitia, molestiae
            </p>
            <p className="d-none d-md-block">
              similique iusto corporis fugit accusamus numquam omnis delectus
              voluptates consectetur repellendus, ex maxime recusandae magnam
              expedita necessitatibus neque ullam?
            </p>
            <p className="d-none d-lg-block">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              facere magnam officiis nobis corporis perspiciatis modi? Dolor
              nulla aliquam alias reiciendis odit commodi consequatur nostrum
              mollitia molestiae sint. Alias, est!
            </p>
            <p className="d-none  d-lg-block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              mollitia, molestiae similique iusto corporis fugit accusamus
              numquam omnis delectus voluptates consectetur repellendus, ex
              maxime recusandae magnam expedita necessitatibus neque ullam?
            </p>
            
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default CardComponent;
