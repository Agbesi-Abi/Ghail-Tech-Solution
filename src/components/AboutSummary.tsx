import { motion } from 'framer-motion';
import { Target, Users, Award, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem } from './animations/StaggerAnimation';
import HoverAnimation from './animations/HoverAnimation';

const AboutSummary = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Empowering businesses through innovative technology solutions'
    },
    {
      icon: Users,
      title: '150+ Clients',
      description: 'Trusted by companies worldwide for digital transformation'
    },
    {
      icon: Award,
      title: '500+ Projects',
      description: 'Successfully delivered projects across various industries'
    },
    {
      icon: Code2,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold font-montserrat text-navy-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Ghail IT Solutions?
          </motion.h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            With over a decade of combined experience, we are a team of passionate professionals 
            dedicated to delivering exceptional IT solutions that transform how businesses operate in the digital age.
          </motion.p>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <StaggerItem key={index}>
              <HoverAnimation scale={1.05} y={-5}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-100 text-center h-full">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold font-montserrat text-navy-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 font-inter text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </HoverAnimation>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <HoverAnimation scale={1.05} y={-2}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-all duration-200 hover:shadow-lg"
            >
              Learn More About Us
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Code2 className="w-5 h-5" />
              </motion.div>
            </Link>
          </HoverAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
