import { NAV, SOCIALS } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="nav__brand"><img src="/images/robotix-logo.png" alt="ROBOTiX Club logo" width="56" height="50" loading="lazy" /><span>ROBOTiX Club</span></div>
          <p>The robotics club of NIT Raipur, organizing ROBOFEST.</p>
        </div>
        <nav aria-label="Footer"><h4>Quick Links</h4>{NAV.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}</nav>
        <div><h4>Connect</h4>{SOCIALS.map((s) => <a key={s.href} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}</div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} ROBOTiX Club, NIT Raipur. All rights reserved.</p>
    </footer>
  )
}
