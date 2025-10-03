"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";

const languages = {
  hy: "Հայ",
  ru: "Рус",
  en: "Eng"
};

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    if (segments[1] === 'hy' || segments[1] === 'ru' || segments[1] === 'en') {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join('/') || '/';
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="border-border hover:bg-secondary hover:scale-105 transition-all duration-200"
      >
        <Languages className="h-5 w-5" />
        <span className="sr-only">Toggle language</span>
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-12 z-50 bg-background border border-border rounded-lg shadow-lg overflow-hidden min-w-[100px]">
            {Object.entries(languages).map(([code, name]) => (
              <button
                key={code}
                onClick={() => changeLanguage(code)}
                className={`w-full px-4 py-2 text-left hover:bg-secondary transition-colors ${
                  locale === code ? 'bg-secondary font-semibold' : ''
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
