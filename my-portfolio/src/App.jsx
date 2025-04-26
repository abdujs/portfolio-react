// Main App component
import Header from './components/Header';
import HeroSection from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
