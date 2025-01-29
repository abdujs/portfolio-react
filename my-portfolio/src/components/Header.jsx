// src/components/Header.jsx
function Header() {
  return (
    <header className="bg-sky-100 p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <img src="/img/logo1.png" alt="Logo" className="h-15" />
      </div>
      <nav className=" text-gray-700 ">
        <a href="#about" className="mr-5 hover:text-blue-600">About</a>
        <a href="#Skills" className="mr-5 hover:text-blue-600">Skills</a>
        <a href="#Achivements" className="mr-5 hover:text-blue-600">Achivements</a>
        <a href="#projects" className="mr-5 hover:text-blue-600">Projects</a>
        <a href="#contact" className="mr-5 hover:text-blue-600">Contact</a>
        <a href="#Blog" className="mr-5 hover:text-blue-600">Blog</a>
        <a href="#mod" className="mr-5 hover:text-blue-600">mod</a>
      </nav>
    </header>
  );
}

export default Header;
