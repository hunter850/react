import React from 'react'
import ReactDOM from 'react-dom/client'
// import Home from './pages/home/index.jsx'
import InlineIf from './practice/15.inline_if'
import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <React.StrictMode>
        <InlineIf />
    </React.StrictMode>
)
