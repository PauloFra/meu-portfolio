import { useEffect, useState } from "react";
import { Post } from "../types/global";

interface PostsResponse {
  posts: Post[];
  total: number;
  totalPages: number;
  page: number;
  limit: number;
}

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const POSTS_PER_PAGE = 5;

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}api/posts?page=${page}&limit=${POSTS_PER_PAGE}`
        );
        if (!response.ok) {
          throw new Error("Erro na resposta da API");
        }
        const data: PostsResponse = await response.json();

        setPosts(data.posts);
        setTotalPages(data.totalPages);
        setTotal(data.total);
      } catch (err: unknown) {
        setError(`Erro ao buscar posts: ${encodeURIComponent(String(err))}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [apiUrl, page]);

  const goToPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return {
    posts,
    loading,
    error,
    page,
    totalPages,
    total,
    goToPage,
  };
}
