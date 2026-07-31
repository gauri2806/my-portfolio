import './App.css'
import Home from './components/Home.jsx'
import { Box } from '@mui/material'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Journey from './components/Journey.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Toolbar from '@mui/material/Toolbar'

function App() {

  const handleScroll = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navbarHeight = 90;

    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <Box className="bg-[#0f1720] text-[#dce6ee] min-h-screen">
      <Navbar handleScroll={handleScroll} />
      <Toolbar sx={{ mb: '1.5rem' }} />

      <div id="home" className="section scroll-mt-24 pb-16 md:pb-24"><Home handleScroll={handleScroll}/></div>
      <div id="about" className="section scroll-mt-16 pb-16 md:pb-24"><About /></div>
      <div id="journey" className="section scroll-mt-16 pb-16 md:pb-24"><Journey /></div>
      <div id="projects" className="ssection croll-mt-16 pb-16 md:pb-24"><Projects /></div>
      <div id="contact" className="section scroll-mt-16 pb-16 md:pb-8"><Contact /></div>

      <Box className="relative bottom-0 mt-4 pb-6 place-self-center">
        <Footer />
      </Box>
    </Box>
  )
}

export default App;
