
import './App.css'
//import Experience from './components/experience'
import Nav from './components/nav'
import Profile from './components/profile'
import Certificate from './components/certificate'
import Skills from './components/skills'
import Projects from './components/projects'
import Footer from './components/footer'
import { useEffect, useState } from 'react'

function App() {
  const [dark, setDark] = useState(localStorage.getItem("darkMode")==="true");

  useEffect(()=>{
    localStorage.setItem("darkMode",dark)
  },[dark])

  return (
    <div className={dark ? 'dark' : 'light'}>
      <div className='min-h-screen bg-white dark:bg-[#111828] z-5'>

        <Nav dark={dark} setDark={setDark} />
        <Profile />
        <Projects />
        <Skills />
        {/* <Experience /> */}
        <Certificate />
        
        <Footer />
      </div>
    </div>
  )
}

export default App
