import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem } from './animations/StaggerAnimation';
import HoverAnimation from './animations/HoverAnimation';

const PortfolioPreview = () => {
  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      video: '/savoria.mp4'
    },
    {
      title: 'Cloud Infrastructure Migration',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4'
    },
    {
      title: 'Mobile Banking App',
      video: 'https://videos.pexels.com/video-files/17310952/17310952-uhd_2560_1440_30fps.mp4'
    },
    {
        title: 'Real Estate',
        video: '/RealEstate.mp4'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-bold font-montserrat text-navy-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>

        <StaggerContainer className="grid lg:grid-cols-3 gap-10 mb-16">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={index}>
              <HoverAnimation scale={1.03} y={-10}>
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 h-full transform hover:-translate-y-1">
                 <div 
                   className="relative overflow-hidden group"
                   style={{
                     height: '400px',
                     borderRadius: '20px 20px 0 0'
                   }}
                   onMouseEnter={(e) => {
                     const video = e.currentTarget.querySelector('video') as HTMLVideoElement;
                     if (video) {
                       video.currentTime = 0;
                       video.play().catch(console.error);
                     }
                   }}
                   onMouseLeave={(e) => {
                     const video = e.currentTarget.querySelector('video') as HTMLVideoElement;
                     if (video) {
                       video.pause();
                       video.currentTime = 0;
                     }
                   }}
                 > 
                  <video
                    className="w-full h-full object-contain bg-black transition-transform duration-500 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls={false}
                    poster=""
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy-900 font-montserrat text-center">
                    {project.title}
                  </h3>
                </div>
                </div>
              </HoverAnimation>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <HoverAnimation scale={1.05} y={-2}>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:shadow-2xl transition-all duration-300 group border-0"
            >
              Explore All Projects
              <motion.div
                className="group-hover:translate-x-2 transition-transform duration-300"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </Link>
          </HoverAnimation>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;