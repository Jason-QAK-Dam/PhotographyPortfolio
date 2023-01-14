import { SocialMediaIcons, LandingPageImages} from "../images";
import { Link } from "react-router-dom";

const Header = () => {
  const links = ["Event", "Travel", "Portrait", "Contact"];

  return (
    <div style={{fontFamily:'Outfit'}} className="flex justify-between items-center h-[100px] text-white bg-black px-5">
      <Link to='/'>
        <h1
          class="font-extrabold leading-7 text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#a0affa] to-white"
        >
          The<br/>Foreigner<br/>Photographer
        </h1>
      </Link>
      <div className="flex justify-between w-[700px] text-[40px] font-bold">
        {links.map((link) => {
          if (window.location.pathname.split("/")[1] === link.toLowerCase()) {
            return (
              <Link className="border-b-2 p-1" to={`/${link.toLowerCase()}`} relative='path'>
                {link}
              </Link>
            )
          } else {
            return (
              <Link className="border-b-2 border-black p-1 hover:border-white" to={`/${link.toLowerCase()}`} relative='path'>
                {link}
              </Link>
            )
          }
        })}
      </div>
      <div className="flex justify-between h-[60px] w-[220px] bg-black">
        {SocialMediaIcons.map((icon) => {
          return (
            <img className="cursor-pointer transform hover:scale-110 transition" src={icon.image} alt={icon.altText}/>
          )
        })}
      </div>
    </div>
  )
}

export default Header;