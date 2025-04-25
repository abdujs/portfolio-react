function HeroSection() {
  return (
    <section className="bg-gray-200 h-screen flex justify-center items-center text-black p-8 mb-8">
      <div className="flex flex-col md:flex-row items-center fade-in">
        <img
          src="/img/abdulwahid-logo.jpg"
          alt="Abdulwahid Munewer"
          className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-8 slide-in-left"
        />
        <div className="text-center md:text-left md:ml-8">
          <h1 className="text-5xl font-extrabold mb-4 slide-in-right text-gray-800">
            Abdulwahid Munewer
          </h1>
          <p className="text-2xl font-medium mb-4 slide-in-right text-gray-600">
            Full-stack (MERN) Web Developer
          </p>
          <p className="text-lg leading-relaxed mb-6 slide-in-right text-gray-700">
            I am a web developer with a strong background in creating responsive and user-friendly websites. Skilled in modern frameworks and technologies, with expertise in API integration. Passionate about exploring new tools and enhancing development processes. Known for attention to detail and commitment to delivering high-quality web solutions. Let's work together to bring your vision to life!
          </p>
          <div className="flex justify-center md:justify-start space-x-4 slide-in-right">
            <a
              href="/Abdulwahid-Munewer-CV.pdf"
              target="_blank"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;