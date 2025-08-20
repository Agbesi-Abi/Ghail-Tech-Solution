import Services from '../components/Services';
import PageTransition from '../components/animations/PageTransition';

const ServicesPage = () => {
  return (
    <PageTransition className="min-h-screen pt-20">
      <Services />
    </PageTransition>
  );
};

export default ServicesPage;
