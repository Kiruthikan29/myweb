const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git'];
  
  return (
    <section id="skills" className="section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;