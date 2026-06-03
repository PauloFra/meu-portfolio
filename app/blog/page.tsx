"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePosts } from "../hooks/usePosts";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
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
  const { t } = useLanguage();

  if (loading && page === 1) return <Loading />;
  if (error) return <ErrorState error={error} retry={() => goToPage(1)} />;
  if (!posts || posts.length === 0) return <EmptyState />;

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute left-1/2 top-[-10%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <Navbar />

      <main className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-8 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-accent">/blog</span>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.blog.title}
          </h1>
          <p className="mt-3 text-muted">
            {t.blog.subtitle}
            <span className="ml-2 font-mono text-accent">
              {total} {t.blog.available}
            </span>
          </p>
        </motion.div>

        {loading && page > 1 && <LoadingOverlay />}

        <div className="mt-10 grid gap-5">
          {posts.map((post: Post, index: number) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          total={total}
          goToPage={goToPage}
        />

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition hover:border-accent hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.blog.back}
          </Link>
        </div>
      </main>
    </div>
  );
}
