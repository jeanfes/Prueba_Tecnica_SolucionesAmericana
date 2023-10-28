import { Route, Routes } from 'react-router-dom';
import { Crear } from "./components/create/create.jsx"
import { Login } from './components/login/login.jsx';
import { Usuarios } from './components/users/users.jsx'
import { Aside } from './layout/aside.jsx'
import './App.css'

function App() {

  return (
    <div className="App">
      <Aside />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
