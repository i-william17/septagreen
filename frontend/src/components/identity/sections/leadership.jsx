import { motion, useReducedMotion } from 'framer-motion';
import { FiExternalLink, FiGlobe, FiLinkedin, FiTwitter } from 'react-icons/fi';
import founderPortrait from '../../../assets/potrait1.png';

export function LeadershipTeam() {
  const shouldReduceMotion = useReducedMotion();

  const member = {
    name: 'William Odhiambo',
    role: 'Founder and Lead Builder',
    bio: 'William brings together software development, cybersecurity practice, and product thinking. SeptaGreen reflects that overlap: usable digital products, stronger security posture, and practical guidance for teams building in African markets.',
    image: founderPortrait,
    social: {
      linkedin: 'https://www.linkedin.com/in/william-odhiambo-481689265/',
      twitter: 'https://twitter.com/talesofwilliam',
      website: 'https://www.williamwritescode.com',
    },
  };

  return (
    <section className="sg-section sg-section-surface text-[#20232e] dark:bg-[#050608] dark:text-white">
      <div className="sg-shell">
        <div className="grid gap-8 border-y border-[#20232e]/15 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end dark:border-white/10">
          <div>
            <h2 className="sg-section-title">Built by practitioners close to the work.</h2>
          </div>
          <p className="text-xl leading-relaxed text-[#5d6568] dark:text-white/60">
            The leadership story is intentionally direct: show the person behind the work, the operating philosophy, and the routes to verify credibility.
          </p>
        </div>

        <motion.article
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid overflow-hidden border border-[#20232e]/15 bg-[#faf6ee] dark:border-white/10 dark:bg-white/5 lg:grid-cols-[0.3fr_0.7fr]"
        >
          <div className="relative min-h-[260px] bg-[#20232e] md:min-h-[300px]">
            <img src={member.image} alt={member.name} className="h-full w-full object-cover opacity-[0.9]" />
            <div className="absolute inset-0 bg-[#151718]/22" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-3xl font-black">{member.name}</p>
              <p className="mt-1 text-[#0068B8]">{member.role}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 md:p-10">
            <div>
              <p className="text-2xl leading-relaxed text-[#4b5557] dark:text-white/70">{member.bio}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ['Primary focus', 'Secure product delivery'],
                  ['Working style', 'Hands-on assessment and build support'],
                ].map(([label, value]) => (
                  <div key={label} className="border border-[#20232e]/15 bg-[#fffdf8] p-4 dark:border-white/10 dark:bg-[#20232e]">
                    <p className="font-black">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                [member.social.linkedin, 'LinkedIn', FiLinkedin],
                [member.social.twitter, 'Twitter', FiTwitter],
                [member.social.website, 'Website', FiGlobe],
              ].map(([href, label, Icon]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#20232e]/15 bg-[#fffdf8] px-4 py-3 text-sm font-bold transition hover:border-[#20232e] dark:border-white/10 dark:bg-[#20232e] dark:hover:border-[#0068B8]"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                  <FiExternalLink className="h-3 w-3 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
