// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: "Project One",
    description: "A brief description of the project.",
    link: "#"
  },
  {
    title: "Project Two",
    description: "A brief description of the project.",
    link: "#"
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
