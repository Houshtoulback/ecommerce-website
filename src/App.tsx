import Blog from "./components/Blog"
import Comments from "./components/Comments"
import Elementor from "./components/Elementor"
import Hero from "./components/Hero"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {
  
  return (
    <div className="select-none">
      <Hero header={"The Boutique Store For Plants!"} 
      paragraph={"Everything Is Better With Plants"} 
      btnContent={"Shop Now"}/>
      <Testimonials/>
      <Elementor/>
      <Blog/>
      <Comments/>
      <Footer/>
    </div>
  )
}

export default App
