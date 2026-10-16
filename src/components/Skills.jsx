import './Skills.css'

const skillGroups = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'C++', 'C', 'PHP'],
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS', 'DaisyUI'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Better Auth'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skillGroups.map(function (group) {
            return (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map(function (skill) {
                    return (
                      <span className="skill-tag" key={skill}>
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills