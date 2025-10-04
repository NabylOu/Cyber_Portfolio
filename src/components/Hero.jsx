import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { X, Linkedin, BookOpen, Mail, Shield } from 'lucide-react'

export default function Hero() {
  const [showContact, setShowContact] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)
  const prefersReduced = useMemo(
    () => (typeof window !== 'undefined') && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )

  // Staggered entrance controls
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReduced ? undefined : { staggerChildren: 0.08, delayChildren: 0.35 }
    }
  }
  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 14 },
    show: { opacity: 1, y: 0, transition: prefersReduced ? { duration: 0 } : { duration: 0.35, ease: 'easeOut' } }
  }

  return (
    <section id="hero" className="relative overflow-hidden bg-waves">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/20 to-cyber-dark"></div>
      <div className="container-section relative py-16 sm:py-24">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text column: first on mobile */}
            <div className="order-1 md:order-2 text-center md:text-left">
              {/* Kicker */}
              <motion.p variants={item} className="text-xs uppercase tracking-[0.2em] text-white/60">Hello, I am</motion.p>

              {/* Name */}
              <motion.h1 variants={item} className="mt-2 text-4xl sm:text-6xl font-extrabold font-heading leading-tight">Nabyl Ouchine</motion.h1>

              {/* Subline with typing roles */}
              <motion.div variants={item} className="mt-3 text-lg sm:text-xl text-white/85">
                <span className="text-white/70">and I am </span>
                <RoleTyper roles={["a Cybersecurity Engineer", "a Cybersecurity Analyst"]} disabled={prefersReduced} />
              </motion.div>

              {/* Professional paragraph */}
              <motion.p variants={item} className="mt-4 text-white/80 leading-relaxed">
  I’m a Junior Cybersecurity Analyst & Engineer focused on SOC operations, Threat Detection, Threat Hunting, and Incident Response. I combine SIEM and SOAR to automate detection and response, improve alert correlation, and build end-to-end detection pipelines powered by threat intelligence. <strong>I’m currently seeking a PFE internship</strong> to apply my expertise in real-world SOC environments and contribute to modern cybersecurity operations.
</motion.p>


              {/* Social icons row */}
              <motion.div variants={item} className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <SocialLink href="https://www.linkedin.com/in/nabyl-ouchine-503649291/" label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </SocialLink>
                <SocialLink href="https://medium.com/@nabilmidelt17" label="Medium">
                  <BookOpen className="h-5 w-5" />
                </SocialLink>
                {/* TryHackMe social icon/button */}
                <a
                  href="https://tryhackme.com/p/ouchine.nabyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TryHackMe — ouchine.nabyl"
                  title="TryHackMe — ouchine.nabyl"
                  className="flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 text-white/85 hover:text-neon-teal hover:border-neon-teal/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal/50 transition"
                >
                  {/* Inline mono SVG so it inherits currentColor (hover/focus tint) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7 11a4 4 0 0 1 7.874-.8A3.5 3.5 0 1 1 17.5 17H7a3 3 0 1 1 0-6z" opacity="0.85"/>
                    <path d="M12 12.25c1.657 0 3 1.343 3 3V18h-6v-2.75c0-1.657 1.343-3 3-3zm-1 2.75V16h2v-1a1 1 0 1 0-2 0z"/>
                  </svg>
                  <span className="sr-only">TryHackMe — ouchine.nabyl</span>
                </a>
                <SocialLink href="mailto:nabylouchine@gmail.com" label="Email">
                  <Mail className="h-5 w-5" />
                </SocialLink>
              </motion.div>

              {/* Contact Me Button */}
              <motion.div variants={item} className="mt-6">
                <button
                  type="button"
                  onClick={() => setShowContact(true)}
                  className="px-5 py-2.5 rounded-lg bg-neon-teal/20 border border-neon-teal/40 text-neon-teal hover:bg-neon-teal/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal/60 transition"
                >
                  Contact Me
                </button>
              </motion.div>
            </div>

            {/* Image column: second on mobile, first on desktop */}
            <div className="order-2 md:order-1 flex justify-center md:justify-start">
              <motion.button
                type="button"
                onClick={() => setImageOpen(true)}
                className="relative h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full overflow-hidden shadow-2xl shadow-black/40 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal/50 group"
                aria-label="Open profile image in full-screen"
                variants={item}
              >
                <img src="/profile.jpg" alt="Portrait of Nabyl Ouchine" className="h-full w-full object-cover" />
                <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-neon-teal/40 transition"></span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <DecorativeElements />

      {showContact && (
        <ContactModal onClose={() => setShowContact(false)} />
      )}

      {imageOpen && (
        <Lightbox src="/profile.jpg" onClose={() => setImageOpen(false)} />
      )}
    </section>
  )
}

