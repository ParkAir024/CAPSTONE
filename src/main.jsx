import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CherryBlossomScene from './CherryBlossomScene.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './contexts/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <UserProvider>
      <App />  
      <CherryBlossomScene />
      </UserProvider>
    </BrowserRouter>
,
)
