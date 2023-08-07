import { Link, useLocation } from "react-router-dom"
import '../styles/Navbar.css'
import Reorder from '@material-ui/icons/Reorder'
import { useEffect, useState } from "react"

const Navbar = () => {
  const [Navbartoggle, setNavbartoggle] = useState(false)
  const location = useLocation()

  useEffect (() =>{ 
    setNavbartoggle(false)
  }, [location])

  return (
    <>
    <div className="navbar" id={ Navbartoggle ? 'open' : ''}>
      <div className="toggleButton">
        <button onClick={() => {setNavbartoggle((Navbartoggle) => !Navbartoggle)}}>
          <Reorder />
        </button>
        </div>
      <div className="links">
        <Link to= './'> Home </Link>
        <Link to= './Projects'> Projects </Link>
      </div>
    </div>
    </>
  )
}

export default Navbar