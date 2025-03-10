import { motion } from "framer-motion";
import { Post } from "../types/global";

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.div
      key={post.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-6 bg-gray-800/50 dark:bg-gray-200/50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <a href={post.slug} target="_blank" className="block">
        <h2 className="text-2xl font-semibold text-white dark:text-gray-900 hover:text-blue-500 dark:hover:text-blue-600 transition-colors">
          {post.title}
        </h2>
        {post.date && (
          <p className="text-gray-400 dark:text-gray-600 text-sm mt-1">
            {post.date}
          </p>
        )}
        {post.excerpt && (
          <p className="text-gray-300 dark:text-gray-700 mt-2">
            {post.excerpt}
          </p>
        )}
      </a>
    </motion.div>
  );
}
