"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Post = {
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
};

export default function Blog() {
  const posts: Post[] = [
    {
      title: "Otimização Next.js",
      slug: "https://private-rosemary-98c.notion.site/Otimiza-o-Next-js-1a5cc42d51b08053a00fc99955b64822?pvs=73",
      excerpt: "Dicas avançadas para melhorar a performance do Next.js.",
      date: "24 de Fevereiro, 2025",
    },
    {
      title: "TypeScript Avançado",
      slug: "https://private-rosemary-98c.notion.site/TypeScript-Next-js-Mastery-1a5cc42d51b080479ae5c8019585195a",
      excerpt: "Explorando tipos complexos e boas práticas.",
      date: "20 de Fevereiro, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 bg-clip-text text-transparent">
          Blog
        </h1>
        <p className="text-gray-300 dark:text-gray-700 mb-8">
          Meu espaço para compartilhar conhecimento e experiências.
        </p>

        <div className="grid gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-gray-800/50 dark:bg-gray-200/50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href={`${post.slug}`} className="block" target="_blank">
                <h2 className="text-2xl font-semibold text-white dark:text-gray-900 hover:text-blue-500 dark:hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 dark:text-gray-600 text-sm mt-1">
                  {post.date}
                </p>
                <p className="text-gray-300 dark:text-gray-700 mt-2">
                  {post.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            ← Voltar para Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
