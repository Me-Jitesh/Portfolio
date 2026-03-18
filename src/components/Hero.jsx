import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profile from "../assets/profile.png";

export default function Hero() {
  const skills = [
    "Java",
    "Spring Boot",
    "Kafka",
    "Microservices",
    "Spring AI",
    "MySQL",
    "React",
    "Javascript",
    "Docker",
    "AWS",
    "Redis",
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
            As a backend developer starting my career, I’m focused on
            strengthening my fundamentals in system design, reliability, and
            scalable architecture.
            {/* I’m building a strong foundation in backend development, with a growing interest in distributed systems and designing reliable, production-ready applications. */}
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
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="px-4 py-2 text-sm font-medium 
                           bg-white/70 backdrop-blur-md 
                           text-blue-600 
                           rounded-full 
                           border border-blue-100 
                           shadow-sm
                           hover:shadow-lg 
                           hover:-translate-y-1 
                           transition duration-300"
              >
                {skill}
              </motion.span>
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
