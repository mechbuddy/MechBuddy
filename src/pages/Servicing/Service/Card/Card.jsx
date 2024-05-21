import React from "react";

function Card({ title, price }) {
    return (<div className="mx-auto my-[2%] lg:mx-[1%]">
        <div className="relative">
            <div className="text-2xl font-sans font-semibold bg-Primary-red text-white py-2 w-[80vw] text-center rounded-se-lg rounded-ee-lg sm:w-[65vw]  md:w-[30vw] lg:w-[23vw]">{title}</div>
            <div className="absolute  bg-[#00000013] py-1 w-[78.5vw]  rounded-se rounded-ee-2xl z-10 sm:w-[64.5vw]  md:w-[29.5vw] lg:w-[22.5vw]"></div>
            <div className="absolute clip-path w-[30px] h-[30px] bg-Primary-red"></div>
        </div>
        <div className=" relative  flex flex-col items-center left-[30px] bg-white w-[70vw] border border-gray-300 py-[8%] rounded-ee-lg rounded-es-lg drop-shadow-2xl sm:w-[60vw]  md:w-[25vw]  lg:w-[20vw]">
            <div className="text-center " >
                <div>Starting From</div>
                <div className="text-[2rem] font-sans font-bold text-Primary-red">Rs {price} /-</div>
                <div className="text-[0.7rem] text-[#4D4D4D]">Per Month - 03 Services</div>
            </div>
            <ul className="list-disc *:font-SofiaSans *:font-bold *:my-2 my-[5%]  *:text-[#2D2D2D]">
                {
                    title === "Basic" ?
                        <>
                            <li>Wiper Fluid Replacement</li>
                            <li>Car Wash</li>
                            <li>Coolant Top Up</li>
                            <li>Interior Vacumming</li>
                            <li>Heater Checking</li>
                            <li>Air Filter Cleaning</li>
                        </>
                        : ""
                }
                {
                    title === "Premium" ?
                        <>
                            <li>Car Scanning</li>
                            <li>Battery Water Top Up</li>
                            <li>Oil Filter Replacement</li>
                            <li>Fuel Filter Checking</li>
                            <li>Car Wash</li>
                            <li>Air Filter Cleaning</li>
                        </>
                        : ""
                }
                {
                    title === "Pro" ?
                        <>
                            <li>Ac Filter Replacement</li>
                            <li>Car Scanning</li>
                            <li>Brake Fluid Top Up</li>
                            <li>Tyre Rotation</li>
                            <li>Gear Oil Top Up</li>
                            <li>Air Filter Cleaning</li>
                        </>
                        : ""
                }
            </ul>
            <button className="w-[90%] font-SofiaSans text-sm bg-Primary-red py-3 text-white rounded-lg">BUY NOW</button>
        </div>
    </div>)
}

export default Card;