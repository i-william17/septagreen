import { motion } from 'framer-motion';
import { FiExternalLink, FiGlobe, FiLinkedin, FiTwitter } from 'react-icons/fi';
import will from '../../../assets/will.jpg';
import { useSitePreferences } from '../../../context/SitePreferences';

export function LeadershipTeam() {
  const { text } = useSitePreferences();

  const member = {
    name: 'William Odhiambo',
    role: text.identity.leaderRole,
    bio: text.identity.leaderBio,
    image: will,
    social: {
      linkedin: 'https://www.linkedin.com/in/william-odhiambo-481689265/',
      twitter: 'https://twitter.com/talesofwilliam',
      website: 'https://wwc-one.vercel.app/',
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 text-[#20232e] dark:bg-[#050608] dark:text-white md:py-28">
      <div className="sg-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="sg-kicker font-bold text-[#0068B8] dark:text-[#0068B8]">{text.identity.leadershipKicker}</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{text.identity.leadershipTitle}</h2>
          </div>
          <p className="text-xl leading-relaxed text-gray-600 dark:text-white/60">
            {text.identity.leadershipBody}
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid overflow-hidden border border-[#d6ded8] bg-[#f7faf8] dark:border-white/10 dark:bg-white/5 lg:grid-cols-[0.48fr_0.52fr]"
        >
          <div className="relative min-h-[460px] bg-[#20232e]">
            <img src={member.image} alt={member.name} className="h-full w-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#20232e] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-3xl font-black">{member.name}</p>
              <p className="mt-1 text-[#0068B8]">{member.role}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 md:p-10">
            <div>
              <p className="text-2xl leading-relaxed text-gray-700 dark:text-white/70">{member.bio}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  [text.identity.primaryFocus, text.identity.primaryFocusValue],
                  [text.identity.workingStyle, text.identity.workingStyleValue],
                ].map(([label, value]) => (
                  <div key={label} className="border border-[#d6ded8] bg-white p-4 dark:border-white/10 dark:bg-[#20232e]">
                    <p className="text-xs font-bold uppercase text-gray-400">{label}</p>
                    <p className="mt-2 font-black">{value}</p>
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
                  className="inline-flex items-center gap-2 border border-[#cfd9d2] bg-white px-4 py-3 text-sm font-bold transition hover:border-[#20232e] dark:border-white/10 dark:bg-[#20232e] dark:hover:border-[#0068B8]"
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
