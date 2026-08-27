import {Link} from "react-router-dom"
import "./Overview.css";

function Overview() {
  return (
    <div className="overview-page">

      {/* Page Heading */}
      <div className="overview-heading">
        <h1>Understanding the IT Career Journey</h1>

        <p>
          Starting and building an IT career can be challenging.
          QuickFix IT helps you understand the challenges you may
          face before, during and after your IT learning journey.
        </p>
      </div>


      {/* =========================
          BEFORE IT
      ========================= */}

      <section className="overview-section">

        <div className="overview-number">
          01
        </div>

        <h2>Before IT — Choosing the Right Direction</h2>

        <p>
          Before starting an IT career, many people know that they
          want to enter the IT field but are unsure about which
          career path to choose, what technology to learn and which
          course is suitable for them.
        </p>

        <h3>Common challenges</h3>

        <ul>
          <li>Which IT career is suitable for me?</li>
          <li>
            Should I choose Web Development, Data Analytics,
            Testing, Cloud or another field?
          </li>
          <li>Which technology should I learn?</li>
          <li>Which course is suitable for my career goal?</li>
          <li>
            Am I choosing a course because it is right for me or
            simply because it is popular?
          </li>
          <li>What should I learn first?</li>
        </ul>

        <p className="overview-solution">
          Choosing a course without understanding your interests,
          strengths and career goals can lead to confusion,
          frequent changes in learning paths and wasted time.
        </p>

        <div className="overview-highlight">
          <strong>QuickFix IT helps you:</strong>

          <p>
            Understand your options and choose a clearer career
            direction before you begin.
          </p>
        </div>

      </section>


      {/* =========================
          DURING IT
      ========================= */}

      <section className="overview-section">

        <div className="overview-number">
          02
        </div>

        <h2>During IT — Learning and Building Skills</h2>

        <p>
          Once someone starts learning IT, new challenges can
          appear. Learning concepts is only one part of becoming
          job-ready. Learners also need practical experience,
          projects and professional preparation.
        </p>

        <h3>Common challenges</h3>

        <ul>
          <li>What should I learn next?</li>
          <li>Am I learning the right technologies?</li>
          <li>How can I gain practical experience?</li>
          <li>How do I build a good project?</li>
          <li>How should I use Git and GitHub?</li>
          <li>How can I create a professional resume?</li>
          <li>
            Why am I learning but still not feeling job-ready?
          </li>
        </ul>

        <p className="overview-solution">
          Learning many technologies without a structured plan can
          make the process overwhelming. Practical projects,
          consistency and professional preparation are just as
          important as learning concepts.
        </p>

        <div className="overview-highlight">
          <strong>QuickFix IT helps you:</strong>

          <p>
            Build practical skills and develop a more structured
            learning path while you are learning IT.
          </p>
        </div>

      </section>


      {/* =========================
          AFTER IT
      ========================= */}

      <section className="overview-section">

        <div className="overview-number">
          03
        </div>

        <h2>After IT — Preparing for the Job</h2>

        <p>
          Completing an IT course does not automatically mean
          being ready for the job market. Candidates need to
          present their skills, projects and experience effectively
          and prepare for the recruitment process.
        </p>

        <h3>Common challenges</h3>

        <ul>
          <li>Is my resume good enough?</li>
          <li>How should I present my projects?</li>
          <li>How do I search for suitable IT jobs?</li>
          <li>How should I prepare for interviews?</li>
          <li>How can I improve my interview confidence?</li>
          <li>
            Why am I applying for jobs but not getting responses?
          </li>
          <li>
            What should I improve before applying again?
          </li>
        </ul>

        <p className="overview-solution">
          At this stage, candidates need to connect their skills,
          projects, resume, interview preparation and job-search
          strategy.
        </p>

        <div className="overview-highlight">
          <strong>QuickFix IT helps you:</strong>

          <p>
            Identify areas for improvement and take practical steps
            toward becoming more job-ready.
          </p>
        </div>

      </section>


      {/* =========================
          COMPLETE JOURNEY
      ========================= */}

      <section className="journey-section">

        <h2>The Complete IT Career Journey</h2>

        <p>
          A successful IT career is not built by choosing a popular
          course and simply completing it. It requires making the
          right decisions before learning, building the right skills
          during the learning process and preparing effectively for
          the job market afterward.
        </p>


        <div className="journey-steps">

          <div className="journey-card">
            <span>01</span>
            <h3>Before IT</h3>
            <p>
              Choose the right career direction.
            </p>
          </div>


          <div className="journey-arrow">
            →
          </div>


          <div className="journey-card">
            <span>02</span>
            <h3>During IT</h3>
            <p>
              Build the right skills and practical experience.
            </p>
          </div>


          <div className="journey-arrow">
            →
          </div>


          <div className="journey-card">
            <span>03</span>
            <h3>After IT</h3>
            <p>
              Prepare yourself for the job market.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          QUICKFIX IT CONCLUSION
      ========================= */}

      <section className="overview-conclusion">

        <h2>How QuickFix IT Helps</h2>

        <p>
          QuickFix IT brings these three stages together — Before
          IT, During IT and After IT — so that aspiring IT
          professionals can make informed decisions, follow a
          clearer learning path and move toward their career goals
          with greater confidence.
        </p>

        <p>
          Whether you are deciding which career to choose, learning
          new technologies, building projects or preparing for your
          first IT job, the goal is to help you understand your next
          step and move forward with a more focused approach.
        </p>

      </section>
<div className="overview-actions" >

<Link to="/" className="back-home-btn" >← Back to Home
 </Link>

 <Link to="/services" className="explore-btn">Explore Services </Link>

</div>
    </div>
  );
}

export default Overview;