import { GitHub, Mail } from '@material-ui/icons'
import '../styles/Home.css'

const Home = () => {
  return (
    <>
    <div className="home">
      <div className="about">
        <h2>It&apos;s Abdulrahman </h2>
        <div className='prompt'>
         <p>A front-end developer who is passionate about creating quality user experiences</p> 
         <GitHub />
         <Mail />
          </div>
      </div>
      <div className="skills">
        <div className='list'>
          <h2>Technologies I use</h2>
          <span>JavaScript, HTML, CSS, React, Git, ReactRouter, Node.js, Express, Python</span>
        </div>
      </div> 
    </div>
    </>
  )
}

export default Home
