import './Projects.css'

const projects = [
  {
    name: 'BazarDor (বাজার দর)',
    description:
      'A responsive web app that tracks daily market prices of essential goods in Bangladesh, shown in Bangla with Bengali numerals. Signed-in users can compare prices across different bazaars.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'DaisyUI', 'Better Auth'],
    live: 'https://b14-a7-bazar-dor-fawn.vercel.app/',
    github: '',
  },
  {
    name: 'FitLog',
    description:
      'A workout library and planning app. Browse workouts, sort them, save favorites, build a daily plan, and track your workout stats.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'REST API'],
    live: 'https://b14-a06-fit-log-taupe.vercel.app/',
    github: '',
  },
  {
    name: 'Dev Stack Builder',
    description:
      'Explore frontend, backend, database and tooling options, compare them side by side, and build your ideal development stack.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    live: 'https://phenomenal-melomakarona-bda494.netlify.app/',
    github: '',
  },
  {
    name: 'HustleUp',
    description:
      'A peer-to-peer skill-sharing platform for university students. Students enroll in sections taught by mentors and earn certificates. Built on a seven-table MySQL database with role-based access.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    live: '',
    github: '',
  },
  {
    name: 'New Year Offer Landing Page',
    description:
      'A desktop landing page for a New Year sale, built with plain HTML and CSS to practice turning a design into clean code.',
    tech: ['HTML', 'CSS'],
    live: 'https://tniha10.github.io/new-year/',
    github: '',
  },
  {
    name: 'Catch the Ball',
    description:
      'A Java desktop arcade game where you move a paddle to catch falling objects before you run out of lives.',
    tech: ['Java', 'Swing', 'AWT'],
    live: '',
    github: 'https://github.com/tniha10/catch-the-ball-game',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map(function (project) {
            return (
              <div className="project-card" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tech.map(function (item) {
                    return (
                      <span className="project-tag" key={item}>
                        {item}
                      </span>
                    )
                  })}
                </div>

                <div className="project-links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-filled"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-outline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects