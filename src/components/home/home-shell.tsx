"use client";

import { motion } from "framer-motion";
import { PortfolioPage } from "@/components/home/portfolio-page";

export function HomeShell() {
  return (
    <motion.section
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <PortfolioPage />
    </motion.section>
  );
}
