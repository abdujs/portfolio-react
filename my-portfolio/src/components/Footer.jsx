// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Connect with me</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-blue-500">
            {/* LinkedIn Icon */}
          </a>
          <a href="#" className="hover:text-gray-400">
            {/* GitHub Icon */}
          </a>
          <a href="#" className="hover:text-blue-400">
            {/* Twitter Icon */}
          </a>
          <a href="#" className="hover:text-pink-500">
            {/* Instagram Icon */}
          </a>
        </div>
        <p>&copy; 2025 Abdulwahid Munewer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
