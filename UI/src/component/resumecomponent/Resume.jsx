import "./Resume.css";

function Resume() {
    return (
        <div className="main-resume-container">
            <h3>Resume</h3>
            <div className="main-resume-download">
                <a 
                    href="/assets/images/resume_image.jpg" 
                    download 
                    className="download-button"
                >
                    Download Resume (PDF)
                </a>
                <div className="main-resume-image-div">
                    <img src="/assets/images/resume_image.jpg" alt="Resume preview" />
                </div>
            </div>
        </div>
    );
}

export default Resume;
