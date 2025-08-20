"use client";
import { motion } from "framer-motion";
import { Code, Smartphone, ShoppingCart, Search, Database, Layers } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Fast, modern, and responsive websites built for your business.",
    icon: <Code className="w-7 h-7 text-orange-500" />,
    color: "bg-blue-50"
  },
  {
    title: "E-Commerce",
    description: "Custom online stores with secure payments and smooth UX.",
    icon: <ShoppingCart className="w-7 h-7 text-orange-500" />,
    color: "bg-purple-50"
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform apps that engage users on iOS & Android.",
    icon: <Smartphone className="w-7 h-7 text-orange-500" />,
    color: "bg-green-50"
  },
  {
    title: "SEO Marketing",
    description: "Boost visibility with data-driven SEO & digital strategies.",
    icon: <Search className="w-7 h-7 text-orange-500" />,
    color: "bg-yellow-50"
  },
  {
    title: "Web Applications",
    description: "Scalable apps with secure backends and real-time features.",
    icon: <Database className="w-7 h-7 text-orange-500" />,
    color: "bg-red-50"
  },
  {
    title: "UI/UX Design",
    description: "Clean, intuitive designs that convert visitors to customers.",
    icon: <Layers className="w-7 h-7 text-orange-500" />,
    color: "bg-indigo-50"
  }
];

const NewServices = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Simple solutions designed to grow your business online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`rounded-xl shadow-md transition-all duration-300 hover:shadow-xl ${service.color}`}
            >
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-white shadow-sm">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default NewServices;
