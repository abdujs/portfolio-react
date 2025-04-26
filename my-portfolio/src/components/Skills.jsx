import { FaJs, FaReact, FaNodeJs, FaCss3Alt, FaGitAlt, FaDatabase, FaHtml5, FaCode } from 'react-icons/fa';

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 w-8 h-8" /> },
  { name: "React", icon: <FaReact className="text-blue-500 w-8 h-8" /> },
  { name: "Node.js/ express", icon: <FaNodeJs className="text-green-500 w-8 h-8" /> },
  { name: "CSS/ tailwind", icon: <FaCss3Alt className="text-blue-400 w-8 h-8" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500 w-8 h-8" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-600 w-8 h-8" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 w-8 h-8" /> },
  { name: "TypeScript", icon: <FaCode className="text-blue-600 w-8 h-8" /> },
];

function Skills() {
  return (
    <section id="skills" className="bg-gray-200 p-8 mb-8">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {skill.icon}
            <h3 className="text-xl font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;