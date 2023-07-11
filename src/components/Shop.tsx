import {AiOutlineStar} from "react-icons/ai"

function ShopItem() {
    return (
        <div className="flex flex-col w-72 items-center">
            <img className="w-56 mt-4 object-cover" src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic19-free-img-300x300.jpg"/>
            <h2 className="mt-2 w-full text-center font-medium capitalize break-words">Arrowhead</h2>
            <span className="flex my-2 ">
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
            </span>
            <p className="font-medium mb-5">$26.00</p>
        </div>
    )
}


export default function Shop() {
  return (
    <div className="p-24 w-7/12 grid grid-cols-3">
        <ShopItem/>
        <ShopItem/>
        <ShopItem/>
        <ShopItem/>
        <ShopItem/>
        <ShopItem/>
        <ShopItem/>
        <ShopItem/>
    </div>
  )
}
