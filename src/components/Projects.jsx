
import { useState } from 'react'

const projects = [
  {
    name: 'BazarDor (বাজার দর)',
    category: 'Full-Stack Web Application',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Fresh produce displayed at a market',
    description:
      'A responsive web application that helps users explore and compare daily market prices of essential products in Bangladesh.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'DaisyUI', 'Better Auth', 'MongoDB'],
    live: 'https://b14-a7-bazar-dor-fawn.vercel.app/',
    github: '',
    challenge:
      'Building a responsive interface for localized market information, presenting prices clearly, and integrating authentication with a database for dynamic product information.',
    improvements:
      'Add historical price charts, more market locations, price-change notifications, and improved search and filtering for products.',
    details:
      'Developed a localized market-price application with a responsive interface and Bangla-friendly presentation. The application uses Next.js and React for the interface, Better Auth for authentication, and MongoDB for product and price data.',
  },
  {
    name: 'Bangla Voice Automated CRM',
    category: 'Capstone Project',
    image:
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Audio recording equipment for a voice application',
    description:
      'A Flutter mobile application that uses Bangla speech recognition to capture spoken information and organize customer leads.',
    tech: ['Flutter', 'Dart', 'BanglaASR', 'SQLite', 'Local Database'],
    live: '',
    github: '',
    challenge:
      'Connecting Bangla speech transcription with structured field extraction and local data storage while keeping the workflow practical for recording customer information.',
    improvements:
      'Improve transcription accuracy, validate extracted fields, add lead search and editing, and explore secure backup and synchronization.',
    details:
      'This capstone project combines speech recognition and mobile development to transcribe Bangla speech and extract CRM fields such as name, phone number, address, location, and product interest. The extracted records are stored in a local database.',
  },
  {
    name: 'LTLC-HSI Optimization Framework',
    category: 'Undergraduate Research',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Electronic components representing computational research',
    description:
      'A research project investigating long-tail class distributions in hyperspectral image classification using deep learning.',
    tech: ['Python', 'PyTorch', 'Deep Learning', 'HybridSN', 'Jupyter Notebook'],
    live: '',
    github: '',
    challenge:
      'Preventing data leakage between training and validation samples and evaluating classification performance when some classes have far fewer samples than others.',
    improvements:
      'Evaluate additional long-tail correction strategies, compare performance across datasets, analyze per-class metrics, and improve reproducibility of experiments.',
    details:
      'Conducted undergraduate research on long-tail correction for hyperspectral image classification. The work uses spatially disjoint training and validation splits, the HybridSN architecture, and class-prior-based logit adjustment.',
  },
  {
    name: 'HustleUp',
    category: 'Full-Stack Web Application',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Students and colleagues collaborating on a project',
    description:
      'A peer-to-peer skill-sharing platform designed to help university students exchange skills and academic support.',
    tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Database Design'],
    live: '',
    github: '',
    challenge:
      'Designing a relational database for user profiles and session scheduling while connecting backend business logic with responsive frontend pages.',
    improvements:
      'Add reviews and ratings, improve skill discovery, develop booking notifications, and strengthen session management and account security.',
    details:
      'Built a platform concept for university students to exchange certified skills and academic support. The project uses PHP for backend business logic and MySQL for relational data, including user profiles and session scheduling.',
  },
  {
    name: 'FitLog Tracking Companion',
    category: 'Fitness Web Application',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Fitness training in a gym',
    description:
      'A fitness web application for browsing workouts, organizing exercise routines, and tracking training activities.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'REST API'],
    live: 'https://b14-a06-fit-log-taupe.vercel.app/',
    github: '',
    challenge:
      'Presenting workout information consistently, integrating API data into reusable components, and maintaining a responsive layout across screen sizes.',
    improvements:
      'Add workout history, personal progress charts, customizable training plans, and persistent user-specific workout lists.',
    details:
      'Created a workout library with reusable workout cards and API-driven exercise information. The interface focuses on helping users browse exercises and organize their fitness routines.',
  },
  {
    name: 'Dev Stack Builder',
    category: 'Developer Tool',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Code displayed on a developer workstation',
    description:
      'An interactive technology library that helps users explore development tools, frameworks, languages, and databases.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    live: 'https://phenomenal-melomakarona-bda494.netlify.app/',
    github: '',
    challenge:
      'Organizing technology information into reusable cards while keeping categories, ratings, and difficulty labels consistent and easy to browse.',
    improvements:
      'Add category filters, search, sorting, saved technology stacks, and comparisons between development tools.',
    details:
      'Built a responsive technology-card interface featuring development tools across categories such as frontend, backend, databases, languages, and DevOps. The project uses reusable React components and structured technology data.',
  },
  {
    name: 'Catch the Ball',
    category: 'Desktop Game',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Retro arcade gaming setup',
    description:
      'A Java desktop arcade game focused on interactive gameplay, object movement, collision detection, and scoring.',
    tech: ['Java', 'Java Swing', 'Java AWT', 'Object-Oriented Programming'],
    live: '',
    github: 'https://github.com/tniha10/catch-the-ball-game',
    challenge:
      'Managing game-loop updates, object positions, collision detection, and score changes while keeping the gameplay responsive.',
    improvements:
      'Introduce multiple difficulty levels, sound effects, a high-score system, and additional gameplay modes.',
    details:
      'Developed a desktop arcade game using Java and its graphical libraries. The project explores graphical updates, coordinate calculations, collision handling, and object-oriented programming.',
  },
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="projects-section">
      <style>{`
        .projects-section {
          padding: 100px 24px;
          background: var(--bg-main, #f7f8f3);
          color: var(--text-main, #25352e);
        }

        .projects-wrap {
          max-width: 1150px;
          margin: 0 auto;
        }

        .projects-heading {
          margin-bottom: 12px;
          color: var(--sage-deep, #304c3d);
          font-family: var(--serif, Georgia, serif);
          font-size: clamp(2rem, 4vw, 3rem);
          text-align: center;
        }

        .projects-subtitle {
          max-width: 600px;
          margin: 0 auto 44px;
          color: var(--text-muted, #68746c);
          font-size: 1rem;
          line-height: 1.8;
          text-align: center;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px;
          align-items: stretch;
        }

        .project-card {
          min-width: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: var(--bg-cream, #fffef9);
          border: 1px solid var(--sage-border, #dce5d9);
          border-radius: 16px;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(43, 66, 49, .10);
        }

        .project-image-wrap {
          position: relative;
          height: 190px;
          overflow: hidden;
          background: var(--sage-light, #e8efe5);
        }

        .project-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.04);
        }

        .project-category {
          position: absolute;
          left: 14px;
          bottom: 14px;
          padding: 6px 10px;
          border: 1px solid rgba(255,255,255,.65);
          border-radius: 20px;
          background: rgba(255,255,255,.92);
          color: #304c3d;
          font-size: .72rem;
          font-weight: 600;
        }

        .project-card-body {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: flex-start;
          padding: 23px;
        }

        .project-card h3 {
          margin: 0 0 12px;
          color: var(--sage-deep, #304c3d);
          font-family: var(--serif, Georgia, serif);
          font-size: 1.35rem;
          line-height: 1.4;
        }

        .project-description {
          margin: 0 0 20px;
          color: var(--text-muted, #68746c);
          font-size: .92rem;
          line-height: 1.75;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: auto;
          margin-bottom: 22px;
        }

        .project-tag {
          padding: 5px 9px;
          border: 1px solid var(--sage-border, #dce5d9);
          border-radius: 6px;
          background: var(--sage-light, #e8efe5);
          color: var(--sage-deep, #304c3d);
          font-size: .73rem;
        }

        .project-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          width: 100%;
        }

        .project-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 42px;
          padding: 10px 15px;
          border: 1px solid var(--sage-deep, #304c3d);
          border-radius: 8px;
          font: inherit;
          font-size: .84rem;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          transition: background .2s ease, color .2s ease;
        }

        .project-button-primary {
          flex: 1;
          background: var(--sage-deep, #304c3d);
          color: white;
        }

        .project-button-primary:hover {
          background: #42634e;
        }

        .project-button-secondary {
          background: transparent;
          color: var(--sage-deep, #304c3d);
        }

        .project-button-secondary:hover {
          background: var(--sage-light, #e8efe5);
        }

        .project-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(20, 31, 25, .68);
          backdrop-filter: blur(5px);
        }

        .project-modal {
          position: relative;
          width: 100%;
          max-width: 760px;
          max-height: 88vh;
          overflow-y: auto;
          border: 1px solid var(--sage-border, #dce5d9);
          border-radius: 18px;
          background: var(--bg-cream, #fffef9);
          color: var(--text-main, #25352e);
          box-shadow: 0 24px 80px rgba(0, 0, 0, .22);
        }

        .project-modal-image {
          display: block;
          width: 100%;
          height: 240px;
          object-fit: cover;
        }

        .project-modal-content {
          padding: 30px;
        }

        .project-modal h3 {
          margin: 0 0 10px;
          color: var(--sage-deep, #304c3d);
          font-family: var(--serif, Georgia, serif);
          font-size: clamp(1.7rem, 4vw, 2.2rem);
        }

        .project-modal h4 {
          margin: 24px 0 8px;
          color: var(--sage-deep, #304c3d);
          font-size: 1rem;
        }

        .project-modal p {
          margin: 0;
          color: var(--text-muted, #68746c);
          font-size: .95rem;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .project-modal-close {
          position: absolute;
          z-index: 2;
          top: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255,255,255,.8);
          border-radius: 50%;
          background: white;
          color: #25352e;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .project-modal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .project-empty-link {
          color: var(--text-muted, #68746c);
          font-size: .85rem;
        }

        @media (max-width: 950px) {
          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .projects-section {
            padding: 70px 16px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .project-image-wrap {
            height: 210px;
          }

          .project-card-body {
            padding: 21px;
          }

          .project-modal-backdrop {
            padding: 10px;
          }

          .project-modal-content {
            padding: 22px;
          }

          .project-modal-image {
            height: 180px;
          }

          .project-modal-links .project-button {
            flex: 1 1 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card,
          .project-image,
          .project-button {
            transition: none;
          }
        }
      `}</style>

      <div className="projects-wrap">
        <h2 className="projects-heading section-title">Featured Projects</h2>

        <p className="projects-subtitle">
          A selection of my work in full-stack development, mobile
          applications, research, and software engineering.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-image-wrap">
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />
                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-card-body">
                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tech.map((item) => (
                    <span className="project-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    type="button"
                    className="project-button project-button-primary"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View details for ${project.name}`}
                  >
                    View Details
                  </button>

                  {project.live && (
                    <a
                      className="project-button project-button-secondary"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null)
            }
          }}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <img
              className="project-modal-image"
              src={selectedProject.image}
              alt={selectedProject.imageAlt}
            />

            <div className="project-modal-content">
              <span className="project-category">
                {selectedProject.category}
              </span>

              <h3 id="project-modal-title">
                {selectedProject.name}
              </h3>

              <h4>Project Overview</h4>
              <p>{selectedProject.details}</p>

              <h4>Technology Stack</h4>
              <div className="project-tags">
                {selectedProject.tech.map((item) => (
                  <span className="project-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <h4>Challenges and Learning</h4>
              <p>{selectedProject.challenge}</p>

              <h4>Future Improvements</h4>
              <p>{selectedProject.improvements}</p>

              <div className="project-modal-links">
                {selectedProject.live && (
                  <a
                    className="project-button project-button-primary"
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project ↗
                  </a>
                )}

                {selectedProject.github && (
                  <a
                    className="project-button project-button-secondary"
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub Repository ↗
                  </a>
                )}

                {!selectedProject.live && !selectedProject.github && (
                  <span className="project-empty-link">
                    Project links will be added when available.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
