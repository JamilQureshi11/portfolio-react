import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  ArrowRight,
  Download,
  CodeXml,
} from "lucide-react";
import { useEffect, useState } from "react";

function Hero() {
  const roles = [
    "Frontend React Developer",
    "React JS Developer",
    "Web Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          const next = current.substring(0, displayText.length + 1);
          setDisplayText(next);

          if (next === current) {
            setDeleting(true);
          }
        } else {
          const next = current.substring(0, displayText.length - 1);
          setDisplayText(next);

          if (next === "") {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 45 : 90
    );

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  return (
    <section className="hero section" id="home">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="availability">
            <span className="status-dot" />
            Available for Opportunities
          </div>

          <p className="hero-intro">HELLO, I'M</p>

          <h1>
            Jamil Ahmed
            <span> Qureshi.</span>
          </h1>

          <h2>
            I'm a <span className="typing">{displayText}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web experiences
            using React and modern frontend technologies. Passionate
            about creating clean interfaces and solving real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              Explore My Work <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download="Jamil_Qureshi_CV.pdf"
              className="btn btn-outline"
            >
              Download CV <Download size={18} />
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>

            <a
              href="https://linkedin.com/in/jamil-qureshi-714863267"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="profile-ring">
            <div className="profile-inner">
              <div className="profile-placeholder">
               <img src="/jamil.jpg.jpeg" alt="jamil" />
              </div>
            </div>
          </div>

          <div className="floating-card card-top">
            <CodeXml size={19} />
            <span>React Developer</span>
          </div>

          <div className="floating-card card-bottom">
            <span className="status-dot" />
            <span>Building Digital Experiences</span>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        Scroll to explore <span>↓</span>
      </a>
    </section>
  );
}

export default Hero;