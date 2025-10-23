import { MissionStatement } from './sections/mission';
import { CoreValues } from './sections/values'; 
import { CompanyTimeline } from './sections/timeline';
import { LeadershipTeam } from './sections/leadership';
import  ClientShowcase from './sections/clients';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <MissionStatement />
      <CoreValues />
      <CompanyTimeline />
      <LeadershipTeam />
      <ClientShowcase />
      <Footer />
    </>
  );
};

export default AboutPage;