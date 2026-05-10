import './App.css'
import Home from './components/Home.jsx'
import {Box} from '@mui/material'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './components/About.jsx'
import Journey from './components/Journey.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Box className="bg-[#0f1720] text-[#dce6ee]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Box className="relative bottom-0 place-self-center">
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default App
