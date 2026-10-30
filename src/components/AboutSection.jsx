import { Wrench, Lightbulb, Trophy } from 'lucide-react'
import useReveal from '../useReveal.js'

const HIGHLIGHTS = [
  { id: 'build', Icon: Wrench, title: 'BUILD', text: 'Hands-on mechanical, electronic, and control work.' },
  { id: 'innovate', Icon: Lightbulb, title: 'INNOVATE', text: 'Technical creativity applied to real engineering problems.' },
  { id: 'compete', Icon: Trophy, title: 'COMPETE', text: 'Put your machine and your team to the test.' },
]

export default function AboutSection() {
  const ref = useReveal()
  return (
    <section id="about" className="section section--light">
      <div className="container about reveal" ref={ref}>
        <div>
          <p className="eyebrow eyebrow--dark">ABOUT ROBOFEST</p>
          <h2>Where Ideas Become Intelligent Machines</h2>
          <p>ROBOFEST is the robotics festival organized by ROBOTiX Club at NIT Raipur. It brings together robotics, engineering, and automation through hands-on learning and competitions that reward technical creativity.</p>
          <p>From first sketch to final run, participants turn concepts into working machines.</p>
          <ul className="highlights">
            {HIGHLIGHTS.map(({ id, Icon, title, text }) => (
              <li key={id}><Icon size={22} /><div><strong>{title}</strong><span>{text}</span></div></li>
            ))}
          </ul>
        </div>
        <figure className="about__fig">
          <img src="/images/events/robo-sumo.svg" alt="Placeholder: student-built robot in an arena" loading="lazy" />
          <figcaption>FIG. 02 — Replace with a ROBOTiX Club photograph</figcaption>
        </figure>
      </div>
    </section>
  )
}
