// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins, sans-serif',
        },
      },
    },
  },
});

export default theme;
