// theme.js

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from '@mui/material';

const ThemeWrapper = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
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

  theme.components = {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       marginBottom: '15px',
    //       color: 'black',
    //       '@media (prefers-color-scheme: dark)': {
    //         color: '#ffffff',
    //         borderColor: 'white',
    //       },
    //       '&.Mui-focused': {
    //         '&: hover': {
    //           border: 'none',
    //         },
    //       },
    //       '&: hover': {
    //         '@media (prefers-color-scheme: dark)': {
    //           color: '#ffffff',
    //           borderColor: 'white',
    //         },
    //       },
    //     },
    //   },
    // },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       marginBottom: '15px',
    //       '@media (prefers-color-scheme: dark)': {
    //         color: 'white',
    //       },
    //       '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    //         '@media (prefers-color-scheme: dark)': {
    //           borderColor: '#FFFFFF99',
    //         },
    //       },
    //       '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
    //         '@media (prefers-color-scheme: dark)': {
    //           borderColor: '#FFFFFF99',
    //           '-webkit-text-fill-color': 'unset',
    //         },
    //       },
    //       '&:hover': {
    //         '& .MuiOutlinedInput-notchedOutline': {
    //           borderColor: 'black',
    //           '@media (prefers-color-scheme: dark)': {
    //             borderColor: 'white',
    //           },
    //         },
    //       },
    //       '& :-webkit-autofill': {
    //         '@media (prefers-color-scheme: dark)': {
    //           '-webkit-text-fill-color': 'white',
    //         },
    //         '-webkit-text-fill-color': 'black',
    //         '-webkit-box-shadow': '0 0 0px 1000px #00000000 inset',
    //         'transition-delay': '9999s',
    //       },
    //     },
    //     input: {
    //       '@media (prefers-color-scheme: dark)': {
    //         '&.Mui-disabled': {
    //           color: '#FFFFFF99',
    //           '-webkit-text-fill-color': 'unset',
    //         },
    //       },
    //     },
    //     notchedOutline: {
    //       '@media (prefers-color-scheme: dark)': {
    //         borderColor: 'white',
    //       },
    //     },
    //   },
    // },
    // MuiFormHelperText: {
    //   styleOverrides: {
    //     root: {
    //       marginBottom: '10px',
    //       marginTop: 'unset',
    //       marginLeft: 'unset',
    //     },
    //   },
    // },
    // MuiInputLabel: {
    //   styleOverrides: {
    //     root: {
    //       '@media (prefers-color-scheme: dark)': {
    //         color: 'white',
    //         fontSize: '16px',
    //         '&.Mui-disabled': {
    //           color: '#FFFFFF99',
    //           borderColor: '#FFFFFF99',
    //         },
    //         '&.Mui-focused': {
    //           color: 'white',
    //         },
    //       },
    //     },
    //   },
    // },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       '&.MuiDialog-paper': {
    //         backgroundColor: '#c9f2c0',
    //         borderRadius: '16px',
    //         '@media (prefers-color-scheme: dark)': {
    //           backgroundColor: '#383838',
    //         },
    //       },
    //       '&.MuiMenu-paper': {
    //         '@media (prefers-color-scheme: dark)': {
    //           backgroundColor: '#383838',
    //           color: '#FFFFFFDE',
    //         },
    //       },
    //     },
    //   },
    // },
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       '&.MuiTypography-h6': {
    //         color: '#1D1E17',
    //         textAlign: 'center',
    //         fontSize: '20px',
    //       },
    //       '&.MuiTypography-body1': {
    //         '@media (prefers-color-scheme: dark)': {
    //           color: '#FFFFFF99',
    //         },
    //       },
    //     },
    //   },
    // },
    // MuiDialogActions: {
    //   styleOverrides: {
    //     root: {
    //       justifyContent: 'center',
    //     },
    //   },
    // },
    // MuiCheckbox: {
    //   styleOverrides: {
    //     root: {
    //       boxShadow: 'none',
    //       outline: 'none',
    //       '&: hover': {
    //         backgroundColor: 'transparent',
    //       },
    //       '@media (prefers-color-scheme: dark)': {
    //         color: 'white',
    //       },
    //       '&.Mui-checked': {
    //         '& .MuiSvgIcon-root path': {
    //           '@media (prefers-color-scheme: dark)': {
    //             fill: '#ffffff',
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
    // MuiSvgIcon: {
    //   styleOverrides: {
    //     root: {
    //       '&: focus': {
    //         outline: '2px solid yellow !important',
    //       },
    //       '&.Mui-disabled': {
    //         '@media (prefers-color-scheme: dark)': {
    //           color: '#FFFFFF99 !important',
    //         },
    //       },
    //       '&: active': {
    //         outline: '2px solid yellow !important',
    //       },
    //       '@media (prefers-color-scheme: dark)': {
    //         color: 'white',
    //       },
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          height: '48px',
        },
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
