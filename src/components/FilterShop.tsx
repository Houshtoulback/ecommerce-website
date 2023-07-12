export default function FilterShop() {
  return (
    <div className='flex flex-col items-center mx-10 m-32 lg:border-r-2 px-10'>
        <div className="my-10">
            <input className="w-60 h-10  " type="text" name="" id="" />
            <button className="bg-emerald-600 h-10 w-20 font-medium text-white">Search</button>
        </div>
        <div className=" flex flex-col ">
            <div className="flex flex-col">
                <label className="">Filter By Price</label>
                <input className="w-100% max-w-md mb-5 mt-3 " type="range" name="" id="" />
            </div>
            <span className="block text-right">Price: $10 - $120</span>
        </div>

        <button className="bg-emerald-600 h-10 w-20 font-medium text-white mt-10">Filter</button>

    </div>
  )
}
