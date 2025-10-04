export default function Footer() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#cv', label: 'CV' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="mt-16 w-full relative overflow-hidden">
      {/* subtle top separator/glow */}
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-teal/40 to-transparent"></div>
      <div className="absolute inset-0 bg-cyber-blue/60"></div>
      <div className="absolute inset-0 bg-circuits"></div>
      <div className="relative">
        <div className="container-section py-10">
          {/* Centered nav */}
          <nav className="flex flex-wrap items-center justify-center gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Name and tagline */}
          <div className="mt-6 text-center">
            <p className="font-heading text-lg font-semibold">Nabyl Ouchine</p>
            <p className="text-sm text-white/60">Cybersecurity & SOC Enthusiast</p>
          </div>

          <div className="mt-8 text-center text-xs text-white/60">
  © {new Date().getFullYear()} — Made with <span className="text-red-500">❤️</span>by Nabyl OUCHINE
</div>
        </div>
      </div>
    </footer>
  )
}
