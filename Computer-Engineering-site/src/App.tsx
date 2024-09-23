import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/home"
import WebDev from './Pages/WebDev/WebDev'
import GameDev from './Pages/GameDev/GameDev'
import ComputerEngineering from './Pages/ComputerEngineering/ComputerEngineering'

import './App.css'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/WebDev' element={<WebDev/>}/>
        <Route path='/CompEngineering' element={<ComputerEngineering/>}/>
        <Route path='/GameDev' element={<GameDev/>}/>
      </Routes>
      
    </Router>
    
  )
}

export default App
