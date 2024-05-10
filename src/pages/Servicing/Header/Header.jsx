import React from "react";
import UpperLine from "../../../assets/UpperLine2.png";
import carIcon from "../../../assets/Icon/CarIcon.png";
import locationIcon from "../../../assets/Icon/LocationIcon.png";
import TickIcon from "../../../assets/Icon/TickIcon.png";
import carImg from "../../../assets/car.png";
import SearchBar from "../../../components/SearchBar/SearchBar";


function Header() {
    return (<div>

        <div className='relative mt-[10%] sm:mt-[5%]'>
            <div className="absolute top-[70%] transform translate-y-[-100%] w-full text-center text-xl font-normal font-[sofia-light]  sm:text-3xl md:text-4xl">SERVICING</div>
            <img src={UpperLine} alt="UpperLine" className=' w-[100%] ' />

        </div>
        <div className="my-[3%] flex flex-col justify-center sm:flex-row">
            <SearchBar />
            <div className="flex mx-auto my-[2%] sm:my-0 sm:mx-0">
                <div className=" mx-2 p-2 flex justify-center items-center border border-gray-200 bg-white rounded-xl shadow-md">
                    <img src={carIcon} alt="CarIcon" />
                    <div className="mx-2 p-2 text-xs font-sans text-[#5E5E5E] font-semibold sm:text-base">Search by vehicle</div>
                </div>
                <div className="mx-2 p-2 flex justify-center items-center border border-gray-200 bg-white rounded-xl shadow-md">
                    <img src={locationIcon} alt="locationIcon" />
                    <div className="mx-2 text-xs font-sans text-[#5E5E5E] font-semibold sm:text-base">Search by Location</div>
                </div>
            </div>
        </div>
        <div className="relative flex justify-center my-[2%]">
            <img src={carImg} alt="car" className="mx-[2%] h-[20%] w-[20%] hidden md:block"/>
            <div className="flex justify-evenly items-center w-[90%]  border border-gray-200 border-r-[12px] border-r-Primary-red  bg-white rounded-3xl md:w-[60%]">
                <div className="w-[100%] p-[5%] sm:w-[50%] sm:p-[1%]">
                    <div className="text-[#464646] text-xl my-1">Honda City XS Gearbox</div>
                    <div className="font-sans text-[#00000080] text-sm">
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ...
                    </div>
                    <div className="my-3">
                        <div className="flex items-center font-sans text-[#5E5E5E] text-sm my-1"><img src={TickIcon} alt="tick" className="mx-1"/>Lorem ipsum Lorem ipsum</div>
                        <div className="flex items-center font-sans text-[#5E5E5E] text-sm my-1"><img src={TickIcon} alt="tick" className="mx-1"/>Lorem ipsum Lorem ipsum</div>
                        <div className="flex items-center font-sans text-[#5E5E5E] text-sm my-1"><img src={TickIcon} alt="tick" className="mx-1"/>Lorem ipsum Lorem ipsum</div>
                    </div>
                    <button className="font-sans font-semibold w-[100%] bg-Primary-red text-white py-[2%] rounded-lg">GO FOR SERVICING</button>
                </div>
                <div className="hidden h-[70%] w-[2px] bg-[#4E4E4E] rounded-md sm:block"></div>
                <div className="hidden sm:block">
                    <div className="text-[#4E4E4E]">Engine : <span className="font-sans text-[#5E5E5E]">1197 cc - 1498 cc</span></div>
                    <div className="text-[#4E4E4E]">Power : <span className="font-sans text-[#5E5E5E]">109.96 - 128.73 bhp</span></div>
                    <div className="text-[#4E4E4E]">Torque : <span className="font-sans text-[#5E5E5E]">230 Nm - 200 Nm</span></div>
                    <div className="text-[#4E4E4E]">Drive Type : <span className="font-sans text-[#5E5E5E]">FWD</span></div>
                    <div className="text-[#4E4E4E]">Fuel : <span className="font-sans text-[#5E5E5E]">Diesel / Petrol</span></div>
                    <div className="text-[#4E4E4E]">Seating Capacity : <span className="font-sans text-[#5E5E5E]">5</span></div>
                </div>
              
            </div>
        </div>
    </div>
    )
}

export default Header;