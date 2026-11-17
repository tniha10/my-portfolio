
import { useState } from 'react'

function Hero() {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <>
      <style>{`
        .hero-editorial {
          min-height: 88vh;
          padding: 115px 7% 90px;
          background: #123C32;
          color: #F2EBDD;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-editorial-grid {
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 70px;
        }

        .hero-editorial-content {
          max-width: 720px;
          position: relative;
          z-index: 2;
        }

        .hero-editorial-label {
          color: #E9A99C;
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 3px;
          margin-bottom: 28px;
        }

        .hero-editorial-title {
          color: #F2EBDD;
          font-family: var(--serif);
          font-size: clamp(60px, 8vw, 105px);
          font-weight: 500;
          line-height: 0.98;
          letter-spacing: -3px;
          margin: 0 0 25px;
        }

        .hero-editorial-title span {
          color: #E9A99C;
          font-style: italic;
        }

        .hero-editorial-role {
          font-size: 19px;
          font-weight: 500;
          color: #F2EBDD;
          margin-bottom: 20px;
        }

        .hero-editorial-description {
          max-width: 510px;
          font-size: 15px;
          line-height: 1.9;
          color: rgba(242, 235, 221, 0.75);
          margin-bottom: 32px;
        }

        .hero-editorial-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .hero-editorial-primary,
        .hero-editorial-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 15px 23px;
          min-height: 52px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .hero-editorial-primary {
          background: #E34234;
          color: #F2EBDD;
          border: 1px solid #E34234;
        }

        .hero-editorial-primary:hover {
          background: #F2EBDD;
          color: #123C32;
          border-color: #F2EBDD;
          transform: translateY(-3px);
        }

        .hero-editorial-secondary {
          color: #F2EBDD;
          border: 1px solid rgba(242, 235, 221, 0.45);
          background: transparent;
        }

        .hero-editorial-secondary:hover {
          background: rgba(242, 235, 221, 0.1);
          transform: translateY(-3px);
        }

        .hero-editorial-note {
          margin-top: 55px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(242, 235, 221, 0.65);
          font-size: 12px;
          letter-spacing: 1px;
        }

        .hero-editorial-dot {
          width: 8px;
          height: 8px;
          background: #E34234;
          border-radius: 50%;
        }

        .hero-editorial-image-area {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-editorial-image-frame {
          width: 100%;
          max-width: 390px;
          position: relative;
          padding: 12px;
          border: 1px solid rgba(242, 235, 221, 0.4);
          transform: rotate(2deg);
        }

        .hero-editorial-image {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: center;
        }

        .hero-editorial-image-placeholder {
          width: 100%;
          aspect-ratio: 4 / 5;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          background: #F2EBDD;
          color: #123C32;
        }

        .hero-editorial-image-caption {
          position: absolute;
          bottom: -28px;
          right: 0;
          color: #E9A99C;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 2px;
        }

        .hero-editorial-decoration {
          position: absolute;
          right: -120px;
          top: -130px;
          width: 350px;
          height: 350px;
          border: 1px solid rgba(242, 235, 221, 0.12);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-editorial-decoration::after {
          content: '';
          position: absolute;
          inset: 35px;
          border: 1px solid rgba(242, 235, 221, 0.12);
          border-radius: 50%;
        }

        @media (max-width: 900px) {
          .hero-editorial {
            padding: 110px 6% 80px;
          }

          .hero-editorial-grid {
            gap: 35px;
          }

          .hero-editorial-title {
            font-size: clamp(55px, 8vw, 75px);
          }
        }

        @media (max-width: 650px) {
          .hero-editorial {
            min-height: auto;
            padding: 100px 22px 75px;
          }

          .hero-editorial-grid {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .hero-editorial-image-area {
            grid-row: 1;
          }

          .hero-editorial-image-frame {
            max-width: 270px;
          }

          .hero-editorial-content {
            text-align: center;
            margin: 0 auto;
          }

          .hero-editorial-title {
            font-size: clamp(55px, 12vw, 75px);
            letter-spacing: -2px;
          }

          .hero-editorial-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-editorial-buttons {
            justify-content: center;
          }

          .hero-editorial-note {
            justify-content: center;
            margin-top: 35px;
          }
        }

        @media (max-width: 400px) {
          .hero-editorial-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-editorial-primary,
          .hero-editorial-secondary {
            width: 100%;
          }
        }
      `}</style>

      <section id="home" className="hero-editorial">

        <div className="hero-editorial-decoration"></div>

        <div className="hero-editorial-grid">

          {/* Introduction */}
          <div className="hero-editorial-content">

            <p className="hero-editorial-label">
              HELLO, AND WELCOME TO MY SPACE
            </p>

            <h1 className="hero-editorial-title">
              Tahsina Mamun
              <br />
              <span>Niha.</span>
            </h1>

            <h2 className="hero-editorial-role">
              Frontend Developer & CSE Student
            </h2>

            <p className="hero-editorial-description">
              I'm an undergraduate student passionate about
              building modern, responsive, and user-friendly
              web experiences. I enjoy learning new technologies
              and turning creative ideas into reality.
            </p>

            {/* Main actions */}
            <div className="hero-editorial-buttons">

              <a
                href="#projects"
                className="hero-editorial-primary"
              >
                Explore My Work <span>↗</span>
              </a>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                className="hero-editorial-secondary"
                download="Tahsina_Niha_Resume.pdf"
              >
                Download Resume <span>↓</span>
              </a>

            </div>

            <div className="hero-editorial-note">
              <span className="hero-editorial-dot"></span>
              OPEN TO LEARNING & NEW OPPORTUNITIES
            </div>

          </div>

          {/* Profile picture */}
          <div className="hero-editorial-image-area">

            <div className="hero-editorial-image-frame">

              {photoOk ? (
                <img
                  src={`${import.meta.env.BASE_URL}niha.jpg`}
                  alt="Tahsina Niha"
                  className="hero-editorial-image"
                  onError={() => setPhotoOk(false)}
                />
              ) : (
                <div className="hero-editorial-image-placeholder">
                  Profile photo unavailable.
                  Please check public/niha.jpg.
                </div>
              )}

              <span className="hero-editorial-image-caption">
                CREATIVE MIND · DEVELOPER
              </span>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default Hero
