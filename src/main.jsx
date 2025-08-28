import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContext } from './components/AuthContext.jsx'
import AuthContextProvider from './components/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContextProvider>
     <App />
  </AuthContextProvider>
  </BrowserRouter>
)
