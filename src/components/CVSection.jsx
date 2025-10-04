import { User, GraduationCap, Briefcase, FolderGit2, Wrench, Globe, Users, Mail, Phone, Linkedin, Github, FileDown } from 'lucide-react'

export default function CVSection() {
  const contact = [
    { Icon: Mail, label: 'nabylouchine@gmail.com', href: 'mailto:nabylouchine@gmail.com' },
    { Icon: Phone, label: '+212620421930', href: 'tel:+212620421930' },
    { Icon: Linkedin, label: 'linkedin.com/in/nabyl-ouchine-503649291', href: 'https://linkedin.com/in/nabyl-ouchine-503649291' },
  ]

  const education = [
    { school: 'INPT', period: '2023 – Present', detail: 'Engineering degree in Cybersecurity & Digital Trust' },
    { school: 'FST Errachidia', period: '2021 – 2023', detail: 'DEUST (Math-Info-Physique)' },
    { school: 'EST Fes', period: '2020 – 2021', detail: 'Networks and Telecommunications' },
  ]

  const experience = [
    { org: 'GSNA Solutions', period: 'Jul–Aug 2025', desc: 'AI-assisted pentest automation, Python pipelines, CTI, ISO 27001.' },
    { org: 'SEKERA', period: 'May–Jun 2025', desc: 'Automated email forensics workflow, SPF/DKIM/DMARC parsing, IOC enrichment (VirusTotal, Shodan, AbuseIPDB).' },
    { org: 'EncryptEdge Labs', period: 'Mar–May 2025', desc: 'SOC Analyst: SIEM (Splunk, Wazuh), log analysis, threat simulations.' },
  ]

  const projects = [
    { title: 'CTI Integration in SIEM Open Source (2025)', tech: 'AWS, ELK, MISP, OTX' },
    { title: 'End-to-End SOC Architecture on AWS (2025)', tech: 'Elastic Stack, TheHive, Cortex, MISP' },
    { title: 'Automated Incident Response with SOAR & EDR (2025)', tech: 'Tines, LimaCharlie' },
    { title: 'DevSecOps Secure CI/CD Pipeline', tech: 'GitLab CI/CD, Docker, Kubernetes, ArgoCD' },
    { title: 'SOC Automation Lab', tech: 'SIEM, SOAR, Wazuh, TheHive, Cortex, Tines' },
  ]

  const skills = [
    { group: 'SOC & Forensics', items: ['SIEM (Splunk, Wazuh, Elastic)', 'Threat Hunting', 'Incident Response'] },
    { group: 'Networks', items: ['OSPF', 'RIP', 'BGP', 'VPN', 'TLS/SSL', 'IDS/IPS'] },
    { group: 'Tools', items: ['TheHive', 'Cortex', 'MISP', 'VirusTotal', 'Kali', 'Atomic Red Team'] },
    { group: 'Virtualization', items: ['VMware', 'VirtualBox', 'Docker'] },
    { group: 'Programming & Automation', items: ['Python', 'Bash'] },
    { group: 'Soft Skills', items: ['Teamwork', 'Rigor', 'Stress Management'] },
    { group: 'Languages', items: ['Arabic (Bilingual)', 'French (Fluent)', 'English (Fluent)'] },
  ]

  const certifications = [
    { title: 'Let’sDefend SIEM Engineer Career Path' },
  ]

  return (
    <div>
      <p className="section-subtitle">Curriculum Vitae</p>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="section-title mb-1">Nabyl Ouchine</h2>
          <p className="text-white/70">Final Year Engineering Student – Cybersecurity & SOC Enthusiast - seeking a PFE internship </p>
        </div>
        <a className="btn-primary" href="/cv/Cv_Nabyl_OUCHINE.pdf" download="Cv_Nabyl_OUCHINE.pdf"><FileDown size={18}/> Download Full CV (PDF)</a>
      </div>

      {/* Contact row */}
      <div className="mt-4 flex flex-wrap gap-3">
        {contact.map((c, i) => (
          <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noreferrer' : undefined} className="px-3 py-1.5 rounded-full border border-white/15 text-xs text-white/90 bg-cyber-blue/40 hover:bg-cyber-blue/60 transition inline-flex items-center gap-2">
            <c.Icon className="h-4 w-4 text-neon-teal/80"/>
            <span className="whitespace-nowrap">{c.label}</span>
          </a>
        ))}
      </div>

      {/* Two-column layout */}
      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        {/* Left sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Profile card with simple avatar placeholder */}
          <section className="card p-6">
            <h3 className="font-heading font-semibold text-white mb-3 flex items-center gap-2"><User className="h-5 w-5 text-neon-teal/80"/>Profile Summary</h3>
            <p className="text-white/80 text-sm">Cybersecurity student at INPT, passionate about SOC, threat detection, and incident response. Experienced in SIEM, log analysis, automation, and cyber defense. Motivated to apply my skills in real-world SOC environments.</p>
          </section>

          {/* Skills */}
          <section className="card p-6">
            <h3 className="font-heading font-semibold text-white mb-3 flex items-center gap-2"><Wrench className="h-5 w-5 text-neon-teal/80"/>Skills</h3>
            <div className="space-y-3">
              {skills.map((g, idx) => (
                <div key={idx}>
                  <p className="text-xs text-white/70 mb-2">{g.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s, j) => (
                      <span key={j} className="px-3 py-1 rounded-full border border-white/15 text-xs text-white/90 bg-cyber-blue/40 hover:bg-cyber-blue/60 transition">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          
        </aside>

        {/* Right main content */}
        <main className="lg:col-span-2 space-y-6">
          {/* Education */}
          <section className="card p-6">
            <h3 className="font-heading font-semibold text-white mb-3 flex items-center gap-2"><GraduationCap className="h-5 w-5 text-neon-teal/80"/>Education</h3>
            <ul className="space-y-3">
              {education.map((e, i) => (
                <li key={i} className="flex items-start justify-between gap-4 text-sm">
                  <div>
                    <p className="text-white font-semibold">{e.school}</p>
                    <p className="text-white/70 italic">{e.detail}</p>
                  </div>
                  <span className="text-xs text-white/60 whitespace-nowrap">{e.period}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Experience */}
          <section className="card p-6">
            <h3 className="font-heading font-semibold text-white mb-3 flex items-center gap-2"><Briefcase className="h-5 w-5 text-neon-teal/80"/>Professional Experience</h3>
            <div className="space-y-3">
              {experience.map((x, i) => (
                <div key={i} className="flex items-start justify-between gap-4 text-sm">
                  <div>
                    <p className="text-white">{x.org}</p>
                    <p className="text-white/70">{x.desc}</p>
                  </div>
                  <span className="text-xs text-white/60 whitespace-nowrap">{x.period}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="card p-6">
            <h3 className="font-heading font-semibold text-white mb-3 flex items-center gap-2"><FolderGit2 className="h-5 w-5 text-neon-teal/80"/>Projects</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {projects.map((p, i) => (
                <div key={i} className="rounded-xl border border-white/10 p-4 bg-white/5">
                  <p className="text-white">{p.title}</p>
                  <p className="text-white/70 mt-1">{p.tech}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
