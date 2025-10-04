import { Mail, Phone, Linkedin, BookOpen } from 'lucide-react'

export default function Contact() {
  return (
    <div>
      <p className="section-subtitle">Contact</p>
      <h2 className="section-title">Get In Touch</h2>
      <div className="card p-6">
        <div className="grid sm:grid-cols-2 gap-4 text-white/90">
          <a href="mailto:nabylouchine@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-white/0 hover:bg-white/5 hover:text-neon-teal transition underline-offset-4 hover:underline" aria-label="Email">
            <Mail className="h-5 w-5 text-neon-teal" aria-hidden="true" />
            <span>Email</span>
          </a>
          <a href="tel:+212720421930" className="flex items-center gap-3 p-3 rounded-lg bg-white/0 hover:bg-white/5 hover:text-neon-teal transition underline-offset-4 hover:underline" aria-label="Phone">
            <Phone className="h-5 w-5 text-neon-teal" aria-hidden="true" />
            <span>Phone</span>
          </a>
          <a href="https://linkedin.com/in/nabyl-ouchine-503649291" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-white/0 hover:bg-white/5 hover:text-neon-teal transition underline-offset-4 hover:underline" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-neon-teal" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a href="https://medium.com/@nabilmidelt17" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-white/0 hover:bg-white/5 hover:text-neon-teal transition underline-offset-4 hover:underline" aria-label="Medium">
            <BookOpen className="h-5 w-5 text-neon-teal" aria-hidden="true" />
            <span>Medium</span>
          </a>
        </div>
      </div>
    </div>
  )
}
