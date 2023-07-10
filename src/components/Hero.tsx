import Navbar from "./Navbar"
const bgStyle = {
  backgroundImage: "url('https://img.freepik.com/free-photo/tropical-green-leaves-background_53876-88891.jpg?w=1380&t=st=1688901612~exp=1688902212~hmac=3a0e682c44e3879487f1cc06a9fdec6d01f72675f1e27cd60b26b5de2caa2edc')",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw"
}

function Hero(props: {header: string, paragraph: string, btnContent: string}) {
  const { header, paragraph, btnContent } = props;
  return (
    <div className='h-screen w-screen text-white' style={bgStyle} >
      <Navbar/>

      <div className="flex flex-col items-center justify-center py-48 capitalize text-center">
        <h1 className="text-lg md:text-2xl pb-10">{header}</h1>
        <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black w-6/12 break-normal overflow-y-hidden">{paragraph}</p>
        <button className="py-4 px-5 mt-7 font-bold bg-green-600 hover:bg-green-700 hover:shadow-md transition">{btnContent}</button>
      </div>
    
    </div>
  )
}

export default Hero
