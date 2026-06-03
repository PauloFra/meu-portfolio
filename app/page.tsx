"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  BookOpen,
  Award,
  Briefcase,
} from "lucide-react";
import Navbar from "./components/Navbar";
import SkillGrid from "./components/SkillGrid";
import ContactForm from "./components/ContactForm";
import Timeline from "./components/Timeline";
import { skills } from "./lib/data";
import { useLanguage } from "./context/LanguageContext";

const LINKEDIN = "https://www.linkedin.com/in/paulosfraga";
const GITHUB = "https://github.com/PauloFra";
const EMAIL = "paulosergiofragamarcos@gmail.com";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  index,
  title,
  sub,
}: {
  index: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="mb-10">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-2 text-muted">{sub}</p>}
    </Reveal>
  );
}

const cardClass = "rounded-2xl border border-line bg-surface p-6";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Atmosfera de fundo */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute left-1/2 top-[-10%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-4 pb-20 pt-28 sm:px-8 sm:pt-36">
        <div className="grid items-center gap-10 md:grid-cols-5 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="md:col-span-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t.hero.available}
            </span>

            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Paulo Sergio
            </h1>
            <p className="mt-3 font-mono text-lg text-accent sm:text-xl">
              {t.hero.role}
            </p>
            <p className="mt-5 max-w-md text-balance text-lg leading-relaxed text-muted">
              {t.hero.tagline}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                {t.hero.ctaContact}
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-fg transition hover:border-accent hover:text-accent"
              >
                {t.hero.ctaWork}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="ml-1 flex items-center gap-1">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
              <li className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {t.hero.facts.location}
              </li>
              <li>{t.hero.facts.focus}</li>
              <li>{t.hero.facts.current}</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="md:col-span-2"
          >
            <div className="group relative mx-auto max-w-xs">
              <div className="absolute -inset-3 -z-10 rounded-3xl border border-accent/30" />
              <div className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
                <Image
                  src="/images/paulo.jpg"
                  alt="Paulo Sergio"
                  fill
                  priority
                  sizes="(max-width: 768px) 18rem, 20rem"
                  className="object-cover object-top grayscale-[15%] transition duration-500 group-hover:grayscale-0"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-8">
        <SectionHeading index="01" title={t.about.kicker} />
        <div className="grid gap-8 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <h3 className="font-display text-2xl font-semibold leading-snug text-balance">
              {t.about.title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {t.about.body}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className={cardClass}>
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                {t.nav.contact}
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-fg transition hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {EMAIL}
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-fg transition hover:text-accent"
                >
                  <Linkedin className="h-4 w-4 text-accent" />
                  /in/paulosfraga
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-fg transition hover:text-accent"
                >
                  <Github className="h-4 w-4 text-accent" />
                  /PauloFra
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-5xl px-4 py-16 sm:px-8">
        <SectionHeading
          index="02"
          title={t.sections.skills}
          sub={t.sections.skillsSub}
        />
        <Reveal>
          <SkillGrid skills={skills} />
        </Reveal>
      </section>

      {/* EXPERIÊNCIA */}
      <section id="experience" className="mx-auto max-w-5xl px-4 py-16 sm:px-8">
        <SectionHeading
          index="03"
          title={t.sections.experience}
          sub={t.sections.experienceSub}
        />
        <Timeline experiences={t.experiences} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.highlights.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <div className={`${cardClass} flex h-full flex-col`}>
                <h3 className="font-display text-xl font-semibold">
                  {item.name}
                </h3>
                <p className="mt-2 flex-1 text-muted">{item.body}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 self-start font-mono text-sm text-accent transition hover:gap-2.5"
                >
                  {item.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section id="education" className="mx-auto max-w-5xl px-4 py-16 sm:px-8">
        <SectionHeading
          index="04"
          title={t.sections.education}
          sub={t.sections.educationSub}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className={`${cardClass} h-full`}>
              <div className="mb-4 flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-accent" />
                <h3 className="font-display text-lg font-semibold">
                  {t.education.academic.title}
                </h3>
              </div>
              <div className="space-y-5">
                {t.education.academic.items.map((item) => (
                  <div key={item.course}>
                    <p className="font-medium">{item.org}</p>
                    <p className="text-sm text-muted">{item.course}</p>
                    <p className="mt-1 font-mono text-xs text-muted/80">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={`${cardClass} h-full`}>
              <div className="mb-4 flex items-center gap-3">
                <Award className="h-5 w-5 text-accent" />
                <h3 className="font-display text-lg font-semibold">
                  {t.education.certs.title}
                </h3>
              </div>
              <div className="space-y-5">
                {t.education.certs.items.map((item) => (
                  <div key={item.course}>
                    <p className="font-medium">{item.org}</p>
                    <p className="text-sm text-muted">{item.course}</p>
                    <p className="mt-1 font-mono text-xs text-muted/80">
                      {item.period}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm text-accent hover:underline"
                    >
                      {item.linkLabel}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-2">
            <div className={cardClass}>
              <div className="mb-4 flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-accent" />
                <h3 className="font-display text-lg font-semibold">
                  {t.education.vemSer.title}
                </h3>
              </div>
              <div className="space-y-3 text-muted">
                {t.education.vemSer.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <a
                href={t.education.vemSer.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
              >
                {t.education.vemSer.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-16 sm:px-8">
        <SectionHeading
          index="05"
          title={t.sections.contact}
          sub={t.sections.contactSub}
        />
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">
              {t.contact.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-8">
          <p className="font-mono text-sm text-fg">
            paulo<span className="text-accent">.</span>dev
          </p>
          <p className="text-center text-xs text-muted">{t.footer.built}</p>
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Paulo Sergio
          </p>
        </div>
      </footer>
    </div>
  );
}
