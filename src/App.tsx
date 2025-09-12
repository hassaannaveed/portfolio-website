import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

const Hero: React.FC = () => {
  const myImage = new URL('./assets/me.png', import.meta.url).href;
  return (
    <section className="hero">
      <div className="hero-image">
      <img src={myImage} alt="Hero" />
      </div>
      <div className="hero-text">
        <h1>Hi, I'm Hassaan Naveed</h1>
        <p>Software Engineer | AI & ML Enthusiast</p>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        As a passionate Software Engineering undergrad, I'm on a quest to
        harness the potential of technology to create innovative solutions.
      </p>
      <p>
        Let's connect and collaborate to create something great and meaningful!
      </p>
    </section>
  );
};

const Projects: React.FC = () => {
  const projects = [
    { 
      name: "Data Structures Project", 
      description: "Python implementation of a disaster management system", 
      link: "https://github.com/hassaannaveed/data-structures-project",
      image: new URL("./assets/map.jpg", import.meta.url).href
    },
    { 
      name: "Nintendo Switch", 
      description: "A basic HTML and CSS website based on the popular console, Nintendo Switch", 
      link: "https://github.com/hassaannaveed/nintendo-switch",
      image: new URL("./assets/nintendo.jpg", import.meta.url).href
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          {/* Project Image */}
          <img src={project.image} alt={project.name} className="project-image" />
          {/* Project Name */}
          <h3>{project.name}</h3>
          {/* Project Description */}
          <p>{project.description}</p>
          {/* Project Link */}
          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Connect with Me</h2>
      <p>
        Email: <a href="mailto:hello@hassaannaveed.com">hello@hassaannaveed.com</a>
      </p>
      <p>
        GitHub: <a href="https://github.com/hassaannaveed">https://github.com/hassaannaveed</a>
      </p>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/hassaannaveed/">https://www.linkedin.com/in/hassaannaveed/</a>
      </p>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Made with ❤️ by Hassaan Naveed</p>
      <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="preloader">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;