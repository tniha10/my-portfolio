const experiences = [
  {
    role: 'Python Programming Intern',
    company: 'Datheon',
    date: 'Oct 2026 – Nov 2026',
    location: 'Remote',
    type: 'Technical Experience',
    description:
      'Selected for a four-week virtual engineering cohort focused on project-based software development and practical problem-solving.',
    responsibilities: [
      'Apply AI foundations and core algorithms to practical system integration tasks.',
      'Develop structured, maintainable Python code using software engineering best practices.',
      'Practice version control and industry-standard development workflows.',
    ],
    skills: ['Python', 'Artificial Intelligence', 'Algorithms', 'Git'],
  },
  {
    role: 'Co-Founder',
    company: 'Crescent Books',
    date: 'May 2023 – Present',
    location: 'Dhaka, Bangladesh',
    type: 'Entrepreneurship',
    description:
      'Co-founded and manage an online bookstore with my sister, focusing on book sales, customer experience, and growing an online reading community.',
    responsibilities: [
      'Manage end-to-end e-commerce operations, including order processing, packaging, and dispatch.',
      'Handle customer inquiries, resolve issues, and maintain positive customer relationships.',
      'Plan social media content and marketing campaigns to increase engagement and grow the brand.',
    ],
    skills: [
      'E-commerce',
      'Customer Relations',
      'Social Media Marketing',
      'Business Operations',
    ],
  },
]

function Experience() {
  return (
    <>
      <style>{`
        .experience {
          padding: 100px 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .experience-container {
          width: 100%;
        }

        .experience-intro {
          max-width: 600px;
          margin: -8px 0 40px;
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.8;
        }

        .experience-list {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .experience-card {
          position: relative;
          padding: 32px;
          background: var(--sage-light);
          border: 1px solid var(--sage-border);
          border-radius: 14px;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .experience-card:hover {
          transform: translateY(-4px);
          border-color: var(--sage-accent);
          box-shadow: 0 12px 30px rgba(61, 74, 59, 0.08);
        }

        .experience-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 18px;
        }

        .experience-heading {
          flex: 1;
          min-width: 220px;
        }

        .experience-type {
          display: inline-block;
          margin-bottom: 12px;
          padding: 5px 10px;
          border: 1px solid var(--sage-border);
          border-radius: 20px;
          color: var(--sage-accent);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .experience-header h3 {
          margin: 0 0 7px;
          color: var(--text-primary);
          font-family: var(--sans);
          font-size: clamp(1.25rem, 3vw, 1.55rem);
          font-weight: 650;
        }

        .experience-company {
          margin: 0;
          color: var(--sage-accent);
          font-size: 1.05rem;
          font-weight: 600;
        }

        .experience-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 7px;
          color: var(--text-muted);
          font-size: 0.85rem;
          text-align: right;
        }

        .experience-date {
          font-family: var(--mono);
        }

        .experience-location {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .experience-text {
          margin: 0 0 22px;
          color: var(--text-muted);
          font-size: 0.98rem;
          line-height: 1.8;
        }

        .experience-subtitle {
          margin: 0 0 12px;
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 600;
        }

        .experience-responsibilities {
          display: flex;
          flex-direction: column;
          gap: 11px;
          margin: 0 0 24px;
          padding: 0;
          list-style: none;
        }

        .experience-responsibilities li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: var(--text-muted);
          font-size: 0.94rem;
          line-height: 1.75;
        }

        .experience-bullet {
          flex-shrink: 0;
          margin-top: 9px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--sage-accent);
        }

        .experience-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          padding-top: 20px;
          border-top: 1px solid var(--sage-border);
        }

        .experience-skill {
          padding: 7px 12px;
          border: 1px solid var(--sage-border);
          border-radius: 7px;
          color: var(--text-muted);
          font-size: 0.8rem;
          background: rgba(255, 255, 255, 0.35);
        }

        @media (max-width: 600px) {
          .experience {
            padding: 72px 18px;
          }

          .experience-card {
            padding: 23px 19px;
          }

          .experience-top {
            flex-direction: column;
            gap: 12px;
          }

          .experience-heading {
            min-width: 0;
          }

          .experience-meta {
            align-items: flex-start;
            text-align: left;
          }

          .experience-responsibilities li {
            font-size: 0.9rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-card {
            transition: none;
          }

          .experience-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section id="experience" className="experience">
        <div className="experience-container">
          <h2 className="section-title">Experience</h2>

          <p className="experience-intro">
            My journey combines hands-on software development experience
            with entrepreneurship, continuous learning, and building
            meaningful experiences for people.
          </p>

          <div className="experience-list">
            {experiences.map((experience) => (
              <article
                className="experience-card"
                key={experience.company}
              >
                <div className="experience-top">
                  <div className="experience-heading">
                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <div className="experience-header">
                      <h3>{experience.role}</h3>
                    </div>

                    <p className="experience-company">
                      {experience.company}
                    </p>
                  </div>

                  <div className="experience-meta">
                    <span className="experience-date">
                      {experience.date}
                    </span>

                    <span className="experience-location">
                      <span aria-hidden="true">⌖</span>
                      {experience.location}
                    </span>
                  </div>
                </div>

                <p className="experience-text">
                  {experience.description}
                </p>

                <h4 className="experience-subtitle">
                  Key Responsibilities
                </h4>

                <ul className="experience-responsibilities">
                  {experience.responsibilities.map(
                    (responsibility) => (
                      <li key={responsibility}>
                        <span
                          className="experience-bullet"
                          aria-hidden="true"
                        />
                        <span>{responsibility}</span>
                      </li>
                    )
                  )}
                </ul>

                <div
                  className="experience-skills"
                  aria-label="Relevant skills"
                >
                  {experience.skills.map((skill) => (
                    <span className="experience-skill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience
