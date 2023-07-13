import {FaShoppingCart} from "react-icons/fa"
import {ImMenu} from "react-icons/im"
import logo from "../assets/logo.svg"
import greenLogo from "../assets/greenLogo.svg"


function NavItem (props: {content: any, link: string}) {
  const {content, link} = props;
  
  return (
      <div className="p-5 font-bold text-lg">
          <a href={link}>{content}</a>
      </div>
  )
}


export default function Navbar(props: {greenMode: boolean, border: boolean}) {
  const {greenMode, border} = props;
  return (
    <div className={`w-full h-28 flex justify-between items-center px-5 ${border && "border-b-2"}`}>
        
        <div>
            <img src={greenMode ? greenLogo : logo} className="w-28"/>
        </div>

        <div className={`hidden md:flex ${greenMode ? ("text-green-700") : ("text-white") }`}>
            <NavItem  content="Home" link="/" />
            <NavItem  content="Shop" link="/shop" />
            <NavItem  content="About Us" link="/" />
            <NavItem  content="Testimonials" link="/" />
            <NavItem  content={<FaShoppingCart color="#00AB84" size="25px"/>} link="/shopping-cart" />
        </div>
        <div className="md:hidden">
            <NavItem  content={<ImMenu color="#00AB84" size="35px" />} link="/" />
        </div>
        
    </div>
  )
}

