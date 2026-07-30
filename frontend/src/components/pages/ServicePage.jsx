import { Navigate, Link, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import awardImage from '../../assets/award.jpg';
import cloudImage from '../../assets/pexels-googledeepmind-17483873.jpg';
import codeImage from '../../assets/pexels-luis-gomes-166706-546819.jpg';
import cyberImage from '../../assets/cyber.jpg';
import expandImage from '../../assets/expand.jpg';
import homeImage from '../../assets/home.jpg';
import physicalImage from '../../assets/physical.jpg';
import secOneImage from '../../assets/sec1.jpg';
import secTwoImage from '../../assets/sec2.jpg';

const services = [
  {
    slug: 'red-team',
    title: 'Red Team Simulation',
    shortTitle: 'Red Team',
    category: 'Offensive Security',
    image: cyberImage,
    summary:
      'Realistic adversary simulations across digital, social, and operational entry points to test detection and response.',
    detail:
      'SeptaGreen plans controlled attack paths, validates business risk, and turns technical findings into response improvements your team can practice.',
    bullets: ['Threat-led scenario design', 'Detection and response validation', 'Executive risk briefing'],
  },
  {
    slug: 'penetration-testing',
    title: 'Penetration Testing',
    shortTitle: 'Penetration Testing',
    category: 'Offensive Security',
    image: secOneImage,
    summary:
      'Manual and automated testing for applications, infrastructure, APIs, and exposed digital assets.',
    detail:
      'The assessment combines exploitation, configuration review, and remediation guidance so your team understands both the weakness and the fix.',
    bullets: ['Web and API testing', 'Network and infrastructure testing', 'Remediation retesting'],
  },
  {
    slug: 'vulnerability-assessment',
    title: 'Vulnerability Assessment',
    shortTitle: 'Vulnerability Assessment',
    category: 'Offensive Security',
    image: secTwoImage,
    summary:
      'Find, prioritize, and track vulnerabilities across critical systems before they become incidents.',
    detail:
      'The output is tuned for practical remediation: affected assets, risk severity, exploitability, owner assignment, and treatment priority.',
    bullets: ['Exposure discovery', 'Risk scoring', 'Remediation roadmap'],
  },
  {
    slug: 'web-development',
    title: 'Secure Web Development',
    shortTitle: 'Web Development',
    category: 'Digital Platforms',
    image: codeImage,
    summary:
      'Business websites, portals, dashboards, and application frontends designed for speed, usability, and security.',
    detail:
      'SeptaGreen pairs product design with secure engineering practices so digital platforms look sharp and ship with guardrails.',
    bullets: ['Responsive product interfaces', 'Secure frontend architecture', 'Performance and accessibility polish'],
  },
  {
    slug: 'ecommerce-security',
    title: 'E-Commerce Security',
    shortTitle: 'E-Commerce',
    category: 'Digital Platforms',
    image: expandImage,
    summary:
      'Secure storefronts, payment flows, customer accounts, and operational dashboards for growing commerce brands.',
    detail:
      'The service focuses on checkout trust, data handling, authentication, and continuous hardening of the customer journey.',
    bullets: ['Checkout and account review', 'Payment flow hardening', 'Fraud and abuse controls'],
  },
  {
    slug: 'application-security',
    title: 'Application Security',
    shortTitle: 'Application Security',
    category: 'Digital Platforms',
    image: homeImage,
    summary:
      'Security design reviews, application testing, and secure development support for teams building software.',
    detail:
      'From architecture to release readiness, the team helps engineering groups reduce security debt without slowing product momentum.',
    bullets: ['Threat modeling', 'Architecture review', 'Secure SDLC support'],
  },
  {
    slug: 'cloud-security',
    title: 'Cloud Security',
    shortTitle: 'Cloud Security',
    category: 'Cloud and Managed Security',
    image: cloudImage,
    summary:
      'Configuration reviews, identity hardening, and cloud architecture assessments for modern environments.',
    detail:
      'SeptaGreen reviews identity, storage, network exposure, logging, and deployment patterns to reduce avoidable cloud risk.',
    bullets: ['Identity and access review', 'Configuration assessment', 'Cloud architecture hardening'],
  },
  {
    slug: 'security-monitoring',
    title: 'Security Monitoring',
    shortTitle: 'Security Monitoring',
    category: 'Cloud and Managed Security',
    image: physicalImage,
    summary:
      'Continuous visibility, alert triage, and vulnerability follow-up for teams that need security momentum.',
    detail:
      'The managed track keeps risk visible through dashboards, recurring reviews, and operational recommendations.',
    bullets: ['Exposure monitoring', 'Alert triage support', 'Monthly risk reporting'],
  },
  {
    slug: 'ai-security',
    title: 'AI and Automation Security',
    shortTitle: 'AI Security',
    category: 'Cloud and Managed Security',
    image: awardImage,
    summary:
      'Security reviews for AI-enabled workflows, automation, data use, and model-adjacent application surfaces.',
    detail:
      'The assessment looks at data leakage, prompt abuse, access control, model workflow risk, and operational safeguards.',
    bullets: ['AI workflow review', 'Prompt and data risk testing', 'Governance recommendations'],
  },
];

const getService = (slug) => services.find((service) => service.slug === slug);

export default function ServicePage() {
  const { slug } = useParams();
  const shouldReduceMotion = useReducedMotion();
  const service = getService(slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const related = services.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="bg-[#f5efe3] text-[#20232e] dark:bg-[#20232e] dark:text-white">
        <section className="relative min-h-[82vh] overflow-hidden bg-[#151718] pt-40 text-white md:pt-48">
          <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover opacity-[0.42]" />
          <div className="absolute inset-0 bg-[#151718]/[0.68]" />
          <div className="absolute inset-0 sg-grid-pattern opacity-20" />

          <div className="sg-shell-wide relative z-10 border-t border-white/15 pb-16 pt-8">
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="sg-display mt-5 max-w-6xl font-black"
            >
              {service.title}
            </motion.h1>
            <p className="sg-body-large mt-8 max-w-3xl text-white/70">{service.summary}</p>
          </div>
        </section>

        <section className="sg-section sg-section-surface dark:bg-[#20232e]">
          <div className="sg-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="sg-section-title font-black">Built for useful outcomes, not checkbox reports.</h2>
            </div>
            <div>
              <p className="text-2xl leading-relaxed text-[#4b5557] dark:text-white/70">{service.detail}</p>
              <div className="mt-10 grid gap-4">
                {service.bullets.map((item) => (
                  <div key={item} className="flex items-center gap-3 border-t border-[#20232e]/15 py-4 text-xl font-bold text-[#20232e] dark:border-white/10 dark:text-white">
                    <FiCheckCircle className="text-[#0068B8]" />
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/request-assessment" className="sg-button sg-button-primary mt-10 dark:border-[#0068B8] dark:bg-[#0068B8] dark:text-white dark:hover:bg-transparent dark:hover:text-[#0068B8]">
                Request this service <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="sg-section sg-section-muted dark:bg-[#050608]">
            <div className="sg-shell">
              <div className="grid gap-5 md:grid-cols-3">
                {related.map((item) => (
                  <Link key={item.slug} to={`/services/${item.slug}`} className="sg-card group p-6 dark:bg-white/5">
                    <h3 className="text-2xl font-black text-[#20232e] dark:text-white">{item.title}</h3>
                    <p className="mt-4 leading-relaxed text-[#5d6568] dark:text-white/60">{item.summary}</p>
                    <span className="mt-6 inline-flex items-center font-bold text-[#20232e] group-hover:text-[#0068B8] dark:text-[#0068B8]">
                      Learn more <FiArrowRight className="ml-2" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
