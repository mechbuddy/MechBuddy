import React from "react";
import UpperLine from "../../../assets/UpperLine2.png";
import carIcon from "../../../assets/Icon/CarIcon.png";
import locationIcon from "../../../assets/Icon/LocationIcon.png";
import TickIcon from "../../../assets/Icon/TickIcon.png";
import carImg from "../../../assets/car.png";
import SearchBar from "../../../components/SearchBar/SearchBar";
import heart from "../../../assets/Home/heart.png";
import cart from "../../../assets/Home/cart.png";
import { useNavigate } from "react-router-dom";


function Header({ data, setFilterModal }) {


    let navigate = useNavigate();
    function handleSearchCar() {
        setFilterModal((prev) => { return !prev });
    }

    return (<div>

        <div className='relative mt-[1%]'>
            <div className="absolute top-[70%] transform translate-y-[-100%] w-full text-center text-xl font-normal font-[sofia-light]  sm:text-3xl md:text-4xl">SERVICING</div>
            <img src={UpperLine} alt="UpperLine" className=' w-[100%] ' />

        </div>
        <div className="flex my-[1%] flex-col">
            <div className="flex my-3 sm:mr-[10%] justify-end " onClick={()=>{navigate("/cart")}}>
                <div className="flex items-center justify-center border-[2px] w-fit md:w-[8vw] p-2 md:p-1 border-[#F31D32] rounded-2xl mr-2 cursor-pointer">
                    <p className="text-[#F31D32] font-[400] mr-[0.5vw]">Wishlist</p>
                    <img src={heart} />
                </div>
                <div className="flex items-center justify-center border-[2px] w-fit md:w-[8vw] p-2 md:p-1 border-[#F31D32] rounded-2xl cursor-pointer">
                    <p className="text-[#F31D32] font-[400] mr-[0.5vw]">Cart</p>
                    <img src={cart} />
                </div>
            </div>
            <div className="mb-[3%] flex flex-col justify-center sm:flex-row">
                <SearchBar />
                <div className="flex mx-auto my-[2%] sm:my-0 sm:mx-0">
                    <div className=" mx-2 p-2 flex justify-center items-center border border-gray-200 bg-white rounded-xl shadow-md cursor-pointer" onClick={handleSearchCar}>
                        <img src={carIcon} alt="CarIcon" />
                        <div className="mx-2 p-2 text-xs font-sans text-[#5E5E5E] font-semibold sm:text-base">Search by vehicle</div>
                    </div>
                    <div className="mx-2 p-2 flex justify-center items-center border border-gray-200 bg-white rounded-xl shadow-md">
                        <img src={locationIcon} alt="locationIcon" />
                        <div className="mx-2 text-xs font-sans text-[#5E5E5E] font-semibold sm:text-base">Search by Location</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative flex justify-center items-center my-[2%]">
            <img src={carImg} alt="car" className="mx-[2%] h-[20%] w-[20%] hidden md:block" />
            <div className="flex  py-[2%] px-[2%] items-center w-[90%]  border border-gray-200 border-r-[12px] border-r-Primary-red  bg-white rounded-3xl md:w-[60%]">
                <div className="w-[100%] p-[5%] sm:w-[70%] sm:p-[1%]">
                    <div className="text-[#464646] text-xl my-1">{data.name}</div>
                    <div className="font-sans text-[#00000080] text-sm">
                        {data.address}
                    </div>
                    <div className="my-3">
                        <div className="flex items-center font-sans text-[#5E5E5E] text-sm my-1"><img src={TickIcon} alt="tick" className="mx-1" />
                            Customers mentioned good service and reasonable charges
                        </div>
                        <div className="flex items-center font-sans text-[#5E5E5E] text-sm my-1"><img src={TickIcon} alt="tick" className="mx-1" />
                            Staff was friendly and helpful
                        </div>
                        <div className="flex items-center font-sans text-[#5E5E5E] text-sm my-1"><img src={TickIcon} alt="tick" className="mx-1" />
                            The work done, such as ceramic coating and cleaning, was highly appreciated
                        </div>
                    </div>
                    <button className="font-sans font-semibold w-[100%] bg-Primary-red text-white py-[2%] rounded-lg">GO FOR SERVICING</button>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Header;