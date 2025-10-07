import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

function ProjectCard({ title, period, summary, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="card p-6 text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal/50"
      aria-label={`Open details for ${title}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading text-lg font-semibold">{title}</h3>
        <span className="text-xs text-white/60">{period}</span>
      </div>
      {summary && (
        <p className="mt-3 text-white/80 text-sm">{summary}</p>
      )}
    </button>
  )
}

function Modal({ project, onClose, onImageClick }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close project dialog"
      ></div>
      <div className="relative card w-full max-w-3xl p-6 max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-3 p-2 rounded-lg border border-white/10 hover:bg-white/5"
          aria-label="Close project details"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
        <h3 id="project-title" className="font-heading text-2xl font-semibold pr-10">{project.title}</h3>
        <p className="text-xs text-white/60 mt-1">{project.period}</p>
        {project.docLink && !project.docBelow && (
          <div className="mt-3">
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neon-teal text-neon-teal hover:bg-neon-teal/10 transition"
              href={project.docLink.url}
              target="_blank"
              rel="noreferrer"
            >
              Project Documentation / LinkedIn Post
            </a>
          </div>
        )}
        <div className="mt-4 space-y-4">
          {project.images && project.images.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-3">
              {project.images.map((src, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="group relative"
                  onClick={() => onImageClick(src)}
                  aria-label={`Open ${project.title} image ${idx+1} full screen`}
                >
                  <img
                    src={src}
                    alt={`${project.title} diagram ${idx+1}`}
                    className="rounded-lg border border-white/10 w-full object-cover"
                    loading="lazy"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-transparent group-hover:ring-neon-teal/40 transition"></span>
                </button>
              ))}
            </div>
          )}
          {project.docLink && project.docBelow && (
            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neon-teal text-neon-teal hover:bg-neon-teal/10 transition"
                href={project.docLink.url}
                target="_blank"
                rel="noreferrer"
              >
                {project.docLink.label || 'Project Documentation'}
              </a>
            </div>
          )}
          <div className="space-y-4">
            {project.overview && (
              <div>
                <h4 className="font-heading font-semibold mb-1">Overview</h4>
                <p className="text-white/80 text-sm">{project.overview}</p>
              </div>
            )}
            {project.objective && (
              <div>
                <h4 className="font-heading font-semibold mb-1">Objective</h4>
                <p className="text-white/80 text-sm">{project.objective}</p>
              </div>
            )}
            {project.workflow && project.workflow.length > 0 && (
              <div>
                <h4 className="font-heading font-semibold mb-2">Workflow</h4>
                <ul className="list-disc list-inside text-white/80 space-y-1 text-sm">
                  {project.workflow.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            )}
            {project.tools && project.tools.length > 0 && (
              <div>
                <h4 className="font-heading font-semibold mb-2">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full border border-white/15 text-xs text-white/80">{t}</span>
                  ))}
                </div>
              </div>
            )}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="font-heading font-semibold mb-2">Key Features</h4>
                <ul className="list-disc list-inside text-white/80 space-y-1 text-sm">
                  {project.features.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            )}
            {project.results && project.results.length > 0 && (
              <div>
                <h4 className="font-heading font-semibold mb-2">Key Results</h4>
                <ul className="list-disc list-inside text-white/80 space-y-1 text-sm">
                  {project.results.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            )}
            {project.improvements && project.improvements.length > 0 && (
              <div>
                <h4 className="font-heading font-semibold mb-2">Future Improvements</h4>
                <ul className="list-disc list-inside text-white/80 space-y-1 text-sm">
                  {project.improvements.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            )}
            {project.links && project.links.length > 0 && (
              <div>
                <h4 className="font-heading font-semibold mb-2">Repositories</h4>
                <ul className="list-disc list-inside text-white/80 space-y-1 text-sm">
                  {project.links.map((l, i) => (
                    <li key={i}>
                      <a className="text-neon-teal hover:underline" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!project.overview && !project.objective && !project.workflow && project.points && (
              <div>
                <h4 className="font-heading font-semibold mb-2">Details</h4>
                <ul className="list-disc list-inside text-white/80 space-y-1 text-sm">
                  {project.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [openIdx, setOpenIdx] = useState(null)
  const [lightboxSrc, setLightboxSrc] = useState(null)

  // Lock background scroll when a modal or lightbox is open
  useEffect(() => {
    const shouldLock = openIdx !== null || !!lightboxSrc
    const prev = document.body.style.overflow
    if (shouldLock) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = prev
    }
  }, [openIdx, lightboxSrc])

  const projects = [
    {
      title: 'Network Traffic Analysis – PCAP Investigation (2025)',
      period: '2025',
      summary: 'Performed a deep analysis of captured network traffic using tcpdump and Wireshark to detect anomalies, identify IoCs, and correlate security incidents. Focused on network forensics and SOC investigation techniques.',
      overview: 'In this project, I conducted in-depth network traffic analysis on PCAP files to investigate suspicious activities and uncover attacker behaviors at the packet level. Using tcpdump for traffic capture and Wireshark for visualization and protocol inspection, I was able to identify indicators of compromise (IoCs), analyze communication patterns, and correlate them with potential intrusion scenarios. This project strengthened my skills in network forensics, SOC analysis, and understanding of TCP/IP layers in real attack simulations.',
      tools: [
        'tcpdump',
        'Wireshark',
        'Network Analysis',
        'TCP/IP Protocols',
        'SOC Investigation',
        'IoC Identification',
      ],
      images: [],
    },
    {
      title: 'SOC Automation Lab Project',
      period: 'Sept 2025',
      summary: 'Developed a complete SOC automation lab integrating Wazuh, Shuffle, TheHive, and VirusTotal to automate detection, enrichment, and response. Demonstrates SIEM+SOAR real-time incident handling.',
      overview: 'This project focuses on building a Security Operations Center (SOC) automation lab that connects SIEM, SOAR, and Threat Intelligence tools to simulate end-to-end detection and automated incident response.',
      objective: 'Design and implement a fully automated detection-to-response workflow, where alerts generated from endpoint telemetry are enriched, analyzed, and escalated automatically using open-source tools.',
      workflow: [
        'Wazuh (SIEM): Collects Sysmon telemetry from a Windows 10 client. Detects malicious activity such as Mimikatz credential dumping and triggers an alert.',
        'Shuffle (SOAR): Automatically triggers a playbook when a Wazuh alert is received. Enriches IOCs via VirusTotal, creates a case in TheHive, and emails the analyst.',
        'TheHive (Case Management): Centralizes alerts, manages cases, and coordinates incident response actions.',
        'VirusTotal (Threat Intelligence): Provides real-time enrichment for malware hashes and domains.',
      ],
      tools: [
        'Wazuh (SIEM)',
        'Sysmon',
        'Shuffle (SOAR)',
        'TheHive',
        'VirusTotal',
        'Windows 10 Client',
      ],
      results: [
        'Implemented a Detection → Analysis → Automated Response workflow.',
        'Successfully detected Mimikatz execution and triggered automated playbooks.',
        'Enhanced understanding of SOC integration and orchestration pipelines.',
        'Strengthened skills in SIEM, SOAR, and Threat Intelligence automation.',
      ],
      improvements: [
        'Integrate Cortex analyzers to expand automated IOC analysis.',
        'Add containment actions (e.g., isolating infected endpoints) in Shuffle.',
        'Extend the lab with additional endpoints for scalability testing.',
      ],
      images: ['/images/projects/soc-automation..png'],
    },
    {
      title: 'Integration of Cyber Threat Intelligence (CTI) into an Open-Source SIEM',
      period: '2025',
      summary: 'Developed a CTI-integrated SIEM solution with ELK Stack on AWS, enriching alerts with threat intelligence from MISP & OTX to reduce false positives.',
      overview: 'Cyber threats are increasingly targeted and noisy; traditional SIEMs struggle with signal-to-noise. This project integrates CTI into an open-source SIEM (ELK) to enrich alerts with IoCs from MISP and OTX for better prioritization and reduced false positives.',
      objective: 'Integrate CTI with ELK to enrich alerts using IoCs from threat intelligence platforms and improve SOC detection quality and context.',
      workflow: [
        'Benchmark SIEM/CTI tools and select ELK + MISP/OTX',
        'Deploy ELK Stack on AWS EC2',
        'Configure MISP with Filebeat Threat Intel module',
        'Automate IoC collection from OTX API',
        'Install Elastic Agent on endpoints, managed via Fleet Server',
        'Create Kibana rules and dashboards',
        'Simulate malicious domain/IP/hash detections',
        'Visualize CTI-enriched alerts within dashboards',
      ],
      tools: ['ELK Stack', 'Elasticsearch', 'Logstash', 'Kibana', 'Filebeat', 'MISP', 'OTX', 'Elastic Agent', 'AWS EC2'],
      results: [
        'Contextualized alerts with CTI enrichment',
        'Reduced false positives through better prioritization',
        'Proactive detection and SOC dashboards',
      ],
      improvements: [
        'Add SOAR integrations',
        'Introduce new log sources and correlation rules',
      ],
      images: ['/images/projects/cti-siem.png'],
      docLink: { label: 'LinkedIn Project Report / Documentation', url: 'https://www.linkedin.com/posts/nabyl-ouchine-503649291_rapport-du-projet-pfa-activity-7334279821503447040-z-7z' },
      docBelow: true,
      links: [],
      team: ['Abdessamad Essaghir', 'Anass El Mazdougui', 'Issa Bakanéma Ouattara', 'Yassine Ajabli', 'Nabyl Ouchine'],
    },
    {
      title: 'End-to-End SOC Architecture on AWS',
      period: 'Fév–Avr 2025',
      summary: 'Designed and deployed a modular SOC on AWS EC2 with Elastic Stack, TheHive, MISP, and Cortex to simulate real-time detection, enrichment, and case management.',
      overview: 'A cloud-based SOC built entirely on AWS EC2 using open-source tools to simulate a complete, real-world detection and response pipeline with integrated threat intelligence, case management, and automation.',
      objective: 'Implement a scalable SOC where logs are centralized, alerts are visualized in real time, and observables are enriched automatically to support investigations and incident response.',
      workflow: [
        'Elastic Client (EC2): Logs collected using Filebeat.',
        'SIEM (EC2 with Docker): Logs indexed in Elasticsearch and visualized in Kibana.',
        'TheHive (EC2): Receives alerts, supports investigation, and manages cases.',
        'MISP (EC2): Delivers real-time threat intelligence, integrated with TheHive for enrichment.',
        'Cortex (EC2): Connects TheHive to analyzers (e.g., VirusTotal, Abuse.ch) via API.',
        'Analyzers: Separate modules Cortex uses for automated indicator analysis.',
      ],
      tools: ['Elastic Stack', 'Elasticsearch', 'Kibana', 'Filebeat', 'TheHive', 'MISP', 'Cortex', 'AWS EC2', 'Docker'],
      features: [
        'Cloud-based & modular architecture using AWS EC2',
        'Real-time alerting and visualization',
        'Automated enrichment of observables with threat intelligence',
        'Full case management lifecycle from detection to resolution',
        'Seamless integration between Elastic Stack, TheHive, MISP, and Cortex',
      ],
      improvements: [
        'Integrate additional log sources: IDS/IPS (Suricata, Snort), Firewall logs, Windows Security Events',
        'Add more network and endpoint telemetry to expand coverage',
      ],
      images: ['/images/projects/aws-soc-architecture.png'],
    },
    {
      title: 'Automating Incident Response with SOAR & EDR',
      period: 'Janv–Fév 2025',
      summary: 'Developed an automated detection and response workflow using LimaCharlie (EDR) and Tines (SOAR), showcasing real-time alerting, analyst interaction, and automated containment.',
      overview: 'This project focuses on automating the incident detection and response lifecycle in a SOC environment using LimaCharlie (EDR) and Tines (SOAR). The goal is to accelerate incident handling and reduce manual workload.',
      objective: 'Build a SOAR-EDR integration capable of detecting, alerting, notifying, and isolating compromised endpoints automatically, while allowing human analysts to make containment decisions in real time.',
      workflow: [
        'Detection – LimaCharlie (EDR): Detects malicious activity (e.g., unauthorized tools or suspicious commands) and generates alerts with host, IP, file path, and command line.',
        'Automation – Tines (SOAR): Receives LimaCharlie alert via webhook and triggers a playbook that parses/formats data.',
        'Notification: Sends alert notifications to the SOC via Slack and Email with full incident context.',
        'User Decision Point: Prompts analysts to confirm whether to isolate the endpoint.',
        'Containment – LimaCharlie: Upon approval, automatically isolates the infected system from the network.',
      ],
      tools: [
        'LimaCharlie (EDR)',
        'Tines (SOAR)',
        'Slack',
        'Email Integrations',
        'Webhooks & API Integrations',
      ],
      results: [
        'Implemented a fully automated detection-to-response cycle.',
        'Reduced incident response time by removing manual intervention.',
        'Improved SOC efficiency and containment accuracy.',
        'Demonstrated practical EDR + SOAR automation in SOCs.',
      ],
      improvements: [
        'Integrate with SIEM (e.g., Wazuh, Splunk) for unified alert management.',
        'Add automated triage steps to reduce false positives.',
        'Include threat intelligence enrichment before containment.',
      ],
      images: ['/images/projects/SOAR-EDR.jpeg'],
    },
    {
      title: 'Secure CI/CD Pipeline – DevSecOps Project',
      period: 'Nov 2024–Janv 2025',
      summary: 'Designed and implemented a secure CI/CD pipeline with GitLab CI, Docker, Kubernetes, and Argo CD, integrating security scanning and monitoring for efficient and secure delivery.',
      overview: 'Implemented a secure and automated CI/CD pipeline for a microservices application, focusing on integrating DevSecOps principles throughout the SDLC. Project completed under Prof. Driss Allaki with teammates Anass El Mazdougui, Abdelmoula Alouache, and Issa Bakanema.',
      objective: 'Build a security-focused CI/CD workflow that ensures safe, consistent, and automated deployment using GitLab CI/CD, Docker, Kubernetes, and Argo CD, while embedding security and monitoring at every stage.',
      docLink: { label: 'Project Documentation / LinkedIn Post', url: 'https://www.linkedin.com/posts/nabyl-ouchine-503649291_secure-devsecops-pipeline-for-microservices-activity-7286800098112536578-LBC8' },
      features: [
        'Automated CI/CD Pipeline: GitLab CI + Maven builds, Docker packaging, Kubernetes deployment',
        'GitOps Integration: Argo CD for automated, consistent Kubernetes deployments',
        'Security First: SAST, SCA, and container security with OWASP Dependency-Check, Trivy, Semgrep',
        'Monitoring & Observability: Prometheus, Grafana, and Elasticsearch for metrics, performance, and logs',
        'Optimization: Caching, protected branches, and custom GitLab runners for speed and reliability',
      ],
      tools: [
        'GitLab CI', 'Maven', 'Docker', 'Kubernetes', 'Argo CD',
        'OWASP Dependency-Check', 'Trivy', 'Semgrep',
        'Prometheus', 'Grafana', 'Fluentd', 'Elasticsearch',
        'Minikube', 'Helm'
      ],
      results: [
        'Delivered a fully automated and secure CI/CD pipeline',
        'Integrated DevSecOps best practices for early vulnerability detection',
        'Achieved real-time visibility via monitoring and observability tools',
        'Strengthened teamwork and project management in a professional environment',
      ],
      improvements: [
        'Add automated security policy enforcement at deployment',
        'Integrate vulnerability alerting dashboards within Grafana',
        'Explore supply chain security with SBOM generation and container signing',
      ],
      links: [
        { label: 'Source Code Repository', url: 'https://lnkd.in/esAAdChH' },
        { label: 'Kubernetes Files Repository', url: 'https://lnkd.in/eFyXGBms' },
      ],
      images: [],
    },
    {
      title: 'Home Lab Project: Active Directory & Splunk for Cybersecurity',
      period: 'Oct–Nov 2024',
      summary: 'Built a complete cybersecurity home lab integrating AD, Splunk, and Kali to simulate attacks; focus on SIEM, detections, and incident response.',
      overview: 'Created a full cybersecurity lab environment to simulate and analyze real-world attack scenarios, enabling hands-on learning of SIEM, log analysis, and incident response workflows.',
      objective: 'Design and deploy a multi-machine network that centralizes event logging and allows real-time attack visualization using Splunk and Active Directory.',
      workflow: [
        'Splunk Server (Ubuntu): Installed and configured to collect and visualize logs. Built dashboards and alerts to detect suspicious activity.',
        'Windows Server (Active Directory): Managed user identities and forwarded security events to Splunk.',
        'Windows 10 Machine: Simulated normal user operations; telemetry collected through Sysmon.',
        'Kali Linux Machine: Simulated brute-force attacks using Crowbar to produce security events.',
        'Atomic Red Team: Generated telemetry for various MITRE ATT&CK techniques to validate detection coverage.',
      ],
      tools: ['Splunk', 'Active Directory', 'Sysmon', 'Kali Linux', 'Crowbar', 'Atomic Red Team', 'Windows 10'],
      results: [
        'Centralized multi-OS log collection and visualization.',
        'Developed custom SPL dashboards and alerts for brute-force and privilege-escalation detection.',
        'Practiced incident response in real time with simulated attack patterns.',
      ],
      improvements: [
        'Integrate SOAR automation (e.g., Shuffle, TheHive).',
        'Add more telemetry sources for deeper threat analysis.',
        'Expand to include cloud components for hybrid SOC simulation.',
      ],
      images: ['/images/projects/splunk.jpeg'],
    },
  ]

  return (
    <div>
      <p className="section-subtitle">Projects</p>
      <h2 className="section-title">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <ProjectCard
            key={i}
            title={proj.title}
            period={proj.period}
            summary={proj.summary}
            onOpen={() => setOpenIdx(i)}
          />
        ))}
      </div>

      {openIdx !== null && (
        <Modal
          project={projects[openIdx]}
          onClose={() => setOpenIdx(null)}
          onImageClick={(src) => setLightboxSrc(src)}
        />)
      }

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </div>
  )
}

function Lightbox({ src, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <img
        src={src}
        alt="Project full view"
        className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-2xl shadow-black/70 transition-transform duration-200 ease-out"
      />
      <button
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  )
}
