import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/roboto";
import './index.css'
import App from './App.jsx'

import '@fontsource/outfit';
import '@fontSource/roboto'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
