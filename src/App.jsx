import LogoSection from "./sections/LogoSection"
import NavBar from "./componenets/NavBar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"


const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection />
    <TechStack />
    <Contact />
    <Footer />
    
    </>
  )
}

export default App
