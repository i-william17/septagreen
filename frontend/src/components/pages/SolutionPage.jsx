import { Navigate, Link, useParams } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import clientImage from '../../assets/client.jpg';
import identityImage from '../../assets/ident.jpg';
import secThreeImage from '../../assets/sec3.jpg';

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

const getSolution = (slug) => solutions.find((solution) => solution.slug === slug);

export default function SolutionPage() {
  const { slug } = useParams();
  const solution = getSolution(slug);

  if (!solution) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      <main className="bg-[#f5efe3] text-[#20232e] dark:bg-[#20232e] dark:text-white">
        <section className="relative min-h-[78vh] overflow-hidden bg-[#151718] pt-40 text-white md:pt-48">
          <img src={solution.image} alt={solution.title} className="absolute inset-0 h-full w-full object-cover opacity-[0.46]" />
          <div className="absolute inset-0 bg-[#151718]/[0.68]" />
          <div className="absolute inset-0 sg-grid-pattern opacity-20" />
          <div className="sg-shell-wide relative z-10 border-t border-white/15 pb-16 pt-8">
            <h1 className="sg-display mt-5 max-w-6xl font-black">{solution.title}</h1>
            <p className="sg-body-large mt-8 max-w-3xl text-white/70">{solution.summary}</p>
          </div>
        </section>

        <section className="sg-section sg-section-surface dark:bg-[#20232e]">
          <div className="sg-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="sg-section-title font-black">Train, simulate, measure, improve.</h2>
            </div>
            <div className="border-y border-[#20232e]/30 bg-[#fffdf8]/60 dark:border-white/20 dark:bg-white/[0.03]">
              {[
                ['01', 'Scope the business risk', 'Understand systems, goals, constraints, and the most important outcomes before testing begins.'],
                ['02', 'Test with discipline', 'Blend manual expertise, tooling, and controlled exploitation to validate realistic attack paths.'],
                ['03', 'Report what matters', 'Translate findings into ranked priorities, proof, remediation guidance, and leadership-ready context.'],
                ['04', 'Retest and improve', 'Verify fixes, refine controls, and help teams turn assessment work into better security operations.'],
              ].map(([number, title, text]) => (
                <div key={title} className="grid gap-5 border-b border-[#20232e]/15 py-6 last:border-b-0 dark:border-white/10 md:grid-cols-[4rem_1fr]">
                  <p className="font-bold text-[#0068B8]">{number}</p>
                  <div>
                    <h3 className="text-2xl font-black text-[#20232e] dark:text-white">{title}</h3>
                    <p className="mt-2 leading-relaxed text-[#5d6568] dark:text-white/60">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sg-section sg-section-dark">
          <div className="sg-shell">
            <div className="grid gap-5 md:grid-cols-3">
              {solutions.map((item) => (
                <Link key={item.slug} to={`/solutions/${item.slug}`} className="sg-card-dark group p-6">
                  <FiCheck className="text-[#0068B8]" />
                  <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/60">{item.summary}</p>
                  <span className="mt-6 inline-flex items-center font-bold group-hover:text-[#0068B8]">
                    View solution <FiArrowRight className="ml-2" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
