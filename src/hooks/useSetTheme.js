import { useState } from 'react';

export const useSetTheme = () => {
  const presetTheme = localStorage.getItem('theme');
  const browserDefaultDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const [theme, setTheme] = useState(presetTheme);

  if (!presetTheme) {
    if (browserDefaultDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  if (theme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }

  return () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
};
