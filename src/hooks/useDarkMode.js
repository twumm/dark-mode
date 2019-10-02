import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage('isDark', false);

  const toggleDark = () => {
    document.body.classList.toggle('dark-mode');
    setIsDark(!isDark);
  }

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode');
    }
  })

  return [isDark, toggleDark];
}