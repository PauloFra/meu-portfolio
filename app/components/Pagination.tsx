import { motion } from "framer-motion";

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
  if (totalPages <= 1) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-10 flex justify-center items-center space-x-2"
      >
        <button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className={`px-4 py-2 rounded-l-lg flex items-center ${
            page === 1
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 transition-colors"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Anterior
        </button>

        <div className="flex items-center space-x-1">
          {page > 3 && (
            <>
              <button
                onClick={() => goToPage(1)}
                className="w-10 h-10 flex items-center justify-center rounded bg-gray-700 hover:bg-gray-600"
              >
                1
              </button>
              {page > 4 && <span className="px-1 text-gray-500">...</span>}
            </>
          )}

          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum = Math.max(1, Math.min(totalPages - 4, page - 2) + i);
            if (totalPages <= 5) {
              pageNum = i + 1;
            }
            if (pageNum <= totalPages) {
              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`w-10 h-10 flex items-center justify-center rounded ${
                    pageNum === page
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {pageNum}
                </button>
              );
            }
            return null;
          })}

          {page < totalPages - 2 && (
            <>
              {page < totalPages - 3 && (
                <span className="px-1 text-gray-500">...</span>
              )}
              <button
                onClick={() => goToPage(totalPages)}
                className="w-10 h-10 flex items-center justify-center rounded bg-gray-700 hover:bg-gray-600"
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        <button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-r-lg flex items-center ${
            page === totalPages
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 transition-colors"
          }`}
        >
          Próxima
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </motion.div>

      <div className="mt-4 text-center text-gray-400 dark:text-gray-600">
        <p>
          Página {page} de {totalPages} ({total} posts)
        </p>
      </div>
    </>
  );
}
