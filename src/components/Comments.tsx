import profile1 from "../assets/client-2.jpg"
import profile2 from "../assets/client3.jpg"
import profile3 from "../assets/client1.jpg"
import profile4 from "../assets/cllient4.jpg"

function Comment (props: {text: string, name: string , image: any}) {
    const {text, name, image} = props;
    
    return (
        <div className="m-2 lg:m-5 lg:border border-green-300 w-max p-1 lg:p-5 h-max">
            <p className="w-96 leading-7">
                {text}
            </p>
            <div className="flex items-center mt-7">
                <img className="w-14 rounded-full" src={image} />
                <p className="capitalize pl-4 font-medium">{name}</p>
            </div>
        </div>
    )
}


export default function Comments() {
  return (
    <div className="hidden sm:flex comments-section flex-col justify-center items-center h-min">
        <h2 className="text-3xl lg:text-5xl font-bold mb-10 lg:mb-32 text-slate-700">What Our Client Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 ">

        <Comment 
        text="Suspendisse, occaecat exercitation est occaecati natoque sociis atque omnis! Habitant hendrerit eros, eum commodo quasi nihil nesciunt nonu aecenas aspernatur rattavc kaj."
        name="Jeanice Ford"
        image={profile4}
        />

        <Comment 
        text="Habitant urna fugiat wisi nceptos sodales magna. Molestie suspendisse faucibus justo! Sollicitudin tempore unde, dolorem, blanditiis a nam beatae nihil bibendum, taciti."
        name="Katty Pierce"
        image={profile1}
        />

        <Comment 
        text="Suspendisse, occaecat exercitation est occaecati natoque sociis atque omnis! Habitant hendrerit eros, eum commodo quasi nihil nesciunt nonu aecenas aspernatur rattavc kaj."
        name="Pedro Lima"
        image={profile2}
        />

        <Comment 
        text="Habitant urna fugiat wisi nceptos sodales magna. Molestie suspendisse faucibus justo! Sollicitudin tempore unde, dolorem, blanditiis a nam beatae nihil bibendum, taciti."
        name="Laura Kyle"
        image={profile3}
        />


        </div>
    </div>
  )
}
