import React from 'react'
import ReactDOM from 'react-dom/client'
// import Home from './pages/home/index.jsx'
import ExtractCP from './practice/08.extract_component'
import './index.css'

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <ExtractCP />
    </React.StrictMode>
)
