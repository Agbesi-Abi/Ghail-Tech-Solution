import { useEffect, useRef } from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'We empower businesses through innovative technology solutions that drive sustainable growth and digital transformation.'
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Your success is our priority. We build lasting partnerships by delivering personalized solutions that exceed expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service and project delivery.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions that give your business a competitive advantage.'
    }
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white opacity-0 translate-y-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat text-navy-900 mb-4">
            About Ghail IT Solutions
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Founded with a vision to bridge the gap between business goals and technology capabilities, 
            we are a team of passionate professionals dedicated to delivering exceptional IT solutions 
            that transform how businesses operate in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold font-montserrat text-navy-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-navy-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold font-montserrat mb-4">
                Why Choose Us?
              </h3>
              <p className="text-gray-300 font-inter leading-relaxed mb-6">
                With over a decade of combined experience, our team brings deep technical expertise 
                and industry insights to every project. We don't just deliver solutions – we build 
                partnerships that drive long-term success.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Proven track record with 500+ successful projects
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Certified professionals and industry experts
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  24/7 support and maintenance services
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Agile methodology and transparent communication
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold font-montserrat text-orange-400">10+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold font-montserrat text-orange-400">150+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold font-montserrat text-orange-400">50+</div>
                  <div className="text-sm text-gray-300">Team Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl font-bold font-montserrat text-orange-400">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;