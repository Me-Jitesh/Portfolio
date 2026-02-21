import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center relative">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Jitesh Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-400 text-lg"
        >
          Backend Engineer • Kafka • Distributed Systems • Cloud
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="mt-10 inline-block px-8 py-3 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 backdrop-blur-lg hover:bg-cyan-400/30 transition"
        >
          View Work
        </motion.a>
      </div>
    </section>
  );
}
