import React from 'react'
import UpperLine from '../../../components/Designs/UpperLine/Upperline'
import LowerLine from '../../../components/Designs/LowerLine/LowerLine'
import './Mission&V.css'
import MissionVision1 from '../../../assets/AboutUs/Mission&Vision1.png'
import MissionVision2 from '../../../assets/AboutUs/Mission&Vision2.png'

function MissionVision() {
  return (
    <div className=" relative mb-[10vh]">
        <UpperLine />
        <div className="transform translate-y-2 my-[8vw] w-full text-center text-xl font-normal font-[sofia-light] sm:translate-y-0 sm:text-3xl md:text-4xl">MISSION <span className=" text-red-600">&</span> VISION</div>
        <LowerLine />

        <div className="flex justify-end items-center">
          <div className="w-[60vw] h-[1.7px]  bg-gradient-to-l from-red-600 to-red-40 mt-10 mb-10"></div>
        </div>
       {/* Mission */}
        <div className='flex justify-around'>
            {/* Description of Mission */}
        <div className="Que-Answer">
                            <div className="Que"><p>Mission</p></div>
                            <div className="groups">
                                <div className="triangles"></div>
                                <div className="Answer">
                                <div className="innerbox  border-gradient-l-red-600-red-40">
                                    <p>"At MechBuddy, our mission is to revolutionize the automotive service industry by providing a convenient, reliable, and transparent platform for vehicle maintenance and repair. We strive to empower car owners with access to trusted mechanics, ensuring that their vehicles receive top-quality care while eliminating the hassle and uncertainty traditionally associated with the process."</p>
                                </div>
                                </div>
                            </div>
                        </div>
                {/* Mission Image */}
                <div>
                    <img src={MissionVision1} className="hidden md:block mt-14" />
                </div>
                </div>

                {/* Vision */}
                <div className='flex justify-around'>

                    {/* Vision Image */}
                <div>
                    <img img src={MissionVision2} className="hidden md:block mt-14" />
                </div>

                {/* Description of Vision */}
                <div className="Que-Answer">
                            <div className="Que"><p>Vision</p></div>
                            <div className="groups">
                                <div className="triangles"></div>
                                <div className="Answer">
                                <div class="innerbox border-gradient-l-red-600-red-40">
                                    <p>"Our vision at MechBuddy is to become the go-to destination for car owners seeking automotive services, recognized for our commitment to customer satisfaction, reliability, and innovation. We envision a future where booking a mechanic appointment is as simple as a few clicks, and where every car owner can enjoy peace of mind knowing that their vehicle is in expert hands."
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
        

        <div className="flex justify-between items-center mt-10">
            <div className="w-[60vw] h-[1px]  bg-gradient-to-r from-red-600 to-red-40"></div>
        </div>


    </div>
  )
}

export default MissionVision