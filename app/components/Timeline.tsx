"use client";
import { motion } from "framer-motion";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export default function Timeline({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full before:border-4 before:border-gray-900 dark:before:border-gray-100"
        >
          <h3 className="text-xl font-semibold text-white dark:text-gray-900">
            {exp.title}
          </h3>
          <p className="text-gray-400 dark:text-gray-600">
            {exp.company} | {exp.period}
          </p>
          <p className="text-gray-300 dark:text-gray-700 mt-2">
            {exp.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
