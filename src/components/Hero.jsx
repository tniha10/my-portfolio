import { useState } from 'react'
import './Hero.css'

function Hero() {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="hero-label">hello, I'm</p>
          <h1 className="hero-name">
            Tahsina <em>Mamun Niha</em>
          </h1>
          <p className="hero-role">
            Computer Science and Engineering student &amp; aspiring full-stack developer.
          </p>
          <p className="hero-intro">
            I'm an undergraduate at North South University who enjoys transforming ideas into interactive digital tools. This site holds the things I have built and what I am currently learning.
          </p>

          <div className="hero-actions">
            <a className="button button-filled" href="#projects">
              Explore my projects <span aria-hidden="true" style={{ marginLeft: '6px' }}>→</span>
            </a>
            <a className="button button-outline" href="#contact">Say hello</a>
          </div>
        </div>

        <figure className="hero-photo">
          <div className="photo-frame">
            {photoOk ? (
              <img
                src="/niha.jpg"
                alt="Portrait of Tahsina Mamun Niha"
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <div className="photo-placeholder">
                <span>
                  Photo fallback tracking
                  <br />
                  <code>public/niha.jpg</code>
                </span>
              </div>
            )}
          </div>
          <span className="float-label float-label--one">CSE Undergrad</span>
          <span className="float-label float-label--two">Full-Stack Dev</span>
          <figcaption className="photo-caption">that's me ✦</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero