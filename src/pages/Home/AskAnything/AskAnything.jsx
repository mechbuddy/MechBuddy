import gas from "../../../assets/Home/gasoline-injector-pump-on-white-260nw-2193953897 1.png";
import credit from "../../../assets/Home/blank-credit-card-front-straight-260nw-473969452 1_LE_auto_x2 1.png";
import ellipse from "../../../assets/Home/Ellipse 20.png"
import Box from "../../../assets/Box.png";
import vector from "../../../assets/Home/Vector 2.png"
import "../Faq/Faq.css"
const AskAnything = () => {

  return (
    <div className="relative">
      <div className='relative'>
        <div className="absolute top-[50%] transform translate-y-[-50%]  w-full text-center text-xl font-normal font-[sofia-light]  sm:text-3xl md:text-4xl">ASK <span className=" text-red-600">ANYTHING</span></div>
        <img src={Box} alt="box" className="w-[100%] transform scale-125 md:scale-1 " />
      </div>

      <div className="flex flex-col-reverse transform scale-90 md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10 md:scale-100">
        {/* Left Section */}
        <div className="flex flex-col items-center md:w-1/2">
          {/* "Ask Your Query Here!" Section */}


          <div className="Ques-Ans text-center">
            <div className="Ques w-[95vw] md:w-[42vw]"><p>Ask Your Query</p></div>
            <div className="group">
              <div className="triangle"></div>
            </div>

          </div>



          {/* Line Connecting to Form Section */}


          {/* Form Section */}
          <div className=" bg-white shadow-lg p-6 ml-[5%] w-[80vw] transform translate-y-[-10%]  rounded-xl md:w-[40vw]">
            {/* Form Inputs */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Enter Your Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 px-3 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-primary-red placeholder:font-sans"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1">Enter Your Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full py-2 px-3 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-primary-red  placeholder:font-sans"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="query" className="block mb-1">Write Your Query</label>
              <textarea
                id="query"
                placeholder="Write your query"
                className="w-full h-20 py-2 px-3 bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-primary-red resize-none  placeholder:font-sans"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <button className="bg-Primary-red text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">Submit</button>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="relative md:w-1/2 hidden md:flex md:justify-center md:items-center">
          {/* Red Circle Covering 70% of the Right Side */}
          <div className="absolute bottom-0 right-48 transform translate-x-1/2 translate-y-1/2 bg-Primary-red w-96 h-96 rounded-full -mr-24"></div>
          {/* First Image Connecting with Second Image */}
          <img src={credit} alt="Credit Image" className="w-96 h-auto rounded-lg absolute z-30" style={{ bottom: "50%", right: "40%", transform: "translate(50%, 50%)" }} />
          {/* Second Image on Top of Red Circle */}
          <img src={gas} alt="Gas Image" className="w-96 h-auto rounded-lg absolute z-20" style={{ bottom: "50%", right: "70%", transform: "translate(50%, 50%)" }} />
          <img src={ellipse} alt="ellipse" className="w-48 h-auto absolute z-30" style={{ bottom: "50%", right: "50%", transform: "translate(90% , 420%)" }} />
          <img src={vector} alt="ellipse" className="w-8 h-auto absolute z-10" style={{ right: "22%", transform: "translate(0% ,40%)" }} />
        </div>
      </div>

    </div>
  );
};

export default AskAnything;