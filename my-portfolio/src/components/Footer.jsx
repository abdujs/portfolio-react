// src/components/Footer.jsx
import {FaLinkedin, FaGithub, FaTelegram, FaEnvelope} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-700 text-white p-4">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Connect with me</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://t.me/Abdulwahid_Munewer" className="hover:text-blue-400">
            <FaTelegram size={22} style={{ color: '#FFFFFF' }} />
          </a>
          <a href="https://github.com/Abdujs" className="hover:text-gray-400">
            <FaGithub size={22} style={{ color: '#FFFFFF' }} />
          </a>
          <a href="https://www.linkedin.com/in/abdulwahid-m/" className="hover:text-blue-500">
            <FaLinkedin size={22} style={{ color: '#FFFFFF' }} />
          </a>
          <a href="mailto:a.wahid.developer@gmail.com" className="hover:text-red-500">
            <FaEnvelope size={22} style={{ color: '#FFFFFF' }} />
          </a>
        </div>
        <p>&copy; 2025 Abdulwahid Munewer. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
