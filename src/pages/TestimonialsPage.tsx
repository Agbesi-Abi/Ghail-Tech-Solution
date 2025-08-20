import Testimonials from '../components/Testimonials';
import PageTransition from '../components/animations/PageTransition';

const TestimonialsPage = () => {
  return (
    <PageTransition className="min-h-screen pt-20">
      <Testimonials />
    </PageTransition>
  );
};

export default TestimonialsPage;
