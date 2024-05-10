import React from "react";
import starIcon from "../../assets/Icon/StarIcon.png";
import demoPic from "../../assets/Servicing/demoPic.png";
import LocationIcon from "../../assets/Icon/LocationIcon.png";

function Card() {
    return (<div className="mx-auto relative my-[2%] flex flex-col-reverse items-center bg-white border border-slate-300 rounded-2xl shadow-lg w-[90vw] p-[2%]
      sm:w-[80vw] sm:flex-row  sm:p-[1%] lg:w-[40vw] lg:mx-[1%]">
        <div className="text-center p-[1%]">
            <img src={demoPic} alt="demoPic" className="my-2 w-[25vw] hidden sm:block" />
            <button className="my-2 font-sans bg-Primary-red text-white px-6 py-[2%] font-semibold rounded-md">BOOK NOW</button>
        </div>
        <div className="flex flex-col p-[3%]">
            <div className="text-[#464646] text-2xl">Master Mechanics</div>
            <div className="text-[#404040] font-SofiaSans text-sm">Car service station in Madhya Pradesh</div>
            <div className="flex  text-[#8D8D8D] font-sans py-3">
                <img src={LocationIcon} alt="locationIcon" className="mx-1 my-1 w-4 h-4" />
                <div className="text-sm">5WRP+XV2 Mansoori Barat Ghar, Ganji Nagar, Gohalpur, Jabalpur, Madhya Pradesh 482002'</div>
            </div>
            <div className="flex font-sans justify-between mr-[15%]">
                <div>Price : <span className="text-[#4CAF50] font-semibold mx-1">₹400</span></div>
                <div className="flex"><img src={starIcon} alt="star" className="h-6 w-6 mx-1" /><div>4.5</div></div>
            </div>
            <div className="flex">
                <button className="text-[#5E5E5E] bg-[#D9D9D9] font-sans text-sm my-4 mx-2 px-[5%] py-[1%] rounded-2xl">Denting</button>
                <button className="text-[#5E5E5E] bg-[#D9D9D9] font-sans text-sm my-4 mx-2 px-[5%] py-[1%] rounded-2xl">Painting</button>
                <button className="text-[#5E5E5E] bg-[#D9D9D9] font-sans text-sm my-4 mx-2 px-[5%] py-[1%] rounded-2xl">Painting</button>
            </div>
            <div className="w-[100%] h-3 absolute left-0 bottom-0 bg-Primary-red rounded-2xl"></div>
        </div>
    </div>)
}

export default Card;