
function Contact() {
  return (
    <>
      <style>{`
        .contact-editorial {
          padding: 110px 24px;
          background: #123c32;
          color: #f2ebdd;
        }

        .contact-editorial-container {
          max-width: 1050px;
          margin: 0 auto;
        }

        .contact-editorial-label {
          display: inline-block;
          margin-bottom: 24px;
          color: #e34234;
          font-family: var(--mono, monospace);
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .contact-editorial-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: end;
          gap: 50px;
        }

        .contact-editorial-title {
          margin: 0 0 25px;
          color: #f2ebdd;
          font-family: var(--serif, Georgia, serif);
          font-size: clamp(3.2rem, 8vw, 6.5rem);
          font-weight: 500;
          letter-spacing: -0.06em;
          line-height: 1;
        }

        .contact-editorial-title span {
          color: #e34234;
          font-style: italic;
        }

        .contact-editorial-text {
          max-width: 530px;
          margin: 0;
          color: #d4d9ce;
          font-size: 1rem;
          line-height: 1.9;
        }

        .contact-editorial-right {
          padding-bottom: 5px;
        }

        .contact-editorial-email-label {
          display: block;
          margin-bottom: 12px;
          color: #b9c4b5;
          font-family: var(--mono, monospace);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .contact-editorial-email {
          display: inline-block;
          margin-bottom: 28px;
          color: #f2ebdd;
          font-family: var(--serif, Georgia, serif);
          font-size: clamp(1.1rem, 2.5vw, 1.55rem);
          text-decoration: none;
          overflow-wrap: anywhere;
          border-bottom: 1px solid rgba(242, 235, 221, 0.4);
          padding-bottom: 8px;
          transition: color 0.2s ease;
        }

        .contact-editorial-email:hover {
          color: #e34234;
        }

        .contact-editorial-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .contact-editorial-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 44px;
          padding: 11px 18px;
          border: 1px solid #f2ebdd;
          color: #f2ebdd;
          background: transparent;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .contact-editorial-button.primary {
          background: #e34234;
          border-color: #e34234;
          color: white;
        }

        .contact-editorial-button:hover {
          background: #f2ebdd;
          border-color: #f2ebdd;
          color: #123c32;
          transform: translateY(-3px);
        }

        .contact-editorial-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-top: 85px;
          padding-top: 22px;
          border-top: 1px solid rgba(242, 235, 221, 0.25);
          color: #b9c4b5;
          font-family: var(--mono, monospace);
          font-size: 0.72rem;
          letter-spacing: 0.06em;
        }

        .contact-editorial-bottom p {
          margin: 0;
        }

        .contact-editorial-bottom span {
          color: #e34234;
        }

        .contact-editorial-button:focus-visible,
        .contact-editorial-email:focus-visible {
          outline: 3px solid #e34234;
          outline-offset: 5px;
        }

        @media (max-width: 700px) {
          .contact-editorial {
            padding: 85px 20px;
          }

          .contact-editorial-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-editorial-bottom {
            flex-direction: column;
            align-items: flex-start;
            margin-top: 60px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-editorial-button,
          .contact-editorial-email {
            transition: none;
          }

          .contact-editorial-button:hover {
            transform: none;
          }
        }
      `}</style>

      <section id="contact" className="contact-editorial">
        <div className="contact-editorial-container">
          <span className="contact-editorial-label">
            05 / Get In Touch
          </span>

          <div className="contact-editorial-content">
            <div>
              <h2 className="contact-editorial-title">
                Let's make
                <br />
                something <span>great.</span>
              </h2>

              <p className="contact-editorial-text">
                I'm looking for an internship and hoping to grow
                into a full-stack developer. Have an opportunity
                or want to talk about a project? I'd love to
                hear from you.
              </p>
            </div>

            <div className="contact-editorial-right">
              <span className="contact-editorial-email-label">
                Send me an email
              </span>

              <a
                href="mailto:tahsinamamun10@gmail.com"
                className="contact-editorial-email"
              >
                tahsinamamun10@gmail.com ↗
              </a>

              <div className="contact-editorial-links">
                <a
                  href="https://github.com/tniha10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-editorial-button primary"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/tahsina-niha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-editorial-button"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <div className="contact-editorial-bottom">
            <p>THANK YOU FOR STOPPING BY.</p>
            <p>DESIGNED & DEVELOPED BY TAHSINA</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
