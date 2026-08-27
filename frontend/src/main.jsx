// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { SnackbarProvider } from './Context/Snackbar-context.jsx'
import { AuthProvider } from './Context/Auth-context.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AuthProvider>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </AuthProvider>
  // </StrictMode>,
)
