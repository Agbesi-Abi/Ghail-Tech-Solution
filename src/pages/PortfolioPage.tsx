import Portfolio from '../components/Portfolio';
import PageTransition from '../components/animations/PageTransition';

const PortfolioPage = () => {
  return (
    <PageTransition className="min-h-screen pt-20">
      <Portfolio />
    </PageTransition>
  );
};

export default PortfolioPage;
