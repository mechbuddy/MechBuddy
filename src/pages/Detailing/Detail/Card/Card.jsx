import React from "react";
import CardPic from "../../../../assets/Detail/cardPic.png";

function Card(){
    return(<div className="flex flex-col bg-white items-center border border-slate-300 rounded-xl shadow-lg m-[2%] w-[40%] sm:w-auto">
       <img src={CardPic} alt="CardPic"/>
       <div className=" text-Primary-red text-xl mb-[5%]">PPF</div>
    </div>)
}

export default Card;