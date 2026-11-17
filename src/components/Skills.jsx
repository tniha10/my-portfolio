
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
    <section id="skills" className="skills-editorial">
      <style>{`
        .skills-editorial {
          --skills-green: #123c32;
          --skills-dark: #0b2923;
          --skills-bone: #f2ebdd;
          --skills-muted: #c5cabb;
          --skills-red: #e34234;

          padding: 110px 24px;
          color: var(--skills-bone);
          background: var(--skills-green);
        }

        .skills-editorial-container {
          max-width: 1150px;
          margin: 0 auto;
        }

        .skills-editorial-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 65px;
        }

        .skills-editorial-label {
          display: inline-block;
          margin-bottom: 18px;
          color: var(--skills-red);
          font-family: var(--mono, monospace);
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .skills-editorial-title {
          max-width: 600px;
          margin: 0;
          color: var(--skills-bone);
          font-family: var(--serif, Georgia, serif);
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 500;
          letter-spacing: -0.055em;
          line-height: 1.05;
        }

        .skills-editorial-title span {
          color: var(--skills-red);
          font-style: italic;
        }

        .skills-editorial-intro {
          max-width: 330px;
          margin: 0 0 6px;
          color: var(--skills-muted);
          font-size: 0.95rem;
          line-height: 1.9;
        }

        .skills-editorial-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 65px;
        }

        .skills-editorial-item {
          min-width: 0;
          padding: 30px 0 34px;
          border-top: 1px solid rgba(242, 235, 221, 0.25);
        }

        .skills-editorial-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 25px;
        }

        .skills-editorial-number {
          color: var(--skills-red);
          font-family: var(--mono, monospace);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
        }

        .skills-editorial-icon {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          color: var(--skills-bone);
          border: 1px solid rgba(242, 235, 221, 0.35);
          border-radius: 50%;
          font-size: 1.2rem;
        }

        .skills-editorial-item h3 {
          margin: 0 0 10px;
          color: var(--skills-bone);
          font-family: var(--serif, Georgia, serif);
          font-size: clamp(1.4rem, 2.5vw, 1.8rem);
          font-weight: 500;
          letter-spacing: -0.025em;
        }

        .skills-editorial-description {
          margin: 0 0 22px;
          color: var(--skills-muted);
          font-size: 0.88rem;
          line-height: 1.7;
        }

        .skills-editorial-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .skills-editorial-tag {
          padding: 8px 12px;
          color: var(--skills-bone);
          background: transparent;
          border: 1px solid rgba(242, 235, 221, 0.3);
          border-radius: 3px;
          font-size: 0.78rem;
          line-height: 1.3;
          transition:
            color 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .skills-editorial-tag:hover {
          color: var(--skills-dark);
          background: var(--skills-bone);
          border-color: var(--skills-bone);
        }

        @media (max-width: 760px) {
          .skills-editorial {
            padding: 85px 22px;
          }

          .skills-editorial-heading {
            display: block;
            margin-bottom: 45px;
          }

          .skills-editorial-intro {
            margin-top: 22px;
          }

          .skills-editorial-grid {
            column-gap: 35px;
          }
        }

        @media (max-width: 560px) {
          .skills-editorial {
            padding: 75px 18px;
          }

          .skills-editorial-grid {
            grid-template-columns: 1fr;
          }

          .skills-editorial-item {
            padding: 25px 0 30px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skills-editorial-tag {
            transition: none;
          }
        }
      `}</style>

      <div className="skills-editorial-container">
        <div className="skills-editorial-heading">
          <div>
            <span className="skills-editorial-label">
              03 / My Toolkit
            </span>

            <h2 className="skills-editorial-title">
              Skills & <span>Technologies.</span>
            </h2>
          </div>

          <p className="skills-editorial-intro">
            A collection of technologies, tools, and areas I have been
            learning and working with to build useful digital experiences.
          </p>
        </div>

        <div className="skills-editorial-grid">
          {skillGroups.map((group) => (
            <article className="skills-editorial-item" key={group.title}>
              <div className="skills-editorial-top">
                <span className="skills-editorial-number">
                  / {group.number}
                </span>

                <span className="skills-editorial-icon" aria-hidden="true">
                  {group.icon}
                </span>
              </div>

              <h3>{group.title}</h3>

              <p className="skills-editorial-description">
                {group.description}
              </p>

              <ul className="skills-editorial-tags" aria-label={group.title}>
                {group.skills.map((skill) => (
                  <li className="skills-editorial-tag" key={skill}>
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
