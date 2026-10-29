
import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  // Update the reading progress indicator as the visitor scrolls.
  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const percentage =
        scrollableHeight > 0
          ? (window.scrollY / scrollableHeight) * 100
          : 0

      setProgress(percentage)
    }

    updateProgress()

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  // Close the mobile menu when the visitor switches to desktop width.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close the menu after selecting a section.
  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background-color: rgba(250, 249, 245, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--sage-border);
        }

        .navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 70px;
        }

        .navbar-logo {
          font-family: var(--serif);
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--sage-deep);
          flex-shrink: 0;
        }

        .navbar-logo span {
          color: var(--sage-accent);
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 28px;
          list-style: none;
        }

        .navbar-links a {
          position: relative;
          display: inline-block;
          padding: 8px 0;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .navbar-links a:hover {
          color: var(--sage-deep);
        }

        .navbar-links a::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--sage-accent);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.25s ease;
        }

        .navbar-links a:hover::after,
        .navbar-links a:focus-visible::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .navbar a:focus-visible,
        .navbar-toggle:focus-visible {
          outline: 2px solid var(--sage-deep);
          outline-offset: 4px;
          border-radius: 4px;
        }

        .navbar-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid var(--sage-border);
          border-radius: 99px;
          padding: 8px 14px;
          color: var(--sage-deep);
          font-family: var(--mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          cursor: pointer;
        }

        .navbar-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background-color: var(--sage-accent);
          transition: width 0.1s linear;
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .navbar-links {
            gap: 18px;
          }

          .navbar-links a {
            font-size: 0.82rem;
          }
        }

        @media (max-width: 768px) {
          .navbar-toggle {
            display: inline-flex;
          }

          .navbar-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: calc(100dvh - 70px);
            overflow-y: auto;
            padding: 32px 24px;
            background-color: var(--bg-cream);
            border-bottom: 1px solid var(--sage-border);
            flex-direction: column;
            justify-content: center;
            gap: 24px;
            visibility: hidden;
            opacity: 0;
            transform: translateY(-10px);
            pointer-events: none;
            transition:
              opacity 0.25s ease,
              transform 0.25s ease,
              visibility 0.25s ease;
          }

          .navbar-links.is-open {
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }

          .navbar-links a {
            font-size: 1.1rem;
            padding: 8px 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar-links,
          .navbar-links a::after,
          .navbar-progress {
            transition: none;
          }
        }
      `}</style>

      <header className="navbar">
        <div className="navbar-inner wrap">
          <a
            href="#home"
            className="navbar-logo"
            aria-label="TN. - Back to top"
            onClick={handleLinkClick}
          >
            TN<span>.</span>
          </a>

          <button
            type="button"
            className="navbar-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((previous) => !previous)}
          >
            {open ? 'Close' : 'Menu'}
          </button>

          <nav aria-label="Main navigation">
            <ul
              id="nav-links"
              className={`navbar-links ${open ? 'is-open' : ''}`}
            >
              {links.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={handleLinkClick}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Shows the visitor's reading progress through the page. */}
        <div
          className="navbar-progress"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-label="Page reading progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        />
      </header>
    </>
  )
}

export default Navbar
