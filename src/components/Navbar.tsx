import NavItem from "./NavItem"
import {FaShoppingCart} from "react-icons/fa"
import logo from "../assets/logo.svg"

export default function Navbar() {
  return (
    <div className="w-full h-16 flex justify-between items-center px-5">
        
        <div>
            <img src={logo} className="w-28"/>
        </div>

        <div className="flex ">
            <NavItem content="Home" link="/" />
            <NavItem content="Shop" link="/" />
            <NavItem content="About Us" link="/" />
            <NavItem content="Testimonials" link="/" />
            <NavItem content={<FaShoppingCart color="#00AB84" size="25px"/>} link="/" />
        </div>
        
    </div>
  )
}

