import Navbar from './components/navbar'
import PageFooter from './components/PageFooter'
import ProjectCard from './components/ProjectCard'
import './App.css'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='about_container'>
        <h2>Jacob Klamerus</h2>
        <p>aspiring software engineer</p>
      </div>
      <div className='about_container'>
        <img src='/flag.svg' className='flag_container'></img>
      </div>
        <ProjectCard
        image="https://github.com/yavuzceliker/sample-images/blob/main/docs/image-1034.jpg?raw=true"
        name="Project 1"
        tags={["React", "MUI", "TypeScript"]}
        description="A sample project using React and MUI Joy UI."
        link="https://github.com/your-repo"
        linkLabel="GitHub Repo"
        />
    </>
  )
}

export default App
