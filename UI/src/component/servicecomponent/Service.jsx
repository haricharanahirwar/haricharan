import "./Service.css";

function Service() {
  return (
    <div className="main-service-container container my-5">
      <h2 className="text-center mb-4">SERVICES</h2>

      <div className="row">
        {/* Frontend Development */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="service-card p-4 shadow-sm rounded text-center">
            <h5 className="fw-bold">Frontend Development</h5>
            <p>
              Building responsive and interactive user interfaces using ReactJS, HTML5, CSS3, Bootstrap, and JavaScript.
            </p>
          </div>
        </div>

        {/* Backend Development */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="service-card p-4 shadow-sm rounded text-center">
            <h5 className="fw-bold">Backend Development</h5>
            <p>
              Creating scalable and secure RESTful APIs using Node.js and Express.js with JWT authentication, middleware, and routing.
            </p>
          </div>
        </div>

        {/* Database Management */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="service-card p-4 shadow-sm rounded text-center">
            <h5 className="fw-bold">Database Design</h5>
            <p>
              Efficient database schema design, CRUD operations, and aggregation using MongoDB with Mongoose.
            </p>
          </div>
        </div>

        {/* Full-Stack Integration */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="service-card p-4 shadow-sm rounded text-center">
            <h5 className="fw-bold">Full-Stack Projects</h5>
            <p>
              Complete MERN stack applications with frontend-backend integration, authentication, file uploads, and more.
            </p>
          </div>
        </div>

        {/* Deployment */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="service-card p-4 shadow-sm rounded text-center">
            <h5 className="fw-bold">Deployment & Hosting</h5>
            <p>
              Deploying full-stack apps on platforms like Render, Vercel, Netlify, and MongoDB Atlas with CI/CD practices.
            </p>
          </div>
        </div>

        {/* API Integration */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="service-card p-4 shadow-sm rounded text-center">
            <h5 className="fw-bold">API Integration</h5>
            <p>
              Integration with third-party APIs like Stripe, PayPal, and Firebase for payment, auth, and real-time updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
    