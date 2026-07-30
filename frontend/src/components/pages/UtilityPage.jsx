import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function UtilityPage({ type = 'careers' }) {
  return (
    <>
      <Header />
      <main className="bg-[#f5efe3] text-[#20232e] dark:bg-[#20232e] dark:text-white">
        <section className="relative overflow-hidden bg-[#151718] pt-40 text-white md:pt-48">
          <div className="absolute inset-0 sg-grid-pattern opacity-20" />
          <div className="sg-shell-wide relative border-t border-white/15 pb-20 pt-8">
            <h1 className="sg-display max-w-6xl font-black">
              {type === 'chat-support'
                ? 'Talk to Xempi'
                : type === 'shop'
                  ? 'SeptaGreen Shop'
                  : type === 'developerx'
                    ? 'DeveloperX 2.0'
                    : 'Careers at SeptaGreen'}
            </h1>
            <p className="sg-body-large mt-8 max-w-3xl text-white/70">
              {type === 'chat-support'
                ? 'Xempi is SeptaGreen’s support path for routing product, security, and service questions to the right team.'
                : type === 'shop'
                  ? 'Security resources, digital products, and training materials will live here as the platform expands.'
                  : type === 'developerx'
                    ? 'DeveloperX supports secure builders with practical guidance, review paths, and product engineering standards.'
                    : 'Join a team building secure digital products, cybersecurity assessments, and managed protection for ambitious African organizations.'}
            </p>
            <Link to="/contact" className="sg-button sg-button-brand mt-10">
              Contact <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
