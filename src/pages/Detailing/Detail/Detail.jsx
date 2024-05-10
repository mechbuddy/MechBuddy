import React from "react";
import Card from "./Card/Card";

function Detail() {
    return (<div className="mt-[5%]">
        <div className="text-center text-3xl font-SofiaSans font-semibold text-[#5E5E5E] md:ml-[10%] md:text-left ">
            Add Detailings
        </div>
        <div className="mx-auto flex flex-wrap justify-evenly w-[100vw] sm:w-[80vw]">

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <button className="my-[3%] font-sans bg-Primary-red text-white px-6 py-[1%] font-semibold rounded-md">See More</button>

        </div>
    </div>)
}

export default Detail;