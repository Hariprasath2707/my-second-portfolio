import React from 'react'; // Importing React without StrictMode
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './common/ThemeContext.jsx'; // Ensure this path is correct

// Create root and render the app
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

