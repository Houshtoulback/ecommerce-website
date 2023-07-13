import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function ShoppingItem () {
    return (
        <div className=" border-t-2 bg-gray-50 px-5  flex justify-between">
            <div className="p-5">
                <img className="rounded-md sm:float-left w-32 md:w-48 mr-5" src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2018/01/pic18-free-img-300x300.jpg"/>
                <div className="sm:float-right ">
                    <h3 className="text-sm md:text-lg text-slate-800 my-1 sm:my-3">Nomad Tumbler</h3>
                    <span className="block text-slate-700 mb-0 sm:mb-5 md:mb-20" >vice</span>
                    <span className="block text-slate-700 " >in stock</span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mr-0 md:mr-20">
                <input className="px-4 w-20 border-solid border-2 rounded-lg h-9 bg-gray-200 " type="number" name="" id="" />
                <span className=" block font-bold text-lg">$35.00</span>
            </div>
        </div>
    )
}


function CheckOut () {
    return (
        <div className=" lg:mx-60 bg-slate-300">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                    Product name
                </th>
                
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>

                <td className="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="px-6 py-3 text-base">Total</th>
                <td className="px-6 py-3">21,000</td>
            </tr>
        </tfoot>
    </table>
        </div>
    )
}


export default function ShoppingCart() {
    return (
    <div>
    <Navbar greenMode={true} border={true}/>
    <div className=" mt-10 mb-5 px-0 lg:px-32 xl:px-52 2xl:px-60">
        <h2 className="font-bold text-2xl md:text-4xl pb-10 pl-10">Shopping Cart</h2>
        <div style={{height: "700px", overflow: "auto"}} className="">
            <ShoppingItem/>
            <ShoppingItem/>
            <ShoppingItem/>
            <ShoppingItem/>
            <ShoppingItem/>
            <ShoppingItem/>
            <ShoppingItem/>
        </div>
        <div>

        </div>
    </div>
        <CheckOut/>
    <Footer light={false}/>
    </div>
  )
}
