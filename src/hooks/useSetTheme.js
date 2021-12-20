import { useState } from 'react';

export const useSetTheme = () => {
  const presetTheme = localStorage.getItem('theme');
  const browserDefaultDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const [selectedTheme, setSelectedTheme] = useState(presetTheme);

  if (!presetTheme) {
    if (browserDefaultDark) {
      setSelectedTheme('dark');
    } else {
      setSelectedTheme('light');
    }
  }

  if (selectedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }

  const setTheme = () => {
    if (selectedTheme === 'dark') {
      setSelectedTheme('light');
    } else {
      setSelectedTheme('dark');
    }
  };

  return {
    setTheme,
    selectedTheme,
  };
};
