
import { useState } from 'react'

function Hero() {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <>
      <style>{`
        .hero {
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding: 80px 8%;
          background: #f7f8f4;
          color: #3e4b3c;
          box-sizing: border-box;
        }

        .hero-grid {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          align-items: center;
          gap: 60px;
        }

        .hero-content {
          max-width: 650px;
        }

        .hero-greeting {
          color: #668675;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 4px;
          margin: 0 0 20px;
        }

        .hero-content h1 {
          font-size: clamp(44px, 6vw, 78px);
          line-height: 1.08;
          margin: 0 0 24px;
          font-weight: 800;
          color: #3e4b3c;
        }

        .hero-content h2 {
          font-size: clamp(25px, 3vw, 36px);
          line-height: 1.3;
          font-weight: 500;
          color: #668675;
          margin: 0 0 32px;
        }

        .hero-description {
          max-width: 560px;
          font-size: 16px;
          line-height: 2;
          color: #647169;
          margin: 0 0 34px;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
        }

        .hero-primary-btn,
        .hero-resume-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 52px;
          padding: 14px 23px;
          box-sizing: border-box;
          border-radius: 9px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .hero-primary-btn {
          background: #668675;
          color: #ffffff;
          border: 1px solid #668675;
        }

        .hero-primary-btn:hover {
          background: #506e5b;
          border-color: #506e5b;
          transform: translateY(-2px);
        }

        .hero-resume-btn {
          background: transparent;
          color: #3e5c49;
          border: 1px solid #668675;
        }

        .hero-resume-btn:hover {
          background: #e7eee7;
          transform: translateY(-2px);
        }

        .hero-primary-btn:focus-visible,
        .hero-resume-btn:focus-visible {
          outline: 3px solid #9bb9a3;
          outline-offset: 4px;
        }

        .hero-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 0;
        }

        .hero-image {
          display: block;
          width: 100%;
          max-width: 365px;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: center;
          border: 5px solid #ffffff;
          border-radius: 190px 190px 26px 26px;
          box-shadow: 0 18px 45px rgba(38, 51, 45, 0.10);
        }

        .hero-image-placeholder {
          width: 100%;
          max-width: 365px;
          aspect-ratio: 4 / 5;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
          text-align: center;
          color: #647169;
          background: #e7eee7;
          border: 5px solid #ffffff;
          border-radius: 190px 190px 26px 26px;
          box-shadow: 0 18px 45px rgba(38, 51, 45, 0.10);
        }

        @media (max-width: 900px) {
          .hero {
            padding: 65px 6%;
          }

          .hero-grid {
            grid-template-columns: 1fr 0.8fr;
            gap: 35px;
          }

          .hero-content h1 {
            font-size: clamp(40px, 6vw, 60px);
          }

          .hero-image {
            max-width: 300px;
          }

          .hero-image-placeholder {
            max-width: 300px;
          }
        }

        @media (max-width: 650px) {
          .hero {
            min-height: auto;
            padding: 55px 6% 70px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .hero-image-wrapper {
            grid-row: 1;
          }

          .hero-image {
            max-width: 245px;
          }

          .hero-image-placeholder {
            max-width: 245px;
          }

          .hero-content {
            text-align: center;
            margin: 0 auto;
          }

          .hero-content h1 {
            font-size: clamp(42px, 10vw, 58px);
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
            font-size: 15px;
          }

          .hero-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 400px) {
          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-primary-btn,
          .hero-resume-btn {
            width: 100%;
          }
        }
      `}</style>

      <section id="home" className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-greeting">HELLO, I'M</p>

            <h1>Tahsina Niha</h1>

            <h2>Frontend Developer</h2>

            <p className="hero-description">
              I'm an undergraduate student passionate about
              building modern, responsive, and user-friendly
              web experiences. I enjoy learning new technologies
              and turning creative ideas into reality.
            </p>

            <div className="hero-buttons">
              <a
                href="#projects"
                className="hero-primary-btn"
              >
                Explore My Work
              </a>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                className="hero-resume-btn"
                download="Tahsina_Niha_Resume.pdf"
              >
                Download Resume
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            {photoOk ? (
              <img
                src={`${import.meta.env.BASE_URL}niha.jpg`}
                alt="Tahsina Niha"
                className="hero-image"
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <div className="hero-image-placeholder">
                Profile photo unavailable.
                Please check public/niha.jpg.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
