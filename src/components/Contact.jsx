import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>

        <p className="contact-text">
          I'm looking for an internship and hoping to grow into a full-stack
          developer role. If you'd like to talk, feel free to reach out.
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
            rel="noreferrer"
            className="button button-outline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tahsina-niha"
            target="_blank"
            rel="noreferrer"
            className="button button-outline"
          >
            LinkedIn
          </a>
        </div>

        <p className="contact-email">tahsinamamun10@gmail.com</p>
      </div>
    </section>
  )
}

export default Contact