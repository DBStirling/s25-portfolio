import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
          <Analytics/>
      </BrowserRouter>
  </React.StrictMode>
);