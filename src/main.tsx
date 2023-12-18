import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SumProvider } from './context/sumContext.tsx'
import { DisplayProvider } from './context/DisplayContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DisplayProvider>
      <SumProvider>
        <App />
      </SumProvider>
    </DisplayProvider>
  </React.StrictMode>,
)
