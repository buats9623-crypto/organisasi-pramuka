"use client";

import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = (e: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReducedMotion(e.matches);
    };
    
    update(mediaQuery);
    mediaQuery.addEventListener("change", update);
    
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

export function useTypewriter(
  words: string[],
  delay = 100,
  speed = 50,
): { text: string; isDeleting: boolean } {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    
    if (isDeleting) {
      setText((prev) => prev.slice(0, -1));
      if (text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      setText((prev) => prev + currentChar(currentWord, text.length));
      if (text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      }
    }

    timeoutRef.current = setTimeout(
      () => {},
      isDeleting ? speed : delay,
    );

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, isDeleting, wordIndex, words, delay, speed]);

  return { text, isDeleting };
}

function currentChar(word: string, index: number): string {
  return word.charAt(index);
}