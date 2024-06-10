import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import ScrollToAnchor from './components/scroll-to-anchor'

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <HashRouter>
        <ScrollToAnchor />
        <App />
      </HashRouter>
    </React.StrictMode>
  )
