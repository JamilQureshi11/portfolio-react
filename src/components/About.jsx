import { motion } from "framer-motion";
import { Code, GraduationCap, Briefcase, Rocket } from "lucide-react";

function About() {
  const stats = [
    { number: "05+", label: "Projects Built", icon: <Code /> },
    { number: "01", label: "Internship Experience", icon: <Briefcase /> },
    { number: "BS", label: "Digital Systems & Web Technology", icon: <GraduationCap /> },
    { number: "100%", label: "Learning Mindset", icon: <Rocket /> },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
          <p>A little introduction about my journey and passion.</p>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Building the Web, One Component at a Time.</h3>

            <p>
              I'm Jamil Ahmed Qureshi, a passionate Frontend Web Developer
              with an interest in creating modern and responsive web
              applications.
            </p>

            <p>
              I'm pursuing a BS in Digital Systems and Web Technology
              at Hamdard University Islamabad. I have practical exposure
              to frontend development through my NITB internship.
            </p>

            <p>
              My focus is on React JS, JavaScript, clean UI design,
              reusable components and continuous learning.
            </p>

            <a href="#contact" className="btn">
              Let's Connect
            </a>
          </motion.div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                className="stat-card"
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;