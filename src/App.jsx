import { Route, Routes } from 'react-router-dom'
import './assets/styles/App.css'
import Home from './assets/components/Home'
import Projects from './assets/components/Projects'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'


function App() {
return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Projects' element={<Projects />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
