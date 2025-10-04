import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#skills', label: 'Skills' },
    { href: '#cv', label: 'CV' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-cyber-dark/60 border-b border-white/10">
      <div className="container-section flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/shield-icon.svg" alt="Shield" className="h-7 w-7" />
          <span className="font-heading font-bold text-lg tracking-wide">Nabyl Ouchine</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>
        <button
          className="md:hidden p-2 rounded-lg border border-white/10"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-cyber-dark/95 backdrop-blur-sm">
          <nav className="container-section py-3">
            <ul className="flex flex-col divide-y divide-white/10" role="menu">
              {links.map((l) => (
                <li key={l.href} role="none">
                  <a
                    role="menuitem"
                    href={l.href}
                    className="block py-3 nav-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
