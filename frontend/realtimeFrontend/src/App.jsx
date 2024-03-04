import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import SetAvatar from './components/SetAvatar'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Chat from './components/Chat'


function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/setAvatar" element={<SetAvatar/>} />
      <Route path="/chat" element={<Chat/>} />
    </Routes>
    </BrowserRouter>
    // <Login/>
    // <Register/>
    // <SetAvatar/>
  )
}

export default App
