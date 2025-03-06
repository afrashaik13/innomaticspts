import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState } from "react";
import "./App.css";
const Navbar = () => (
  <nav style={styles.navbar}>
    <ul style={styles.navList}>
      <li><a href="/" style={styles.navLink}>Home</a></li>
      <li><a href="/about" style={styles.navLink}>About</a></li>
      <li><a href="/skills" style={styles.navLink}>Skills</a></li>
      <li><a href="/projects" style={styles.navLink}>Projects</a></li>
      <li><a href="/contact" style={styles.navLink}>Contact</a></li>
    </ul>
  </nav>
);
const Footer = () => (
  <footer style={styles.footer}>
    <p>© 2025 Your Name. All rights reserved.</p>
  </footer>
);
const Home = () => (
  <section style={styles.section}>
    <h1 style={styles.heading}>Welcome to My Portfolio</h1>
    <p style={styles.paragraph}>Hello, I'm Afra Shaik, a passionate developer.</p>
  </section>
);
const About = () => (
  <section style={{ backgroundColor: "#f8c8dc", padding: "20px", borderRadius: "10px" }}>
    <h1 style={styles.heading}>About Me</h1>
    <p style={styles.paragraph}>I am an enthusiastic Full Stack Developer with experience in building dynamic and responsive web applications. During my internship at Innomatics Research Lab, I developed websites using HTML, CSS, JavaScript, and React, gaining practical knowledge in front-end development and user interface design.
In addition to front-end technologies, I have explored backend development with Node.js, Express.js, and databases like MongoDB and MySQL, enabling me to build full-stack applications. I am also familiar with version control (Git), API integration, and cloud deployment (Firebase, Heroku).
I enjoy solving coding challenges, optimizing web performance, and learning new frameworks to enhance my development skills. I am looking for an opportunity to apply my skills in a professional setting and contribute to impactful software solutions..</p>
  </section>
);
const Skills = () => (
  <section className="section skills">
    <h1>Skills</h1>
    <div className="skills-container">
      <div className="skill"><FaHtml5 className="icon html" /> <p>HTML5</p></div>
      <div className="skill"><FaCss3Alt className="icon css" /> <p>CSS3</p></div>
      <div className="skill"><FaJs className="icon js" /> <p>JavaScript</p></div>
      <div className="skill"><FaReact className="icon react" /> <p>React.js</p></div>
      <div className="skill"><FaNodeJs className="icon node" /> <p>Node.js</p></div>
      <div className="skill"><FaDatabase className="icon db" /> <p>MongoDB</p></div>
    </div>
  </section>
);
const Projects = () => {
  const projects = [
    { title: "Portfolio Website", description: "Portfolio using HTML,CSS.", link: "https://afrashaik13.github.io/afrashaik22.github.io/" },
    { title: "Innomatics Website Clone", description: "HTML,CSS,JavaScript", link: "https://afrashaik13.github.io/innomaticsp1/inno.html" },
    { title: "Memory Match Game", description: "JavaScript,HTML,CSS.", link: "https://afrashaik13.github.io/innomaticsp2/project2/" },
  ];
  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "#007bff" }}>Projects</h1>
      <div style={{ display: "grid", gap: "20px", justifyContent: "center" }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: "pink",  // Pink Background
            color: "#000",  // Black text for contrast
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            maxWidth: "400px",
            margin: "auto"
          }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "#007bff", textDecoration: "none" }}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); 
  };
  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "#007bff" }}>Contact Me</h1>
      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto", textAlign: "left" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required
          style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ddd" }} />

        <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required
          style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ddd" }} />

        <label style={{ display: "block", marginBottom: "5px" }}>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required
          style={{ width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ddd", height: "100px" }}></textarea>

        <button type="submit" style={{ backgroundColor: "#007bff", color: "white", padding: "10px", width: "100%", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Send Message
        </button>
      </form>
      {/* Social Media Links */}
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ color: "#007bff" }}>Connect with Me</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", fontSize: "24px" }}>
          <a href="https://wa.me/qr/FQ5SO3GCILGFI1" target="_blank" rel="noopener noreferrer" style={{ color: "#1DA1F2" }}><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/in/afra-shaik-54063133b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{ color: "#0077b5" }}><FaLinkedinIn /></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#333" }}><FaGithub /></a>
        </div>
      </div>
    </section>
  );
};
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};
const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "15px",
    textAlign: "center",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: 0,
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    margin: "0 15px",
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px",
    marginTop: "20px",
  },
  section: {
    padding: "50px",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    margin: "20px",
  },
  heading: {
    color: "#333",
    fontSize: "28px",
  },
  paragraph: {
    color: "#555",
    fontSize: "18px",
  },
};
export default App;
