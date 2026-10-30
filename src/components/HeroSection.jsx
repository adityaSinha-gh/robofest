import { ArrowRight } from 'lucide-react'
import { REGISTER_URL } from '../config.js'

function RobotArm() {
  return (
    <svg className="arm" viewBox="0 0 520 520" role="img" aria-label="Technical drawing of a six-axis industrial robotic arm">
      <defs>
        <pattern id="g" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M26 0H0V26" fill="none" stroke="#2457A7" strokeOpacity=".25" strokeWidth=".7" /></pattern>
        <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F5F4EF" /><stop offset="1" stopColor="#9AA4AF" /></linearGradient>
        <linearGradient id="dark" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3a4450" /><stop offset="1" stopColor="#171C22" /></linearGradient>
      </defs>
      <rect width="520" height="520" fill="url(#g)" />
      <circle cx="260" cy="270" r="210" fill="none" stroke="#2457A7" strokeOpacity=".4" strokeDasharray="3 7" />
      <g className="gear-spin" style={{ transformOrigin: '420px 110px' }}>
        <circle cx="420" cy="110" r="42" fill="none" stroke="#E58A36" strokeWidth="6" strokeDasharray="9 7" />
        <circle cx="420" cy="110" r="28" fill="none" stroke="#E5E7EB" strokeOpacity=".5" strokeWidth="2" />
        <circle cx="420" cy="110" r="7" fill="#E58A36" />
      </g>
      {/* base */}
      <path d="M130 470h200l18 24H112z" fill="url(#dark)" stroke="#65717D" />
      <rect x="170" y="420" width="120" height="52" rx="6" fill="url(#steel)" stroke="#65717D" />
      <rect x="196" y="378" width="70" height="46" rx="4" fill="url(#dark)" stroke="#65717D" />
      {/* lower arm */}
      <g transform="rotate(-28 230 380)">
        <rect x="204" y="200" width="52" height="190" rx="12" fill="url(#steel)" stroke="#65717D" />
        <path d="M216 230v130M244 230v130" stroke="#65717D" strokeOpacity=".5" />
        {/* upper arm */}
        <g transform="rotate(62 230 205)">
          <rect x="208" y="70" width="44" height="145" rx="10" fill="url(#steel)" stroke="#65717D" />
          <circle cx="230" cy="205" r="26" fill="url(#dark)" stroke="#E58A36" strokeWidth="3" />
          <circle cx="230" cy="205" r="8" fill="#E58A36" />
          {/* wrist + gripper */}
          <rect x="218" y="48" width="24" height="30" fill="url(#dark)" stroke="#65717D" />
          <path d="M214 48l-10-30M246 48l10-30" stroke="#E5E7EB" strokeWidth="6" strokeLinecap="round" />
        </g>
        <circle cx="230" cy="380" r="30" fill="url(#dark)" stroke="#E58A36" strokeWidth="3" />
        <circle cx="230" cy="380" r="9" fill="#E58A36" />
      </g>
      {/* annotations */}
      <g className="ann" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#E5E7EB" stroke="#E5E7EB" strokeWidth="1">
        <path d="M60 420V250" strokeDasharray="4 4" /><path d="M54 250h12M54 420h12" />
        <text x="26" y="340" stroke="none" transform="rotate(-90 26 340)">REACH · ø TBD</text>
        <path d="M130 500h200" /><path d="M130 494v12M330 494v12" />
        <text x="190" y="516" stroke="none">BASE PLATE</text>
        <path d="M330 300l60-30h90" /><text x="396" y="262" stroke="none">J2 · SHOULDER</text>
        <path d="M290 150l70-60" /><text x="300" y="82" stroke="none" transform="translate(50 20)">J3 · ELBOW</text>
        <text x="20" y="40" stroke="none" fill="#E58A36">FIG. 01 — 6-AXIS MANIPULATOR</text>
        <text x="20" y="58" stroke="none" fill="#65717D">SCHEMATIC · NOT TO SCALE</text>
      </g>
      <path d="M380 440h60l12-14h40" fill="none" stroke="#2457A7" strokeWidth="2" /><circle cx="380" cy="440" r="3" fill="#E58A36" /><circle cx="492" cy="426" r="3" fill="#E58A36" />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <img className="hero__logo r1" src="/images/robotix-logo.png" alt="ROBOTiX Club" width="96" height="86" />
          <p className="eyebrow r2">ROBOTiX CLUB PRESENTS</p>
          <h1 className="hero__title r3">ROBOFEST</h1>
          <p className="hero__sub r4">ROBOTICS • TECHNOLOGY • INNOVATION</p>
          <p className="hero__tag r4">Build. Innovate. Compete.</p>
          <p className="hero__desc r5">A robotics festival by ROBOTiX Club, NIT Raipur, where student teams design, build, and test machines in hands-on technical competitions.</p>
          <div className="hero__btns r6">
            <a href="#events" className="btn btn--primary">Explore Events <ArrowRight size={18} /></a>
            <a href={REGISTER_URL} target="_blank" rel="noreferrer" className="btn btn--ghost">Register Now</a>
          </div>
        </div>
        <div className="hero__visual r5"><RobotArm /></div>
      </div>
    </section>
  )
}
