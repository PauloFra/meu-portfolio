"use client";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme
        ? savedTheme === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });
  const [isMounted, setIsMounted] = useState(false);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIsMounted(true);
  }, [isDark]);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const previous = scrollY.getPrevious();
      setHidden(
        latest > 50 && (previous !== undefined ? latest > previous : false)
      );
    });
  }, [scrollY]);

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: -100 } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full bg-gray-900/80 dark:bg-gray-100/80 backdrop-blur-md p-4 flex justify-between items-center z-20"
    >
      <Link
        href="/"
        className="text-2xl font-bold text-white dark:text-gray-900"
      >
        Paulo Sergio
      </Link>
      <div className="flex gap-6 items-center">
        <Link
          href="#education"
          className="text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900"
        >
          Educação
        </Link>
        <Link
          href="/blog"
          className="text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900"
        >
          Blog
        </Link>
        <Link
          href="#contact"
          className="text-gray-300 hover:text-white dark:text-gray-700 dark:hover:text-gray-900"
        >
          Contato
        </Link>
        {/* Só renderiza o botão após montagem no cliente */}
        {isMounted && (
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 bg-gray-800 dark:bg-gray-200 rounded-full"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        )}
      </div>
    </motion.nav>
  );
}