function DecorativeElements() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-neon-teal/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-neon-orange/20 blur-3xl" />
    </div>
  )
}

// Social link component with accessible label and subtle glow
function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 text-white/85 hover:text-neon-teal hover:border-neon-teal/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal/50 transition"
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  )
}

// Typing/rotating role component
function RoleTyper({ roles, disabled }) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [typing, setTyping] = useState(true)
  const [paused, setPaused] = useState(false)
  const role = roles[index]
  const timerRef = useRef(null)

  useEffect(() => {
    if (disabled) { setDisplay(role); return }
    if (paused) return
    const typeSpeed = 50
    const eraseSpeed = 35
    const holdTime = 1200

    function run() {
      clearTimeout(timerRef.current)
      if (typing) {
        if (display.length < role.length) {
          timerRef.current = setTimeout(() => setDisplay(role.slice(0, display.length + 1)), typeSpeed)
        } else {
          timerRef.current = setTimeout(() => setTyping(false), holdTime)
        }
      } else {
        if (display.length > 0) {
          timerRef.current = setTimeout(() => setDisplay(role.slice(0, display.length - 1)), eraseSpeed)
        } else {
          setTyping(true)
          setIndex((i) => (i + 1) % roles.length)
        }
      }
    }
    run()
    return () => clearTimeout(timerRef.current)
  }, [display, typing, role, roles.length, paused, disabled])

  return (
    <span
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="inline-flex items-center"
    >
      <span className="font-semibold text-neon-teal">{display}</span>
      <span className="ml-1 w-[10px] h-5 inline-block bg-neon-teal/70 animate-pulse" aria-hidden="true" />
    </span>
  )
}

// Contact modal with mailto fallback
function ContactModal({ onClose }) {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])

  function onSubmit(e) {
    e.preventDefault()
    const mail = new URL('mailto:nabylouchine@gmail.com')
    const body = `${message}\n\nFrom: ${email || 'anonymous'}`
    mail.searchParams.set('subject', subject)
    mail.searchParams.set('body', body)
    window.location.href = mail.toString()
    setSent(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="relative card w-full max-w-lg p-6">
        <button className="absolute top-3 right-3 p-2 rounded-lg border border-white/10 hover:bg-white/5" aria-label="Close contact form" onClick={onClose}>
          <X className="h-5 w-5" />
        </button>
        <h3 className="font-heading text-2xl font-semibold pr-10">Contact Me</h3>
        <p className="text-xs text-white/60 mt-1">I usually reply within a day.</p>
        <form className="mt-4 space-y-3" onSubmit={onSubmit}>
          <div>
            <label className="block text-xs text-white/70 mb-1" htmlFor="subject">Subject</label>
            <input id="subject" required value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal/50" />
          </div>
          <div>
            <label className="block text-xs text-white/70 mb-1" htmlFor="message">Message</label>
            <textarea id="message" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal/50" />
          </div>
          <div>
            <label className="block text-xs text-white/70 mb-1" htmlFor="email">Your Email (optional)</label>
            <input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal/50" />
          </div>
          <div className="pt-2 flex items-center gap-3">
            <button type="submit" className="px-4 py-2 rounded-md bg-neon-teal/20 border border-neon-teal/40 text-neon-teal hover:bg-neon-teal/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal/60">Send</button>
            {sent && <span className="text-xs text-white/70">Opened your email client. If it didn’t open, email me at nabylouchine@gmail.com.</span>}
          </div>
        </form>
      </div>
    </div>
  )
}

// Lightbox overlay for profile image
function Lightbox({ src, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="relative">
        <img src={src} alt="Profile full view" className="max-h-[88vh] max-w-[92vw] rounded-2xl border border-neon-teal/40 shadow-[0_0_40px_rgba(0,212,255,0.25)]" />
        <button onClick={onClose} aria-label="Close image" className="absolute -top-3 -right-3 p-2 rounded-full bg-cyber-dark/80 border border-white/20 hover:bg-cyber-dark/60 text-white">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
