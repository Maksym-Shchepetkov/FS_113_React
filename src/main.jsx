import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import 'modern-normalize';
import { StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
