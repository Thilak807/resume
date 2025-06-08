import React from 'react';
import './App.css';

function App() {
  const resumeData = {
    name: "Thilak Raj P",
    title: "Software Developer | ML Enthusiast | Problem Solver",
    email: "thilakrajp1234@gmail.com",
    phone: "7019311747",
    address: "1st Cross, Aduvalli, Hassan",

    careerObjective:
      "Aspiring Software Developer with strong problem-solving skills and a passion for coding. Seeking to contribute technical expertise in software development, data science, and machine learning within a progressive organization.",

    education: [
      { institution: "Malnad College of Engineering", degree: "B.E. in Computer Science and Engineering", year: "2022 - Present" },
      { institution: "Smt L.V. Polytechnic, Hassan", degree: "Diploma in Computer Science", year: "Completed" },
      { institution: "C.K.S English School", degree: "10th Standard", year: "Completed" }
    ],

    skills: ["Java", "Python", "JavaScript", "HTML", "MySQL", "Eclipse", "Figma", "VS Code", "Adobe Photoshop"],

    projects: [
      { title: "Political Tendencies Prediction", description: "Analyzed Twitter data to predict political orientation using ML." },
      { title: "Drowsiness Detection", description: "Implemented face detection using machine learning algorithms." }
    ],

    certifications: [
      "AWS Cloud Computing Internship Certificate",
      "Essentials of Cloud Computing - Infosys Springboard",
      "Cloud Computing in Political Tendencies Prediction (AWS)"
    ],

    languages: ["English", "Kannada", "Hindi"]
  };

  return (
    <div className="main-container">
      <header className="navbar">
        <div className="logo">Thilak Raj P</div>
        <nav>
          <a href="#objective">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Hi, I'm <span className="highlight">Thilak Raj P</span></h1>
        <p>{resumeData.title}</p>
      </section>

      <section className="card" id="objective">
        <h2>Career Objective</h2>
        <p>{resumeData.careerObjective}</p>
      </section>

      <section className="card" id="education">
        <h2>Education</h2>
        <ul>
          {resumeData.education.map((edu, i) => (
            <li key={i}>
              <strong>{edu.institution}</strong> — {edu.degree} <span>({edu.year})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card" id="skills">
        <h2>Skills</h2>
        <ul className="list-inline">
          {resumeData.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="card" id="projects">
        <h2>Projects</h2>
        {resumeData.projects.map((proj, i) => (
          <div key={i}>
            <strong>{proj.title}</strong>
            <p>{proj.description}</p>
          </div>
        ))}
      </section>

      <section className="card" id="certifications">
        <h2>Certifications</h2>
        <ul>
          {resumeData.certifications.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </section>

      <section className="card" id="contact">
        <h2>Contact</h2>
        <p><strong>Email:</strong> {resumeData.email}</p>
        <p><strong>Phone:</strong> {resumeData.phone}</p>
        <p><strong>Address:</strong> {resumeData.address}</p>
        <p><strong>GitHub:</strong> <a href={resumeData.github}>Visit GitHub</a></p>
        <p><strong>LinkedIn:</strong> <a href={resumeData.linkedin}>Visit LinkedIn</a></p>
      </section>
    </div>
  );
}

export default App;
