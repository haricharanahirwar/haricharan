
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/navbarcomponent/Navbar'
import Slider from './component/slidercomponent/Slider'
import Home from './component/homecomponent/Home'
import About from './component/aboutcomponent/About'
import Contact from './component/contactcomponent/Contact'
import Service from './component/servicecomponent/Service'
import Project from './component/projectcomponent/Project'
import Footer from './component/footercomponent/Footer'
import Resume from './component/resumecomponent/Resume'
import Certificate from './component/certificatecomponent/Certificate'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='slider' element={<Slider />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
        <Route path='/certificate' element={<Certificate />}></Route>
      </Routes>
    </>
  )
}

export default App
