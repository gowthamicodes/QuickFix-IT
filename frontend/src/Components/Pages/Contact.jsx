import {useState} from "react";
import {Link} from "react-router-dom";
import "./Contact.css"

function Contact () {

const [form, setForm] = useState({
name: "",
email: "",
subject: "",
message: ""

})

const [submitted, setSubmitted] = useState(false);

const handleChange = (event) => {

    setForm ({
...form,
[event.target.value] : event.target.value

    })

}
 
const handleSubmit = (event) => {

event.preventDefault();

setSubmitted(true);

setForm({
name: "",
email: "",
subject: "",
message: "",

})


}
  return (
    <div className="contact-page">

      {/* Page Header */}

      <div className="contact-header">

        <h1>Contact Us</h1>

        <p>
          Have a question or need help with your IT career journey?
          Get in touch with QuickFix IT.
        </p>

      </div>


      {/* Main Contact Area */}

      <div className="contact-container">


        {/* Contact Information */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            We are here to help you understand your IT career
            options and guide you toward the right services.
          </p>


          <div className="contact-detail">

            <h3>Email</h3>

            <p>
              support@quickfixit.com
            </p>

          </div>


          <div className="contact-detail">

            <h3>Support</h3>

            <p>
              For questions about our services, payments or
              service access, contact our support team.
            </p>

          </div>


          <div className="contact-detail">

            <h3>Service Guidance</h3>

            <p>
              Not sure which service is right for you?
              Send us your question and we can help you
              identify a suitable direction.
            </p>

          </div>

        </div>



        {/* Contact Form */}

        <div className="contact-form-card">

          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What would you like to ask?"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                required
              />

            </div>


            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Message
            </button>

          </form>


          {submitted && (

            <div className="contact-success">

              ✓ Your message has been submitted successfully.

            </div>

          )}

        </div>

      </div>


      {/* Bottom Message */}

      <div className="contact-bottom">

        <h2>Need Career Guidance?</h2>

        <p>
          Explore our IT services and find guidance based on
          your current stage — before, during or after your
          IT learning journey.
        </p>

        <Link
          to="/services"
          className="contact-services-btn"
        >
          Explore Services
        </Link>

      </div>


      {/* Back Home */}

      <div className="contact-back">

        <Link
          to="/"
          className="contact-home-btn"
        >
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Contact;