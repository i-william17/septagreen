import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiCheckCircle,
  FiHeadphones,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiUsers,
} from 'react-icons/fi';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const fieldClass =
  'sg-form-field mt-2 dark:border-white/10 dark:bg-[#111418] dark:text-white dark:focus:border-[#0068B8]';

const labelClass = 'block text-sm font-bold text-[#24362b] dark:text-white/75';

const contactReasons = [
  'General inquiry',
  'Feedback',
  'Partnership',
  'Support tokens',
  'Product support',
  'Billing or account support',
];

const contactPaths = [
  {
    title: 'Feedback',
    text: 'Share product comments, service notes, website feedback, or ideas for improving SeptaGreen.',
    Icon: FiMessageSquare,
  },
  {
    title: 'Inquiries',
    text: 'Ask about services, availability, pricing direction, events, media, or general company information.',
    Icon: FiMail,
  },
  {
    title: 'Partnerships',
    text: 'Start a conversation about channel work, delivery partnerships, training, or joint security programs.',
    Icon: FiUsers,
  },
  {
    title: 'Support tokens',
    text: 'Get help with token access, support routing, product issues, and account-related requests.',
    Icon: FiHeadphones,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main className="bg-[#f5efe3] text-[#20232e] dark:bg-[#050608] dark:text-white">
        <section className="relative overflow-hidden bg-[#151718] pt-40 text-white md:pt-48">
          <div className="absolute inset-0 sg-grid-pattern opacity-20" />
          <div className="sg-shell-wide relative z-10 grid min-h-[72vh] gap-12 border-t border-white/15 pb-20 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h1 className="sg-display max-w-6xl">Reach the right team.</h1>
            </div>

            <div className="max-w-2xl lg:ml-auto">
              <p className="sg-body-large text-white/70">
                Use this page for feedback, inquiries, partnerships, support tokens, and general support. Assessment requests now have their own dedicated path.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:info@septagreen.com" className="sg-button sg-button-light">
                  Email us <FiArrowRight className="ml-2" />
                </a>
                <a href="tel:+254711160437" className="sg-button border border-white bg-transparent text-white hover:bg-white hover:text-[#151718]">
                  Call team
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="sg-section sg-section-muted dark:bg-[#050608]">
          <div className="sg-shell grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <aside className="space-y-6">
              <div className="border border-[#20232e]/15 bg-[#fffdf8] p-6 dark:border-white/10 dark:bg-white/5">
                <FiMessageSquare className="h-8 w-8 text-[#0068B8] dark:text-[#00B51D]" />
                <h2 className="sg-heading mt-6 text-3xl text-[#20232e] dark:text-white">What do you need?</h2>
                <p className="mt-4 leading-relaxed text-[#5d6568] dark:text-white/60">
                  Send the right context and SeptaGreen will route your message to the best person.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <a href="mailto:info@septagreen.com" className="group border border-[#20232e]/15 bg-[#fffdf8] p-5 transition hover:border-[#0068B8] dark:border-white/10 dark:bg-white/5">
                  <FiMail className="h-6 w-6 text-[#0068B8]" />
                  <p className="mt-4 text-sm text-[#5d6568] dark:text-white/50">Email</p>
                  <p className="mt-1 text-lg font-black text-[#20232e] dark:text-white">info@septagreen.com</p>
                </a>

                <a href="tel:+254711160437" className="group border border-[#20232e]/15 bg-[#fffdf8] p-5 transition hover:border-[#00B51D] dark:border-white/10 dark:bg-white/5">
                  <FiPhone className="h-6 w-6 text-[#00B51D]" />
                  <p className="mt-4 text-sm text-[#5d6568] dark:text-white/50">Phone</p>
                  <p className="mt-1 text-lg font-black text-[#20232e] dark:text-white">(+254) 711-160437</p>
                </a>
              </div>

              <div className="border border-[#151718] bg-[#151718] p-6 text-white dark:border-white/10">
                <FiMapPin className="h-6 w-6 text-[#00B51D]" />
                <p className="sg-heading mt-4 text-2xl">Kenya</p>
                <div className="mt-5 space-y-4">
                  {[
                    'Feedback and website comments',
                    'Partnership and program inquiries',
                    'Support tokens and product access help',
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <FiCheckCircle className="mt-1 h-5 w-5 flex-none text-[#00B51D]" />
                      <p className="text-sm leading-relaxed text-white/75">{item}</p>
                    </div>
                  ))}
                </div>
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
                  Name
                  <input className={fieldClass} required />
                </label>
                <label className={labelClass}>
                  Email
                  <input type="email" className={fieldClass} required />
                </label>
                <label className={labelClass}>
                  Organization
                  <input className={fieldClass} />
                </label>
                <label className={labelClass}>
                  Reason
                  <select className={fieldClass} required defaultValue="">
                    <option value="" disabled>Select reason</option>
                    {contactReasons.map((reason) => (
                      <option key={reason}>{reason}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className={`${labelClass} mt-6`}>
                Message
                <textarea
                  rows="7"
                  className={fieldClass}
                  placeholder="Tell us what you need help with"
                  required
                />
              </label>

              <button className="sg-button sg-button-primary mt-7 w-full dark:border-[#0068B8] dark:bg-[#0068B8] dark:text-white dark:hover:bg-transparent dark:hover:text-[#0068B8] sm:w-auto">
                Send message <FiArrowRight className="ml-2" />
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 border border-[#00B51D]/30 bg-[#faf6ee] p-4 text-[#20232e] dark:border-[#00B51D]/30 dark:bg-[#00B51D]/10 dark:text-white"
                >
                  Thanks. SeptaGreen will route your message to the right team.
                </motion.p>
              )}
            </form>
          </div>
        </section>

        <section className="sg-section sg-section-surface dark:bg-[#20232e]">
          <div className="sg-shell">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {contactPaths.map(({ title, text, Icon }) => (
                <article key={title} className="sg-card p-6 dark:bg-white/5">
                  <Icon className="h-6 w-6 text-[#0068B8] dark:text-[#00B51D]" />
                  <h2 className="sg-heading mt-8 text-3xl text-[#20232e] dark:text-white">{title}</h2>
                  <p className="mt-4 leading-relaxed text-[#5d6568] dark:text-white/60">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
