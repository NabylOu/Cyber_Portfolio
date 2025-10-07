import { motion } from 'framer-motion'
export default function About() {
  return (
    <div className="grid gap-8 items-center">
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-subtitle">About Me</p>
        <h2 className="section-title">Junior Cybersecurity Analyst & Engineer  | Passionate About SOC, Threat Hunting & Incident Response</h2>
        <div className="prose prose-invert max-w-none text-white/80 mx-auto md:mx-0">
          <p>
I am a Junior Cybersecurity Analyst specializing in Security Operations, Threat Detection, and Incident Response. <strong>I am currently seeking a PFE internship</strong> to apply my skills in real-world cybersecurity environments and contribute to security operations, incident analysis, and threat detection workflows.
</p>
<p>
My main interests lie in SOC operations, threat hunting, and alert analysis, where I focus on identifying, investigating, and responding to potential security incidents in real time.
</p>
<p>
I enjoy exploring how SIEM and SOAR technologies can be integrated to automate detection and response, improve alert correlation, and streamline SOC workflows. I’m particularly interested in developing SOC playbooks, building automated detection pipelines, and applying threat intelligence for smarter defense strategies.
</p>
<p>
Alongside my Blue Team expertise, I have a strong baseline in Pentesting and Red Teaming, which helps me understand adversary techniques, tactics, and procedures (TTPs). This offensive knowledge enhances my ability to detect, analyze, and mitigate cyberattacks more effectively.
</p>
<p>
I’m continuously learning and evolving to become a versatile cybersecurity professional capable of bridging offensive and defensive security to strengthen organizational resilience against cyber threats.
</p>

        </div>
      </motion.div>
    </div>
  )
}
