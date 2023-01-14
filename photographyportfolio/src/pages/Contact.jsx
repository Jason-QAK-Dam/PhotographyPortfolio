import Header from "../components/Header";
import Profile from "../images/profile.png";
const Contact = () => {
  return (
    <div>
      <Header/>
      <div class="flex flex-col min-h-[calc(100vh_-_100px)] bg-gradient-to-b from-black to-[#00004e] px-[12vw] text-white items-center pt-10">
        <div class="w-full">
          <h2
            class="font-bold text-[10vh] text-transparent bg-clip-text bg-gradient-to-r from-[#df84ff] via-white to-white mb-[30px]"
          >
            Contact Me
          </h2>
        </div>

        <div class="flex h-[234px] items-center mb-[30px]">
          <img class="h-full w-auto relative transform translate-x-[50%] ml-[-123px]" src={Profile} alt="Profile image" />
          <div class="flex items-center w-[50vw] h-full bg-gradient-to-r from-[#57035f] to-[#003d76] rounded-tr-[20px] rounded-br-[20px] pl-[18%] pr-[20px] text-[22px] font-bold">
            Hi! My name is Jason Dam, a freelance photographer currently residing in Osaka, Japan. 
            I have been doing travel and event photography for over 3 years. If you have any 
            photography requests in Japan feel free to contact me.
          </div>
        </div>
        <div style={{
          gridTemplateAreas: `
          'firstName lastName'
          'email email'
          'message message'
          `}} 
          class="grid grid-cols-2 text-[25px] gap-[15px] mb-[30px]"
        >
          <label style={{gridArea:'firstName'}}>
            First name <br/>
            <input className="p-[4px] pl-[10px] bg-inherit box-border border-solid border-2 border-white rounded-[10px] leading-[35px]" type="text" />
          </label>
          <label style={{gridArea:'lastName'}}>
            Last name <br/>
            <input className="p-[4px] pl-[10px] bg-inherit box-border border-solid border-2 border-white rounded-[10px] leading-[35px]" type="text" />
          </label>
          <label style={{gridArea:'email'}}>
            Email <br/>
            <input className="p-[4px] pl-[10px] bg-inherit box-border border-solid border-2 border-white rounded-[10px] leading-[35px] w-full" type="text" />
          </label>
          <label style={{gridArea:'message'}}>
            Message <br/>
            <textarea className="p-[4px] pl-[10px] bg-inherit box-border border-solid border-2 border-white rounded-[10px] leading-[35px] w-full h-[300px]"/>
          </label>
        </div>
        <button className="rounded-full border-2 px-9 py-2 text-2xl w-[30vw] font-bold mb-[30px] shadow hover:shadow-xl transform hover:scale-105 transition">
          Send Request
        </button>
      </div>
    </div>
  )
}

export default Contact;