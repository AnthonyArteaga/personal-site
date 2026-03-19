'use client';

import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';

export const accentColorNames = [
  'rosewater', 'flamingo', 'pink', 'mauve', 'red', 'maroon', 'peach',
  'yellow', 'green', 'teal', 'sky', 'sapphire', 'blue', 'lavender'
] as const;
export type AccentColorName = (typeof accentColorNames)[number];

export const paletteNames = ['latte', 'frappe', 'macchiato', 'mocha'] as const;
export type PaletteName = (typeof paletteNames)[number];

interface ThemeContextType {
  palette: PaletteName;
  setPalette: (p: PaletteName) => void;
  accent: AccentColorName;
  setAccent: (a: AccentColorName) => void;
  backgroundEnabled: boolean;
  setBackgroundEnabled: (b: boolean | ((prev: boolean) => boolean)) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

function getDefaultPalette(): PaletteName {
  if (typeof window === 'undefined') return 'mocha';
  try {
    const stored = localStorage.getItem('palette');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (paletteNames.includes(parsed)) return parsed;
    }
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'mocha' : 'latte';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [palette, setPalette] = useLocalStorage<PaletteName>('palette', getDefaultPalette());
  const [accent, setAccent] = useLocalStorage<AccentColorName>('accent', 'peach');
  const [backgroundEnabled, setBackgroundEnabled] = useLocalStorage<boolean>('background-enabled', false);

  // Apply palette class to <html>
  useEffect(() => {
    const html = document.documentElement;
    paletteNames.forEach((p) => html.classList.remove(p));
    html.classList.add(palette);
  }, [palette]);

  // Apply accent CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--current-accent-color',
      `var(--color-${accent})`
    );
  }, [accent]);

  return (
    <ThemeContext.Provider value={{ palette, setPalette, accent, setAccent, backgroundEnabled, setBackgroundEnabled }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
