import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">
          Niha
        </a>

        <button className="menu-button" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>Experience</a>
          </li>
          <li>
            <a href="#education" onClick={closeMenu}>Education</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar