import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const SitePreferencesContext = createContext(null);

export function SitePreferencesProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('sg-theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.setAttribute('data-theme', theme);
    root.setAttribute('lang', 'en');
    localStorage.setItem('sg-theme', theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [theme]
  );

  return <SitePreferencesContext.Provider value={value}>{children}</SitePreferencesContext.Provider>;
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);

  if (!context) {
    throw new Error('useSitePreferences must be used inside SitePreferencesProvider');
  }

  return context;
}
