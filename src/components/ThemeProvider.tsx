'use client';
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme: Theme;
  initialResolvedTheme: ResolvedTheme;
}

const STORAGE_KEY = 'theme';
const COOKIE_KEY = 'theme';
const ThemeContext = createContext<ThemeContextValue | null>(null);

const getSystemTheme = (): ResolvedTheme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyResolvedTheme = (theme: ResolvedTheme) => {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
};

const persistTheme = (theme: Theme) => {
  window.localStorage.setItem(STORAGE_KEY, theme);
  document.cookie = `${COOKIE_KEY}=${theme}; path=/; max-age=31536000; samesite=lax`;
};

export const ThemeProvider = ({
  children,
  initialTheme,
  initialResolvedTheme,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(initialTheme);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(initialResolvedTheme);

  const resolvedTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    applyResolvedTheme(resolvedTheme);
  }, [resolvedTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const syncSystemTheme = () => {
      setSystemTheme(getSystemTheme());
    };

    syncSystemTheme();
    mediaQuery.addEventListener('change', syncSystemTheme);
    return () => mediaQuery.removeEventListener('change', syncSystemTheme);
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme: (nextTheme) => {
        setThemeState(nextTheme);
        persistTheme(nextTheme);

        if (nextTheme === 'system') {
          applyResolvedTheme(getSystemTheme());
          return;
        }

        applyResolvedTheme(nextTheme);
      },
    }),
    [resolvedTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
};
