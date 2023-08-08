import ProjectsEntries from "./ProjectsEntries"
import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import "../styles/Project.css"

const Projects = () => {
  return (
    <>
    <div className="projects">
    <ProjectsEntries name='IP Address Geolocator' image={project1}/>
    <ProjectsEntries name='Dahir IT Site' image={project2} />
    </div>
    </>
  )
}

export default Projects