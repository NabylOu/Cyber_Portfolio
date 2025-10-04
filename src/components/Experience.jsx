function Item({ title, period, bullets, tools }) {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading text-xl font-semibold">{title}</h3>
        <span className="text-xs text-white/60">{period}</span>
      </div>
      <ul className="mt-3 list-disc list-inside text-white/80 space-y-1 text-sm">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      {tools && (
        <p
          className="mt-2 text-[0.95em]"
          style={{ color: '#3BAFDA', textShadow: '0 0 6px #3BAFDA' }}
        >
          <span className="font-semibold">Tools Used:</span> {tools}
        </p>
      )}
    </div>
  )
}

export default function Experience() {
  const items = [
    {
      title: 'GSNA Solutions – Cybersecurity Intern',
      period: 'Juil–Août 2025',
      bullets: [
        "Développement d’un prototype de pentesting assisté par IA (Gemini, DeepSeek).",
        "Pipelines Python automatisés (Nmap, Nikto, Gobuster).",
        "CTI analysis (alert triage, risk assessment, reporting).",
        "Contribution aux audits ISO 27001.",
      ],
      tools: 'Python, Kali Linux, Nmap, Nikto, Gobuster, Metasploit, Gemini, DeepSeek, VirusTotal, ISO 27001 tools'
    },
    {
      title: 'SEKERA – Cybersecurity Intern',
      period: 'Mai–Juin 2025',
      bullets: [
        "Workflow automatisé Email Forensics : SPF/DKIM/DMARC, extraction URLs/attachments.",
        "IOC enrichment via VirusTotal, Shodan, AbuseIPDB.",
        "Regex, heuristiques, LLMs pour scoring de risque.",
        "Rapports clairs et exploitables pour SOC.",
      ],
      tools: 'VirusTotal, Shodan, AbuseIPDB, Regex, LLMs, Python, Email Forensics tools (SPF/DKIM/DMARC)'
    },
    {
      title: 'EncryptEdge Labs – SOC Analyst Intern',
      period: 'Mars–Mai 2025',
      bullets: [
        "Surveillance SIEM, analyse logs & trafic réseau.",
        "Investigation d’incidents simulés.",
        "Gestion de vulnérabilité et conformité.",
        "Projet: simulation d’incidents et réponse complète.",
      ],
      tools: 'Wazuh, Splunk, Elastic Stack, TheHive, MISP, Wireshark, Sysmon, AWS EC2, Security Onion, Cortex'
    },
  ]

  return (
    <div>
      <p className="section-subtitle">Experience</p>
      <h2 className="section-title">Internships & Practical Exposure</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, idx) => <Item key={idx} {...it} />)}
      </div>
    </div>
  )
}
