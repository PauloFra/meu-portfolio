import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  slug: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  slug,
}: Project) {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg border border-gray-700 cursor-pointer"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
        <div className="flex gap-2 mt-4 flex-wrap">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
