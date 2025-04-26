import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const projects = [
  {
    title: "Mela-Software",
    description: "A responsive website for programming education and consulting.",
    image: "../img/mela.png",
    github: "https://github.com/abdujs/melaSoftware",
    live: "https://melasoftware.vercel.app",
  },
  {
    title: "Gelagay-Home-Maintenance",
    description: "A platform for home maintenance services.",
    video: "../video/loom.mp4",
    github: "https://github.com/abdujs/Gelagay-Home-maintenace-service",
    live: "",
  },
  {
    title: "E-Learning Platform",
    description: "A platform for courses and tests.",
    image: "../img/exitexam.png",
    github: "https://github.com/abdujs/Exit-exam-prep",
    live: "",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects.",
    image: "../img/abdu.png",
    github: "https://github.com/abdujs/portfolio-react",
    live: "https://abdulwahid-portfolio.com",
  },
  {
    title: "Weather App",
    description: "Check weather by city.",
    image: "../img/weather.png",
    github: "https://github.com/abdujs/DOM-Projects/tree/main/weather-app",
    live: "",
  },
];

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section id="projects" className="bg-gray-200 p-8 mb-8">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(showAllProjects ? projects : projects.slice(0, 3)).map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            {project.video ? (
              <video
                controls
                className="w-full h-48 object-cover rounded-md mb-4"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {projects.length > 3 && (
        <button
          onClick={() => setShowAllProjects(!showAllProjects)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700"
        >
          <span>{showAllProjects ? "Show Less" : "Show More"}</span>
          {showAllProjects ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      )}
    </section>
  );
}

export default Projects;