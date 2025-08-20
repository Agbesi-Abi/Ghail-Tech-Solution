import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioRef = useRef<HTMLElement>(null);

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

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      video: 'https://videos.pexels.com/video-files/3196036/3196036-hd_1920_1080_25fps.mp4'
    },
    {
      title: 'Cloud Infrastructure Migration',
      video: 'https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4'
    },
    {
      title: 'Mobile Banking App',
      video: 'https://videos.pexels.com/video-files/4466054/4466054-hd_1920_1080_25fps.mp4'
    },
    {
      title: 'Healthcare Management System',
      video: 'https://videos.pexels.com/video-files/3195331/3195331-hd_1920_1080_25fps.mp4'
    },
    {
      title: 'Real-Time Analytics Dashboard',
      video: 'https://videos.pexels.com/video-files/3196008/3196008-hd_1920_1080_25fps.mp4'
    },
    {
      title: 'Cybersecurity Audit Platform',
      video: 'https://videos.pexels.com/video-files/3195333/3195333-hd_1920_1080_25fps.mp4'
    }
  ];

  return (
    <section
      id="portfolio"
      ref={portfolioRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white opacity-0 translate-y-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-navy-900 mb-4">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Explore our successful projects and see how we've helped businesses transform through technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div 
                className="relative overflow-hidden h-64"
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
                  className="w-full h-full object-cover transition-transform duration-300"
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls={false}
                  poster=""
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold font-montserrat text-navy-900 text-center">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 font-inter mb-6">
            Want to see more of our work or discuss your project?
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;