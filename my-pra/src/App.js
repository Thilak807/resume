import React from 'react';
import './App.css';

function App() {
  const resumeData = {
    name: "Praharsha H V",
    email: "praharshahvp@gmail.com",
    phone: "8317494212",
    address: "EEAHAVASYAM, 12th Cross, Bhagat Singh Road, Jayanagara, Hassan - 573202",
    linkedin: "https://www.linkedin.com/in/praharsha-h-v-03b89225a",
    github: "https://github.com/Praharsha-harsh",

    education: [
      { institution: "Malnad College of Engineering", degree: "B.E. in Computer Science and Engineering", year: "2022 - 2026 (6.2 CGPA - 4th Sem)" },
      { institution: "Sri Chaitanya PU College, Bangalore", degree: "12th Standard", year: "2022 (6.46 CGPA)" },
      { institution: "Vijaya English School, Hassan", degree: "10th Standard", year: "2020 (7.8 CGPA)" }
    ],

    skills: [
      "C", "Python", "Java", "HTML",
      "Microsoft Office", "Google Drive",
      "Figma", "GitHub"
    ],

    projects: [
      {
        title: "Atmospheric Water Generator",
        description: "Addressed challenges like energy efficiency and scalability. Aims to combat global water issues with advanced tech."
      },
      {
        title: "Apple Vision Pro",
        description: "Explored the merge of augmented and physical reality using Vision Pro AR tech."
      },
      {
        title: "Electric Car",
        description: "Designed a hybrid electric car powered by both electric energy and petrol, with solar charging on top."
      }
    ],

    certifications: [
      "Ideation Workshop – Dr. Srinath M S (2022)",
      "Aavishkar Manthan – Dr. Chandrika J (2023)",
      "Enigma Tech Fest – Dr. H S Narashimhan (2024)"
    ],

    languages: ["English", "Kannada", "Hindi"],

    extracurricular: [
      "Leadership in academic club",
      "Mentoring experience",
      "NSS Activities",
      "Event organization in tech clubs",
      "National Level Tech Event Host"
    ]
  };

  return (
    <div className="App">
      <img src="pra.jpg" alt="Praharsha H V" className="profile-image" />
      <h1>{resumeData.name}</h1>
      <p><strong>Email:</strong> {resumeData.email}</p>
      <p><strong>Phone:</strong> {resumeData.phone}</p>
      <p><strong>Address:</strong> {resumeData.address}</p>
      <p><strong>LinkedIn:</strong> <a href={resumeData.linkedin}>{resumeData.linkedin}</a></p>
      <p><strong>GitHub:</strong> <a href={resumeData.github}>{resumeData.github}</a></p>

      <h2>Education</h2>
      <table>
        <thead>
          <tr>
            <th>Institution</th>
            <th>Degree</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {resumeData.education.map((edu, index) => (
            <tr key={index}>
              <td>{edu.institution}</td>
              <td>{edu.degree}</td>
              <td>{edu.year}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Technical Skills</h2>
      <ul className="simple-list">
        {resumeData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h2>Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {resumeData.projects.map((project, index) => (
            <tr key={index}>
              <td>{project.title}</td>
              <td>{project.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Certifications</h2>
      <ul className="simple-list">
        {resumeData.certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>

      <h2>Languages</h2>
      <ul className="simple-list">
        {resumeData.languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>

      <h2>Extracurricular & Volunteering</h2>
      <ul className="simple-list">
        {resumeData.extracurricular.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
