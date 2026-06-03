"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function LangToggle() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      className="flex items-center rounded-full border border-line p-0.5 font-mono text-xs"
      role="group"
      aria-label={t.a11y.lang}
    >
      {(["pt", "en"] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === code
              ? "bg-accent text-accent-fg"
              : "text-muted hover:text-fg"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

function ThemeToggle() {
  const { t } = useLanguage();
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return <div className="h-9 w-9" />;

  return (
    <button
      onClick={toggle}
      aria-label={t.a11y.theme}
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const previous = scrollY.getPrevious() ?? 0;
      setHidden(latest > 80 && latest > previous);
    });
  }, [scrollY]);

  const links = [
    { href: "/#about", label: t.nav.about },
    { href: "/#experience", label: t.nav.experience },
    { href: "/#education", label: t.nav.education },
    { href: "/blog", label: t.nav.blog },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-110%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-30 border-b border-line/70 bg-bg/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-8">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-fg"
        >
          paulo<span className="text-accent">.</span>dev
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-1 flex items-center gap-2">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={t.a11y.menu}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-fg"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line/70 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3 sm:px-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
