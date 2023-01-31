import { SocialMediaIcons } from "../images";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ to, link }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end:true });
  if (isActive) {
    return (
      <Link className="border-b-2 p-1" to={to} key={link}>
        {link}
      </Link>
    )
  } else {
    return (
      <Link className="border-b-2 border-black p-1 hover:border-white" to={to} key={link}>
        {link}
      </Link>
    )
  }

}
const Header = () => {
  const links = ["Event", "Portrait", "Travel", "Contact"];
  const resolvedPath = useResolvedPath("/");
  const isLandingActive = useMatch({path: resolvedPath.pathname, end:true });
  if (isLandingActive) {
    return <></>
  }
  return (
    <div style={{fontFamily:'Outfit'}} className="flex justify-between items-center h-[100px] text-white bg-black px-5">
      <Link to='/'>
        <h1
          className="mr-0 md:mr-[20px] lg:mr-[40px] font-extrabold leading-7 text-transparent text-2xl bg-clip-text 
            bg-gradient-to-r from-[#a0affa] to-white hover:scale-105 transition"
        >
          The<br/>Foreigner<br/>Photographer
        </h1>
      </Link>

      <div className="justify-between md:w-[400px] lg:w-[700px] md:text-[27px] lg:text-[40px] font-bold hidden md:flex ">
        {links.map((link) => {
          return <CustomLink to={`/${link.toLowerCase()}`} link={link} key={link}/>
        })}
      </div>

      <div className="hidden md:flex md:ml-[20px] lg:ml-[40px] justify-between md:h-[40px] lg:h-[50px] md:w-[150px] lg:w-[200px] bg-black">
        {SocialMediaIcons.map((icon) => {
          return (
            <img className="cursor-pointer transform hover:scale-110 transition" src={icon.image} alt={icon.altText} key={icon.altText}/>
          )
        })}
      </div>
    </div>
  )
}

export default Header;