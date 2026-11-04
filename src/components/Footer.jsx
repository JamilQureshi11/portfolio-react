import { Github, Linkedin, ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#home" className="logo">
          JQ<span>.</span>
        </a>

        <p>
          Designed & Developed by <strong>Jamil Qureshi</strong>
        </p>

        <div className="footer-socials">
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

          <a href="#home" aria-label="Back to top">
            <ArrowUp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Jamil Ahmed Qureshi. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;