// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
      <div className="max-w-screen-md mx-auto">
        <form className="bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" placeholder="Your name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your email" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Your message"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Send</button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-700">
            You can also reach me at: <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">your-email@example.com</a>
          </p>
          <p className="text-gray-700">Or call me: +123 456 7890</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
