import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiMail, FiMapPin, FiPhone, FiShield } from 'react-icons/fi';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { services, solutions } from '../../data/siteContent';
import { useSitePreferences } from '../../context/SitePreferences';

const fieldClass =
  'mt-2 w-full rounded-none border border-[#d6ded8] bg-white px-4 py-3 text-sm text-[#20232e] outline-none transition focus:border-[#20232e] focus:ring-2 focus:ring-[#20232e]/10 dark:border-white/10 dark:bg-[#111827] dark:text-white dark:focus:border-[#00B51D]';

const labelClass = 'block text-sm font-bold text-[#24362b] dark:text-white/75';

export default function ContactPage() {
  const { text } = useSitePreferences();
  const [submitted, setSubmitted] = useState(false);
  const c = text.contact;

  const selectGroups = [
    [c.service, ['Select service', ...services.map((service) => service.title)]],
    [c.offensive, ['Red team simulation', 'Vulnerability assessment', 'Wireless assessment', 'Social engineering review']],
    [c.penetration, ['Web application testing', 'API testing', 'Network testing', 'Mobile application testing']],
    [c.cloud, ['Cloud configuration review', 'Identity and access review', 'Architecture assessment', 'Container security review']],
    [c.app, ['Secure code review', 'Threat modeling', 'Secure SDLC support', 'Application architecture review']],
    [c.managed, ['Exposure monitoring', 'Monthly vulnerability review', 'Incident response readiness', 'Security reporting']],
    [c.solution, ['Select solution', ...solutions.map((solution) => solution.title)]],
  ];

  return (
    <>
      <Header />
      <main className="bg-[#f7faf8] text-[#20232e] dark:bg-[#050608] dark:text-white">
        <section className="relative overflow-hidden bg-[#20232e] pt-40 text-white md:pt-48">
          <div className="absolute inset-0 sg-grid-pattern opacity-25" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7faf8] to-transparent dark:from-[#050608]" />
          <div className="sg-shell relative z-10 grid gap-12 pb-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="sg-kicker font-bold text-[#0068B8]">{c.kicker}</p>
              <h1 className="sg-heading mt-5 max-w-5xl text-5xl md:text-7xl lg:text-8xl">{c.title}</h1>
            </div>

            <div className="max-w-2xl lg:ml-auto">
              <p className="text-xl leading-relaxed text-white/70 md:text-2xl">{c.body}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href="tel:+254711160437" className="group border border-white/15 bg-white/10 p-5 backdrop-blur transition hover:border-[#0068B8]">
                  <FiPhone className="h-6 w-6 text-[#0068B8]" />
                  <p className="mt-4 text-sm text-white/50">{c.phoneTitle}</p>
                  <p className="mt-1 text-2xl font-black">(+254) 711-160437</p>
                </a>
                <a href="mailto:info@septagreen.com" className="group border border-white/15 bg-white/10 p-5 backdrop-blur transition hover:border-[#00B51D]">
                  <FiMail className="h-6 w-6 text-[#00B51D]" />
                  <p className="mt-4 text-sm text-white/50">{c.emailLabel}</p>
                  <p className="mt-1 text-2xl font-black">info@septagreen.com</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="sg-shell grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <aside className="space-y-6">
              <div className="border border-[#d6ded8] bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <FiShield className="h-8 w-8 text-[#20232e] dark:text-[#00B51D]" />
                <h2 className="sg-heading mt-6 text-3xl text-[#20232e] dark:text-white">{c.formTitle}</h2>
                <p className="mt-4 leading-relaxed text-gray-600 dark:text-white/60">{c.formBody}</p>
              </div>

              <div className="border border-[#d6ded8] bg-[#20232e] p-6 text-white dark:border-white/10">
                <p className="text-sm font-bold uppercase text-[#0068B8]">{c.nextTitle}</p>
                <div className="mt-6 space-y-5">
                  {c.nextSteps.map((item) => (
                    <div key={item} className="flex gap-3">
                      <FiCheckCircle className="mt-1 h-5 w-5 flex-none text-[#00B51D]" />
                      <p className="text-sm leading-relaxed text-white/75">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#d6ded8] bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <FiMapPin className="h-6 w-6 text-[#20232e] dark:text-[#0068B8]" />
                <p className="mt-4 text-sm font-bold uppercase text-gray-400">{c.location}</p>
                <p className="sg-heading mt-1 text-2xl text-[#20232e] dark:text-white">Kenya</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-white/60">{c.phoneBody}</p>
              </div>
            </aside>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
              className="border border-[#cfd9d2] bg-white p-5 shadow-2xl shadow-[#20232e]/10 dark:border-white/10 dark:bg-[#111827] md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className={labelClass}>
                  {c.firstName}
                  <input className={fieldClass} required />
                </label>
                <label className={labelClass}>
                  {c.lastName}
                  <input className={fieldClass} required />
                </label>
                <label className={labelClass}>
                  {c.email}
                  <input type="email" className={fieldClass} required />
                </label>
                <label className={labelClass}>
                  {c.phone}
                  <input type="tel" className={fieldClass} required />
                </label>
                <label className={`${labelClass} md:col-span-2`}>
                  {c.company}
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
                  {c.timeline}
                  <select className={fieldClass}>
                    {c.timelineOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className={`${labelClass} mt-6`}>
                {c.message}
                <textarea
                  rows="6"
                  className={fieldClass}
                  placeholder={c.messagePlaceholder}
                />
              </label>

              <button className="mt-7 inline-flex w-full items-center justify-center border-2 border-[#20232e] bg-[#20232e] px-6 py-4 text-sm font-bold uppercase text-white transition hover:bg-transparent hover:text-[#20232e] dark:border-[#0068B8] dark:bg-[#0068B8] dark:text-white dark:hover:bg-transparent sm:w-auto">
                {c.submit} <FiArrowRight className="ml-2" />
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 border border-[#00B51D]/30 bg-[#f3f7f6] p-4 text-[#20232e] dark:border-[#00B51D]/30 dark:bg-[#00B51D]/10 dark:text-white"
                >
                  {c.success}
                </motion.p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
