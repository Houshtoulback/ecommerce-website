import {FaShoppingCart} from "react-icons/fa"
import {ImMenu} from "react-icons/im"
import logo from "../assets/logo.svg"


function NavItem (props: {content: any, link: string, textColor: any}) {
  const {content, link, textColor} = props;
  
  return (
      <div style={{color: `${textColor}`}} className="p-5 font-bold text-lg">
          <a href={link}>{content}</a>
      </div>
  )
}


export default function Navbar(props: {textColor: string, border: boolean}) {
  const {textColor, border} = props;
  return (
    <div className={`w-full h-28 flex justify-between items-center px-5 ${border && "border-b-2"}`}>
        
        <div>
            <img src={logo} className="w-28"/>
        </div>

        <div className="hidden md:flex">
            <NavItem textColor={textColor} content="Home" link="/" />
            <NavItem textColor={textColor} content="Shop" link="/" />
            <NavItem textColor={textColor} content="About Us" link="/" />
            <NavItem textColor={textColor} content="Testimonials" link="/" />
            <NavItem textColor={textColor} content={<FaShoppingCart color="#00AB84" size="25px"/>} link="/" />
        </div>
        <div className="md:hidden">
            <NavItem textColor={textColor} content={<ImMenu color="#00AB84" size="35px" />} link="/" />
        </div>
        
    </div>
  )
}

