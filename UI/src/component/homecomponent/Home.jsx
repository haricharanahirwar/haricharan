import About from "../aboutcomponent/About"
import Contact from "../contactcomponent/Contact"
import Footer from "../footercomponent/Footer"
import Project from "../projectcomponent/Project"


import Service from "../servicecomponent/Service"
import Slider from "../slidercomponent/Slider"

function Home(){
    return(
        <>
        <Slider />
        <About />
        <Contact/>
        <Service />
        <Project/>
        
        <Footer/>
        
        </>
    )
}
export default Home