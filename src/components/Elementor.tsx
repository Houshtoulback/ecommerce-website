import plant1 from "../assets/cactus.jpg"
import plant2 from "../assets/bonsai.jpg"
import plant3 from "../assets/succulent.jpg"
import plant4 from "../assets/indoorPlants.jpg"


const bgGradient = {
    background: "rgb(255,255,255)",
    backgroundImage: "linear-gradient(0deg, rgba(255,255,255,1) 87%, #f4f4f4 100%)"
} 


function ElementorItem(props: {image:any, title: string} ){
    const {image, title} = props
    return (
        <div className="flex flex-col items-center">
            <img className="" src={image} />
            <p className="capitalize font-medium text-black-300 text-base lg:text-xl text-center">{title}</p>
        </div>
    )
}



export default function Elementor() {
  return (
    <div className="py-10  grid grid-cols-2 xl:grid-cols-4 place-items-center" style={bgGradient}>
        <ElementorItem image={plant1} title="cactus"/>
        <ElementorItem image={plant2} title="bonsai"/>
        <ElementorItem image={plant3} title="succulent"/>
        <ElementorItem image={plant4} title="indoor plants"/>
    </div>
  )
}
