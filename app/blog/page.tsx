"use client";
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    { title: "Otimização Next.js", slug: "otimizacao-nextjs" },
    { title: "TypeScript Avançado", slug: "typescript-avancado" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-6"
      >
        Blog
      </motion.h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-4 bg-gray-800 rounded-lg"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}
