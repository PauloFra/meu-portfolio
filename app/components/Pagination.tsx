import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/isMobile";

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

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    // Para mobile, mostramos menos números de página
    const maxVisiblePages = isMobile ? 3 : 5;
    const pageNumbers = [];

    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  // Versão mobile simplificada
  if (isMobile) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-col space-y-4"
        >
          {/* Indicador de página atual */}
          <div className="text-center text-sm text-gray-400 dark:text-gray-600">
            <span>
              Página {page} de {totalPages} ({total} posts)
            </span>
          </div>

          {/* Controles de paginação */}
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              className={`px-3 py-2 rounded-lg flex items-center justify-center ${
                page === 1
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 transition-colors"
              }`}
              aria-label="Página anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </button>

            {pageNumbers.map((num) => (
              <button
                key={num}
                onClick={() => goToPage(num)}
                className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm ${
                  num === page
                    ? "bg-blue-600 text-white font-medium"
                    : "bg-gray-700 hover:bg-gray-600 transition-colors"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              className={`px-3 py-2 rounded-lg flex items-center justify-center ${
                page === totalPages
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 transition-colors"
              }`}
              aria-label="Próxima página"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
          </div>
        </motion.div>
      </>
    );
  }

  // Versão desktop
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
          {/* Primeira página e ellipsis */}
          {!pageNumbers.includes(1) && (
            <>
              <button
                onClick={() => goToPage(1)}
                className="w-10 h-10 flex items-center justify-center rounded bg-gray-700 hover:bg-gray-600"
              >
                1
              </button>
              {pageNumbers[0] > 2 && (
                <span className="px-1 text-gray-500">...</span>
              )}
            </>
          )}

          {/* Números de página atual */}
          {pageNumbers.map((num) => (
            <button
              key={num}
              onClick={() => goToPage(num)}
              className={`w-10 h-10 flex items-center justify-center rounded ${
                num === page
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {num}
            </button>
          ))}

          {/* Última página e ellipsis */}
          {!pageNumbers.includes(totalPages) && (
            <>
              {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
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
