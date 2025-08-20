import About from '../components/About';
import PageTransition from '../components/animations/PageTransition';

const AboutPage = () => {
  return (
    <PageTransition className="min-h-screen pt-20">
      <About />
    </PageTransition>
  );
};

export default AboutPage;
