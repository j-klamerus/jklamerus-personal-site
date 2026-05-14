import Navbar from './components/navbar'
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
        <img src="/flag.svg" className='flag_container'></img>
      </div>
    </>
  )
}

export default App
