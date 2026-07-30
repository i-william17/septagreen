import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiShield } from 'react-icons/fi';
import awardImage from '../../assets/award.jpg';
import clientImage from '../../assets/client.jpg';
import cloudImage from '../../assets/pexels-googledeepmind-17483873.jpg';
import codeImage from '../../assets/pexels-luis-gomes-166706-546819.jpg';
import cyberImage from '../../assets/cyber.jpg';
import expandImage from '../../assets/expand.jpg';
import homeImage from '../../assets/home.jpg';
import identityImage from '../../assets/ident.jpg';
import physicalImage from '../../assets/physical.jpg';
import secOneImage from '../../assets/sec1.jpg';
import secTwoImage from '../../assets/sec2.jpg';
import secThreeImage from '../../assets/sec3.jpg';

const serviceGroups = [
  {
    heading: 'Offensive Security',
    description: 'Simulate real attackers before real attackers find the gap.',
    links: ['red-team', 'penetration-testing', 'vulnerability-assessment'],
  },
  {
    heading: 'Digital Platforms',
    description: 'Build web products, commerce platforms, and application layers with security in the design.',
    links: ['web-development', 'ecommerce-security', 'application-security'],
  },
  {
    heading: 'Cloud and Managed Security',
    description: 'Harden cloud estates, monitor exposure, and keep security operations moving.',
    links: ['cloud-security', 'security-monitoring', 'ai-security'],
  },
];

const services = [
  {
    slug: 'red-team',
    title: 'Red Team Simulation',
    shortTitle: 'Red Team',
    image: cyberImage,
    summary:
      'Realistic adversary simulations across digital, social, and operational entry points to test detection and response.',
  },
  {
    slug: 'penetration-testing',
    title: 'Penetration Testing',
    shortTitle: 'Penetration Testing',
    image: secOneImage,
    summary:
      'Manual and automated testing for applications, infrastructure, APIs, and exposed digital assets.',
  },
  {
    slug: 'vulnerability-assessment',
    title: 'Vulnerability Assessment',
    shortTitle: 'Vulnerability Assessment',
    image: secTwoImage,
    summary:
      'Find, prioritize, and track vulnerabilities across critical systems before they become incidents.',
  },
  { slug: 'web-development', shortTitle: 'Web Development', image: codeImage },
  { slug: 'ecommerce-security', shortTitle: 'E-Commerce', image: expandImage },
  { slug: 'application-security', shortTitle: 'Application Security', image: homeImage },
  { slug: 'cloud-security', shortTitle: 'Cloud Security', image: cloudImage },
  { slug: 'security-monitoring', shortTitle: 'Security Monitoring', image: physicalImage },
  { slug: 'ai-security', shortTitle: 'AI Security', image: awardImage },
];

const solutions = [
  {
    slug: 'security-awareness',
    title: 'Security Awareness',
    summary:
      'Practical training that helps teams identify phishing, credential abuse, social engineering, and unsafe data handling.',
    image: clientImage,
  },
  {
    slug: 'phishing-simulation',
    title: 'Phishing Simulation',
    summary:
      'Realistic campaigns that measure staff readiness and convert mistakes into targeted learning.',
    image: identityImage,
  },
  {
    slug: 'ransomware-simulation',
    title: 'Ransomware Simulation',
    summary:
      'Scenario-based exercises that test decision-making, recovery planning, communication, and business continuity.',
    image: secThreeImage,
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const featured = services.slice(0, 3);

  return (
    <section className="sg-section sg-section-dark">
      <div className="sg-shell">
        <div className="grid gap-10 border-y border-white/15 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <h2 className="sg-section-title font-black">
              Test your defenses before attackers do.
            </h2>
          </div>
          <p className="sg-body-large text-white/70">
            SeptaGreen combines offensive security, secure digital product delivery, cloud review, and managed monitoring for teams that need visible risk reduction.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featured.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.58, delay: index * 0.08 }}
              className="sg-card-dark group overflow-hidden"
            >
              <div className="sg-media relative h-72 border-0 bg-[#151718]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover opacity-[0.78] transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#151718]/[0.28]" />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-3xl font-black">{service.title}</h3>
                <p className="mt-4 min-h-24 leading-relaxed text-white/60">{service.summary}</p>
                <Link to={`/services/${service.slug}`} className="sg-link-line mt-7 inline-flex items-center font-bold text-white">
                  Learn more <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <h3 className="sg-heading text-4xl md:text-6xl">Modern teams, critical systems, and digital growth.</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {serviceGroups.map((group) => (
              <motion.div
                key={group.heading}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.5 }}
                className="sg-card-dark p-5"
              >
                <FiShield className="h-7 w-7 text-[#0068B8]" />
                <h4 className="mt-6 text-2xl font-bold">{group.heading}</h4>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{group.description}</p>
                <div className="mt-5 space-y-2">
                  {group.links.map((slug) => {
                    const service = services.find((item) => item.slug === slug);
                    return (
                      service && (
                        <Link key={slug} to={`/services/${slug}`} className="flex items-center gap-2 text-sm text-white/75 transition hover:text-white">
                          <FiCheck className="text-[#00B51D]" /> {service.shortTitle}
                        </Link>
                      )
                    );
                  })}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.5 }}
              className="border border-[#00B51D]/[0.35] bg-[#00B51D]/[0.07] p-5 md:col-span-2"
            >
              <div className="grid gap-4 md:grid-cols-3">
                {solutions.map((solution) => (
                  <Link key={solution.slug} to={`/solutions/${solution.slug}`} className="group block border-t border-white/15 pt-4">
                    <h4 className="text-xl font-bold transition group-hover:text-[#0068B8]">{solution.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{solution.summary}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
