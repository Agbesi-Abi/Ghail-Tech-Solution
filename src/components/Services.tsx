import { useEffect, useRef } from 'react';
import { Code, Headphones, Cloud, TrendingUp, Shield, Database, Smartphone, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './animations/StaggerAnimation';
import HoverAnimation from './animations/HoverAnimation';

const Services = () => {
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and responsive design.',
      features: ['React & Next.js', 'E-commerce Solutions', 'CMS Development', 'API Integration']
    },
    {
      icon: Headphones,
      title: 'IT Support',
      description: 'Comprehensive technical support and maintenance services to keep your systems running smoothly.',
      features: ['24/7 Monitoring', 'Help Desk Support', 'System Maintenance', 'Network Management']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      features: ['AWS & Azure', 'Cloud Migration', 'Backup Solutions', 'DevOps Services']
    },
    {
      icon: TrendingUp,
      title: 'Digital Strategy',
      description: 'Strategic consulting to align technology with your business goals and drive digital transformation.',
      features: ['Digital Consulting', 'Process Automation', 'Technology Roadmap', 'ROI Analysis']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Robust security solutions to protect your business from cyber threats and ensure compliance.',
      features: ['Security Audits', 'Threat Protection', 'Compliance Management', 'Data Encryption']
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Advanced data analytics and management solutions to turn your data into actionable insights.',
      features: ['Data Analytics', 'Business Intelligence', 'Database Design', 'Data Visualization']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration of various software systems to improve efficiency and data flow.',
      features: ['API Development', 'Third-party Integration', 'Legacy System Modernization', 'Workflow Automation']
    }
  ];

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-20 bg-white opacity-0 translate-y-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-navy-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Comprehensive IT solutions tailored to meet your business needs and drive sustainable growth.
          </p>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <HoverAnimation scale={1.03} y={-8}>
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group h-full">
                  <motion.div 
                    className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold font-montserrat text-navy-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 font-inter mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    className="w-full bg-transparent border-2 border-orange-500 text-orange-500 py-2 px-4 rounded-lg font-medium hover:bg-orange-500 hover:text-white transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </HoverAnimation>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-16">
          <p className="text-gray-600 font-inter mb-6">
            Need a custom solution? We'd love to discuss your specific requirements.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Get Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;