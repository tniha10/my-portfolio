
import { useState } from 'react'

const projects = [
  {
    name: 'StudioSpace',
    category: 'Full-Stack Web Application',
    image: '/studiospace.png',
    imageAlt: 'StudioSpace creative studio marketplace homepage',
    description:
      'A peer-to-peer marketplace where creators can discover photography studios, sound stages, podcast rooms, music suites, and art workshops.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'DaisyUI',
      'Express',
      'MongoDB',
      'Better Auth',
    ],
    live: 'https://studiospace-eosin.vercel.app/',
    github: 'https://github.com/tniha10/studiospace',
    challenge:
      'Building a marketplace with studio discovery, search and filtering, authentication, studio management, and a booking workflow. Booking requests also need server-side validation and protection against overlapping reservations.',
    improvements:
      'Continue improving the booking experience, expand testing, and add more features for studio hosts and creators.',
    details:
      'StudioSpace is a creative-studio marketplace. Hosts can list their spaces, while creators can explore studios and request bookings. Booking requests begin with Pending status, and the application uses the listed studio rate for pricing.',
  },
  {
    name: 'BazarDor (বাজার দর)',
    category: 'Full-Stack Web Application',
    image: '/bazardor.png',
    imageAlt: 'BazarDor Bangla market price tracker homepage',
    description:
      'A responsive web application that helps users explore and compare daily market prices of essential products in Bangladesh.',
    tech: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'DaisyUI',
      'Better Auth',
      'MongoDB',
    ],
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
    name: 'FitLog Tracking Companion',
    category: 'Fitness Web Application',
    image: '/fitlog.png',
    imageAlt: 'FitLog workout library homepage',
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
    image: '/devstack.png',
    imageAlt: 'Dev Stack Builder technology explorer homepage',
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
    name: 'Bangla Voice Automated CRM',
    category: 'Capstone Project',
    coverTitle: 'Bangla Voice',
    coverSubtitle: 'Speech Recognition · CRM',
    imageAlt: 'Custom cover for Bangla Voice Automated CRM',
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
    coverTitle: 'LTLC / HSI',
    coverSubtitle: 'Deep Learning · Research',
    imageAlt: 'Custom cover for LTLC-HSI Optimization Framework',
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
    coverTitle: 'HustleUp',
    coverSubtitle: 'Skill Sharing · Community',
    imageAlt: 'Custom cover for HustleUp',
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
      'Built a platform concept for university students to exchange skills and academic support. The project uses PHP for backend business logic and MySQL for relational data, including user profiles and session scheduling.',
  },
  {
    name: 'Catch the Ball',
    category: 'Desktop Game',
    coverTitle: 'Catch the Ball',
    coverSubtitle: 'Java · Arcade Game',
    imageAlt: 'Custom cover for Catch the Ball',
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
    <section id="projects" className="projects-editorial">
      <style>{`
        .projects-editorial {
          --project-green: #123c32;
          --project-dark: #0b2923;
          --project-bone: #f2ebdd;
          --project-muted: #6d766c;
          --project-red: #e34234;

          padding: 110px 24px;
          background: var(--project-bone);
          color: var(--project-dark);
        }

        .projects-editorial-wrap {
          max-width: 1150px;
          margin: 0 auto;
        }

        .projects-editorial-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 35px;
          margin-bottom: 55px;
        }

        .projects-editorial-label {
          display: inline-block;
          margin-bottom: 18px;
          color: var(--project-red);
          font-family: var(--mono, monospace);
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .projects-editorial-title {
          margin: 0;
          color: var(--project-green);
          font-family: var(--serif, Georgia, serif);
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 500;
          letter-spacing: -0.055em;
          line-height: 1.05;
        }

        .projects-editorial-title span {
          color: var(--project-red);
          font-style: italic;
        }

        .projects-editorial-intro {
          max-width: 340px;
          margin: 0 0 5px;
          color: var(--project-muted);
          font-size: 0.95rem;
          line-height: 1.9;
        }

        .projects-editorial-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .projects-editorial-card {
          min-width: 0;
          overflow: hidden;
          background: #fffaf0;
          border: 1px solid rgba(18, 60, 50, 0.14);
          transition: transform 0.25s ease;
        }

        .projects-editorial-card:hover {
          transform: translateY(-5px);
        }

        .projects-editorial-card.featured {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          background: var(--project-green);
          color: var(--project-bone);
        }

        .projects-editorial-image-wrap {
          position: relative;
          min-height: 230px;
          overflow: hidden;
          background: #d9d0bd;
        }

        .projects-editorial-card.featured .projects-editorial-image-wrap {
          min-height: 390px;
        }

        .projects-editorial-image {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 230px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .projects-editorial-card:hover .projects-editorial-image {
          transform: scale(1.04);
        }

        .projects-editorial-card.featured .projects-editorial-image {
          min-height: 390px;
        }

        .projects-editorial-cover {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          min-height: 230px;
          height: 100%;
          padding: 35px;
          background:
            radial-gradient(circle at 80% 20%, rgba(227, 66, 52, 0.28), transparent 35%),
            linear-gradient(135deg, #123c32, #0b2923);
          color: #f2ebdd;
        }

        .projects-editorial-cover::before {
          content: '';
          width: 45px;
          height: 4px;
          margin-bottom: 25px;
          background: #e34234;
        }

        .projects-editorial-cover-title {
          margin: 0;
          font-family: var(--serif, Georgia, serif);
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 500;
          line-height: 1.1;
        }

        .projects-editorial-cover-subtitle {
          margin-top: 14px;
          color: #d9d0bd;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .projects-editorial-card.featured .projects-editorial-cover {
          min-height: 390px;
        }

        .projects-editorial-category {
          position: absolute;
          left: 18px;
          bottom: 18px;
          padding: 8px 12px;
          background: var(--project-bone);
          color: var(--project-green);
          font-family: var(--mono, monospace);
          font-size: 0.7rem;
          letter-spacing: 0.04em;
        }

        .projects-editorial-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 27px;
        }

        .projects-editorial-card.featured .projects-editorial-body {
          justify-content: center;
          padding: 42px;
        }

        .projects-editorial-number {
          margin-bottom: 18px;
          color: var(--project-red);
          font-family: var(--mono, monospace);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        .projects-editorial-card h3 {
          margin: 0 0 13px;
          color: var(--project-green);
          font-family: var(--serif, Georgia, serif);
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 500;
          line-height: 1.2;
        }

        .projects-editorial-card.featured h3 {
          color: var(--project-bone);
          font-size: clamp(2rem, 4vw, 3rem);
        }

        .projects-editorial-description {
          margin: 0 0 24px;
          color: var(--project-muted);
          font-size: 0.9rem;
          line-height: 1.8;
        }

        .projects-editorial-card.featured .projects-editorial-description {
          color: #d4d9ce;
          font-size: 0.95rem;
        }

        .projects-editorial-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: auto 0 24px;
          padding: 0;
          list-style: none;
        }

        .projects-editorial-tag {
          padding: 7px 10px;
          border: 1px solid rgba(18, 60, 50, 0.22);
          color: var(--project-green);
          font-size: 0.73rem;
        }

        .projects-editorial-card.featured .projects-editorial-tag {
          border-color: rgba(242, 235, 221, 0.35);
          color: var(--project-bone);
        }

        .projects-editorial-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          width: 100%;
        }

        .projects-editorial-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 42px;
          padding: 10px 15px;
          border: 1px solid var(--project-green);
          background: transparent;
          color: var(--project-green);
          font: inherit;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .projects-editorial-button.primary {
          background: var(--project-green);
          color: var(--project-bone);
        }

        .projects-editorial-button:hover {
          background: var(--project-red);
          border-color: var(--project-red);
          color: white;
        }

        .projects-editorial-card.featured .projects-editorial-button {
          border-color: var(--project-bone);
          color: var(--project-bone);
        }

        .projects-editorial-card.featured .projects-editorial-button.primary {
          background: var(--project-bone);
          color: var(--project-green);
        }

        .projects-editorial-card.featured .projects-editorial-button:hover {
          background: var(--project-red);
          border-color: var(--project-red);
          color: white;
        }

        .projects-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(11, 41, 35, 0.82);
          backdrop-filter: blur(5px);
        }

        .projects-modal {
          position: relative;
          width: 100%;
          max-width: 760px;
          max-height: 88vh;
          overflow-y: auto;
          background: var(--project-bone);
          color: var(--project-dark);
        }

        .projects-modal-image {
          display: block;
          width: 100%;
          height: 240px;
          object-fit: cover;
        }

        .projects-modal-content {
          padding: 32px;
        }

        .projects-modal h3 {
          margin: 12px 0;
          color: var(--project-green);
          font-family: var(--serif, Georgia, serif);
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 500;
        }

        .projects-modal h4 {
          margin: 25px 0 9px;
          color: var(--project-green);
          font-size: 0.95rem;
        }

        .projects-modal p {
          margin: 0;
          color: var(--project-muted);
          font-size: 0.92rem;
          line-height: 1.8;
        }

        .projects-modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          border: 0;
          border-radius: 50%;
          background: var(--project-bone);
          color: var(--project-green);
          font-size: 1.5rem;
          cursor: pointer;
        }

        .projects-modal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 25px;
        }

        @media (max-width: 760px) {
          .projects-editorial {
            padding: 85px 20px;
          }

          .projects-editorial-heading {
            display: block;
          }

          .projects-editorial-intro {
            margin-top: 20px;
          }

          .projects-editorial-card.featured {
            grid-template-columns: 1fr;
          }

          .projects-editorial-card.featured .projects-editorial-image-wrap,
          .projects-editorial-card.featured .projects-editorial-image,
          .projects-editorial-card.featured .projects-editorial-cover {
            min-height: 260px;
          }

          .projects-editorial-card.featured .projects-editorial-body {
            padding: 28px;
          }
        }

        @media (max-width: 560px) {
          .projects-editorial-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .projects-editorial-card.featured {
            grid-column: auto;
          }

          .projects-editorial-body {
            padding: 22px;
          }

          .projects-modal-backdrop {
            padding: 10px;
          }

          .projects-modal-content {
            padding: 22px;
          }

          .projects-modal-image {
            height: 180px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-editorial-card,
          .projects-editorial-image,
          .projects-editorial-button {
            transition: none;
          }
        }
      `}</style>

      <div className="projects-editorial-wrap">
        <div className="projects-editorial-heading">
          <div>
            <span className="projects-editorial-label">
              04 / Selected Work
            </span>

            <h2 className="projects-editorial-title">
              Things I've <span>Built.</span>
            </h2>
          </div>

          <p className="projects-editorial-intro">
            A collection of projects, experiments, and research that
            reflect my journey through software development.
          </p>
        </div>

        <div className="projects-editorial-grid">
          {projects.map((project, index) => (
            <article
              className={`projects-editorial-card ${index === 0 ? 'featured' : ''}`}
              key={project.name}
            >
              <div className="projects-editorial-image-wrap">
                {project.image ? (
                  <img
                    className="projects-editorial-image"
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                ) : (
                  <div className="projects-editorial-cover">
                    <h3 className="projects-editorial-cover-title">
                      {project.coverTitle}
                    </h3>

                    <span className="projects-editorial-cover-subtitle">
                      {project.coverSubtitle}
                    </span>
                  </div>
                )}

                <span className="projects-editorial-category">
                  {project.category}
                </span>
              </div>

              <div className="projects-editorial-body">
                <span className="projects-editorial-number">
                  / PROJECT {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{project.name}</h3>

                <p className="projects-editorial-description">
                  {project.description}
                </p>

                <ul className="projects-editorial-tags">
                  {project.tech.map((item) => (
                    <li className="projects-editorial-tag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="projects-editorial-actions">
                  <button
                    type="button"
                    className="projects-editorial-button primary"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View details for ${project.name}`}
                  >
                    View Details
                  </button>

                  {project.live && (
                    <a
                      className="projects-editorial-button"
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
          className="projects-modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null)
            }
          }}
        >
          <div
            className="projects-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="projects-modal-title"
          >
            <button
              type="button"
              className="projects-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            {selectedProject.image ? (
              <img
                className="projects-modal-image"
                src={selectedProject.image}
                alt={selectedProject.imageAlt}
              />
            ) : (
              <div className="projects-editorial-cover">
                <h3 className="projects-editorial-cover-title">
                  {selectedProject.coverTitle}
                </h3>

                <span className="projects-editorial-cover-subtitle">
                  {selectedProject.coverSubtitle}
                </span>
              </div>
            )}

            <div className="projects-modal-content">
              <span className="projects-editorial-label">
                {selectedProject.category}
              </span>

              <h3 id="projects-modal-title">
                {selectedProject.name}
              </h3>

              <h4>Project Overview</h4>
              <p>{selectedProject.details}</p>

              <h4>Technology Stack</h4>
              <ul className="projects-editorial-tags">
                {selectedProject.tech.map((item) => (
                  <li className="projects-editorial-tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>

              <h4>Challenges and Learning</h4>
              <p>{selectedProject.challenge}</p>

              <h4>Future Improvements</h4>
              <p>{selectedProject.improvements}</p>

              <div className="projects-modal-links">
                {selectedProject.live && (
                  <a
                    className="projects-editorial-button primary"
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project ↗
                  </a>
                )}

                {selectedProject.github && (
                  <a
                    className="projects-editorial-button"
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub Repository ↗
                  </a>
                )}

                {!selectedProject.live && !selectedProject.github && (
                  <p>Live demo and repository links are not available.</p>
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
