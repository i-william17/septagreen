import { Navigate, Link, useParams } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { getSolution, processSteps, solutions } from '../../data/siteContent';

export default function SolutionPage() {
  const { slug } = useParams();
  const solution = getSolution(slug);

  if (!solution) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      <main className="bg-white text-[#20232e] dark:bg-[#20232e] dark:text-white">
        <section className="relative min-h-[78vh] overflow-hidden bg-[#20232e] pt-40 text-white md:pt-48">
          <img src={solution.image} alt={solution.title} className="absolute inset-0 h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#20232e] via-[#20232e]/90 to-black/80" />
          <div className="sg-shell relative z-10 pb-16">
            <p className="sg-kicker font-bold text-[#00B51D]">Solution</p>
            <h1 className="sg-display mt-5 max-w-6xl font-black">{solution.title}</h1>
            <p className="sg-body-large mt-8 max-w-3xl text-white/70">{solution.summary}</p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="sg-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="sg-kicker font-bold text-[#0068B8] dark:text-[#0068B8]">Delivery rhythm</p>
              <h2 className="sg-section-title mt-4 font-black">Train, simulate, measure, improve.</h2>
            </div>
            <div className="border-y border-[#20232e] dark:border-white/20">
              {processSteps.map(([number, title, text]) => (
                <div key={title} className="grid gap-5 border-b border-[#20232e]/15 py-6 last:border-b-0 dark:border-white/10 md:grid-cols-[4rem_1fr]">
                  <p className="font-bold text-[#0068B8]">{number}</p>
                  <div>
                    <h3 className="text-2xl font-black text-[#20232e] dark:text-white">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600 dark:text-white/60">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#20232e] py-20 text-white md:py-28">
          <div className="sg-shell">
            <p className="sg-kicker font-bold text-[#0068B8]">Other solutions</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {solutions.map((item) => (
                <Link key={item.slug} to={`/solutions/${item.slug}`} className="group border border-white/10 p-6 transition hover:border-[#0068B8]">
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
