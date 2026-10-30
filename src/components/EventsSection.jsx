import { ArrowUpRight } from 'lucide-react'
import { EVENTS } from '../config.js'
import useReveal from '../useReveal.js'

export default function EventsSection() {
  const ref = useReveal()
  return (
    <section id="events" className="section section--navy">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">COMPETITIONS</p>
        <h2>Explore the Challenges</h2>
        <div className="cards">
          {EVENTS.map((e) => (
            <article key={e.id} className="card">
              <div className="card__img"><img src={e.img} alt={`${e.title} illustration`} loading="lazy" width="640" height="400" /></div>
              <div className="card__body">
                <span className="card__no">EVENT {e.no}</span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
                <a href={e.href} target="_blank" rel="noreferrer">View Details <ArrowUpRight size={16} /></a>
              </div>
            </article>
          ))}
        </div>
        <p className="note">Event details are placeholders until confirmed from the official ROBOFEST page.</p>
      </div>
    </section>
  )
}
