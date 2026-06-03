"use client";
import { motion } from "framer-motion";
import type { Experience } from "../lib/i18n";

export default function Timeline({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <motion.article
          key={`${exp.company}-${exp.title}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
        >
          <p className="font-mono text-xs text-accent">{exp.period}</p>
          <h3 className="mt-2 font-display text-xl font-semibold">
            {exp.title}
          </h3>
          <p className="text-sm text-muted">{exp.company}</p>
          <p className="mt-3 whitespace-pre-line leading-relaxed text-muted">
            {exp.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
