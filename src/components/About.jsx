import './About.css'

function About() {
  return (
    <section id="about" className="about-grid" style={{ padding: '100px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="about-left">
        <blockquote className="about-quote">
          Building thoughtful digital experiences with clean code and a focused mind.
        </blockquote>
      </div>
      
      <div className="about-body">
        <p>
          Hi, I'm Tahsina Mamun Niha! I am an undergraduate Computer Science and Engineering student at North South University, specializing in Artificial Intelligence.
        </p>
        <p>
          I focus on building intuitive frontend interfaces and am currently diving deep into Backend APIs and Databases with MongoDB to round out my full-stack capabilities.
        </p>
        <div className="about-interests">
          <h3>Interests & Musings</h3>
          <ul>
            <li className="button button-outline" style={{ pointerEvents: 'none', fontSize: '0.85rem' }}>Hyperspectral Imaging</li>
            <li className="button button-outline" style={{ pointerEvents: 'none', fontSize: '0.85rem' }}>Automated CRM Systems</li>
            <li className="button button-outline" style={{ pointerEvents: 'none', fontSize: '0.85rem' }}>Avid Book Reading</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About