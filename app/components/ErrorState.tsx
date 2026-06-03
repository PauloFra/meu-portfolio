"use client";
import { useLanguage } from "../context/LanguageContext";

interface ErrorStateProps {
  error: string;
  retry: () => void;
}

export function ErrorState({ error, retry }: ErrorStateProps) {
  const { t } = useLanguage();
  return (
    <div className="grid min-h-screen place-items-center bg-bg p-8 text-fg">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold">
          {t.blog.errorTitle}
        </h1>
        <p className="mt-2 break-words text-sm text-red-400">{error}</p>
        <button
          onClick={retry}
          className="mt-6 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition hover:opacity-90"
        >
          {t.blog.retry}
        </button>
      </div>
    </div>
  );
}
