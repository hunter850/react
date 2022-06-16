import React from 'react'
import ReactDOM from 'react-dom/client'
// import Home from './pages/home/index.jsx'
import textareaTag from './practice/21.textarea_tag'
import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <React.StrictMode>
        <textareaTag />
    </React.StrictMode>
)
