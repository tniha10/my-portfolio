
import { useState } from 'react'

function Contact() {
  const [hoveredLink, setHoveredLink] = useState('')

  const contactLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/tniha10',
      label: 'View my GitHub profile',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tahsina-niha',
      label: 'Connect with me on LinkedIn',
    },
  ]

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

        .contact-email {
          margin: 0;
          font-family: var(--mono);
          font-size: 0.9rem;
          color: var(--sage-deep);
          overflow-wrap: anywhere;
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

            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="button button-outline"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink('')}
              >
                {link.name}
                {hoveredLink === link.name && (
                  <span aria-hidden="true"> ↗</span>
                )}
              </a>
            ))}
          </div>

          <p className="contact-email">
            tahsinamamun10@gmail.com
          </p>
        </div>
      </section>
    </>
  )
}

export default Contact
