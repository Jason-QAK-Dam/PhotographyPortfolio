import { LandingPageImages } from "../images";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Heading = styled.h1`
    position: absolute;
    margin: 0;
    top: 10%;
    left: 50%;
    transform: translate(-50%,0);
    font-family: 'Lusitana';
    font-weight: bold;
    font-size: 10vw;
    letter-spacing: -4px;
    -webkit-text-stroke: 1px white;
    -webkit-text-fill-color: white;
  `
const SubHeading = styled.h2`
  position: absolute;
  margin: 0;
  top: 40%;
  left: 50%;
  transform: translate(-50%,0);
  font-family: 'Lusitana';
  font-weight: bold;
  color: white;
  font-size: 4vw;
`

  const CardHeading = styled.h2`
    position: absolute;
    font-family: 'MeriendaOne';
    font-size: 5.5vw;
    bottom: 4vh;
    letter-spacing: -2px;
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: white;
  `
  const Triangle = styled.div`
    position: absolute;
    bottom: 0;
    width: 0px;
    height: 0px;
  `

const Landing = () => {
  return (
    <div className="grid gap-x-[20px] w-screen h-screen grid-cols-3 bg-black">
      {LandingPageImages.map((val) => {
        return(
          <Link to={val.title.toLowerCase()} key={val.title} className='group opacity-30 hover:opacity-100 transition-opacity cursor-pointer'>
            <img
              className="w-full max-h-screen object-cover" 
              src={val.image}
              alt={val.altText}
            />
            {val.title === 'Event' &&
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Triangle style={{borderLeft:'33vw solid #000', borderTop:'15vh solid transparent'}}/>
                <CardHeading style={{left:'20px'}}>{val.title}</CardHeading>
              </div>
            }
            {val.title === 'Portrait' && 
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Triangle style={{borderLeft:'16.5vw solid transparent', borderRight:'16.5vw solid transparent', borderBottom:'11vh solid #000'}}/>
                <CardHeading style={{left:'50%', transform:'translate(-50%,0)'}}>{val.title}</CardHeading>
              </div>
            }
            {val.title === 'Travel' && 
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Triangle style={{borderRight:'33vw solid #000', borderTop:'15vh solid transparent', right:'0'}}/>
                <CardHeading style={{right:'20px'}}>{val.title}</CardHeading>
              </div>
            }
          </Link> 
        )
      })}
      <Link to='contact'>
        <button className="text-white text-2xl absolute top-[60%] left-1/2 transform translate-x-[-50%] w-[270px] h-[60px]
          border-2 border-white hover:scale-105 transition">
          Contact Me
        </button>
      </Link>
      <Heading>
        Jason Dam
      </Heading>
      <SubHeading>
        Photographer Portfolio
      </SubHeading>
    </div>
  )
}

export default Landing;