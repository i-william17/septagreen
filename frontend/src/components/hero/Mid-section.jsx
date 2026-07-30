import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiAward, FiCloud, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import cyberImage from '../../assets/cyber.jpg';

export default function MidSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="sg-section sg-section-surface text-[#20232e] dark:bg-[#050608] dark:text-white">
      <div className="absolute inset-0 sg-grid-pattern opacity-45 dark:opacity-15" />
      <div className="sg-shell relative z-10">
        <div className="grid gap-10 border-y border-[#20232e]/15 py-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end dark:border-white/10">
          <div>
            <h2 className="sg-section-title font-black">
              Evidence-led security for teams that have to move fast.
            </h2>
          </div>
          <p className="sg-body-large text-[#5d6568] dark:text-white/60">
            Every engagement is designed around decision-ready findings, technical proof, and next steps your engineers and executives can understand.
          </p>
        </div>

        <div className="mt-12 grid gap-0 border border-[#20232e]/15 bg-[#fffdf8] md:grid-cols-3 dark:border-white/10 dark:bg-white/[0.04]">
          {[
            {
              title: 'Manual security testing',
              text: 'Human-led assessment work that goes deeper than automated scanning and produces findings your team can act on.',
              Icon: FiAward,
            },
            {
              title: 'Cloud and AI readiness',
              text: 'Security reviews for cloud workloads, modern applications, data flows, and AI-assisted products.',
              Icon: FiCloud,
            },
            {
              title: 'Executive reporting',
              text: 'Clear risk narratives, remediation priorities, and business-facing summaries for leadership teams.',
              Icon: FiFileText,
            },
          ].map(({ title, text, Icon }, index) => {
            return (
              <motion.article
                key={title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group border-b border-[#20232e]/15 p-6 transition hover:bg-[#faf6ee] md:border-b-0 md:border-r md:last:border-r-0 dark:border-white/10 dark:hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center text-[#0068B8] dark:text-[#00B51D]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="sg-heading mt-10 text-2xl text-[#20232e] dark:text-white">{title}</h3>
                <p className="mt-4 leading-relaxed text-[#5d6568] dark:text-white/60">{text}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="sg-media relative min-h-[440px] bg-[#151718]"
          >
            <img src={cyberImage} alt="Security operations review" className="h-full w-full object-cover opacity-[0.78]" />
            <div className="absolute inset-0 bg-[#151718]/[0.35]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
              <h3 className="sg-heading text-3xl md:text-5xl">From assessment to action.</h3>
            </div>
          </motion.div>

          <div className="border-y border-[#20232e]/30 bg-[#fffdf8]/60 dark:border-white/20 dark:bg-white/[0.03]">
            {[
              ['01', 'Scope the business risk', 'Understand systems, goals, constraints, and the most important outcomes before testing begins.'],
              ['02', 'Test with discipline', 'Blend manual expertise, tooling, and controlled exploitation to validate realistic attack paths.'],
              ['03', 'Report what matters', 'Translate findings into ranked priorities, proof, remediation guidance, and leadership-ready context.'],
              ['04', 'Retest and improve', 'Verify fixes, refine controls, and help teams turn assessment work into better security operations.'],
            ].map(([number, title, text], index) => (
              <motion.div
                key={title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="grid gap-4 border-b border-[#20232e]/15 px-0 py-6 last:border-b-0 dark:border-white/10 md:grid-cols-[4rem_1fr]"
              >
                <span className="font-bold text-[#0068B8]">{number}</span>
                <div>
                  <h4 className="sg-heading text-2xl text-[#20232e] dark:text-white">{title}</h4>
                  <p className="mt-2 leading-relaxed text-[#5d6568] dark:text-white/60">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Link to="/contact" className="sg-link-line mt-10 inline-flex items-center font-bold text-[#20232e] dark:text-[#0068B8]">
          Talk to a security consultant <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
