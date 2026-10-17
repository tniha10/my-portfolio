import './Skills.css'

const groups = [
  { title: 'Frontend Stack', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'DaisyUI', 'HTML5', 'CSS3', 'Figma'] },
  { title: 'Backend & Core Data', items: ['Node.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'REST APIs', 'PHP', 'Python', 'Django'] },
  { title: 'Tools & Intelligence', items: ['Git', 'GitHub', 'Vite', 'Flutter', 'PyTorch', 'Scikit-Learn', 'Pandas', 'Java Swing'] },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="wrap">
        <h2 className="section-title">What I work with</h2>
        <div className="skills-grid">
          {groups.map((group) => (
            <div key={group.title} className="skills-card">
              <h3>{group.title}</h3>
              <ul className="tags-list">
                {group.items.map((item) => (
                  <li key={item} className="tag-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills