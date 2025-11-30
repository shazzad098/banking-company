import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // এই লাইন যোগ করুন

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* অ্যাপ এর বাইরে এটি যোগ করুন */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)