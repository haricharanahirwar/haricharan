import "./About.css";

function About() {
  return (
    <div className="container my-5 main-about-container">
      <h2 className="text-center mb-4">ABOUT ME</h2>
      <div className="row align-items-stretch about-row">
        {/* Left - Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0 d-flex image-container">
          <img
            src="/assets/images/image2.jpg"
            alt="About"
            className="img-fluid rounded about-image"
            id="image2"
          />
        </div>

        {/* Right - Text */}
        <div className="col-md-6 d-flex">
          <div className="education-box p-3 w-100">
            <h5 className="fw-bold mb-2">EDUCATION</h5>
            <p className="mb-1">
              <strong>Bachelor of Technology in Computer Science and Engineering</strong>
            </p>
            <p className="mb-1">BTech CSE</p>
            <p className="mb-1">Sakshi Institute of Technology & Management, Guna</p>
            <p className="mb-3">2019 - 2022</p>

            <h5 className="fw-bold mt-4">SKILLS</h5>

            <div className="skills-category mb-2">
              <h6 className="fw-semibold">Frontend</h6>
              <div className="skills-list">
                {["HTML", "CSS", "JavaScript", "ReactJS"].map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category mb-2">
              <h6 className="fw-semibold">Backend</h6>
              <div className="skills-list">
                {["NodeJS", "ExpressJS"].map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skills-category mb-2">
              <h6 className="fw-semibold">Database</h6>
              <div className="skills-list">
                {["MongoDB"].map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
