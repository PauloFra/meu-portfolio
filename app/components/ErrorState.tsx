interface ErrorStateProps {
  error: string;
  retry: () => void;
}

export function ErrorState({ error, retry }: ErrorStateProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 bg-clip-text text-transparent">
          Erro ao carregar posts
        </h1>
        <p className="text-red-400">{error}</p>
        <button
          onClick={retry}
          className="mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
