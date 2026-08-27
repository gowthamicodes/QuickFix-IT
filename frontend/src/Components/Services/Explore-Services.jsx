import "./Explore-Services.css";
import { useNavigate } from "react-router-dom";

function ExploreServices() {

  const navigate = useNavigate();

  return (
    <div className="explore-services">

      {/* Page heading */}
      <div className="services-heading">
        <h1>Explore Services</h1>

        <p>
          Get the right guidance and support at every stage
          of your IT career journey.
        </p>
      </div>

      {/* =========================
          BEFORE IT
      ========================= */}

      <div className="service-section">

        <h2>Before IT</h2>

        <p className="section-description">
          Planning to start your IT career? Get guidance
          before choosing your learning path.
        </p>


        <div className="service-list">

          {/* Career Counseling */}

          <div
            className="service-item"
            onClick={() =>
              navigate("/payment", {
                state: {
                  service: "Career Counseling"
                }
              })
            }
          >
            <h3>Career Counseling</h3>

            <p>
              Understand your interests, strengths and
              suitable IT career options.
            </p>
          </div>


          {/* Technology Selection */}

          <div
            className="service-item"
            onClick={() =>
              navigate("/payment", {
                state: {
                  service: "Technology Selection"
                }
              })
            }
          >
            <h3>Technology Selection</h3>

            <p>
              Get guidance to choose the right technology
              based on your career goals.
            </p>
          </div>


          {/* Course Recommendation */}

          <div
            className="service-item"
            onClick={() =>
              navigate("/payment", {
                state: {
                  service: "Course Recommendation"
                }
              })
            }
          >
            <h3>Course Recommendation</h3>

            <p>
              Find a suitable learning path and course
              based on your goals.
            </p>
          </div>

        </div>

      </div>


      {/* =========================
          DURING IT
      ========================= */}

      <div className="service-section">

        <h2>During IT</h2>

        <p className="section-description">
          Already learning IT? Get support to improve
          your skills and build your professional profile.
        </p>

        <div className="service-list">

          <div
            className="service-item"
            onClick={() =>
              navigate("/payment", {
                state: {
                  service: "Project Guidance"
                }
              })
            }
          >
            <h3>Project Guidance</h3>

            <p>
              Get guidance while building your IT projects.
            </p>
          </div>


          <div
            className="service-item"
            onClick={() =>
              navigate("/payment", {
                state: {
                  service: "Resume Building"
                }
              })
            }
          >
            <h3>Resume Building</h3>

            <p>
              Learn how to create a professional IT resume.
            </p>
          </div>


          <div
            className="service-item"
            onClick={() =>
              navigate("/payment", {
                state: {
                  service: "Git & GitHub Guidance"
                }
              })
            }
          >
            <h3>Git & GitHub Guidance</h3>

            <p>
              Learn how to manage and present your projects
              professionally.
            </p>
          </div>

        </div>

      </div>


      {/* =========================
          AFTER IT
      ========================= */}

      <div className="service-section">

        <h2>After IT</h2>

        <p className="section-description">
          Ready for an IT job? Get support for your
          job search and interview preparation.
        </p>

        <div className="service-list">

          <div
            className="service-item"
            onClick={() =>
              navigate("/payment", {
                state: {
                  service: "Resume Review"
                }
              })
            }
          >
            <h3>Resume Review</h3>

            <p>
              Get feedback to improve your resume.
            </p>
          </div>


          <div
            className="service-item"
            onClick={() =>
              navigate("/payment", {
                state: {
                  service: "Mock Interview"
                }
              })
            }
          >
            <h3>Mock Interview</h3>

            <p>
              Practice interviews and improve your confidence.
            </p>
          </div>


          <div
            className="service-item"
            onClick={() =>
              navigate("/payment", {
                state: {
                  service: "Job Search Strategy"
                }
              })
            }
          >
            <h3>Job Search Strategy</h3>

            <p>
              Learn how to approach your IT job search
              effectively.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ExploreServices;