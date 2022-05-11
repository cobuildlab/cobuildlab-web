import { useEffect, useState } from 'react';

export const useThemeMode = () => {
  const [mode, setMode] = useState(localStorage.getItem('themeMode') ?? 'light');
  const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  return { mode, toggleMode };
};
