"use client";

import { motion, MotionProps } from "framer-motion";
import { PropsWithChildren } from "react";

interface RevealProps extends MotionProps {
  className?: string;
}

export default function Reveal({ children, className, ...rest }: PropsWithChildren<RevealProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}