import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-circle">N</div>

        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Tahsina Mamun Niha</h1>
        <h2 className="hero-title">Aspiring Full-Stack Developer</h2>

        <p className="hero-text">
          Computer Science and Engineering student at North South University,
          graduating in December 2026.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button button-filled">
            View Projects
          </a>
          <a
            href="https://github.com/tniha10"
            target="_blank"
            rel="noreferrer"
            className="button button-outline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero