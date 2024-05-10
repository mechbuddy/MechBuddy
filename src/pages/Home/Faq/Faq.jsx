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
                            <div className="Ques"><p>What service do you offer</p></div>
                            <div className="group">
                                <div className="triangle"></div>
                                <div className="Ans">
                                    <p>Users often want to know what types of automotive repair and
                                        maintenance services the mechanic provides.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Ques-Ans">
                            <div className="Ques"><p>What service do you offer</p></div>
                            <div className="group">
                                <div className="triangle"></div>
                                <div className="Ans">
                                    <p>Users often want to know what types of automotive repair and
                                        maintenance services the mechanic provides.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Ques-Ans">
                            <div className="Ques"><p>What service do you offer</p></div>
                            <div className="group">
                                <div className="triangle"></div>
                                <div className="Ans">
                                    <p>Users often want to know what types of automotive repair and
                                        maintenance services the mechanic provides.</p>
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

