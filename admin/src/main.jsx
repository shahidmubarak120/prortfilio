
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import StayContextProvider from './context/StayContext.jsx'
import AppContextProvider from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
      <StayContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </StayContextProvider>
    </AdminContextProvider>
  </BrowserRouter>,
)
