import { LandingPageImages } from "../images";
import styled from "styled-components";

const Landing = () => {
  const Heading = styled.h1`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%,0);
    font-family: 'Lusitana';
    font-weight: bold;
    font-size: 10em;
    letter-spacing: -4px;
    -webkit-text-stroke: 3px black;
    -webkit-text-fill-color: white;
  `

  return(
    <div className="grid gap-x-3 w-screen h-screen grid-cols-3 bg-black">
      {LandingPageImages.map((val) => {
        return(
          <div>
            <img
              class="w-full max-h-screen object-cover opacity-30
              hover:opacity-100 transition-opacity cursor-pointer
              " 
              src={val.image}
              alt={val.altText}
            />
          </div> 
        )
      })}
      <button class="text-white text-2xl absolute top-[60%] left-1/2 transform translate-x-[-50%] w-[270px] h-[60px]
        border-2 border-white hover:scale-110 transition">
        Contact Me
      </button>
      <Heading>
        Jason Dam
      </Heading>
    </div>
  )
}

export default Landing;