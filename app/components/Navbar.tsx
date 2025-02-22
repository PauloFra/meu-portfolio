"use client";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setHidden(latest > 50 && latest > scrollY.getPrevious());
    });
  }, [scrollY]);

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: -100 } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md p-4 flex justify-between items-center z-20"
    >
      <Link href="/" className="text-2xl font-bold text-white">
        [Seu Nome]
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="#projects" className="text-gray-300 hover:text-white">
          Projetos
        </Link>
        <Link href="/blog" className="text-gray-300 hover:text-white">
          Blog
        </Link>
        <Link href="#contact" className="text-gray-300 hover:text-white">
          Contato
        </Link>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 bg-gray-800 rounded-full"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </motion.nav>
  );
}
