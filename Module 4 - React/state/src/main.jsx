import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ex1 from './ex1/Ex1.jsx'
import Ex2 from './ex2/Ex2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ex2 />
  </StrictMode>,
)
