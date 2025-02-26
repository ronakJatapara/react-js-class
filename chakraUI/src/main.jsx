// index.js or index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Ensure this file exists
import App from './App.jsx'; // Ensure App.jsx is correctly exported
import { Provider } from './components/ui/provider'; // Correct path to Provider component

// Ensure the 'root' element exists in your index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
