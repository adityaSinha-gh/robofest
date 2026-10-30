import { Handshake, ArrowUpRight } from 'lucide-react'
import { SPONSORS, SPONSOR_URL } from '../config.js'
import useReveal from '../useReveal.js'

// Flat list for the endless scrolling strip (duplicated so the loop is seamless).
const STRIP = SPONSORS.flatMap((g) => g.items.map((i) => ({ ...i, tier: g.tier })))

function Logo({ item }) {
  return item.logo
    ? <img src={item.logo} alt={item.name} loading="lazy" />
    : <span className="spons__ph">{item.name}</span>
}

export default function SponsorsSection() {
  const ref = useReveal()
  return (
    <section id="sponsors" className="section section--navy spons">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">PARTNERS</p>
        <h2>Powered by Our Sponsors</h2>
        <p className="spons__lead">ROBOFEST is made possible by organisations that back student engineering.</p>

        <div className="spons__tiers">
          {SPONSORS.map((g, gi) => (
            <div key={g.tier} className="spons__tier">
              <h3 className="spons__tierName">{g.tier}</h3>
              <div className={`spons__row spons__row--${g.size}`}>
                {g.items.map((it, i) => (
                  <div key={i} className="spons__card" style={{ '--d': `${(gi * 3 + i) * 0.12}s` }}>
                    <Logo item={it} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="spons__marquee" aria-hidden="true">
        <div className="spons__track">
          {[...STRIP, ...STRIP].map((it, i) => (
            <span key={i} className="spons__chip">{it.logo ? <img src={it.logo} alt="" /> : it.name}</span>
          ))}
        </div>
      </div>

      <div className="container spons__cta">
        <Handshake size={28} aria-hidden="true" />
        <p>Want your brand in front of India's next generation of roboticists?</p>
        <a className="btn btn--ghost" href={SPONSOR_URL} target="_blank" rel="noreferrer">Become a Sponsor <ArrowUpRight size={16} /></a>
      </div>
      <p className="note container">Sponsor names are placeholders until confirmed by ROBOTiX Club.</p>
    </section>
  )
}
