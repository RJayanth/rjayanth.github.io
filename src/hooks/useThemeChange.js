import { useEffect, useState } from 'react';

const useThemeChange = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );
    const handleChange = (e) => setIsDarkTheme(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return { isDarkTheme };
};

export default useThemeChange;
