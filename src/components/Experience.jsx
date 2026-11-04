import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

function Experience() {
  const experiences = [
    {
      type: "Internship",
      title: "Frontend React Developer Intern",
      company: "National Information Technology Board (NITB)",
      date: "2026",
      icon: <Briefcase />,
      description:
        "Working on frontend development with React. Learning component-based architecture, JavaScript fundamentals, reusable UI components and practical development workflows.",
      tags: ["React JS", "JavaScript", "HTML", "CSS"],
    },
    {
      type: "Education",
      title: "BS Digital Systems and Web Technology",
      company: "Hamdard University Islamabad",
      date: "2026",
      icon: <GraduationCap />,
      description:
        "Academic background in digital systems, web technologies, programming and database fundamentals.",
      tags: ["Web Development", "Programming", "Database"],
    },
  ];

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">MY JOURNEY</span>
          <h2>Experience & <span>Education</span></h2>
          <p>My professional and academic journey.</p>
        </div>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">{item.icon}</div>

              <div className="timeline-card">
                <div className="timeline-meta">
                  <span>{item.type}</span>
                  <span>{item.date}</span>
                </div>

                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>

                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;