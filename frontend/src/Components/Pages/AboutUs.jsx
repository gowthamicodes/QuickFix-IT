import { Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">

      {/* Page Header */}
      <div className="about-header">
        <h1>About QuickFix IT</h1>

        <p>
          Helping aspiring IT professionals make informed career
          decisions and build a clearer path toward an IT career.
        </p>
      </div>


      {/* About QuickFix IT */}
      <section className="about-section">

        <h2>What is QuickFix IT?</h2>

        <p>
          QuickFix IT is a guidance and support platform designed
          for people who are planning to start, currently learning,
          or preparing to build a career in the IT industry.
        </p>

        <p>
          Choosing an IT career can sometimes be confusing.
          There are many technologies, courses, career paths and
          learning options available. QuickFix IT helps users
          understand these choices and follow a more focused path
          based on their goals.
        </p>

      </section>


      {/* Our Purpose */}
      <section className="about-section">

        <h2>Our Purpose</h2>

        <p>
          Our purpose is to help users make better decisions at
          different stages of their IT career journey. Instead of
          trying to learn everything at once, users can understand
          what they need, choose a suitable direction and take
          practical steps toward their career goals.
        </p>

      </section>


      {/* What We Help With */}
      <section className="about-section">

        <h2>What We Help With</h2>

        <div className="about-cards">

          <div className="about-card">
            <h3>Before IT</h3>

            <p>
              Guidance for choosing a suitable IT career,
              technology and learning path before starting.
            </p>
          </div>


          <div className="about-card">
            <h3>During IT</h3>

            <p>
              Support with projects, resume building, GitHub
              and other skills needed while learning.
            </p>
          </div>


          <div className="about-card">
            <h3>After IT</h3>

            <p>
              Guidance for resume improvement, interviews,
              job searching and preparing for IT opportunities.
            </p>
          </div>

        </div>

      </section>


      {/* Our Approach */}
      <section className="about-section">

        <h2>Our Approach</h2>

        <p>
          QuickFix IT follows a simple approach: understand the
          user's current situation, identify the challenge, provide
          relevant guidance and suggest practical next steps.
        </p>

        <p>
          Our goal is not to provide one solution for everyone.
          Different people have different interests, skills and
          career goals, so the guidance should be relevant to
          their individual situation.
        </p>

      </section>


      {/* Why QuickFix IT */}
      <section className="about-highlight">

        <h2>Why QuickFix IT?</h2>

        <p>
          The IT industry changes quickly, and beginners can easily
          feel confused about what to learn and where to start.
          QuickFix IT brings important career decisions together
          in one place and provides a structured way to move
          forward.
        </p>

        <p>
          From choosing a career direction to preparing for job
          opportunities, users can find guidance according to
          their stage of the IT journey.
        </p>

      </section>


      {/* Conclusion */}
      <section className="about-conclusion">

        <h2>Our Goal</h2>

        <p>
          Our goal is to help aspiring IT professionals move from
          confusion to clarity. By understanding their options,
          choosing a focused learning path and taking practical
          steps, users can build greater confidence in their IT
          career journey.
        </p>

      </section>


      {/* Action Buttons */}
      <div className="about-actions">

        <Link to="/" className="about-home-btn">
          ← Back to Home
        </Link>

        <Link to="/services" className="about-services-btn">
          Explore Services
        </Link>

      </div>

    </div>
  );
}

export default AboutUs;