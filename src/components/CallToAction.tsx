import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import HoverAnimation from './animations/HoverAnimation';

const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-t-4 border-orange-500 pt-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-montserrat text-navy-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <HoverAnimation scale={1.05} y={-2}>
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </HoverAnimation>
          
          <HoverAnimation scale={1.05} y={-2}>
            <a
              href="tel:+233242076797"
              className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </HoverAnimation>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
