import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV } from '../config.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={() => setOpen(false)}>
          <img src="/images/robotix-logo.png" alt="ROBOTiX Club logo" width="44" height="40" />
          <span>ROBOTiX Club</span>
        </a>
        <button className="nav__toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className={n.id === 'register' ? 'nav__cta' : ''}>{n.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
