

import './App.css'

import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {


  return (
    <>
      <div>
        <div className='p-5 md:px-[15%]'>
          <Navbar />
          <Home />

        </div>
        <About />
        <div className='p-5 md:px-[15%]'>
          <Experience />

          <Projects />
                
        </div>

          <Footer />
      </div>
    </>
  )
}

export default App
