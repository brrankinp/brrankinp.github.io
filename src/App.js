import React, { useState } from 'react';
import './Portfolio.css';


const Portfolio = () => {
/* TODO (maybe): handlers for currently unimplemented form logic (see main body) 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  }; */

  // Toggle preview image zoom (TODO)
/*   const expandImage = (e) => {

  } */

  // Sample portfolio items data
  const portfolioItems = [
    {
      id: 1,
      title: "Current Portfolio Website",
      description: "This newest iteration of my portfolio site was built and customized in React with base code and CSS assistance from DeepSeek AI.",
      image: "https://github.com/brrankinp/brrankinp.github.io/blob/main/Images/Portfolio%20-%20React.png?raw=true",
      link: "#home"
    },
    {
      id: 2,
      title: "Old Portfolio Website",
      description: "My original portfolio website was developed in Bootstrap and is still available to view on my old GitHub page.",
      image: "https://github.com/brrankinp/brrankinp.github.io/blob/main/Images/Portfolio%20-%20Bootstrap.png?raw=true",
      link: "https://brrankin.github.io/index.html"
    },
    {
      id: 3,
      title: "Calgary Homebuilding Permit History",
      description: "Tableau Public, 2025.  A historical record of single and multi-family dwelling permits issued by the City of Calgary from January 2006 - February 2025 and selected related KPIs.",
      image: "https://github.com/brrankinp/brrankinp.github.io/blob/main/Images/Calgary%20Homebuilding.png?raw=true",
      link: "https://public.tableau.com/app/profile/brad.rankin/viz/Calgary2025HomebuildingPermitHistory/MapsofBuildingPermitsinCalgarybyCommunityandYearofSubmission"
    },
    {
      id: 4,
      title: "Hospital Shipment Data",
      description: "Tableau, 2016. Interactive dashboard showing an attempt to locate inefficiencies in internal hospital shipment logistics for an American hospital campus.  Updated to be viewable online via Tableau Public.",
      image: "https://github.com/brrankinp/brrankinp.github.io/blob/main/Images/Hospital.png?raw=true",
      link: "https://public.tableau.com/app/profile/brad.rankin/viz/HospitalShipmentData-Updated/DeterminingPossibleEfficiencyImprovementsinHospitalShipments"
    },
    {
      id: 5,
      title: "Hurricane Map 1985-2016",
      description: "Tableau, 2016. Interactive dashboard illustrating maps of paths and intensity for various 20th/21st century hurricanes.  Updated to be viewable online via Tableau Public.",
      image: "https://github.com/brrankinp/brrankinp.github.io/blob/main/Images/Hurricane.png?raw=true",
      link: "https://public.tableau.com/app/profile/brad.rankin/viz/HurricaneMap1985-2016/HurricaneNamesIntensityandPaths"   
    },
    {
      id: 6,
      title: "Climate Change and Disasters Analysis",
      description: "Power BI, 2016. Comparison of climate and geology data in an attempt to find patterns and correlations.",
      image: "https://github.com/brrankinp/brrankinp.github.io/blob/main/Images/Climate.png?raw=true",
      link: "https://github.com/brrankinp/brrankinp.github.io/blob/main/PBI/Climate%20Change%20and%20Disasters%20Analysis.pbix"
    },
    {
      id: 7,
      title: "Vancouver Crime Statistics",
      description: "Power BI, 2016. Analysis of frequency and location of crimes in Vancouver, including some exploration of historical spikes.",
      image: "https://github.com/brrankinp/brrankinp.github.io/blob/main/Images/Vancouver.png?raw=true",
      link: "https://github.com/brrankinp/brrankinp.github.io/blob/main/PBI/Vancouver%20Crime%20Statistics.pbix"
    },
    {
      id: 8,
      title: "CADA Artist and Workspace Distribution & Demographics (Data For Good)",
      description: "Power BI, 2018. Analysis of Calgary Arts Development Association artist demographics to identify trends and patterns for future grant considerations.",
      image: "https://github.com/brrankinp/brrankinp.github.io/blob/main/Images/CADA.png?raw=true",
      link: "https://github.com/brrankinp/brrankinp.github.io/blob/main/PBI/CADA%20Artist%20and%20Workspace%20Distribution%20%2B%20Demographics.pbix"
    }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="nav-logo">Brad Rankin</h2>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">Brad Rankin</span></h1>
          <p className="hero-description">An all-purpose data analyst and developer with over a decade of progressive full-stack technical expertise,
             from initial design to implementation to documentation & support.</p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          
          <div className="image-placeholder">
            <span><img src="https://github.com/brrankinp/brrankinp.github.io/blob/main/Images/Headshot.jpg?raw=true" alt="Brad's Headshot"></img></span>
          </div>
        </div>
      </section>

      {/* Skills & Education Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Education</h2>
          <div className="skills-grid">
            <div className="skills-card">
              <h3>Technical Skills</h3>
              <ul>
                <li>TypeScript/JavaScript (React, Node.js)</li>
                <li>Microsoft SQL Server and T-SQL</li>
                <li>Power BI/Tableau</li>
                <li>Salesforce</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="skills-card">
              <h3>Education & Certification</h3>
              <div className="education-item">
                <h4>Bachelor of Computer Science</h4>
                <p>University of Calgary, 2000-2005</p>
              </div>
              <div className="education-item">
                <h4>Certificate in Business Intelligence & Reporting</h4>
                <p>SAIT, 2016</p>
              </div>
              <div className="education-item">
                <h4>Certified Salesforce Administrator</h4>
                <p>Salesforce, 2024-present</p>
              </div>
            </div>
            <div className="skills-card">
              <h3>Business Skills</h3>
              <ul>
                <li>Requirements Gathering</li>
                <li>Technical Writing and Documentation</li>
                <li>Presentations</li>
                <li>Expert Typist and Editor</li>
                <li>Remote/Hybrid/In-office</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">A selection of personal and professional projects I've created over the years.</p>
          <div className="portfolio-grid">
            {portfolioItems.map(item => (
              <div key={item.id} className="portfolio-item">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title}/>\
                  {/* TODO: add image zoom to previews   
                  <div className="portfolio-overlay">
                    <button className="view-button" onClick={expandImage(item.image)}>Expand Preview Image</button>
                  </div>
                */}
                </div>
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="portfolio-links">
                    <a href={item.link}>View Project</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">I'm eager to hear from you!  Please feel free to browse my online profiles
            or contact me directly via one of the provided links below.
          </p>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p><strong>Email: </strong><a href="mailto:brrankin.p@gmail.com">brrankin.p@gmail.com</a></p>
              <p><strong>Phone:</strong> (403) 483-0715</p>
              <p><strong>Location:</strong> Calgary, Alberta, Canada</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/brrankin/">LinkedIn</a>
                <a href="https://github.com/brrankinp">GitHub Main Page</a>
              </div>
            </div>
            
{/* TODO (maybe): properly code this form section once there's time to research and implement anti-spam measures to ward off bots, etc.
             <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Brad Rankin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;