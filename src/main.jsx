
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Routes from './routes/Routes.jsx'
import { AuthProvider } from './context/AuithContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <Routes/>
    </AuthProvider>
)
