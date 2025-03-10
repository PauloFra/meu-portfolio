"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePosts } from "../hooks/usePosts";
import { PostCard } from "../components/PostCard";
import { Pagination } from "../components/Pagination";
import { Loading } from "../components/Loading";
import { LoadingOverlay } from "../components/LoadingOverlay";
import { ErrorState } from "../components/ErrorState";
import { EmptyState } from "../components/EmptyState";
import { Post } from "../types/global";

export default function Blog() {
  const { posts, loading, error, page, totalPages, total, goToPage } =
    usePosts();

  if (loading && page === 1) return <Loading />;
  if (error) return <ErrorState error={error} retry={() => goToPage(1)} />;
  if (!posts || posts.length === 0) return <EmptyState />;

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
          <span className="text-blue-400 dark:text-blue-600 ml-2">
            {total} posts disponíveis
          </span>
        </p>

        {/* Loading overlay para mudança de página */}
        {loading && page > 1 && <LoadingOverlay />}

        {/* Lista de posts */}
        <div className="grid gap-6">
          {Array.isArray(posts) &&
            posts.map((post: Post, index: number) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          total={total}
          goToPage={goToPage}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
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
