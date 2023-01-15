import { SocialMediaIcons } from "../images";
import { Link } from "react-router-dom";

const Header = () => {
  const links = ["Event", "Travel", "Portrait", "Contact"];

  return (
    <div style={{fontFamily:'Outfit'}} className="flex justify-between items-center h-[100px] text-white bg-black px-5">
      <Link to='/'>
        <h1
          class="mr-0 md:mr-[20px] lg:mr-[40px] font-extrabold leading-7 text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#a0affa] to-white"
        >
          The<br/>Foreigner<br/>Photographer
        </h1>
      </Link>

      <div className="justify-between md:w-[400px] lg:w-[700px] md:text-[27px] lg:text-[40px] font-bold hidden md:flex ">
        {links.map((link) => {
          if (window.location.pathname.split("/")[1] === link.toLowerCase()) {
            return (
              <Link className="border-b-2 p-1" to={`/${link.toLowerCase()}`} relative='path'>
                {link}
              </Link>
            )
          } else {
            return (
              <Link className="border-b-2 border-black p-1 hover:border-white" to={`/${link.toLowerCase()}`}>
                {link}
              </Link>
            )
          }
        })}
      </div>

      <div className="hidden md:flex md:ml-[20px] lg:ml-[40px] justify-between md:h-[40px] lg:h-[50px] md:w-[150px] lg:w-[200px] bg-black">
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