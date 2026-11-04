import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "HTML5", level: 85 },
    { name: "CSS3", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "React JS", level: 70 },
    { name: "Responsive Design", level: 80 },
    { name: "Git & GitHub", level: 65 },
    { name: "Python", level: 55 },
    { name: "MySQL", level: 60 },
    { name: "Power BI", level: 60 },
  ];

  const tools = [
    "VS Code",
    "Vite",
    "GitHub",
    "Firebase",
    "Figma",
    "Vercel",
    "MySQL",
    "Power BI",
  ];

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">MY EXPERTISE</span>
          <h2>Technical <span>Skills</span></h2>
          <p>Technologies and tools I work with.</p>
        </div>

        <div className="skills-grid">
          <div className="skills-panel">
            <h3>Development Skills</h3>

            {skills.map((skill, index) => (
              <div className="skill-item" key={skill.name}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-track">
                  <motion.div
                    className="skill-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.08 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="skills-panel">
            <h3>Tools & Technologies</h3>

            <div className="tools-grid">
              {tools.map((tool, index) => (
                <motion.div
                  className="tool-chip"
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>

            <div className="learning-box">
              <span>Currently Learning</span>
              <h3>Advanced React & Full Stack Development</h3>
              <p>
                Improving my skills through practical projects and
                real-world development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;