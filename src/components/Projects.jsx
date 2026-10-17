import './Projects.css'

const projects = [
  {
    name: 'BazarDor (বাজার দর)',
    description: 'A responsive web application tracking daily retail market prices of essential agricultural and household products in Bangladesh. Features an intuitive Bangla translation UI built with custom numerals, enabling localized cross-bazaar price indexing calculations.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'DaisyUI', 'Better Auth', 'MongoDB'],
    live: 'https://b14-a7-bazar-dor-fawn.vercel.app/',
    github: '',
  },
  {
    name: 'Bangla Voice Automated CRM',
    description: 'An advanced pipeline architecture recording streaming Bangla voice signals, transcribing data through localized BanglaASR, extracting nested fields via tokenization layers, and storing logs internally.',
    tech: ['Flutter', 'Dart', 'BanglaASR', 'SQLite', 'Local DB'],
    live: '',
    github: 'https://github.com/tniha10',
  },
  {
    name: 'LTLC-HSI Optimization Framework',
    description: 'Leakage-controlled evaluation workflows optimizing long-tail sample distribution matrices for hyperspectral imaging (HSI). Implemented with class-prior logit adjustments across spatially disjoint validation sets.',
    tech: ['Python', 'PyTorch', 'HybridSN', 'Jupyter Notebook'],
    live: '',
    github: 'https://github.com/tniha10',
  },
  {
    name: 'FitLog Tracking Companion',
    description: 'A dedicated, lightweight fitness management suite built to log custom physical movement routines, browse exercises, organize individual daily lists, and compute cumulative performance parameters.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'REST API'],
    live: 'https://b14-a06-fit-log-taupe.vercel.app/',
    github: '',
  },
  {
    name: 'Dev Stack Builder',
    description: 'Interactive structural application matrix that visualizes individual deployment layers side-by-side. Helps teams balance database schemas, compute modules, and framework constraints seamlessly.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    live: 'https://phenomenal-melomakarona-bda494.netlify.app/',
    github: '',
  },
  {
    name: 'Catch the Ball (Arcade Engine)',
    description: 'A complete desktop game implementation managing graphical loop refreshing sequences, structural matrix math coordinates, object-oriented collision tracking engines, and custom score exceptions.',
    tech: ['Java', 'Java Swing', 'Java AWT', 'Generics'],
    live: '',
    github: 'https://github.com/tniha10/catch-the-ball-game',
  }
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="wrap">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-card-header">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-tags">
                {project.tech.map((item) => (
                  <span className="project-tag" key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="button button-filled">
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="button button-outline">
                    GitHub Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects