import Hero from '../components/Hero';
import AboutSummary from '../components/AboutSummary';
import TechStack from '../components/TechStack';
import PortfolioPreview from '../components/PortfolioPreview';
import CallToAction from '../components/CallToAction';
import PageTransition from '../components/animations/PageTransition';
import NewServices from '../components/newservice';

const HomePage = () => {
  return (
    <PageTransition className="min-h-screen">
      <Hero />
      <AboutSummary />
      <TechStack />
      <NewServices />
      <PortfolioPreview />
      <CallToAction />
    </PageTransition>
  );
};

export default HomePage;
