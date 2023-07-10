import NavItem from "./NavItem"
import {FaShoppingCart} from "react-icons/fa"
import {ImMenu} from "react-icons/im"
import logo from "../assets/logo.svg"

export default function Navbar() {
  return (
    <div className="w-full h-16 flex justify-between items-center px-5">
        
        <div>
            <img src={logo} className="w-28"/>
        </div>

        <div className="hidden md:flex">
            <NavItem content="Home" link="/" />
            <NavItem content="Shop" link="/" />
            <NavItem content="About Us" link="/" />
            <NavItem content="Testimonials" link="/" />
            <NavItem content={<FaShoppingCart color="#00AB84" size="25px"/>} link="/" />
        </div>
        <div className="md:hidden">
            <NavItem content={<ImMenu color="#00AB84" size="35px" />} link="/" />
        </div>
        
    </div>
  )
}

