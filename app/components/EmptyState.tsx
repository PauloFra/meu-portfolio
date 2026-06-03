"use client";
import { useLanguage } from "../context/LanguageContext";

export function EmptyState() {
  const { t } = useLanguage();
  return (
    <div className="grid min-h-screen place-items-center bg-bg p-8 text-fg">
      <h1 className="font-display text-2xl font-semibold">{t.blog.empty}</h1>
    </div>
  );
}
