import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailBody = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(emailBody);
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=jamilq032@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailLink, '_blank');

   setStatus("Opening Gmail... Please press Send in Gmail to deliver your message.");
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">GET IN TOUCH</span>
          <h2>Let's Work <span>Together</span></h2>
          <p>Have a project or opportunity? Let's connect.</p>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let's talk about your next project.</h3>
            <p>
              I'm interested in frontend development opportunities,
              internships and collaborative projects.
            </p>

            <div className="contact-detail">
              <Mail />
              <div>
                <span>Email</span>
                <a href="mailto:jamilq032@gmail.com">
                  jamilq032@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <MapPin />
              <div>
                <span>Location</span>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github />
              </a>
              <a
                href="https://linkedin.com/in/jamil-qureshi-714863267"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-row">
              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn">
              Send Message <Send size={17} />
            </button>

            {status && <p className="form-status">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;