import {AiOutlineStar} from "react-icons/ai"

function ShopItem(props: {imageLink: string, title: string, price: number}) {
    const {imageLink, title, price} = props
    return (
        <div className="flex flex-col m-2 lg:m-4 items-center">
            <img className="w-56 mt-4 object-cover" src={imageLink}/>
            <h2 className="mt-1 lg:mt-2 w-full text-center text-xs md:text-sm lg:font-medium capitalize ">{title}</h2>
            <span className="hidden sm:flex my-1 lg:my-2 ">
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
            </span>
            <p className="font-medium mb-5">{`$${price}`}</p>
        </div>
    )
}


export default function Shop(props: {api: any}) {
    const {api} = props;
    
    const renderList = api.map((item) => 
        <ShopItem 
            key={item.id} 
            imageLink={item.imageLink} 
            title={item.title} 
            price={item.price}
        /> 
    )

  return (
    <div className="grid grid-cols-2 xl:grid-cols-3">    
    {renderList}    
    </div>
  )
}
