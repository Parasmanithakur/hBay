import Carousel from "react-bootstrap/Carousel";
import "./Front.css";
import { NavLink } from "react-router-dom";
function Front() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div class="d-flex justify-content-center">
            <img
              className="d-block w-50 p-100"
              src={require("./sport.png")}
              alt="First slide"
            />
          </div>

          <Carousel.Caption>
            <p>SPORTS</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div class="d-flex justify-content-center">
            <img
              className="d-block w-50 p-100"
              src={require("./books.png")}
              alt="Second slide"
            />
          </div>

          <Carousel.Caption>
            <p>BOOKS</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div class="d-flex justify-content-center">
            <img
              className="d-block w-50 p-100"
              src={require("./decor.png")}
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <p>Hostel Decor</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="add_btn mt-2 mb-2">
        <NavLink to="/home" className="btn btn-secondary btn-lg">
          View Listing
        </NavLink>
      </div>
    </>
  );
}

export default Front;
