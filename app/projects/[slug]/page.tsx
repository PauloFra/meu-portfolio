"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Timeline from "@/app/components/Timeline";
import Navbar from "@/app/components/Navbar";
import SkillGrid from "@/app/components/SkillGrid";
import { experiences, projects, skills } from "@/app/lib/data";
import ProjectCard from "@/app/components/ProjectCard";
import ContactForm from "@/app/components/ContactForm";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.remove("vsc-initialized");
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-8 text-center"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent pt-200">
          Paulo Sergio
        </h1>
        <p className="mt-2 text-xl">
          Full-Stack Developer | Criando o futuro digital
        </p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mt-6 flex justify-center gap-4"
        >
          <a href="#projects" className="px-6 py-2 bg-blue-600 rounded-full">
            Projetos
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-blue-600 rounded-full"
          >
            Contato
          </a>
        </motion.div>
      </motion.header>

      {/* Skills Section */}
      <section className="p-8" id="skills">
        <h2 className="text-3xl font-semibold mb-6">Habilidades</h2>
        <SkillGrid skills={skills} />
      </section>

      {/* Projects Section */}
      <section className="p-8" id="projects">
        <h2 className="text-3xl font-semibold mb-6">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="p-8" id="experience">
        <h2 className="text-3xl font-semibold mb-6">Experiência</h2>
        <Timeline experiences={experiences} />
      </section>

      {/* Contact Section */}
      <section className="p-8 bg-gray-800/50" id="contact">
        <h2 className="text-3xl font-semibold mb-6">Contato</h2>
        <ContactForm />
      </section>
    </div>
  );
}
