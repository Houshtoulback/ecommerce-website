import Navbar from "./Navbar"
import Shop from "./Shop"
import FilterShop from "./FilterShop"

export default function ShoppingPage() {
  return (
    <div className="">
        <Navbar textColor="#00AE9C" border={true}/>
        <div className="flex justify-center">
          <FilterShop/>
          <Shop/>
        </div>

    </div>
  )
}
