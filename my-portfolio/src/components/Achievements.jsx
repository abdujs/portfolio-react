// src/components/Achievements.jsx
import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const certifications = [
  { image: "/img/freecodecamp.png", title: "JavaScript Algorithms and Data Structures", organization: "Free Code Camp", date: "January 2025" },
  { image: "img/evangadi.jpg", title: "Full Stack Web Development (MERN) Program", organization: "Evangadi coding Academy", date: "February 2024" },
  { image: "img/udacity.jpg", title: "Programming Fundamentals", organization: "Udacity", date: "June 2024" },
  {
    image: ["img/training3.jpg", "img/training1.jpg", "img/training2.jpg"],
    title: "Web Development Training",
    description: "Conducted web development training for high school students, covering HTML, CSS, and JavaScript",
    date: "June 2024 - July 2024",
  },
];

function Achievements() {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  return (
    <section id="achievements" className="bg-gray-200 p-8 mb-8">
      <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
      
      {/* Certificate and Training Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Certificate and Training</h3>
        
        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAllCertifications ? certifications : certifications.slice(0, 3)).map((cert, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              {/* Handle single or multiple images */}
              {Array.isArray(cert.image) ? (
                <div className="flex space-x-2 mb-4">
                  {cert.image.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`${cert.title} - ${imgIndex + 1}`}
                      className="w-1/3 h-24 object-cover rounded-md"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
              <p className="text-gray-700 mb-2">{cert.organization || cert.description}</p>
              <p className="text-gray-600">{cert.date}</p>
            </div>
          ))}
        </div>
        {certifications.length > 3 && (
          <button
            onClick={() => setShowAllCertifications(!showAllCertifications)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700"
          >
            <span>{showAllCertifications ? "Show Less" : "Show More"}</span>
            {showAllCertifications ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        )}
      </div>
    </section>
  );
}

export default Achievements;
