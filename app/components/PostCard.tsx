"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Post } from "../types/global";

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
    >
      <a
        href={post.slug}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {post.date && (
          <p className="font-mono text-xs text-accent">{post.date}</p>
        )}
        <h2 className="mt-2 flex items-start justify-between gap-3 font-display text-xl font-semibold transition-colors group-hover:text-accent">
          {post.title}
          <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-muted" />
        </h2>
        {post.excerpt && (
          <p className="mt-2 leading-relaxed text-muted">{post.excerpt}</p>
        )}
      </a>
    </motion.div>
  );
}
