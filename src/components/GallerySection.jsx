import { Bot, Cog, Cpu, CircuitBoard, Radar, Wrench } from 'lucide-react'
import useReveal from '../useReveal.js'

// Replace `img` with real ROBOTiX Club photos (public/images/gallery/...) to swap tiles automatically.
const TILES = [
  { id: 'robots', img: '/images/gallery/robots.svg', label: 'Robots', Icon: Bot, cls: 'g-a' },
  { id: 'gears', img: '/images/gallery/gears.svg', label: 'Gears & Assemblies', Icon: Cog, cls: 'g-b' },
  { id: 'motors', img: '/images/gallery/motors.svg', label: 'Motors', Icon: Wrench, cls: 'g-c' },
  { id: 'sensors', img: '/images/gallery/sensors.svg', label: 'Sensors', Icon: Radar, cls: 'g-d' },
  { id: 'electronics', img: '/images/gallery/electronics.svg', label: 'Electronics', Icon: CircuitBoard, cls: 'g-e' },
  { id: 'arena', img: '/images/gallery/arena.svg', label: 'Competition Arena', Icon: Cpu, cls: 'g-f' },
]

export default function GallerySection() {
  const ref = useReveal()
  return (
    <section id="gallery" className="section section--light">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow eyebrow--dark">GALLERY</p>
        <h2>Engineered by Curiosity</h2>
        <div className="gallery">
          {TILES.map(({ id, label, Icon, cls, img }) => (
            <figure key={id} className={`tile ${cls}${img ? ' tile--img' : ''}`}>
              {img ? <img src={img} alt={label} loading="lazy" /> : <Icon size={44} strokeWidth={1.2} aria-hidden="true" />}
              <figcaption>{label}<small>{img ? '' : 'Placeholder · add club photo'}</small></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
