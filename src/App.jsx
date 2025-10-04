import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import CVSection from './components/CVSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-circuits"></div>
      <Header />

      <main>
        <Hero />
        <SectionWrapper id="about"><About /></SectionWrapper>
        <SectionWrapper id="experience"><Experience /></SectionWrapper>
        <SectionWrapper id="projects"><Projects /></SectionWrapper>
        <SectionWrapper id="certifications"><Certifications /></SectionWrapper>
        <SectionWrapper id="skills"><Skills /></SectionWrapper>
        <SectionWrapper id="cv"><CVSection /></SectionWrapper>
        <SectionWrapper id="contact"><Contact /></SectionWrapper>
      </main>

      <Footer />
    </div>
  )
}

function SectionWrapper({ id, children }) {
  return (
    <section id={id} className="py-16 sm:py-24">
      <motion.div
        className="container-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default App
