import React from 'react';
import Modification from "../../../assets/Home/ourServicesModification.gif";
import Servicing from "../../../assets/Home/ourServicesServicing.gif";
import SpareParts from "../../../assets/Home/ourServicesSpareParts.gif";
import Detailing from "../../../assets/Home/ourServicesDetailing.gif";
import UpperLine from "../../../assets/UpperLine.png";
import { useNavigate } from 'react-router-dom';

function Service() {

    let navigate = useNavigate();

    function handleService() {
        navigate("/Service/1");
    }
    function handleDetail() {
        navigate("/Detail");
    }

    return (
        <div className='relative'>
            <div className='relative'>
                <div className="absolute top-[30%] transform translate-y-[-100%] w-full text-center text-xl font-normal font-[sofia-light]  sm:text-3xl md:text-4xl">OUR<span className=" text-red-600"> SERVICES</span></div>
                <img src={UpperLine} alt="UpperLine" className=' w-[100%] ' />
            </div>


            <div className="flex flex-col justify-center mb-[5%]">

                <div className=" px-[10vw] mt-[5%] mb-10 ">

                    <div className="flex justify-center items-center gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col  ml-15 w-3/12  transform scale-90  max-md:ml-0 max-md:w-[100%]">
                            <div className="flex flex-col  grow px-[8vw] text-center max-md:mt-10 sm:px-[0vw]">
                                <div className="flex justify-center border-[3px] items-center self-center z-10 bg-white px-2.5 py-3.5 max-w-full rounded-md shadow-lg border-gray-200  w-[115px]">
                                    <img
                                        loading="lazy"
                                        src={Servicing}
                                        className="w-full aspect-[1.18]"
                                    />
                                </div>
                                <div className="flex flex-col items-center px-6 pt-9 text-base bg-{#FFFFFF} border-[3px] rounded-xl shadow-lg border-gray-200  mt-[-20px] ">
                                    <div className="text-xl font-bold text-center text-Primary-red sm:text-2xl">
                                        Servicing
                                    </div>
                                    <div className="self-stretch text-Primary-gray  font-sans text-sm lg:text-normal lg:mt-4">
                                        Schedule your service in advanced with us and get It done in
                                        time.
                                    </div>
                                    <button
                                        onClick={handleService}
                                        className="z-10 justify-center px-9 py-3 mt-5  text-white bg-Primary-red rounded-md max-md:px-5 max-md:mb-2.5 mb-[-20px]">
                                        GET NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col  ml-15 w-3/12 transform scale-90 max-md:ml-0 max-md:w-[100%]">
                            <div className="flex flex-col  grow  px-[8vw] text-center max-md:mt-10  sm:px-[0vw]">
                                <div className="flex z-10 justify-center border-[3px] items-center self-center bg-white px-2.5 py-3.5 max-w-full bg-{#FFFFFF} rounded-md shadow-lg border-gray-200  w-[115px]">
                                    <img
                                        loading="lazy"
                                        src={Detailing}
                                        className="w-full aspect-[1.5] mt-4"
                                    />
                                </div>
                                <div className="flex flex-col items-center px-6 pt-9 text-base bg-{#FFFFFF} border-[3px] rounded-xl shadow-lg border-gray-200  mt-[-20px]">
                                    <div className="text-xl font-bold text-center text-Primary-red sm:text-2xl">
                                        Detailing
                                    </div>
                                    <div className="self-stretch text-Primary-gray  font-sans text-sm lg:text-normal lg:mt-4">
                                        Schedule your service in advanced with us and get It done in
                                        time.
                                    </div>
                                    <button
                                        className="z-10 justify-center px-9 py-3 mt-5  text-white bg-Primary-red rounded-md max-md:px-5 max-md:mb-2.5 mb-[-20px]"
                                        onClick={handleDetail}>
                                        GET NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col  ml-15 w-3/12 transform scale-90 max-md:ml-0 max-md:w-[100%]">
                            <div className="flex flex-col  grow  px-[8vw] text-center max-md:mt-10 sm:px-[0vw]">
                                <div className="flex z-10 justify-center border-[3px] items-center self-center bg-white px-2.5 py-3.5 max-w-full bg-{#FFFFFF} rounded-md shadow-lg border-gray-200  w-[115px] ">
                                    <img
                                        loading="lazy"
                                        src={Modification}
                                        className="w-full aspect-[1.18]"
                                    />
                                </div>
                                <div className="flex flex-col items-center px-6 pt-9 text-base bg-{#FFFFFF} border-[3px] rounded-xl shadow-lg border-gray-200  mt-[-20px]">
                                    <div className="text-xl font-bold text-center text-Primary-red sm:text-2xl">
                                        Modifications
                                    </div>
                                    <div className="self-stretch text-Primary-gray font-sans text-sm lg:text-normal lg:mt-4" >
                                        You can get your vehicle modified according to your own needs.
                                    </div>
                                    <button className="z-10 justify-center px-9 py-3 mt-5  text-white bg-Primary-red rounded-md max-md:px-5 max-md:mb-2.5 mb-[-20px]">
                                        GET NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col  ml-15 w-3/12 transform scale-90 max-md:ml-0 max-md:w-[100%]">
                            <div className="flex flex-col   px-[8vw] text-center  grow max-md:mt-10 sm:px-[0vw]">
                                <div className="flex z-10 justify-center border-[3px] items-center self-center bg-white px-2.5 py-3.5 max-w-full bg-{#FFFFFF} rounded-md shadow-lg border-gray-200  w-[115px] ">
                                    <img
                                        loading="lazy"
                                        src={SpareParts}
                                        className="w-full aspect-[1.18]"
                                    />
                                </div>
                                <div className="flex flex-col items-center px-6 pt-9 text-base bg-{#FFFFFF} border-[3px] rounded-xl shadow-lg border-gray-200  mt-[-20px]">
                                    <div className="text-xl font-bold text-center text-Primary-red sm:text-2xl">
                                        Spare Parts
                                    </div>
                                    <div className="self-stretch text-Primary-gray font-sans text-sm lg:text-normal lg:mt-4" >
                                        Schedule your service in advanced with us and get It done in
                                        time.
                                    </div>
                                    <button onClick={() => { navigate("/sparePart") }} className="z-10 justify-center px-9 py-3 mt-5 text-white bg-Primary-red rounded-md max-md:px-5 max-md:mb-2.5 mb-[-20px]">
                                        GET NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>


        </div>
    )
}

export default Service;