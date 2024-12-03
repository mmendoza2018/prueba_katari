import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SaludoForm from './SaludoForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SaludoForm />
  </StrictMode>,
)
