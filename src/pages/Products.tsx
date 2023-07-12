import Navbar from "../components/Navbar"
import Shop from "../components/Shop"
import FilterShop from "../components/FilterShop"
import Footer from "../components/Footer";

export default function Products(props:{arrayApi: any, navGreenMode: boolean, navBorder: boolean}) {
    const {arrayApi, navBorder, navGreenMode} = props;
  
    return (
    <div className="">
        <Navbar greenMode={navGreenMode} border={navBorder}/>
        <div className="flex flex-col-reverse lg:flex-row justify-center">
          <FilterShop/>
          <Shop api={arrayApi}/>
        </div>
        <Footer/>

    </div>
  )
}
