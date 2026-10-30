import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

function WelcomeBot() {
  return (
    <svg className="wbot" viewBox="0 0 240 290" role="img" aria-label="Friendly robot waving hello">
      <ellipse cx="120" cy="280" rx="70" ry="7" fill="#000" opacity=".35" />
      <path d="M120 40V18" stroke="#E5E7EB" strokeWidth="4" /><circle className="wbot__ant" cx="120" cy="14" r="8" fill="#E58A36" />
      <rect x="60" y="40" width="120" height="86" rx="16" fill="#E5E7EB" stroke="#65717D" strokeWidth="3" />
      <rect x="74" y="58" width="92" height="50" rx="10" fill="#080E1D" />
      <g className="wbot__eyes" style={{ transformOrigin: '120px 83px' }}><circle cx="98" cy="83" r="9" fill="#2457A7" /><circle cx="142" cy="83" r="9" fill="#2457A7" /><circle cx="101" cy="80" r="3" fill="#F5F4EF" /><circle cx="145" cy="80" r="3" fill="#F5F4EF" /></g>
      <rect x="50" y="68" width="10" height="28" rx="4" fill="#65717D" /><rect x="180" y="68" width="10" height="28" rx="4" fill="#65717D" />
      <rect x="104" y="126" width="32" height="14" fill="#65717D" />
      <rect x="64" y="140" width="112" height="90" rx="14" fill="#F5F4EF" stroke="#65717D" strokeWidth="3" />
      <circle cx="120" cy="185" r="24" fill="none" stroke="#2457A7" strokeWidth="5" strokeDasharray="8 5" />
      <circle cx="120" cy="185" r="7" fill="#E58A36" />
      <g stroke="#65717D" strokeWidth="2"><path d="M76 156h20M144 156h20M76 214h20M144 214h20" /></g>
      {/* left arm */}
      <path d="M64 160c-22 6-28 30-26 52" fill="none" stroke="#E5E7EB" strokeWidth="14" strokeLinecap="round" />
      {/* waving right arm */}
      <g className="wbot__arm" style={{ transformOrigin: '176px 158px' }}>
        <path d="M176 158c26-4 38-26 34-54" fill="none" stroke="#E5E7EB" strokeWidth="14" strokeLinecap="round" />
        <circle cx="210" cy="98" r="12" fill="#E58A36" />
      </g>
      <rect x="80" y="230" width="80" height="18" rx="6" fill="#20262D" />
      <circle cx="92" cy="260" r="16" fill="#171C22" stroke="#65717D" strokeWidth="3" /><circle cx="148" cy="260" r="16" fill="#171C22" stroke="#65717D" strokeWidth="3" />
    </svg>
  )
}

export default function WelcomeScreen({ onEnter }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const k = (e) => e.key === 'Escape' && onEnter()
    window.addEventListener('keydown', k)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k) }
  }, [onEnter])
  return (
    <div className="welcome" role="dialog" aria-label="Welcome to ROBOFEST">
      <div className="welcome__grid" aria-hidden="true" />
      <button className="welcome__skip" onClick={onEnter}>Skip</button>
      <div className="welcome__inner">
        <img className="welcome__logo" src="/images/robotix-logo.png" alt="ROBOTiX Club" width="80" height="72" />
        <div className="welcome__stage">
          <WelcomeBot />
          <div className="bubble">
            <strong>Hi there!</strong>
            <span>Welcome to <em>ROBOFEST</em></span>
          </div>
        </div>
        <p className="welcome__sub">ROBOTiX Club, NIT Raipur · Build. Innovate. Compete.</p>
        <button className="btn btn--primary welcome__btn" onClick={onEnter} autoFocus>Enter ROBOFEST <ArrowRight size={18} /></button>
      </div>
    </div>
  )
}
