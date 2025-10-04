import React, { useState } from 'react'
import { Award, ShieldCheck, ExternalLink, Clock } from 'lucide-react'

export default function Certifications() {
  const certs = [
    {
      title: 'The Complete Networking Fundamentals Course — Your CCNA start',
      issuer: 'Udemy',
      status: 'Issued / Verifiable',
      date: '',
      link: 'https://www.udemy.com/certificate/UC-e54468f9-0f1c-4a89-80ce-4c43f8aff437/',
      icon: Award,
      desc: 'Foundational networking concepts aligned with CCNA topics: OSI, TCP/IP, routing & switching basics, and hands-on labs.'
    },
    {
      title: 'Certified Network Security Practitioner (CNSP)',
      issuer: 'SpeedExam / Candidate Portal',
      status: 'Issued / Verifiable',
      date: '',
      link: 'https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXQLJCayaj5oeggHoYhFG1lEuWBwIDAkS8xDtqqxSumJyGaEpKNWtal8l15k11UfVAREnrBJuN4vLqoMT1we0iyg=',
      icon: ShieldCheck,
      desc: 'Validation of competency in core network security practices and defensive controls.'
    },
    {
      title: 'SOC Analyst Learning Path',
      issuer: 'LetsDefend',
      status: 'Issued Feb 2025',
      date: 'Issued Feb 2025',
      link: 'https://app.letsdefend.io/certificate/show/eec6489e-8ba7-49a5-84d8-5f68631457e4',
      icon: ShieldCheck,
      desc: 'Hands-on blue team training: SIEM, detections, investigation, and incident response workflows.'
    },
    {
      title: 'SIEM Engineer Career Path',
      issuer: 'LetsDefend',
      status: 'Issued Feb 2025',
      date: 'Issued Feb 2025',
      link: 'https://app.letsdefend.io/certificate/show/8950c005-acc5-4a00-b8d9-9aed09b619fb',
      icon: ShieldCheck,
      desc: 'SIEM engineering track focused on log pipelines, detections, and alert tuning.'
    },
    {
      title: 'TCM Practical Ethical Hacking',
      issuer: '',
      status: 'In progress',
      date: '',
      link: '',
      icon: Clock,
      desc: 'Offensive security fundamentals with practical labs in networking, web exploitation, and privilege escalation.'
    }
  ]

  const [expanded, setExpanded] = useState({})

  function toggle(i) {
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <div>
      <p className="section-subtitle">Certifications</p>
      <h2 className="section-title">Certifications</h2>

      {/* Optional filter (non-functional placeholder, can wire later) */}
      {/* <div className="mb-4 flex gap-2 text-xs">
        <button className="px-3 py-1.5 rounded-md border border-white/10 text-white/80 hover:bg-white/5">All</button>
        <button className="px-3 py-1.5 rounded-md border border-white/10 text-white/80 hover:bg-white/5">Issued</button>
        <button className="px-3 py-1.5 rounded-md border border-white/10 text-white/80 hover:bg-white/5">In progress</button>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c, i) => {
          const Icon = c.icon
          const isProgress = c.status?.toLowerCase().includes('progress')
          const isExpanded = !!expanded[i]
          return (
            <article key={i} className="card p-5 border border-white/10 hover:border-neon-teal/40 transition relative" aria-labelledby={`cert-title-${i}`}>
              <div className="flex items-start gap-3">
                <Icon className="h-5 w-5 text-neon-teal" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <h3 id={`cert-title-${i}`} className="font-heading font-semibold text-white">{c.title}</h3>
                  <p className="text-xs text-white/70 mt-1">{c.issuer || '—'}</p>
                  {c.date && <p className="text-xs text-white/60 mt-0.5">{c.date}</p>}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-[11px] text-white/70">{c.status}</span>
                {isProgress ? (
                  <span className="px-2 py-1 rounded-full text-[10px] text-neon-teal border border-neon-teal/40 bg-neon-teal/10">In progress</span>
                ) : (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-neon-teal/20 border border-neon-teal/40 text-neon-teal hover:bg-neon-teal/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal/60"
                    title="Opens certificate in a new tab"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span className="text-xs">View Certificate</span>
                  </a>
                )}
              </div>

              {/* Expandable description */}
              {c.desc && (
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isExpanded}
                    aria-controls={`cert-desc-${i}`}
                    className="text-[11px] text-neon-teal hover:text-neon-teal/80 underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-teal/60"
                  >
                    {isExpanded ? 'Less' : 'More'}
                  </button>
                  <div
                    id={`cert-desc-${i}`}
                    role="region"
                    className="overflow-hidden"
                    style={{ maxHeight: isExpanded ? 200 : 0, transition: 'max-height 0.25s ease' }}
                  >
                    <p className="text-xs text-white/75 mt-2 pr-1">
                      {c.desc}
                    </p>
                  </div>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}
