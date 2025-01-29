// src/components/Achievements.jsx
import React from 'react';

const certifications = [
  { title: "Certified Web Developer", organization: "Some Organization", date: "January 2025" },
  { title: "JavaScript Expert", organization: "Coding Academy", date: "March 2024" },
  // Add more certifications as needed
];

const trainings = [
  { title: "React Training", description: "Conducted a comprehensive React training for beginners.", date: "June 2024" },
  { title: "Advanced CSS Workshop", description: "Led a workshop on advanced CSS techniques.", date: "October 2024" },
  // Add more training sessions as needed
];

function Achievements() {
  return (
    <section id="Achievements" className="bg-light-gray p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Certifications</h3>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md">
              <h4 className="text-xl font-bold">{cert.title}</h4>
              <p>{cert.organization}, {cert.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Training Sessions</h3>
        <div className="space-y-4">
          {trainings.map((training, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md">
              <h4 className="text-xl font-bold">{training.title}</h4>
              <p>{training.description}</p>
              <p className="text-gray-600">{training.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
