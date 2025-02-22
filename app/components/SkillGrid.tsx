"use client";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  icon: string;
};

export default function SkillGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg"
        >
          <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
          <span className="text-gray-300">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
