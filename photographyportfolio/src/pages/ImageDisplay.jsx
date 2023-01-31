import { DisplayImages } from "../images";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const ImageDisplay = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <div className="min-h-[calc(100vh_-_100px)] bg-gradient-to-b from-black to-[#00004e]">
      <div className="py-[50px] flex flex-col items-center justify-items-center w-[90vw] gap-[200px] mx-auto">
        {DisplayImages[id].map((img) => {
          return (
            <img className="max-w-[100vw] w-auto h-screen" src={img.image} alt={img.altText}/>
          )
        })}
      </div>
      <Link to=".." relative="path">
        <button className="ml-[5vw] text-white rounded-full border-2 px-9 py-2 text-1xl md:text-2xl font-bold mb-[10px] md:mb-[30px] shadow hover:shadow-xl transform hover:scale-105 transition">
          Return
        </button>
      </Link>
    </div>
  )
}

export default ImageDisplay;