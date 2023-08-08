import { GitHub, LinkedIn } from "@material-ui/icons"
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="socialMedia">
            <LinkedIn />
            <GitHub />
        </div>
    </div>
    </>
  )
}

export default Footer