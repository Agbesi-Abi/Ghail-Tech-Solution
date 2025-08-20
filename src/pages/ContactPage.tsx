import Contact from '../components/Contact';
import PageTransition from '../components/animations/PageTransition';

const ContactPage = () => {
  return (
    <PageTransition className="min-h-screen pt-20">
      <Contact />
    </PageTransition>
  );
};

export default ContactPage;
