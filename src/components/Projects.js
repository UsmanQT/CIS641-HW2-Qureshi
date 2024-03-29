import React, {useState} from 'react';
import './Project.css'; 

const projects = [
  {
    title: 'Rent a Bike',
    date: 'Jan. 2023 – May. 2023',
    description: 'A bike rental service provider application developed for both the bike owners and the renter. Deployed the app on expo for testing purposes and successfully tested on 5 users.',
    link: 'https://github.com/UsmanQT/rent-a-bike',
  },
  {
    title: 'Audio Hub',
    date: 'Jan. 2023 – May. 2023',
    description: 'Web Application for Exploring and Playing Music. Developed the website using React JS, NodeJS, express JS and backed powered by MongoDB. Deployed the website live on a virtual instance of Google Cloud Platform (GCP).',
    link: 'https://github.com/pramodpalutla/AudioHub'
  },
  {
    title: 'No Waiting App',
    date: 'Jan. 2022 – Aug. 2022',
    description: 'Mobile Application for reservations at University’s Gym, Cafeteria and Library. Developed a flutter application to reduce waiting time for reservations at university buildings.',
  },
  {
    title: 'Elexia [Final Year Project]',
    date: 'Feb. 2020 – Feb. 2021',
    description: 'Computer-Based Intervention Game for Dyslexic Children. Collaborated with my supervisors to develop a game using C# and unity gaming engine to enhance learning abilities of Dyslexic Children.',
    Link: 'https://github.com/IusmanQ/Unity-Project-Elexia-Game-for-Dyslexic-children/tree/main/Elexia%201'
  }
  // Add more projects here
];

const term_projects = [
  {
    title: 'A Journal App',
    date: 'Oct. 2023 – Present',
    description: 'A mobile application that allows the user to create daily journal entries by uploading pictures or videos and writing text description. The aim of this project is create a product that can help any person stay motivated by listing down their daily activites. The user can also make their journals public to share with other people and view other public journals created by other others. ',
    link: 'https://github.com/ZachVeenstra/TheTuringTrio',
  },
];

function Projects() {
    const [expandedProject, setExpandedProject] = useState(null);
  
    const toggleProject = (index) => {
      if (expandedProject === index) {
        setExpandedProject(null);
      } else {
        setExpandedProject(index);
      }
    };
  
    return (
      <section id="projects" className="projects">
        <h2>Term Projects</h2>
        <ul>
          {term_projects.map((project, index) => (
            <li key={index}>
              <div
                className={`project-card ${expandedProject === index ? 'expanded' : ''}`}
                onClick={() => toggleProject(index)}
              >
                <h3>{project.title}</h3>
                <p>Date: {project.date}</p>
              </div>
              {expandedProject === index && (
                <div className="project-details">
                    
                  <p>{project.description}</p>
                  <p>Link: <a href={project.link}>Visit Project</a></p>
                </div>
              )}
            </li>
          ))}
        </ul>
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index_proj) => (
            <li key={index_proj}>
              <div
                className={`project-card ${expandedProject === index_proj ? 'expanded' : ''}`}
                onClick={() => toggleProject(index_proj)}
              >
                <h3>{project.title}</h3>
                <p>Date: {project.date}</p>
              </div>
              {expandedProject === index_proj && (
                <div className="project-details">
                    
                  <p>{project.description}</p>
                  <p>Link: <a href={project.link}>Visit Project</a></p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Projects;
