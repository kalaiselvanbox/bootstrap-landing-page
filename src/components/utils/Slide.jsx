import Carousel from "react-bootstrap/Carousel";

function Slide() {

  return (
    <>
      <Carousel>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src="../assets/four.jpg" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src="../assets/two.jpg" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src="../assets/three.jpg" />
        </Carousel.Item>

      </Carousel>
    </>
  );
}

export default Slide;
