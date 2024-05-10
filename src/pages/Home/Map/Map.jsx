import React from "react";
import LowerLine from "../../../assets/LowerLine.png";
import map from "../../../assets/Home/map.png";
import mapBgImg from "../../../assets/Home/bg-2.png";
import insta from "../../../assets/Home/insta.png";

function Map() {
  return (
    <div className="relative flex flex-col mt-10 ">
      <img src={LowerLine} alt="LowerLine" className="w-[100%]"/>
      <div className="relative  flex flex-col justify-center items-center translate-y-[5%] z-10 transform scale-90 lg:flex-row lg:scale-100">
        <div className="absolute top-[-35%] transform translate-x-[0px] translate-y-[50%] lg:relative lg:translate-x-[100px] lg:translate-y-[0] ">
          <img src={map} alt="Map" className="h-[38vw] min-h-[330px]"/>
        </div>
        <div className="mt-[15vh]  transform relative mb-[5%] lg:mb-[0] lg:translate-x-[-100px] lg:mt-0">
          <img src={mapBgImg} alt="mpBgImg" className="h-[40vw]  min-h-[400px]  " />
          <div className="text-white flex flex-col absolute w-[95%] top-[50%] left-[50%] translate-x-[-48%] translate-y-[-50%]">
            <div className="text-center text-2xl  lg:mb-4 lg:text-3xl">
              <div>Join Our Community</div>
              <div className="text-sm lg:text-2xl">
                Over <span className="text-red-600">20k</span> people trust our services
              </div>
            </div>
            <form className="text-center flex flex-col justify-center items-center">
              <input type="text" name="email" id="email" className="border border-slate-500 my-2 w-[90%] px-2 py-2 rounded-md font-sans" placeholder="Enter your email" />
              <input type="text" name="number" id="number" className="border border-slate-500 my-2 w-[90%] px-2 py-2 rounded-md font-sans" placeholder="Enter your phone.no" />
              <div className="flex  justify-center lg:my-6">
                <button className="mx-2 w-[30vw] bg-white text-black py-2 sm:w-[10vw] rounded-md">Join For Free</button>
                <button className="mx-2 w-[30vw] bg-red-600 sm:w-[10vw] rounded-md">Subscribe</button>
              </div>
            </form>
            <div className="flex items-center px-[10%]">
              <div className="h-[1px] w-[100%] bg-white"></div>
              OR
              <div className="h-[1px] w-[100%] bg-white"></div>
            </div>
            <div className="flex justify-center mx-auto my-6 w-[50%]">
              <img src={insta} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      {/* Adjusted height for the Footer */}
    </div>
  );
}

export default Map;
