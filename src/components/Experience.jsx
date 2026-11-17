
const experiences = [
  {
    role: 'Python Programming Intern',
    company: 'Datheon',
    date: 'OCT 2026 — 12 NOV 2026',
    location: 'Remote',
    type: 'Technical Experience',
    github: 'https://github.com/tniha10/Datheon_Python_Programming',
    description:
      'Selected for a four-week virtual engineering cohort focused on project-based software development and practical problem-solving.',
    responsibilities: [
      'Applied AI foundations and core algorithms to practical system integration tasks.',
      'Developed structured, maintainable Python code using software engineering best practices.',
      'Practiced version control and industry-standard development workflows.',
    ],
    skills: ['Python', 'Artificial Intelligence', 'Algorithms', 'Git'],
  },
  {
    role: 'Co-Founder',
    company: 'Crescent Books',
    date: 'MAY 2023 — PRESENT',
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
        .experience-editorial {
          background: #f2ebdd;
          color: #123c32;
          padding: 110px 7%;
          scroll-margin-top: 80px;
        }

        .experience-editorial-container {
          max-width: 1150px;
          margin: 0 auto;
        }

        .experience-editorial-label {
          color: #e34234;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        .experience-editorial-title {
          font-family: Georgia, serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 400;
          letter-spacing: -3px;
          line-height: 1.05;
          margin-bottom: 22px;
        }

        .experience-editorial-intro {
          max-width: 620px;
          color: #64736a;
          font-size: 1rem;
          line-height: 1.9;
          margin-bottom: 65px;
        }

        .experience-editorial-list {
          border-top: 1px solid #c9c1b1;
        }

        .experience-editorial-item {
          display: grid;
          grid-template-columns: 1fr 230px;
          gap: 45px;
          padding: 45px 0;
          border-bottom: 1px solid #c9c1b1;
        }

        .experience-editorial-type {
          color: #e34234;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .experience-editorial-role {
          font-family: Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .experience-editorial-company {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .experience-editorial-description {
          max-width: 720px;
          color: #64736a;
          font-size: 0.95rem;
          line-height: 1.9;
          margin-bottom: 20px;
        }

        .experience-editorial-github {
          display: inline-block;
          margin-bottom: 28px;
          color: #e34234;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          border-bottom: 1px solid #e34234;
          padding-bottom: 5px;
          transition: color 0.2s ease;
        }

        .experience-editorial-github:hover {
          color: #123c32;
        }

        .experience-editorial-subtitle {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .experience-editorial-responsibilities {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
        }

        .experience-editorial-responsibilities li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #40574b;
          font-size: 0.92rem;
          line-height: 1.8;
          margin-bottom: 12px;
        }

        .experience-editorial-bullet {
          flex-shrink: 0;
          width: 7px;
          height: 7px;
          margin-top: 9px;
          background: #e34234;
        }

        .experience-editorial-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .experience-editorial-skill {
          padding: 8px 12px;
          border: 1px solid #c9c1b1;
          color: #40574b;
          font-size: 0.82rem;
        }

        .experience-editorial-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          text-align: right;
        }

        .experience-editorial-date {
          color: #e34234;
          font-size: 0.82rem;
          font-weight: 700;
          line-height: 1.6;
        }

        .experience-editorial-location {
          color: #788178;
          font-size: 0.88rem;
        }

        @media (max-width: 700px) {
          .experience-editorial {
            padding: 80px 6%;
          }

          .experience-editorial-item {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 35px 0;
          }

          .experience-editorial-meta {
            align-items: flex-start;
            text-align: left;
          }

          .experience-editorial-intro {
            margin-bottom: 45px;
          }
        }
      `}</style>

      <section
        id="experience"
        className="experience-editorial"
      >
        <div className="experience-editorial-container">

          <p className="experience-editorial-label">
            05 / PROFESSIONAL EXPERIENCE
          </p>

          <h2 className="experience-editorial-title">
            Experience<span style={{ color: '#e34234' }}>.</span>
          </h2>

          <p className="experience-editorial-intro">
            My experience combines software development,
            entrepreneurship, and practical problem-solving.
            I enjoy learning through real-world projects,
            collaboration, and building meaningful solutions.
          </p>

          <div className="experience-editorial-list">

            {experiences.map((experience, index) => (
              <article
                className="experience-editorial-item"
                key={experience.company}
              >
                <div>
                  <p className="experience-editorial-type">
                    0{index + 1} / {experience.type}
                  </p>

                  <h3 className="experience-editorial-role">
                    {experience.role}
                  </h3>

                  <p className="experience-editorial-company">
                    {experience.company}
                  </p>

                  <p className="experience-editorial-description">
                    {experience.description}
                  </p>

                  {experience.github && (
                    <a
                      href={experience.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-editorial-github"
                    >
                      View Internship Projects ↗
                    </a>
                  )}

                  <h4 className="experience-editorial-subtitle">
                    Key Responsibilities
                  </h4>

                  <ul className="experience-editorial-responsibilities">
                    {experience.responsibilities.map(
                      (responsibility) => (
                        <li key={responsibility}>
                          <span
                            className="experience-editorial-bullet"
                            aria-hidden="true"
                          />

                          <span>{responsibility}</span>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="experience-editorial-skills">
                    {experience.skills.map((skill) => (
                      <span
                        className="experience-editorial-skill"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="experience-editorial-meta">
                  <p className="experience-editorial-date">
                    {experience.date}
                  </p>

                  <p className="experience-editorial-location">
                    {experience.location}
                  </p>
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
