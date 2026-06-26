"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

type Lang = "it" | "en";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "it",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en") setLang("en");
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "it" ? "en" : "it";
      localStorage.setItem("lang", next);
      document.documentElement.setAttribute("lang", next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
