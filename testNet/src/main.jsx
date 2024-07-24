import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
ReactDOM.createRoot(document.getElementById('root')).render(
  // <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App/>
    // </ClerkProvider>
)
