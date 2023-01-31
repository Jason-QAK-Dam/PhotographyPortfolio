import Profile from "../images/profile.png";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col min-h-[calc(100vh_-_100px)] bg-gradient-to-b from-black to-[#00004e] px-[5vw] lg:px-[12vw] text-white items-center pt-2 lg:pt-10">
        <div className="w-full">
          <h2
            className="font-bold text-[8vh] md:text-[10vh] text-transparent bg-clip-text bg-gradient-to-r from-[#df84ff] via-white to-white mb-[10px] md:mb-[30px]"
          >
            Contact Me
          </h2>
        </div>

        <div className="flex h-[95px] sm:h-[140px] md:h-[190px] lg:h-[234px] items-center mb-[30px] md:w-[90vw] lg:w-[62vw]">
          <img className="h-full w-auto relative transform translate-x-[50%] ml-[-50px] sm:ml-[-75px] md:ml-[-100px] lg:ml-[-123px]" src={Profile} alt="Profile avatar" />
          <div className="flex items-center w-full h-full bg-gradient-to-r from-[#57035f] to-[#003d76] rounded-tr-[20px] 
            rounded-br-[20px] pl-[20%] pr-[20px] max-[480px]:text-[8.5px] text-[12px] sm:text-[15px] md:text-[18px] lg:text-[20px] font-bold"
          >
            Hi! My name is Jason Dam, a freelance photographer currently residing in Osaka, Japan. 
            I have been doing travel and event photography for over 3 years. If you have any 
            photography requests in Japan feel free to contact me.
          </div>
        </div>
        
        <div style={{
          gridTemplateAreas: `
          'name'
          'email'
          'message'
          `}} 
          className="grid text-[11px] md:text-[20px] lg:text-[25px] gap-[15px] mb-[10px] md:mb-[30px] w-[90vw] lg:w-[62vw]"
        >
          <label style={{gridArea:'name'}}>
            Name <br/>
            <input className="pl-[10px] bg-inherit box-border border-solid border-2 border-white rounded-[10px] leading-[35px] w-full" type="text" />
          </label>
          <label style={{gridArea:'email'}}>
            Email <br/>
            <input className="pl-[10px] bg-inherit box-border border-solid border-2 border-white rounded-[10px] leading-[35px] w-full" type="text" />
          </label>
          <label style={{gridArea:'message'}}>
            Message <br/>
            <textarea className="pl-[10px] bg-inherit box-border border-solid border-2 border-white rounded-[10px] leading-[35px] w-full h-[100px] md:h-[300px]"/>
          </label>
        </div>
        <button className="rounded-full border-2 px-9 py-2 text-1xl md:text-2xl font-bold mb-[10px] md:mb-[30px] shadow hover:shadow-xl transform hover:scale-105 transition">
          Send Request
        </button>
      </div>
    </div>
  )
}

export default Contact;