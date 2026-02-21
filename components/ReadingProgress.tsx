"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ReadingProgress() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Only show on post pages
    setShow(window.location.pathname.startsWith("/posts/") && window.location.pathname !== "/posts/");
  }, []);

  if (!show) return null;

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="reading-progress-bar w-full"
    />
  );
}
