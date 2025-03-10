export function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 bg-clip-text text-transparent">
          Carregando posts...
        </h1>
        <div className="flex space-x-2 justify-center">
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse delay-150"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
}
