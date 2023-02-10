import { EventTopicSelect, PortraitTopicSelect, TravelTopicSelect } from "../images";
import { Link } from "react-router-dom";

console.log("Event topic select: ", EventTopicSelect);

const TopicSelect = ( props ) => {
  const topicImages = {
    "portrait": PortraitTopicSelect,
    "event": EventTopicSelect,
    "travel": TravelTopicSelect,
  }
  const path = props.path;
  const imageSet = topicImages[path];
  return (
    <div className="min-h-[calc(100vh_-_100px)] bg-gradient-to-b from-black to-[#00004e]">
      <div className="py-[50px] grid grid-cols-1 md:grid-cols-2 w-[90vw] gap-[50px] mx-auto justify-items-center">
        {imageSet.map((topic) => {
          return (
            <Card image={topic.image} caption={topic.title} key={topic.title}/>
          )
        })}
      </div>
    </div>
  )
}

const Card = ({image, caption}) => {
  return (
    <Link to={caption.toLowerCase()} key={caption} className="flex justify-center items-center w-full
      h-[calc(9/16*90vw)] md:h-[calc(9/16*45vw)] cursor-pointer rounded-[5%] relative group bg-black
      hover:bg-gradient-to-r from-black to-orange-900 transition duration-200"
    >
      <img src={image} alt={caption} className="h-full w-full rounded-[inherit] object-cover opacity-30 group-hover:opacity-50"/>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-5xl font-bold group-hover:scale-110 transition"
      >
        {caption}
      </div>
    </Link>
  )
}

export default TopicSelect;