import "./Slider.css";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div className="container-fluid slider-container">
      <div className="row align-items-center h-100">
        <div className="col-md-6 text-md-start main-left-container">
          <p>Hello World,</p>
          <h2 className="animated-heading">I am MERN Stack Developer</h2>
          <button className="btn btn-light mt-3">
            <Link to="/about" className="learn-more-link">Learn More</Link>
          </button>
        </div>

        <div className="col-md-6 main-right-container">
          <img
            src="/assets/images/image1.jpg"
            alt="Developer"
            className="slider-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
