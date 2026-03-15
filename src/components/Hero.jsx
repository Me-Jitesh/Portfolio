import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profile from "../assets/profile.png";

export default function Hero() {
  const skills = [
    {
      name: "Java",
      badge:
        "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
    },
    {
      name: "Spring Boot",
      badge:
        "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white",
    },
    {
      name: "Microservices",
      badge:
        "https://img.shields.io/badge/Microservices-FF6F00?style=for-the-badge&logo=apache",
    },
    {
      name: "Kafka",
      badge:
        "https://img.shields.io/badge/Kafka-000000?style=for-the-badge&logo=apachekafka",
    },
    {
      name: "Redis",
      badge:
        "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white",
    },
    {
      name: "MySQL",
      badge:
        "https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      name: "React",
      badge:
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    },
    {
      name: "AWS",
      badge:
        "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws",
    },
    {
      name: "Docker",
      badge:
        "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
    },
    {
      name: "Linux",
      badge:
        "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
    },
  ];

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-10 px-6 bg-white overflow-hidden"
    >
      {/* Cursor Glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-blue-200 rounded-full blur-[40px] opacity-60"
          animate={{
            x: [0, 300, -200, 0],
            y: [0, -200, 200, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-5 h-5 bg-blue-200 rounded-full"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              y: [null, -100],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center"
      >
        {/* TEXT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Building Scalable
            </span>
            <br />
            <span className="text-gray-900">Backend Systems</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Designing distributed, fault-tolerant systems with production-grade
            reliability.
          </p>

          {/* Skills */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {skills.map((skill, index) => (
              <motion.img
                key={index}
                src={skill.badge}
                alt={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="h-8 hover:scale-110 transition duration-300"
              />
            ))}
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-2xl blur-2xl opacity-40"></div>
            <img
              src={profile}
              alt="Profile"
              className="relative w-80 h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
