import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TokenProvider } from './context/tokenContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TokenProvider>
      <App />
    </TokenProvider>
  </BrowserRouter>,
)
