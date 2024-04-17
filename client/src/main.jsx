import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/app.css'
import UserProvider from './Context/UserContext.jsx'
import PostProvider from './Context/PostContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <PostProvider>
      
      <UserProvider>
        <App />
      </UserProvider>

    </PostProvider>

  </React.StrictMode>,
)
