import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/components/Home'
import Projects from './assets/components/Project'
import Navbar from './assets/components/Navbar'

function App() {
return (
    <>
    <Route path='./Navbar' element={<Navbar />}/>
    <Routes>
      <Route path='./' element={<Home />}/>
      <Route path='./Projects' element={<Projects />}/>
    </Routes>
    </>
  )
}

export default App
