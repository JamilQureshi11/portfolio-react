import { motion } from "framer-motion";
import {
  Monitor,
  Code2,
  Smartphone,
  Database,
  Palette,
  Wrench,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Monitor />,
      title: "Frontend Development",
      description: "Modern and responsive websites using React and JavaScript.",
    },
    {
      icon: <Code2 />,
      title: "React Development",
      description: "Reusable components and interactive React applications.",
    },
    {
      icon: <Smartphone />,
      title: "Responsive Design",
      description: "User-friendly interfaces for mobile, tablet and desktop.",
    },
    {
      icon: <Database />,
      title: "Database Integration",
      description: "Basic database integration and data management solutions.",
    },
    {
      icon: <Palette />,
      title: "UI Implementation",
      description: "Converting design concepts into functional web interfaces.",
    },
    {
      icon: <Wrench />,
      title: "Website Maintenance",
      description: "Frontend bug fixing, improvements and interface updates.",
    },
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">WHAT I CAN DO</span>
          <h2>My <span>Services</span></h2>
          <p>Development solutions I can work on.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -7 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;