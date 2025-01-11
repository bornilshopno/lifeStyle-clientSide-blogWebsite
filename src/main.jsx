import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Main/Routes.jsx'
import AuthProvider from './Main/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
     <AuthProvider>
    <div className='bg-[#F8F6FD] dark:bg-[#0E0D12] text-[#0D0B13] dark:text-[#E7E9EE]'>
    <RouterProvider router={Routes} />
    </div>
      </AuthProvider>
     </HelmetProvider>
      
  </StrictMode>,
)
