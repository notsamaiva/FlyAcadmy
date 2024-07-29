import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Assurez-vous que le chemin est correct

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
