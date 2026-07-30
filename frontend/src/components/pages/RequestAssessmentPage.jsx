import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiMail, FiMapPin, FiPhone, FiShield } from 'react-icons/fi';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const fieldClass =
  'sg-form-field mt-2 dark:border-white/10 dark:bg-[#111418] dark:text-white dark:focus:border-[#0068B8]';

const labelClass = 'block text-sm font-bold text-[#24362b] dark:text-white/75';

export default function RequestAssessmentPage() {
  const [submitted, setSubmitted] = useState(false);

  const selectGroups = [
    [
      'Service needed',
      [
        'Select service',
        'Red Team Simulation',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Secure Web Development',
        'E-Commerce Security',
        'Application Security',
        'Cloud Security',
        'Security Monitoring',
        'AI and Automation Security',
      ],
    ],
    ['Offensive security service', ['Red team simulation', 'Vulnerability assessment', 'Wireless assessment', 'Social engineering review']],
    ['Penetration testing service', ['Web application testing', 'API testing', 'Network testing', 'Mobile application testing']],
    ['Cloud security service', ['Cloud configuration review', 'Identity and access review', 'Architecture assessment', 'Container security review']],
    ['Application security service', ['Secure code review', 'Threat modeling', 'Secure SDLC support', 'Application architecture review']],
    ['Managed cybersecurity service', ['Exposure monitoring', 'Monthly vulnerability review', 'Incident response readiness', 'Security reporting']],
    ['Solution needed', ['Select solution', 'Security Awareness', 'Phishing Simulation', 'Ransomware Simulation']],
  ];

  return (
    <>
      <Header />
      <main className="bg-[#f5efe3] text-[#20232e] dark:bg-[#050608] dark:text-white">

        <section className="sg-section sg-section-muted dark:bg-[#050608]">
          <div className="sg-shell grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <aside className="space-y-6">
              <div className="border border-[#20232e]/15 bg-[#fffdf8] p-6 dark:border-white/10 dark:bg-white/5">
                <FiShield className="h-8 w-8 text-[#20232e] dark:text-[#00B51D]" />
                <h2 className="sg-heading mt-6 text-3xl text-[#20232e] dark:text-white">Get an assessment scope</h2>
                <p className="mt-4 leading-relaxed text-[#5d6568] dark:text-white/60">Share enough context for us to recommend the right security path.</p>
              </div>

              <div className="border border-[#151718] bg-[#151718] p-6 text-white dark:border-white/10">
                <div className="space-y-5">
                  {[
                    'We review your systems, goals, and timeline.',
                    'We recommend a scoped assessment track.',
                    'You receive a clear next step and delivery estimate.',
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <FiCheckCircle className="mt-1 h-5 w-5 flex-none text-[#00B51D]" />
                      <p className="text-sm leading-relaxed text-white/75">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#20232e]/15 bg-[#fffdf8] p-6 dark:border-white/10 dark:bg-white/5">
                <FiMapPin className="h-6 w-6 text-[#20232e] dark:text-[#0068B8]" />
                <p className="sg-heading mt-4 text-2xl text-[#20232e] dark:text-white">Kenya</p>
                <p className="mt-4 text-sm leading-relaxed text-[#5d6568] dark:text-white/60">Call the team for urgent scoping or send the form for a structured assessment request.</p>
              </div>
            </aside>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
              className="border border-[#20232e]/15 bg-[#fffdf8] p-5 dark:border-white/10 dark:bg-[#111418] md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className={labelClass}>
                  First name
                  <input className={fieldClass} required />
                </label>
                <label className={labelClass}>
                  Last name
                  <input className={fieldClass} required />
                </label>
                <label className={labelClass}>
                  Corporate email
                  <input type="email" className={fieldClass} required />
                </label>
                <label className={labelClass}>
                  Phone
                  <input type="tel" className={fieldClass} required />
                </label>
                <label className={`${labelClass} md:col-span-2`}>
                  Company name
                  <input className={fieldClass} required />
                </label>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {selectGroups.map(([label, options]) => (
                  <label key={label} className={labelClass}>
                    {label}
                    <select className={fieldClass} required>
                      {options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                ))}
                <label className={labelClass}>
                  Timeline
                  <select className={fieldClass}>
                    {['This month', '1-3 months', 'This quarter', 'Exploratory'].map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className={`${labelClass} mt-6`}>
                Project context
                <textarea
                  rows="6"
                  className={fieldClass}
                  placeholder="Systems, URLs, cloud platforms, compliance needs, or known concerns"
                />
              </label>

              <button className="sg-button sg-button-primary mt-7 w-full dark:border-[#0068B8] dark:bg-[#0068B8] dark:text-white dark:hover:bg-transparent dark:hover:text-[#0068B8] sm:w-auto">
                Request assessment <FiArrowRight className="ml-2" />
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 border border-[#00B51D]/30 bg-[#faf6ee] p-4 text-[#20232e] dark:border-[#00B51D]/30 dark:bg-[#00B51D]/10 dark:text-white"
                >
                  Thanks. The SeptaGreen team will follow up with a scoped next step.
                </motion.p>
              )}
            </form>
          </div>
        </section>

        <section className="relative mt-20 overflow-hidden bg-[#151718] pt-40 text-white md:pt-48">
          <div className="absolute inset-0 sg-grid-pattern opacity-25" />
          <div className="sg-shell-wide relative z-10 grid gap-12 border-t border-white/15 pb-16 pt-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <h1 className="sg-heading max-w-5xl text-5xl md:text-7xl lg:text-8xl">Protect your business against current cyber threats.</h1>
            </div>

            <div className="max-w-2xl lg:ml-auto">
              <p className="text-xl leading-relaxed text-white/70 md:text-2xl">Tell us about the systems, cloud workloads, applications, or users you need reviewed. We will scope a practical assessment and follow up with the right next step.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href="tel:+254711160437" className="group border border-white/15 bg-white/[0.06] p-5 backdrop-blur transition hover:border-[#0068B8]">
                  <FiPhone className="h-6 w-6 text-[#0068B8]" />
                  <p className="mt-4 text-sm text-white/50">Prefer a direct conversation?</p>
                  <p className="mt-1 text-2xl font-black">(+254) 711-160437</p>
                </a>
                <a href="mailto:info@septagreen.com" className="group border border-white/15 bg-white/[0.06] p-5 backdrop-blur transition hover:border-[#00B51D]">
                  <FiMail className="h-6 w-6 text-[#00B51D]" />
                  <p className="mt-4 text-sm text-white/50">Email</p>
                  <p className="mt-1 text-2xl font-black">info@septagreen.com</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
