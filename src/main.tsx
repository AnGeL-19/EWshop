import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppStore } from './AppStore'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <AppStore />
  // </React.StrictMode>,
)
