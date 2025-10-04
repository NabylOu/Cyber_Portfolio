import { Shield, Network, Terminal, Boxes, GitBranch, Wrench, Globe, Users } from 'lucide-react'

export default function Skills() {
  const groups = [
    {
      name: 'SOC & Forensic',
      Icon: Shield,
      items: [
        'Incident detection & investigation',
        'Log analysis (system, network, security)',
        'SIEM alert triage (Splunk, Wazuh, Elastic)',
        'MITRE ATT&CK & Cyber Kill Chain',
        'Incident Response',
      ],
    },
    {
      name: 'Networks & Protocols',
      Icon: Network,
      items: [
        'Routing & switching (OSPF, RIP, ISIS, BGP)',
        'VLAN',
        'ACL',
        'VPN',
        'IPSec',
        'TLS/SSL',
        'HTTPS',
        'Firewall',
        'IDS/IPS',
      ],
    },
    {
      name: 'Security Tools',
      Icon: Wrench,
      items: [
        'Splunk',
        'Wazuh',
        'TheHive',
        'Cortex',
        'MISP',
        'VirusTotal',
        'Kali Linux',
        'Atomic Red Team',
        'ELK Stack',
        'Shuffle',
        'Tines (SOAR)',
      ],
    },
    {
      name: 'Virtualization & Containers',
      Icon: Boxes,
      items: ['VMware', 'VirtualBox', 'Vagrant', 'Docker'],
    },
    {
      name: 'Automation & Scripting',
      Icon: Terminal,
      items: ['Python automation', 'Bash scripting (SOC workflows)'],
    },
    {
      name: 'DevSecOps',
      Icon: GitBranch,
      items: ['GitLab CI/CD', 'Docker', 'Kubernetes', 'ArgoCD', 'Trivy', 'Semgrep', 'OWASP Dependency-Check'],
    },
    // Structured groups start here
    {
      name: 'Pentesting & Red Teaming',
      Icon: Terminal,
      sections: [
        {
          title: 'Web Pentesting',
          items: ['Burp Suite', 'Gobuster', 'Dirbuster', 'Nikto'],
        },
        {
          title: 'Network Scanning & Exploitation',
          items: ['Nmap', 'Metasploit', 'Netcat'],
        },
        {
          title: 'Vulnerability Assessment',
          items: ['PoC testing', 'Exploitation in controlled lab environments'],
        },
        {
          title: 'Password Attacks',
          items: ['Hydra', 'Hashcat'],
        },
      ],
    },
    {
      name: 'Endpoint & System Analysis',
      Icon: Shield,
      sections: [
        {
          title: 'Windows & Linux Log Analysis',
          items: ['Sysmon', 'Event Viewer', 'auditd'],
        },
        {
          title: 'Malware Behavior Analysis',
          items: ['Process tracing', 'Persistence', 'Network connections'],
        },
        {
          title: 'EDR Telemetry Interpretation',
          items: ['LimaCharlie', 'Wazuh agent'],
        },
      ],
    },
    {
      name: 'Network Traffic & Email Forensics',
      Icon: Network,
      sections: [
        {
          title: 'Network Traffic Capture & Inspection',
          items: ['Wireshark', 'tcpdump', 'Suricata'],
        },
        {
          title: 'Suspicious Flow Detection',
          items: ['Command & Control (C2)', 'Lateral movement', 'DNS tunneling'],
        },
        {
          title: 'Email Forensics & IOC Extraction',
          items: ['SPF / DKIM / DMARC analysis', 'URL, hash, and domain extraction', 'Threat enrichment (VirusTotal, AbuseIPDB, Shodan)'],
        },
      ],
    },
    // Structured groups end here
    {
      name: 'Soft Skills',
      Icon: Users,
      items: ['Rigor', 'Critical thinking', 'Stress management', 'Teamwork'],
    },
    {
      name: 'Languages',
      Icon: Globe,
      items: ['Arabic (Bilingual)', 'French (Read, Written, Spoken)', 'English (Read, Written, Spoken)'],
    },
  ]

  return (
    <div>
      <p className="section-subtitle">Skills</p>
      <h2 className="section-title">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, i) => (
          <div key={i} className="card p-6" aria-labelledby={`skills-group-${i}`}>
            <h3 id={`skills-group-${i}`} className="font-heading font-semibold text-white mb-3 flex items-center gap-2">
              <g.Icon className="h-4 w-4 text-neon-teal/80" aria-hidden="true" />
              {g.name}
            </h3>
            {g.sections ? (
              <div className="space-y-2" aria-label={`${g.name} structured items`}>
                {g.sections.map((sec, k) => (
                  <div key={k}>
                    <p className="text-white font-medium text-sm">{sec.title}</p>
                    <ul className="mt-1 list-disc pl-5 text-white/85 text-xs space-y-0.5">
                      {sec.items.map((it, m) => (
                        <li key={m}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${g.name} items`}>
                {g.items.map((s, j) => (
                  <button
                    key={j}
                    type="button"
                    className="px-3 py-1.5 rounded-full border border-white/15 text-xs text-white/90 bg-cyber-blue/40 hover:bg-cyber-blue/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal/50 transition transform hover:scale-[1.03] inline-flex items-center gap-2"
                    role="listitem"
                    tabIndex={0}
                    aria-label={s}
                  >
                    <g.Icon className="h-3.5 w-3.5 text-white/70" aria-hidden="true" />
                    <span className="whitespace-nowrap">{s}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
