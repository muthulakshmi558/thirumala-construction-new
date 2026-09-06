import { useState } from "react";

import {
  Building2,
  Mail,
  MapPin,
  Phone,
  Send,
  UserRound,
} from "lucide-react";

const contactDetails = {
  mobile1: "+91 94422 55664",
  mobile2: "+91 97905 45122",
  email: "tcconstruction7224@gmail.com",

  // பின்னர் உங்கள் address மாற்றிக்கொள்ளவும்
  address: "60-A,Chinnasamy Nagar,Ganapathy,Coimbatore - 641 006.",

  // பின்னர் உங்கள் Google Map embed URL மாற்றவும்


  mapUrl:
    "https://www.google.com/maps?q=60-A%2C%20Chinnasamy%20Nagar%2C%20Ganapathy%2C%20Coimbatore%2C%20Tamil%20Nadu%20641006&output=embed",
};

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};

const validateForm = (form) => {
  const errors = {};

  if (form.name.trim().length < 2) {
    errors.name = "Please enter your name";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email";
  }

  const phoneDigits = form.phone.replace(/\D/g, "");

  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!form.subject.trim()) {
    errors.subject = "Please enter the subject";
  }

  if (form.message.trim().length < 10) {
    errors.message = "Message must contain at least 10 characters";
  }

  return errors;
};

function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        "http://localhost:5000/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to send enquiry"
        );
      }

      setStatus({
        type: "success",
        message:
          "Thank you! Your enquiry has been sent successfully. Please check your email.",
      });

      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to send your enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* CONTACT HEADING */}
        <div className="contact-heading">
          <span>LET&apos;S BUILD TOGETHER</span>

          <h2>Contact Us</h2>

          <p>
            Have a construction idea or need a quotation? Tell us about
            your project.
          </p>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="contact-information">

          <a
            href={`tel:${contactDetails.mobile1.replace(/\s/g, "")}`}
            className="information-card cyan-card"
          >
            <Phone />

            <div>
              <small>Mobile 1</small>
              <strong>{contactDetails.mobile1}</strong>
            </div>
          </a>

          <a
            href={`tel:${contactDetails.mobile2.replace(/\s/g, "")}`}
            className="information-card pink-card"
          >
            <Phone />

            <div>
              <small>Mobile 2</small>
              <strong>{contactDetails.mobile2}</strong>
            </div>
          </a>

          <a
            href={`mailto:${contactDetails.email}`}
            className="information-card black-card"
          >
            <Mail />

            <div>
              <small>Email Address</small>
              <strong>{contactDetails.email}</strong>
            </div>
          </a>

          <div className="information-card address-card">
            <MapPin />

            <div>
              <small>Office Address</small>
              <strong>{contactDetails.address}</strong>
            </div>
          </div>

        </div>

        {/* CONTACT CONTENT */}
        <div className="contact-content">

          {/* MAP */}
          <div className="map-container">
            <iframe
              src={contactDetails.mapUrl}
              title="Thirumala Construction Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="map-address">
              <Building2 />

              <div>
                <strong>Thirumala Construction</strong>
                <span>{contactDetails.address}</span>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >

            <div className="form-heading">
              <span>PROJECT ENQUIRY</span>

              <h3>How can we help?</h3>
            </div>

            {/* NAME + EMAIL */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                </label>

                <div className="input-container">
                  <UserRound />

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                {errors.name && (
                  <small className="error-message">
                    {errors.name}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <div className="input-container">
                  <Mail />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                {errors.email && (
                  <small className="error-message">
                    {errors.email}
                  </small>
                )}
              </div>

            </div>

            {/* PHONE + SUBJECT */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <div className="input-container">
                  <Phone />

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />
                </div>

                {errors.phone && (
                  <small className="error-message">
                    {errors.phone}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <div className="input-container">
                  <Building2 />

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Construction / Renovation"
                  />
                </div>

                {errors.subject && (
                  <small className="error-message">
                    {errors.subject}
                  </small>
                )}
              </div>

            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label htmlFor="message">
                Your Requirement
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows="5"
              />

              {errors.message && (
                <small className="error-message">
                  {errors.message}
                </small>
              )}
            </div>

            {/* SPAM PROTECTION */}
            <input
              className="website-field"
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Enquiry
                  <Send />
                </>
              )}
            </button>

            {/* STATUS */}
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            {/* PRIVACY */}
            <p className="privacy-text">
              Your information will only be used to respond to this
              enquiry.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;