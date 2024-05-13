import React from "react";
import bgGif from "../../../assets/Home/animation.mp4";
import logo1 from "../../../assets/Home/logo-1.png";
import logo2 from "../../../assets/Home/logo-2.png";
import AutoSlider from "../../../components/AutoSlider/AutoSlider";

import email from "../../../assets/Home/email.png";
import whatsapp from "../../../assets/Home/whats.png";


function Header() {

    const openEmail = () => {
        window.location.href = 'mailto:infomechbuddy@gmail.com';
    };

    const openWhatsApp = () => {
        window.location.href = 'https://wa.me/918435776053';
    };

    return (<>
        <div className="flex justify-center py-1 sm:justify-start sm:mr-[3%] sm:gap-4 gap-3 mr-2 mt-3 mb-2 flex-row-reverse">
            {/* whatsapp part , function is written on top*/}
            <div className="font-sans text-gray-700 font-semibold text-[0.8rem] border flex gap-1 border-stone-300 rounded-lg p-1 cursor-pointer w-auto" onClick={openWhatsApp}>
                <img src={whatsapp} className=" h-5 w-5" /> +91 8435776053
            </div>

            {/* email part , function is written on top */}
            <div className="font-sans text-gray-700 font-semibold text-[0.8rem] border flex gap-1 border-stone-300 rounded-lg p-1 cursor-pointer w-auto" onClick={openEmail}>
                <img src={email} alt="email" className=" h-5 w-5" />infomechbuddy@gmail.com
            </div>
        </div>
        <div className="mx-[3vw]  /*lg:mx-[10vw]*/ ">
            <video autoPlay muted loop className="rounded-xl">
                <source src={bgGif} type="video/mp4" />
            </video>
        </div>


        <AutoSlider className="mx-[3vw]  mt-6 mb-12 rounded-lg bg-customPink w-[93vw] /*lg:mx-[10vw]*/">
            <div> <img src={logo2} alt="logo2" className="h-30" /></div>
            <div> <img src={logo1} alt="logo1" className="h-30" /></div>
        </AutoSlider>
    </>)
}

export default Header;