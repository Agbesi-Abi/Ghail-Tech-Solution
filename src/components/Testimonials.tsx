import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Solutions',
      company: 'TechStart Solutions',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Ghail IT Solutions transformed our entire digital infrastructure. Their expertise in cloud migration saved us 60% on operational costs while improving performance dramatically. The team is professional, responsive, and truly understands business needs.'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, InnovateCorp',
      company: 'InnovateCorp',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with Ghail IT Solutions was a game-changer for our e-commerce platform. They delivered a robust, scalable solution that handled our traffic surge during peak seasons. Their attention to detail and commitment to quality is outstanding.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Operations Director, HealthPlus',
      company: 'HealthPlus Medical',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The healthcare management system they built for us has revolutionized our patient care process. The integration was seamless, and their ongoing support has been exceptional. We saw a 90% improvement in operational efficiency.'
    },
    {
      name: 'David Park',
      position: 'Founder, FinanceFlow',
      company: 'FinanceFlow App',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Their mobile app development expertise helped us launch our fintech product successfully. The security implementation and user experience design exceeded our expectations. Now we have 50K+ active users and growing.'
    },
    {
      name: 'Lisa Thompson',
      position: 'VP Technology, RetailMax',
      company: 'RetailMax Chain',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Ghail IT Solutions provided comprehensive cybersecurity solutions that protected our business from multiple threats. Their proactive approach and 24/7 monitoring give us peace of mind. Highly recommended for any business serious about security.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      ref={testimonialsRef}
      className="py-20 bg-gradient-to-br from-navy-900 via-blue-900 to-blue-800 text-white opacity-0 translate-y-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-montserrat mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-orange-400" />
            </div>
            
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl font-inter leading-relaxed mb-6">
                "{testimonials[currentSlide].text}"
              </p>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
              />
              <div className="text-center sm:text-left">
                <h4 className="font-semibold font-montserrat text-lg">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-gray-300">
                  {testimonials[currentSlide].position}
                </p>
                <p className="text-orange-400 text-sm">
                  {testimonials[currentSlide].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-orange-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="mt-16 border-t border-white/20 pt-16">
          <p className="text-center text-gray-300 mb-8 font-inter">
            Trusted by leading companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 opacity-60">
            {testimonials.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <span className="text-white font-semibold text-sm">
                  {client.company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;