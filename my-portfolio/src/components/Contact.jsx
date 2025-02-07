// src/components/Contact.jsx
import { FaEnvelope, FaPhone } from 'react-icons/fa';
function Contact() {
  return (
    <section id="contact" className="bg-gray-200 p-4 md:p-6 mb-8">
      <h2 className="text-3xl font-bold text-center mb-4 md:mb-6 text-gray-800">Contact</h2>
      <div className="max-w-screen-lg mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2 p-2 md:p-4 text-center md:text-left">
          <p className="text-black mb-2 md:mb-4 text-lg flex items-center justify-center md:justify-start"><FaEnvelope size={24} className="mr-2" /> <a href="mailto:a.wahid.developer@gmail.com" className="text-blue-700 hover:underline">a.wahid.developer@gmail.com</a></p>
          <p className="text-black mb-2 md:mb-4 text-lg flex items-center justify-center md:justify-start"><FaPhone size={24} className="mr-2"/> +251 942202051</p>
        </div>
        <div className="w-full md:w-1/2 p-2 md:p-4">
          <form className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg">
            <div className="mb-2 md:mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-1 md:mb-2">Name</label>
              <input type="text" id="name" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" placeholder="Your name" />
            </div>
            <div className="mb-2 md:mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-1 md:mb-2">Email</label>
              <input type="email" id="email" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" placeholder="Your email" />
            </div>
            <div className="mb-2 md:mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-1 md:mb-2">Message</label>
              <textarea id="message" className="w-full p-2 md:p-3 border border-gray-300 rounded-lg" rows="4" placeholder="Your message"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 md:px-6 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
