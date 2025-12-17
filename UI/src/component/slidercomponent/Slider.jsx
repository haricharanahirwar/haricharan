 import "./Slider.css";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div className="container-fluid slider-container">
      <div className="row align-items-center h-100">

        <div className="col-md-6 text-md-start main-left-container">

          <p className="ltr ltr-1">Hello, I'm</p>

          <h2 className="developer-name ltr ltr-2">
            Haricharan Ahirwar
          </h2>

          <h2 className="ltr ltr-3">
            MERN Stack Developer
          </h2>

          <p className="developer-desc ltr ltr-4">
            I build modern, responsive & scalable web applications.
          </p>

          <button className="btn btn-light mt-3 ltr ltr-5">
            <Link to="/about" className="learn-more-link">
              Learn More
            </Link>
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
