import Carousel from "react-bootstrap/Carousel";
import "./Front.css";
function Front() {
  return (
    <Carousel>
      <Carousel.Item>
        <div class="d-flex justify-content-center">
          <img
            className="d-block w-auto p-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXjpgz5jC__WGfcx1lQmPZrYNhvutaRuAyA&usqp=CAU"
            alt="First slide"
          />
        </div>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div class="d-flex justify-content-center">
          <img
            className="d-block w-auto"
            src="data:image/jpeg;base64,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"
            alt="Second slide"
          />
        </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div class="d-flex justify-content-center">
          <img
            className="d-block w-auto p-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1wUmSJP1CAlrsGNHBs7iW0ozBYcK1PuPzQ&usqp=CAU"
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Front;
