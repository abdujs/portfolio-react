//  Skills section of the portfolio
const skills = [
  { name: "JavaScript", description: "Proficient in modern JavaScript frameworks and libraries." },
  { name: "React", description: "Experienced in building responsive and dynamic web applications with React." },
  { name: "Node.js", description: "Skilled in server-side development using Node.js and Express." },
  { name: "CSS & Tailwind CSS", description: "Expert in crafting beautiful, responsive designs with CSS and Tailwind CSS." },
  { name: "Git & GitHub", description: "Proficient in version control and collaborative development using Git and GitHub." },
];

function Skills() {
  return (
    <section id="skills" className="bg-light-cyan p-8">
      <h2 className="text-3xl font-bold text-dark-navy-blue text-center mb-8 fade-in">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg text-charcoal-gray slide-in">
            <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
