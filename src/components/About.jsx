
function About() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-left">
            <span className="about-label">A LITTLE ABOUT ME</span>

            <blockquote className="about-quote">
              I love turning curious ideas into thoughtful digital
              experiences, one line of code at a time.
            </blockquote>

            <div className="about-note">
              <span className="about-note-icon">✳</span>
              <p>
                Always learning, always building, and always
                finding another book to read.
              </p>
            </div>
          </div>

          <div className="about-body">
            <p>
              Hi, I'm <strong>Tahsina Mamun Niha</strong>, a
              Computer Science and Engineering graduate from
              North South University and an aspiring full-stack
              developer with an interest in Artificial
              Intelligence.
            </p>

            <p>
              My programming journey has been a process of
              exploring how technology can turn ideas into
              something useful. Through academic work,
              independent projects, and hands-on learning,
              I've worked with Python, JavaScript, React,
              Next.js, and databases such as MongoDB and MySQL.
              I'm continuing to strengthen my backend
              development skills while learning how to build
              complete applications from the ground up.
            </p>

            <p>
              I enjoy creating clean, intuitive interfaces and
              building applications that solve real problems.
              Whether I'm developing a web application,
              designing a database, or exploring machine
              learning, I like understanding how everything
              works together. My experience building projects
              and researching hyperspectral image
              classification has also taught me to approach
              challenges with patience, curiosity, and
              attention to detail.
            </p>

            <p>
              Outside programming, I'm an avid reader with a
              soft spot for contemporary fiction. My love for
              books even inspired me to co-found Crescent Books,
              where I've explored the creative and business
              sides of independent book selling. I enjoy
              discovering stories just as much as I enjoy
              discovering new ideas in technology.
            </p>

            <p>
              I'm someone who believes that there's always
              something new to learn. I'm excited to keep
              growing as a developer, collaborate with others,
              and build meaningful things along the way.
            </p>

            <div className="about-interests">
              <h3>A few things I love</h3>

              <ul>
                <li>Full-Stack Development</li>
                <li>Artificial Intelligence</li>
                <li>Research & Problem-Solving</li>
                <li>Books & Contemporary Fiction</li>
                <li>Building Useful Products</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-section {
          padding: 100px 24px;
          max-width: 1150px;
          margin: 0 auto;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 72px;
          align-items: start;
        }

        .about-left {
          position: sticky;
          top: 100px;
        }

        .about-label {
          display: inline-block;
          margin-bottom: 24px;
          color: var(--sage-accent);
          font-family: var(--sans);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .about-quote {
          margin: 0;
          padding: 8px 0 8px 24px;
          border-left: 3px solid var(--sage-accent);
          color: var(--sage-deep);
          font-family: var(--serif);
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-style: italic;
          line-height: 1.45;
        }

        .about-note {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 32px;
          padding: 18px;
          border: 1px solid var(--sage-accent);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.25);
        }

        .about-note-icon {
          color: var(--sage-accent);
          font-size: 1.3rem;
        }

        .about-note p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.7;
        }

        .about-body p {
          margin: 0 0 20px;
          max-width: 42em;
          color: var(--text-muted);
          font-size: 1.02rem;
          line-height: 1.9;
        }

        .about-body strong {
          color: var(--sage-deep);
          font-weight: 600;
        }

        .about-interests {
          margin-top: 36px;
        }

        .about-interests h3 {
          margin: 0 0 18px;
          color: var(--sage-deep);
          font-family: var(--sans);
          font-size: 1.15rem;
          font-weight: 600;
        }

        .about-interests ul {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .about-interests li {
          padding: 9px 14px;
          border: 1px solid var(--sage-accent);
          border-radius: 30px;
          color: var(--sage-deep);
          font-size: 0.83rem;
          line-height: 1.4;
          transition: background 0.2s ease,
            transform 0.2s ease;
        }

        .about-interests li:hover {
          background: rgba(255, 255, 255, 0.45);
          transform: translateY(-2px);
        }

        @media (max-width: 800px) {
          .about-section {
            padding: 72px 24px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .about-left {
            position: static;
          }

          .about-quote {
            max-width: 600px;
          }

          .about-note {
            max-width: 420px;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 56px 20px;
          }

          .about-quote {
            padding-left: 18px;
            font-size: 1.65rem;
          }

          .about-body p {
            font-size: 0.96rem;
            line-height: 1.8;
          }

          .about-interests li {
            font-size: 0.78rem;
          }
        }
      `}</style>
    </>
  )
}

export default About
