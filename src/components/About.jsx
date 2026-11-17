
function About() {
  return (
    <>
      <section id="about" className="about-editorial">

        <div className="about-editorial-grid">

          {/* Left side: Personal statement */}
          <div className="about-editorial-left">

            <span className="about-editorial-label">
              01 / GET TO KNOW ME
            </span>

            <h2 className="about-editorial-heading">
              More than
              <br />
              just <span>code.</span>
            </h2>

            <div className="about-editorial-line"></div>

            <blockquote className="about-editorial-quote">
              "I love turning curious ideas into thoughtful
              digital experiences, one line of code at a time."
            </blockquote>

            <div className="about-editorial-note">
              <span>*</span>
              <p>
                Always learning, always building, and always
                finding another book to read.
              </p>
            </div>

            <div className="about-editorial-number">
              01 — 07
            </div>

          </div>

          {/* Right side: Personal story */}
          <div className="about-editorial-right">

            <div className="about-editorial-intro">
              <span className="about-editorial-small-label">
                A LITTLE ABOUT MYSELF
              </span>

              <h3>
                Hello, I'm <span>Tahsina Mamun Niha.</span>
              </h3>
            </div>

            <div className="about-editorial-body">

              <p>
                I'm a Computer Science and Engineering graduate
                from North South University and an aspiring
                full-stack developer with an interest in
                Artificial Intelligence.
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

            </div>

            {/* Interests */}
            <div className="about-editorial-interests">

              <div className="about-editorial-interests-heading">
                <span className="about-editorial-small-label">
                  BEYOND THE SCREEN
                </span>

                <h3>A few things I love.</h3>
              </div>

              <div className="about-editorial-interest-list">

                <span>Full-Stack Development</span>
                <span>Artificial Intelligence</span>
                <span>Research & Problem-Solving</span>
                <span>Books & Contemporary Fiction</span>
                <span>Building Useful Products</span>

              </div>

            </div>

          </div>

        </div>

      </section>

      <style>{`

        /* Main section */
        .about-editorial {
          padding: 110px 7%;
          background: #F2EBDD;
        }

        .about-editorial-grid {
          max-width: 1250px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 75px;
          align-items: stretch;
        }

        /* Left green panel */
        .about-editorial-left {
          background: #123C32;
          color: #F2EBDD;
          padding: 55px 42px;
          min-height: 650px;
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 100px;
          align-self: start;
        }

        .about-editorial-label {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 2px;
          color: #E9A99C;
          margin-bottom: 65px;
        }

        .about-editorial-heading {
          font-family: var(--serif);
          font-size: clamp(55px, 6vw, 82px);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -2px;
          margin: 0;
          color: #F2EBDD;
        }

        .about-editorial-heading span {
          color: #E9A99C;
          font-style: italic;
        }

        .about-editorial-line {
          width: 65px;
          height: 2px;
          background: #E34234;
          margin: 35px 0;
        }

        .about-editorial-quote {
          margin: 0;
          font-family: var(--serif);
          font-size: 24px;
          font-style: italic;
          line-height: 1.55;
          color: rgba(242, 235, 221, 0.9);
        }

        .about-editorial-note {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          margin-top: auto;
          padding-top: 70px;
        }

        .about-editorial-note span {
          color: #E34234;
          font-size: 23px;
        }

        .about-editorial-note p {
          margin: 0;
          font-size: 13px;
          line-height: 1.8;
          color: rgba(242, 235, 221, 0.7);
        }

        .about-editorial-number {
          margin-top: 45px;
          padding-top: 20px;
          border-top: 1px solid rgba(242, 235, 221, 0.2);
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 2px;
          color: #E9A99C;
        }

        /* Right side */
        .about-editorial-right {
          padding: 15px 0;
        }

        .about-editorial-small-label {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 2px;
          color: #A64B3F;
        }

        .about-editorial-intro h3 {
          margin: 20px 0 35px;
          color: #123C32;
          font-family: var(--serif);
          font-size: clamp(34px, 4vw, 48px);
          font-weight: 500;
          line-height: 1.2;
        }

        .about-editorial-intro h3 span {
          font-style: italic;
        }

        /* Personal story paragraphs */
        .about-editorial-body p {
          margin: 0 0 22px;
          color: #625F55;
          font-size: 15px;
          line-height: 1.95;
        }

        .about-editorial-body p:first-child {
          color: #123C32;
          font-size: 18px;
          line-height: 1.8;
          font-weight: 500;
        }

        /* Interests */
        .about-editorial-interests {
          margin-top: 55px;
          padding-top: 30px;
          border-top: 1px solid #D9D0BD;
        }

        .about-editorial-interests-heading h3 {
          margin: 12px 0 24px;
          font-family: var(--serif);
          font-size: 30px;
          font-weight: 500;
          color: #123C32;
        }

        .about-editorial-interest-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .about-editorial-interest-list span {
          padding: 11px 15px;
          border: 1px solid #C8BFAE;
          color: #123C32;
          font-size: 12px;
          transition: all 0.25s ease;
        }

        .about-editorial-interest-list span:hover {
          background: #123C32;
          border-color: #123C32;
          color: #F2EBDD;
          transform: translateY(-3px);
        }

        /* Tablet */
        @media (max-width: 900px) {

          .about-editorial {
            padding: 80px 5%;
          }

          .about-editorial-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .about-editorial-left {
            position: relative;
            top: auto;
            min-height: 480px;
            padding: 45px;
          }

          .about-editorial-label {
            margin-bottom: 45px;
          }

          .about-editorial-note {
            padding-top: 50px;
          }

        }

        /* Mobile */
        @media (max-width: 600px) {

          .about-editorial {
            padding: 65px 20px;
          }

          .about-editorial-left {
            min-height: auto;
            padding: 35px 28px;
          }

          .about-editorial-label {
            margin-bottom: 40px;
          }

          .about-editorial-heading {
            font-size: 58px;
          }

          .about-editorial-quote {
            font-size: 21px;
          }

          .about-editorial-note {
            padding-top: 45px;
          }

          .about-editorial-number {
            margin-top: 35px;
          }

          .about-editorial-intro h3 {
            font-size: 36px;
          }

          .about-editorial-body p {
            font-size: 14px;
            line-height: 1.85;
          }

          .about-editorial-body p:first-child {
            font-size: 16px;
          }

          .about-editorial-interests {
            margin-top: 40px;
          }

          .about-editorial-interest-list {
            gap: 8px;
          }

          .about-editorial-interest-list span {
            font-size: 11px;
            padding: 10px 12px;
          }

        }

      `}</style>

    </>
  )
}

export default About
