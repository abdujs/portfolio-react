// src/components/HeroSection.jsx
function HeroSection() {
    return (
      <section className="bg-gradient-to-r from-blue-400 to-purple-500 h-screen flex justify-center items-center text-white p-8">
        <div className="flex flex-col md:flex-row items-center">
          <img src="/img/abdulwahid-logo.jpg" alt="photo" className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-8" />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Abdulwahid Munewer</h1>
            <p className="text-xl mb-4">Web Developer</p>
            <p className="mb-4">
              I am a passionate web developer with a knack for designing and creating beautiful, functional websites. Let's work together to bring your vision to life!</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="/path-to-your-cv.pdf" className="bg-white text-blue-600 py-2 px-4 rounded">View CV</a>
              <a href="/path-to-your-cv.pdf" download className="bg-white text-blue-600 py-2 rounded flex items-center">
                <span>D</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4M4 12h16"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
  