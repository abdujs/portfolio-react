// src/components/Achievements.jsx
import React from 'react';

const certifications = [
  { image: "/img/freecodecamp.png", title: "JavaScript Algorithms and Data Structures", organization: "Free Code Camp", date: "January 2025" },
  { image: "img/evangadi.jpg", title: "Full Stack Web Development (MERN) Program", organization: "Evangadi coding Academy", date: "February 2024" },
  { image: "img/udacity.jpg", title: "Programming Fundamentals", organization: "Udacity", date: "june 2024" },
];

const trainings = [
  { image: ["img/training3.jpg","img/training1.jpg", "img/training2.jpg"], title: "Web development Training", description: "Conducted web development training for high school students, covering HTML, CSS, and JavaScript", date: "June 2024 - July 2024" },
];

function Achievements() {
  return (
    <section id="Achievements" className="bg-gray-200 p-8 mb-8">
      <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Certifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md">
              <h4 className="text-xl font-bold">{cert.title}</h4>
              <img src={cert.image} alt={cert.title} className="h-30 w-auto" />
              <p>{cert.organization}, {cert.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Training</h3>
        <div className="space-y-4">
          {trainings.map((training, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md">
              <h4 className="text-xl font-bold">{training.title}</h4>
              <div className="flex space-x-2">
                <img src={training.image[0]} alt={training.title} className="h-30 w-auto" />
                <img src={training.image[1]} alt={training.title} className="h-30 w-auto" />
                <img src={training.image[2]} alt={training.title} className="h-30 w-auto" />
              </div>
              <p><strong>{training.description}</strong></p>
              <p className="text-gray-600">{training.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
