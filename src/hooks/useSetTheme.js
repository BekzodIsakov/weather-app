import { useEffect, useState } from 'react';

export const useSetTheme = () => {
  const selectedMode = localStorage.getItem('mode');
  const browserPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const [currentMode, setCurrentMode] = useState(selectedMode);

  const setTheme = () => {
    const mode = currentMode === 'dark' ? 'light' : 'dark';

    setCurrentMode(mode);
    localStorage.setItem('mode', mode);
  };

  useEffect(() => {
    if (selectedMode) {
      document.documentElement.setAttribute('data-theme', selectedMode);
    } else {
      const mode = browserPrefersDark ? 'dark' : 'light';

      setCurrentMode(mode);
      document.documentElement.setAttribute('data-theme', mode);
    }
    // eslint-disable-next-line
  }, [currentMode]);

  return {
    setTheme,
    currentMode,
  };
};
