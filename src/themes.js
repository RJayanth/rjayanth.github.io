import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from '@mui/material';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkTheme, setIsDarkTheme] = useState(prefersDarkMode);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setIsDarkTheme(e.matches);
    };
    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
      primary: {
        main: '#7B4B94',
        contrastText: '#FFFFFF',
        light: '#E2D3EA',
      },
      secondary: {
        main: '#0A100D',
        contrastText: '#ffffff',
      },
      error: {
        main: '#B00020',
      },
      action: {
        disabled: {
          light: '#E2D3EA',
        },
      },
    },
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
