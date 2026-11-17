
function Education() {
  const coursework = [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Machine Learning',
    'Artificial Intelligence',
    'Software Engineering',
  ]

  return (
    <>
      <style>{`
        .education-editorial {
          background: #f2ebdd;
          color: #123c32;
          padding: 110px 7%;
          scroll-margin-top: 80px;
        }

        .education-editorial-container {
          max-width: 1150px;
          margin: 0 auto;
        }

        .education-editorial-label {
          color: #e34234;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        .education-editorial-title {
          font-family: Georgia, serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 400;
          letter-spacing: -3px;
          line-height: 1.05;
          margin-bottom: 22px;
        }

        .education-editorial-intro {
          max-width: 600px;
          color: #64736a;
          font-size: 1rem;
          line-height: 1.9;
          margin-bottom: 65px;
        }

        .education-editorial-main {
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 50px;
          padding: 42px 0;
          border-top: 1px solid #c9c1b1;
          border-bottom: 1px solid #c9c1b1;
        }

        .education-editorial-degree {
          font-family: Georgia, serif;
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-weight: 400;
          line-height: 1.3;
          margin-bottom: 16px;
        }

        .education-editorial-school {
          color: #123c32;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 7px;
        }

        .education-editorial-location {
          color: #788178;
          font-size: 0.9rem;
        }

        .education-editorial-date {
          color: #e34234;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-align: right;
        }

        .education-editorial-subtitle {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .education-editorial-coursework {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .education-editorial-course {
          border: 1px solid #c9c1b1;
          padding: 10px 15px;
          color: #40574b;
          font-size: 0.88rem;
        }

        .education-editorial-training {
          margin-top: 75px;
          padding: 35px;
          background: #e8e0d0;
          border-left: 4px solid #e34234;
        }

        .education-editorial-training-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 22px;
        }

        .education-editorial-training-name {
          font-family: Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 400;
          line-height: 1.3;
          margin-bottom: 12px;
        }

        .education-editorial-training-provider {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .education-editorial-training-mode {
          color: #788178;
          font-size: 0.9rem;
        }

        .education-editorial-training-date {
          color: #e34234;
          font-size: 0.85rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .education-editorial-training-description {
          color: #64736a;
          font-size: 0.94rem;
          line-height: 1.9;
          margin-bottom: 15px;
        }

        .education-editorial-training-list {
          padding-left: 20px;
          color: #40574b;
        }

        .education-editorial-training-list li {
          padding: 5px 0;
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .education-editorial-highlights {
          margin-top: 75px;
        }

        .education-editorial-highlights-title {
          font-family: Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
          margin-bottom: 35px;
        }

        .education-editorial-highlight-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 35px;
        }

        .education-editorial-highlight {
          background: #123c32;
          color: #f2ebdd;
          padding: 32px;
          min-height: 250px;
        }

        .education-editorial-highlight-number {
          color: #e34234;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .education-editorial-highlight h4 {
          font-family: Georgia, serif;
          font-size: 1.65rem;
          font-weight: 400;
          margin-bottom: 15px;
        }

        .education-editorial-highlight p {
          color: #d0d8cf;
          font-size: 0.91rem;
          line-height: 1.9;
        }

        @media (max-width: 700px) {
          .education-editorial {
            padding: 80px 6%;
          }

          .education-editorial-main {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .education-editorial-date {
            text-align: left;
          }

          .education-editorial-highlight-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .education-editorial-highlight {
            padding: 26px;
          }

          .education-editorial-intro {
            margin-bottom: 45px;
          }

          .education-editorial-training {
            padding: 25px 20px;
          }

          .education-editorial-training-date {
            white-space: normal;
          }
        }
      `}</style>

      <section
        id="education"
        className="education-editorial"
      >
        <div className="education-editorial-container">

          <p className="education-editorial-label">
            06 / ACADEMIC BACKGROUND
          </p>

          <h2 className="education-editorial-title">
            Education<span style={{ color: '#e34234' }}>.</span>
          </h2>

          <p className="education-editorial-intro">
            My academic journey has helped me build a strong
            foundation in software development, artificial
            intelligence, and problem-solving.
          </p>

          {/* University Education */}
          <div className="education-editorial-main">
            <div>
              <h3 className="education-editorial-degree">
                BSc in Computer Science and Engineering
              </h3>

              <p className="education-editorial-school">
                North South University
              </p>

              <p className="education-editorial-location">
                Dhaka, Bangladesh
              </p>
            </div>

            <p className="education-editorial-date">
              OCT 2021 — DEC 2026 (EXPECTED)
            </p>
          </div>

          {/* Relevant Coursework */}
          <div style={{ marginTop: '55px' }}>
            <h3 className="education-editorial-subtitle">
              Relevant Coursework
            </h3>

            <div className="education-editorial-coursework">
              {coursework.map((course) => (
                <span
                  className="education-editorial-course"
                  key={course}
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Training */}
          <div className="education-editorial-training">

            <p className="education-editorial-subtitle">
              Professional Training / Online Course
            </p>

            <div className="education-editorial-training-top">
              <div>
                <h3 className="education-editorial-training-name">
                  AI-Driven Full-Stack Web Engineering
                </h3>

                <p className="education-editorial-training-provider">
                  Programming Hero
                </p>

                <p className="education-editorial-training-mode">
                  Online Training · Remote
                </p>
              </div>

              <p className="education-editorial-training-date">
                JUL 2026 — PRESENT
              </p>
            </div>

            <p className="education-editorial-training-description">
              Currently undergoing intensive training in modern
              full-stack web development, with a focus on building
              practical applications and developing industry-ready
              engineering skills.
            </p>

            <ul className="education-editorial-training-list">
              <li>
                Learning modern frontend architectures, backend
                services, and scalable database systems.
              </li>

              <li>
                Exploring AI-assisted development workflows,
                authentication frameworks, and API design.
              </li>

              <li>
                Developing practical projects with clean code,
                modular component architecture, and modern
                deployment practices.
              </li>
            </ul>

          </div>

          {/* Academic Highlights */}
          <div className="education-editorial-highlights">

            <h3 className="education-editorial-highlights-title">
              Beyond the classroom
            </h3>

            <div className="education-editorial-highlight-grid">

              <article className="education-editorial-highlight">
                <p className="education-editorial-highlight-number">
                  01 / CAPSTONE PROJECT
                </p>

                <h4>Bangla Voice Automated CRM</h4>

                <p>
                  Built a Flutter mobile application integrating
                  BanglaASR to transcribe Bangla speech, extract
                  CRM fields such as name, phone, address,
                  location, and product interest, and store lead
                  records in a local database.
                </p>
              </article>

              <article className="education-editorial-highlight">
                <p className="education-editorial-highlight-number">
                  02 / UNDERGRADUATE RESEARCH
                </p>

                <h4>LTLC-HSI Optimization Framework</h4>

                <p>
                  Conducted research on long-tail correction
                  for hyperspectral image classification,
                  focusing on leakage-controlled evaluation,
                  spatially disjoint validation, the HybridSN
                  architecture, and class-prior-based logit
                  adjustment.
                </p>
              </article>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Education
