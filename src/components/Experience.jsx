import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-card">
          <div className="experience-header">
            <h3>Co-Founder</h3>
            <span className="experience-date">March 2023 - Present</span>
          </div>

          <p className="experience-company">Crescent Books</p>

          <p className="experience-text">
            Crescent Books is an online page that I run together with my
            sister. We sell premium, original hardcover and paperback books.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience