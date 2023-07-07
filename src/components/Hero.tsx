import Navbar from "./Navbar"
import hero from "../assets/hero.jpg"



function Hero() {
  
  return (
    <div className='h-screen' style={{
        backgroundImage: "url('https://w0.peakpx.com/wallpaper/487/544/HD-wallpaper-leaf-plant-green-carved-vegetation-branch.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }
    } >
      <Navbar/>
    </div>
  )
}

export default Hero
