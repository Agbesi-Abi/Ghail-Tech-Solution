"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const techCategories = [
  {
    name: "Frontend",
    items: [
      { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ]
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    ]
  },
  {
    name: "Mobile",
    items: [
      { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Swift", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Kotlin", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    ]
  },
  {
    name: "DevOps & Cloud",
    items: [
      { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "GitHub Actions", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    ]
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ]
  }
];

const TechStack = () => {
  const [x, setX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setX((prev) => (prev - 0.5) % 2000); // Smoother scroll
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl font-bold font-montserrat text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Technology Expertise
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-600 max-w-2xl mx-auto font-inter leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We leverage cutting-edge technologies to build scalable, reliable solutions
        </motion.p>

        {/* Category Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techCategories.map((category) => (
            <button
              key={category.name}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
            >
              {category.name}
            </button>
          ))}
        </div> */}

        {/* Sliding Tech Icons */}
        <div className="relative w-full overflow-hidden h-48">
          <motion.div
            className="flex gap-12 absolute top-0 left-0"
            animate={{ x }}
            transition={{ ease: "linear" }}
          >
            {[...techCategories.flatMap(c => c.items), ...techCategories.flatMap(c => c.items)].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center justify-center min-w-[120px] group"
                whileHover={{ scale: 1.15 }}
              >
                <div className="w-20 h-20 p-4 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:shadow-lg transition-all">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-700 group-hover:text-orange-500 transition-colors">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient fade effect */}
        <div className="absolute inset-x-0 h-48 pointer-events-none bg-gradient-to-r from-white via-white/0 to-white"></div>
      </div>
    </section>
  );
};

export default TechStack;