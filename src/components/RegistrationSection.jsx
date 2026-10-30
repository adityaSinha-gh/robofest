import { REGISTER_URL } from '../config.js'
import useReveal from '../useReveal.js'

export default function RegistrationSection() {
  const ref = useReveal()
  return (
    <section id="register" className="section section--graphite">
      <div className="container register reveal" ref={ref}>
        <h2>Ready to Build Something Extraordinary?</h2>
        <p>Bring your ideas, assemble your team, and put your engineering skills to the test.</p>
        <a className="btn btn--primary" href={REGISTER_URL} target="_blank" rel="noreferrer">Register for Robofest</a>
      </div>
    </section>
  )
}
