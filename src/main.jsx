import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/index.jsx'
import './index.css'

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
)
