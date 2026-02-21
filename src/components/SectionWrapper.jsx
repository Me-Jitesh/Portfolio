import { motion } from "framer-motion";

export default function SectionWrapper({ children, id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      {children}
    </motion.section>
  );
}
