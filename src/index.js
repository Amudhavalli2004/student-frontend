import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import axios from 'axios'
axios.defaults.baseURL = 'https://e582-13-48-67-35.ngrok-free.app/'
axios.defaults.headers = {
  'Content-Type': 'application/json',
  'ngrok-skip-browser-warning': '69420',
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
