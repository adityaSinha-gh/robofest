import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen.jsx'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import EventsSection from './components/EventsSection.jsx'
import GallerySection from './components/GallerySection.jsx'
import SponsorsSection from './components/SponsorsSection.jsx'
import RegistrationSection from './components/RegistrationSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [entered, setEntered] = useState(false)
  if (!entered) return <WelcomeScreen onEnter={() => setEntered(true)} />
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <GallerySection />
        <SponsorsSection />
        <RegistrationSection />
      </main>
      <Footer />
    </>
  )
}
