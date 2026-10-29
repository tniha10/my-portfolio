
function Contact() {
  return (
    <>
      <style>{`
        .contact {
          padding: 100px 24px;
          background-color: var(--sage-light);
          border-top: 1px solid var(--sage-border);
        }

        .contact-container {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .contact .section-title {
          margin-bottom: 20px;
        }

        .contact-text {
          max-width: 560px;
          margin: 0 auto 32px;
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-muted);
        }

        .contact-links {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 28px;
        }

        .contact .button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-width: 125px;
          padding: 13px 22px;
          border: 1px solid var(--sage-deep);
          border-radius: 8px;
          font: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition:
            background-color 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .contact .button-filled {
          background-color: var(--sage-deep);
          color: white;
        }

        .contact .button-outline {
          background-color: transparent;
          color: var(--sage-deep);
        }

        .contact .button:hover {
          transform: translateY(-3px);
        }

        .contact .button-filled:hover {
          filter: brightness(0.92);
        }

        .contact .button-outline:hover {
          background-color: var(--sage-deep);
          color: white;
        }

        .contact .button:focus-visible {
          outline: 3px solid var(--sage-deep);
          outline-offset: 4px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
        }

        .contact-detail {
          margin: 0;
          color: var(--sage-deep);
          font-size: 0.95rem;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .contact-detail a {
          color: inherit;
          text-decoration: none;
        }

        .contact-detail a:hover {
          text-decoration: underline;
        }

        .contact-label {
          font-weight: 600;
          margin-right: 6px;
        }

        @media (max-width: 480px) {
          .contact {
            padding: 76px 20px;
          }

          .contact-links {
            gap: 10px;
          }

          .contact .button {
            min-width: 110px;
            padding: 12px 16px;
          }

          .contact-text {
            font-size: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact .button {
            transition: none;
          }

          .contact .button:hover {
            transform: none;
          }
        }
      `}</style>

      <section id="contact" className="contact">
        <div className="contact-container">
          <h2 className="section-title">Let's Connect</h2>

          <p className="contact-text">
            I'm looking for an internship and hoping to grow into a
            full-stack developer. Have an opportunity or want to talk
            about a project? I'd love to hear from you.
          </p>

          <div className="contact-links">
            <a
              href="mailto:tahsinamamun10@gmail.com"
              className="button button-filled"
            >
              Email Me
            </a>

            <a
              href="https://github.com/tniha10"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
              aria-label="View my GitHub profile"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/tahsina-niha"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
              aria-label="Connect with me on LinkedIn"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="contact-details">
            <p className="contact-detail">
              <span className="contact-label">Email:</span>
              <a href="mailto:tahsinamamun10@gmail.com">
                tahsinamamun10@gmail.com
              </a>
            </p>

            <p className="contact-detail">
              <span className="contact-label">Phone:</span>
              <a href="tel:+8801600315677">
                +8801600315677
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
