import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Theme } from "@radix-ui/themes";
import { ContextProvider } from './context/Context.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <Theme>
        <App />
      </Theme>
    </ContextProvider>
  </StrictMode>,
)
