import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './animations/StaggerAnimation';
import HoverAnimation from './animations/HoverAnimation';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/1200x/57/c7/b9/57c7b9a85cf14be352b7a591562f9c85.jpg"
          alt="Modern office technology workspace with IT professionals working on computers and digital solutions"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy-900/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-[80vh] text-center">
{/* Content */}
<StaggerContainer className="max-w-4xl space-y-8 text-white">
  <StaggerItem>
    <div className="space-y-6">
      <motion.h1 
        className="text-4xl sm:text-5xl lg:text-7xl font-bold font-montserrat leading-tight"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <motion.span 
          className="inline-block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
        >
          Smart IT Solutions
        </motion.span>{' '}
        <motion.span 
          className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 inline-block"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          That Drive Growth
        </motion.span>
      </motion.h1>

      <motion.p 
        className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto font-inter leading-relaxed"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
      >
        We help businesses scale with website & mobile app development, and digital solutions built for results.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex gap-4">
          <HoverAnimation>
            <a 
              href="mailto:contact@yourcompany.com" 
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20 hover:border-white/40"
              aria-label="Contact us via email"
            >
              <Mail className="w-5 h-5" /> Email
            </a>
          </HoverAnimation>
          
          <HoverAnimation>
            <a 
              href="https://wa.me/yourphonenumber" 
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-green-600/30"
              aria-label="Chat with us on WhatsApp"
            >
              <Phone className="w-5 h-5" /> WhatsApp
            </a>
          </HoverAnimation>
        </div>
      </motion.div>
    </div>
  </StaggerItem>
</StaggerContainer>

        </div>
      </div>
    </section>
  );
};

export default Hero;