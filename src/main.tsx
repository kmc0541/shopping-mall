import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { worker } from './mocks/browser';

if (import.meta.env.DEV) {
  worker.start()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
