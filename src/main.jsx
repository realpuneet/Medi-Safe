import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
