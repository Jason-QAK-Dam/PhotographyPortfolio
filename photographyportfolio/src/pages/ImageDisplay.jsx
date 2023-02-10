import { DisplayImages, PlaceholderImages } from "../images";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageDisplay = () => {
  const {id} = useParams();
  console.log(PlaceholderImages[id][3].image);
  return (
    <div className="min-h-[calc(100vh_-_100px)] bg-gradient-to-b from-black to-[#00004e]">
      <div className="py-[50px] flex flex-col items-center justify-items-center w-[90vw] gap-[200px] mx-auto">
        {DisplayImages[id].map((img, idx) => {
          return (
            <LazyLoadImage 
              className="max-w-[100vw] w-auto h-screen" 
              placeholderSrc={PlaceholderImages[id][idx].image}
              effect="blur"
              src={img.image}
              alt={img.altText}
            />
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