import { useEffect, useState } from 'react'
import './Navbar.css'

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

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="navbar">
      <div className="navbar-inner wrap">
        <a href="#home" className="navbar-logo" aria-label="Back to top">
          TN<span>.</span>
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav aria-label="Main">
          <ul id="nav-links" className={`navbar-links ${open ? 'is-open' : ''}`}>
            {links.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="navbar-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
    </header>
  )
}

export default Navbar