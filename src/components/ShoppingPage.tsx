import Navbar from "./Navbar"
import Shop from "./Shop"
import FilterShop from "./FilterShop"
import { arrayApi } from "../api"

export default function ShoppingPage() {
  return (
    <div className="">
        <Navbar greenMode={true} border={true}/>
        <div className="flex flex-col-reverse lg:flex-row justify-center">
          <FilterShop/>
          <Shop api={arrayApi}/>
        </div>

    </div>
  )
}
