"use client";
import { useLanguage } from "../context/LanguageContext";

export function Loading() {
  const { t } = useLanguage();
  return (
    <div className="grid min-h-screen place-items-center bg-bg p-8 text-fg">
      <div className="text-center">
        <h1 className="font-display text-2xl font-semibold">
          {t.blog.loading}
        </h1>
        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent delay-150" />
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent delay-300" />
        </div>
      </div>
    </div>
  );
}
