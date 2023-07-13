import Hero from "../components/Hero"
import Testimonials from "../components/Testimonials"
import Elementor from "../components/Elementor"
import Blog from "../components/Blog"
import Comments from "../components/Comments"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div>
        <Hero/>
        <Testimonials/>
        <Elementor/>
        <Blog/>
        <Comments/>
        <Footer light={true}/>
    </div>
  )
}
