"use client";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import SkillGrid from "./components/SkillGrid";
import ContactForm from "./components/ContactForm";
import Timeline from "./components/Timeline";
import { skills, experiences } from "./lib/data";
import { BookOpen, Award, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900">
      <Navbar />
      <section className="pt-20 pb-12 px-4 sm:px-8">
        <div className="max-w-4xl mt-5 mx-auto flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-32 h-32 flex-shrink-0"
          >
            <div className="absolute  inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded  blur-sm"></div>
            <Image
              src="/images/me.jpg"
              alt="Paulo Sergio"
              width={128}
              height={128}
              className="relative rounded object-cover border-2 border-blue-600/50 dark:border-blue-500/50 shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white dark:text-gray-900 tracking-tight">
              Paulo Sergio
            </h1>
            <p className="mt-2 text-xl md:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent dark:from-blue-600 dark:to-purple-600 font-medium">
              Desenvolvedor Full-Stack
            </p>
            <p className="mt-1 text-base md:text-lg text-gray-400 dark:text-gray-600 italic">
              Eu me especializo em construir aplicações web escaláveis e
              eficientes desde o início.
            </p>
            <div className="mt-6">
              <h2 className="text-xl md:text-2xl font-semibold text-white dark:text-gray-900">
                Sobre Mim
              </h2>
              <p className="mt-2 text-gray-300 dark:text-gray-700 text-base md:text-lg leading-relaxed">
                Sou um desenvolvedor pleno com 3 anos de experiência, dedicado a
                criar aplicações web que combinam funcionalidade e design
                intuitivo. Especialista em React, Next.js, TypeScript e Node.js,
                minha trajetória inclui projetos como um sistema inovador de
                gerenciamento de vagas no meu TCC e soluções de e-commerce na
                Usaflex com VTEX IO. Sou movido por colaboração, aprendizado
                contínuo e pela entrega de projetos escaláveis, sempre buscando
                elevar a experiência do usuário.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="px-4 sm:px-8 py-12 dark:bg-gray-200" id="skills">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 dark:text-gray-900">
            Habilidades
          </h2>
          <SkillGrid skills={skills} />
        </div>
      </section>

      <section className="px-4 sm:px-8 py-12 dark:bg-gray-200" id="experience">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 dark:text-gray-900">
            Experiência
          </h2>
          <Timeline experiences={experiences} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 p-6 bg-gradient-to-br from-gray-800/70 to-gray-900/70 dark:from-gray-200/70 dark:to-gray-300/70 rounded-xl shadow-lg border border-gray-700 dark:border-gray-400"
          >
            <h3 className="text-xl font-semibold text-white dark:text-gray-900">
              Usaflex
            </h3>
            <p className="text-gray-300 dark:text-gray-700 mt-2">
              Developing a new e-commerce platform using VTEX IO, ReactJS and
              NodeJS. Implementing new features and integrations inside OMNI
              Channel.
            </p>
            <a
              href="https://www.usaflex.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Visitar Loja Usaflex
            </a>
          </motion.div>
        </div>
      </section>

      <section className="px-4 sm:px-8 py-12 dark:bg-gray-200" id="education">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 dark:text-gray-900">
            Educação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Formação Acadêmica */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-gradient-to-br from-gray-800/70 to-gray-900/70 dark:from-gray-200/70 dark:to-gray-300/70 rounded-xl shadow-lg border border-gray-700 dark:border-gray-400"
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                <h3 className="text-xl font-semibold text-white dark:text-gray-900">
                  Formação Acadêmica
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 dark:text-gray-900 font-medium">
                    Senac RS
                  </p>
                  <p className="text-gray-400 dark:text-gray-700">
                    Curso Superior de Tecnologia (CST), Análise e
                    Desenvolvimento de Sistemas (ADS)
                  </p>
                  <p className="text-gray-500 dark:text-gray-600 text-sm">
                    Fev 2025 - Ago 2027
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 dark:text-gray-900 font-medium">
                    Senac RS
                  </p>
                  <p className="text-gray-400 dark:text-gray-700">
                    Técnico, Desenvolvimento de Software
                  </p>
                  <p className="text-gray-500 dark:text-gray-600 text-sm">
                    Fev 2022 - Out 2023
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-gradient-to-br from-gray-800/70 to-gray-900/70 dark:from-gray-200/70 dark:to-gray-300/70 rounded-xl shadow-lg border border-gray-700 dark:border-gray-400"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                <h3 className="text-xl font-semibold text-white dark:text-gray-900">
                  Licenças e Certificados
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 dark:text-gray-900 font-medium">
                    TargetTrust
                  </p>
                  <p className="text-gray-400 dark:text-gray-700">
                    Formação Primeiros Passos - Programação e Integração de
                    Sistemas
                  </p>
                  <p className="text-gray-500 dark:text-gray-600 text-sm">
                    Jan 2020 - Jan 2021
                  </p>
                  <a
                    href="https://targettrust.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-600 hover:underline text-sm"
                  >
                    Conhecer a Target Trust
                  </a>
                </div>
                <div>
                  <p className="text-gray-300 dark:text-gray-900 font-medium">
                    Udemy
                  </p>
                  <p className="text-gray-400 dark:text-gray-700">
                    Curso de JavaScript e TypeScript do básico ao avançado JS/TS
                  </p>
                  <p className="text-gray-500 dark:text-gray-600 text-sm">
                    Emitido em Fev 2025
                  </p>
                  <a
                    href="https://www.udemy.com/certificate/UC-4bc03b33-bc73-4c89-8be7-b0aa8dfd49d2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-600 hover:underline text-sm"
                  >
                    Ver credencial
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-2 p-6 bg-gradient-to-br from-gray-800/70 to-gray-900/70 dark:from-gray-200/70 dark:to-gray-300/70 rounded-xl shadow-lg border border-gray-700 dark:border-gray-400"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                <h3 className="text-xl font-semibold text-white dark:text-gray-900">
                  Programa Vem Ser | DBC Company
                </h3>
              </div>
              <p className="text-gray-300 dark:text-gray-700">
                Durante meu estágio na DBC Company, participei da criação de
                aplicações web utilizando{" "}
                <span className="font-medium">React, TypeScript e Redux</span>.
                Fui responsável por implementar funcionalidades interativas e
                otimizar a experiência do usuário, além de aprimorar a
                performance das aplicações.
              </p>
              <p className="text-gray-300 dark:text-gray-700 mt-2">
                No meu Projeto de TCC, desenvolvi um sistema de gerenciamento de
                candidatos e vagas, que inclui um módulo de login para
                autenticação de usuários, um processo para que os candidatos se
                matriculassem nas vagas disponíveis e um painel de administração
                que permite aos administradores alterar o status dos candidatos
                em cada vaga. O sistema foi projetado para proporcionar uma
                gestão eficiente e fluida de vagas e candidatos.
              </p>
              <p className="text-gray-300 dark:text-gray-700 mt-2">
                Esse projeto me permitiu aprimorar minhas habilidades em React e
                Redux, além de ganhar experiência em TypeScript, garantindo
                maior segurança e escalabilidade na aplicação.
              </p>
              <a
                href="https://www.dbccompany.com.br/vem-ser/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Saiba mais sobre o Vem Ser
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="px-4 sm:px-8 py-12 bg-gray-800/50 dark:bg-gray-300/50"
        id="contact"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 dark:text-gray-900">
            Contato
          </h2>
          <ContactForm />
          <div className="mt-12 text-center">
            <p className="mt-2 text-gray-300 dark:text-gray-700">
              Sinta-se à vontade para me contatar para qualquer dúvida ou
              oportunidade de colaboração.
            </p>
            <div className="mt-6 flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/paulo-sergio-fraga-marcos-56b247227/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 text-white rounded shadow-lg hover:from-blue-700 hover:to-blue-500 dark:hover:from-blue-600 dark:hover:to-blue-400 transition-all duration-300"
              >
                <Image
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/PauloFra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-600 dark:to-gray-400 text-white rounded shadow-lg hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-700 dark:hover:to-gray-500 transition-all duration-300"
              >
                <Image
                  src="/images/github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
