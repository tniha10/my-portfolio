
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
        .education {
          padding: 100px 24px;
          max-width: 1000px;
          margin: 0 auto;
          scroll-margin-top: 80px;
        }

        .education-container {
          width: 100%;
        }

        .education .section-title {
          margin-bottom: 12px;
        }

        .education-intro {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 32px;
          max-width: 600px;
        }

        .education-card {
          position: relative;
          background: var(--sage-light);
          border: 1px solid var(--sage-border);
          border-left: 4px solid var(--sage-accent);
          border-radius: 12px;
          padding: 32px;
          transition: transform 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .education-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(61, 74, 59, 0.08);
        }

        .education-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 10px;
        }

        .education-degree {
          font-size: clamp(1.2rem, 3vw, 1.55rem);
          line-height: 1.4;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .education-school {
          color: var(--sage-accent);
          font-size: 1.08rem;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .education-location {
          color: var(--text-muted);
          font-size: 0.92rem;
        }

        .education-date {
          display: inline-block;
          padding: 8px 12px;
          border: 1px solid var(--sage-border);
          border-radius: 20px;
          color: var(--sage-accent);
          background: rgba(255, 255, 255, 0.45);
          font-size: 0.82rem;
          white-space: nowrap;
        }

        .education-divider {
          border: 0;
          border-top: 1px solid var(--sage-border);
          margin: 24px 0;
        }

        .education-subtitle {
          font-size: 1.02rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 14px;
        }

        .education-coursework {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .education-course {
          padding: 8px 12px;
          border: 1px solid var(--sage-border);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.45);
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.5;
        }

        .education-highlight {
          padding: 18px 20px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid var(--sage-border);
          margin-top: 14px;
        }

        .education-highlight h4 {
          font-size: 0.98rem;
          font-weight: 600;
          color: var(--sage-accent);
          margin-bottom: 8px;
        }

        .education-highlight p {
          font-size: 0.94rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        @media (max-width: 600px) {
          .education {
            padding: 72px 18px;
          }

          .education-card {
            padding: 22px 18px;
          }

          .education-top {
            flex-direction: column;
            gap: 12px;
          }

          .education-date {
            white-space: normal;
          }

          .education-coursework {
            gap: 8px;
          }

          .education-course {
            font-size: 0.83rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .education-card {
            transition: none;
          }

          .education-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section id="education" className="education">
        <div className="education-container">
          <h2 className="section-title">Education</h2>

          <p className="education-intro">
            My academic journey has helped me build a strong
            foundation in software development, artificial
            intelligence, and problem-solving.
          </p>

          <article className="education-card">
            <div className="education-top">
              <div>
                <h3 className="education-degree">
                  BSc in Computer Science and Engineering
                </h3>

                <p className="education-school">
                  North South University
                </p>

                <p className="education-location">
                  Dhaka, Bangladesh
                </p>
              </div>

              <span className="education-date">
                Oct 2021 – Dec 2026
              </span>
            </div>

            <hr className="education-divider" />

            <div>
              <h4 className="education-subtitle">
                Relevant Coursework
              </h4>

              <div className="education-coursework">
                {coursework.map((course) => (
                  <span
                    className="education-course"
                    key={course}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <hr className="education-divider" />

            <div>
              <h4 className="education-subtitle">
                Academic Highlights
              </h4>

              <div className="education-highlight">
                <h4>Capstone Project</h4>

                <p>
                  Built a Flutter mobile application integrating
                  BanglaASR to transcribe Bangla speech, extract
                  CRM fields such as name, phone, address,
                  location, and product interest, and store lead
                  records in a local database.
                </p>
              </div>

              <div className="education-highlight">
                <h4>Undergraduate Research</h4>

                <p>
                  Conducted research on long-tail correction
                  for hyperspectral image classification,
                  focusing on leakage-controlled evaluation,
                  spatially disjoint validation, the HybridSN
                  architecture, and class-prior-based logit
                  adjustment.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Education
