"use client";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "../hooks/isMobile";
import { useLanguage } from "../context/LanguageContext";

interface PaginationProps {
  page: number;
  totalPages: number;
  total: number;
  goToPage: (page: number) => void;
}

export function Pagination({
  page,
  totalPages,
  total,
  goToPage,
}: PaginationProps) {
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  if (totalPages <= 1) return null;

  const maxVisiblePages = isMobile ? 3 : 5;
  let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  if (endPage === totalPages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const arrowBtn =
    "grid h-10 w-10 place-items-center rounded-full border border-line transition-colors disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:border-accent enabled:hover:text-accent";

  const numberBtn = (active: boolean) =>
    `grid h-10 w-10 place-items-center rounded-full text-sm transition-colors ${
      active
        ? "bg-accent text-accent-fg font-medium"
        : "border border-line text-muted hover:border-accent hover:text-fg"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-12 flex flex-col items-center gap-4"
    >
      <div className="flex items-center gap-2">
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className={arrowBtn}
          aria-label={t.blog.prev}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {!isMobile && !pageNumbers.includes(1) && (
          <>
            <button onClick={() => goToPage(1)} className={numberBtn(false)}>
              1
            </button>
            {pageNumbers[0] > 2 && <span className="px-1 text-muted">…</span>}
          </>
        )}

        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => goToPage(num)}
            className={numberBtn(num === page)}
          >
            {num}
          </button>
        ))}

        {!isMobile && !pageNumbers.includes(totalPages) && (
          <>
            {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
              <span className="px-1 text-muted">…</span>
            )}
            <button
              onClick={() => goToPage(totalPages)}
              className={numberBtn(false)}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className={arrowBtn}
          aria-label={t.blog.next}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="font-mono text-xs text-muted">
        {t.blog.page} {page} {t.blog.of} {totalPages} · {total} {t.blog.posts}
      </p>
    </motion.div>
  );
}
