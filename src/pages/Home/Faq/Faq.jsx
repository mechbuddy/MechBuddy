import React from "react";
import Box from "../../../assets/Box.png";
import faq from "../../../assets/Home/faq.png";
import "./Faq.css";
const Faq = () => {


    return (
        <div className="Faq relative" style={{ marginTop: '10vw' }}>
            <div className='relative'>
                <div className="absolute top-[50%] transform translate-y-[-50%]  w-full text-center text-sm  font-normal font-[sofia-light]  sm:text-3xl md:text-4xl">
                    FREQUENTLY<span className=" text-red-600"> ASKED</span> QUESTIONS
                </div>
                <img src={Box} alt="box" className="w-[100%] transform scale-125 md:scale-1 " />
            </div>

            <div className="content transform scale-90">
                <img src={faq} className="hidden md:block" />
                <div className="subcontent my-[2%]" >
                    <div>
             

                        <div className="Ques-Ans">
                            <div className="Ques"><p>Does MechBuddy offer services for both four-wheelers and heavy-duty vehicles, or is it exclusively for two-wheelers?</p></div>
                            <div className="group">
                                <div className="triangle"></div>
                                <div className="Ans">
                                    <p>Yes, MechBuddy offers services for two-wheelers, four-wheelers, and heavy-duty vehicles. We cater to a wide range of vehicle types to meet your maintenance and repair needs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Ques-Ans">
                            <div className="Ques"><p>Does MechBuddy provide pick-up and drop-off services, as well as towing?</p></div>
                            <div className="group">
                                <div className="triangle"></div>
                                <div className="Ans">
                                    <p>Yes, MechBuddy offers pick-up and drop-off services as well as towing. The availability and cost of these services may vary based on distance. Additionally, pick-up and drop-off services may sometimes be free with applicable coupons or offers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Ques-Ans">
                            <div className="Ques"><p>In which cities does MechBuddy provide their services?</p></div>
                            <div className="group">
                                <div className="triangle"></div>
                                <div className="Ans">
                                    <p> MechBuddy offers their services in Indore, Ujjain, Jabalpur, and Dewas..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full text-center">
                        <button className="FaqBtn">See more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;

