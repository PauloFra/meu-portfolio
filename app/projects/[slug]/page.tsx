"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";
import SkillGrid from "../../components/SkillGrid";
import ContactForm from "../../components/ContactForm";
import Timeline from "../../components/Timeline";
import { projects, skills, experiences } from "../../lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900">
      <Navbar />
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-8 pt-16 text-center"
      >
        <h1 className="text-5xl pb-1 font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600">
          Paulo Sergio
        </h1>
        <p className="mt-2 text-xl dark:text-gray-700">
          Full-Stack Developer | Criando o futuro digital
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mt-6 flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-2 bg-blue-600 dark:bg-blue-500 rounded-full text-white"
          >
            Projetos
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-blue-600 dark:border-blue-500 rounded-full dark:text-blue-500"
          >
            Contato
          </a>
        </motion.div>
      </motion.header>

      <section className="p-8 dark:bg-gray-200" id="skills">
        <h2 className="text-3xl font-semibold mb-6 dark:text-gray-900">
          Habilidades
        </h2>
        <SkillGrid skills={skills} />
      </section>

      <section className="p-8 dark:bg-gray-200" id="projects">
        <h2 className="text-3xl font-semibold mb-6 dark:text-gray-900">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="p-8 dark:bg-gray-200" id="experience">
        <h2 className="text-3xl font-semibold mb-6 dark:text-gray-900">
          Experiência
        </h2>
        <Timeline experiences={experiences} />
      </section>

      <section className="p-8 bg-gray-800/50 dark:bg-gray-300/50" id="contact">
        <h2 className="text-3xl font-semibold mb-6 dark:text-gray-900">
          Contato
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}
