const skillGroups = [
  {
    number: '01',
    title: 'Programming Languages',
    description: 'The languages I use to solve problems and build applications.',
    icon: '⌘',
    skills: ['JavaScript', 'TypeScript', 'Python', 'PHP'],
  },
  {
    number: '02',
    title: 'Web Development',
    description: 'Building responsive interfaces and full-stack web applications.',
    icon: '✳',
    skills: [
      'React.js',
      'Next.js',
      'HTML5',
      'Tailwind CSS',
      'JSON',
      'Better Auth',
    ],
  },
  {
    number: '03',
    title: 'Databases',
    description: 'Working with data, database structures, and application storage.',
    icon: '◫',
    skills: ['MongoDB', 'MySQL', 'Database Design'],
  },
  {
    number: '04',
    title: 'AI & Machine Learning',
    description: 'Exploring intelligent systems through projects and research.',
    icon: '✧',
    skills: [
      'PyTorch',
      'Deep Learning',
      'Machine Learning',
      'Data Analysis',
      'Research Methodologies',
      'HybridSN',
    ],
  },
  {
    number: '05',
    title: 'Tools & Workflow',
    description: 'Tools and practices that support my development workflow.',
    icon: '⌘',
    skills: ['Git', 'GitHub', 'Vite', 'REST APIs'],
  },
  {
    number: '06',
    title: 'Mobile Development',
    description: 'Building mobile experiences and exploring app development.',
    icon: '▣',
    skills: ['Flutter', 'BanglaASR Integration'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <style>{`
        .skills-section {
          --skills-bg: var(--bg-cream, #faf9f5);
          --skills-card: var(--sage-light, #f0f3eb);
          --skills-border: var(--sage-border, #dce4d6);
          --skills-deep: var(--sage-deep, #455b46);
          --skills-text: var(--text-muted, #657064);
          padding: 100px 24px;
          background: var(--skills-bg);
        }

        .skills-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .skills-heading {
          max-width: 650px;
          margin-bottom: 42px;
        }

        .skills-eyebrow {
          display: inline-block;
          margin-bottom: 14px;
          color: var(--skills-deep);
          font-family: var(--mono, monospace);
          font-size: 0.76rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .skills-title {
          margin: 0 0 16px;
          color: var(--skills-deep);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          letter-spacing: -0.045em;
          line-height: 1.15;
        }

        .skills-intro {
          margin: 0;
          color: var(--skills-text);
          font-size: 1rem;
          line-height: 1.8;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .skills-card {
          min-width: 0;
          padding: 26px 23px;
          background: var(--skills-card);
          border: 1px solid var(--skills-border);
          border-radius: 18px;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .skills-card:hover {
          transform: translateY(-5px);
          border-color: var(--skills-deep);
          box-shadow: 0 12px 30px rgba(55, 75, 52, 0.08);
        }

        .skills-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 22px;
        }

        .skills-icon {
          display: grid;
          width: 44px;
          height: 44px;
          place-items: center;
          color: var(--skills-deep);
          background: var(--skills-bg);
          border: 1px solid var(--skills-border);
          border-radius: 14px;
          font-size: 1.4rem;
        }

        .skills-number {
          color: var(--skills-text);
          font-family: var(--mono, monospace);
          font-size: 0.78rem;
          opacity: 0.75;
        }

        .skills-card h3 {
          margin: 0 0 9px;
          color: var(--skills-deep);
          font-size: 1.08rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .skills-description {
          min-height: 48px;
          margin: 0 0 20px;
          color: var(--skills-text);
          font-size: 0.87rem;
          line-height: 1.7;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .skills-tag {
          padding: 7px 10px;
          color: var(--skills-deep);
          background: var(--skills-bg);
          border: 1px solid var(--skills-border);
          border-radius: 8px;
          font-size: 0.78rem;
          line-height: 1.35;
          overflow-wrap: anywhere;
          transition:
            background 0.2s ease,
            color 0.2s ease;
        }

        .skills-tag:hover {
          color: white;
          background: var(--skills-deep);
        }

        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 560px) {
          .skills-section {
            padding: 72px 18px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .skills-card {
            padding: 24px 20px;
          }

          .skills-description {
            min-height: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skills-card,
          .skills-tag {
            transition: none;
          }

          .skills-card:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="skills-container">
        <div className="skills-heading">
          <span className="skills-eyebrow">
            A little about my toolkit
          </span>

          <h2 className="skills-title">Skills & Technologies</h2>

          <p className="skills-intro">
            From building web applications to exploring AI and machine
            learning, here are the technologies and tools I work with
            as I continue to grow as a developer.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skills-card" key={group.title}>
              <div className="skills-card-top">
                <span className="skills-icon" aria-hidden="true">
                  {group.icon}
                </span>

                <span className="skills-number">
                  / {group.number}
                </span>
              </div>

              <h3>{group.title}</h3>

              <p className="skills-description">
                {group.description}
              </p>

              <ul className="skills-tags" aria-label={group.title}>
                {group.skills.map((skill) => (
                  <li className="skills-tag" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
