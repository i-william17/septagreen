import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useSitePreferences } from '../../context/SitePreferences';

const pageCopy = {
  careers: {
    title: 'Careers at SeptaGreen',
    text: 'Join a team building secure digital products, cybersecurity assessments, and managed protection for ambitious African organizations.',
  },
  'chat-support': {
    title: 'Talk to Xempi',
    text: 'Xempi is SeptaGreen’s support path for routing product, security, and service questions to the right team.',
  },
  shop: {
    title: 'SeptaGreen Shop',
    text: 'Security resources, digital products, and training materials will live here as the platform expands.',
  },
  developerx: {
    title: 'DeveloperX 2.0',
    text: 'DeveloperX supports secure builders with practical guidance, review paths, and product engineering standards.',
  },
};

export default function UtilityPage({ type = 'careers' }) {
  const { text } = useSitePreferences();
  const content = pageCopy[type] || pageCopy.careers;

  return (
    <>
      <Header />
      <main className="bg-white text-[#20232e] dark:bg-[#20232e] dark:text-white">
        <section className="bg-[#20232e] pt-40 text-white md:pt-48">
          <div className="sg-shell pb-20">
            <p className="sg-kicker font-bold text-[#0068B8]">SeptaGreen</p>
            <h1 className="sg-display mt-5 max-w-6xl font-black">{content.title}</h1>
            <p className="sg-body-large mt-8 max-w-3xl text-white/70">{content.text}</p>
            <Link to="/contact" className="mt-10 inline-flex items-center rounded-full bg-[#0068B8] px-6 py-4 font-bold text-white transition hover:bg-white">
              {text.nav.contact} <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
