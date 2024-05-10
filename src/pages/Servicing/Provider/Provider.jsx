import React from "react";
import Card from "../../../components/Card/Card";

function Provider() {
    return (<div >
        <div className="text-center text-3xl font-SofiaSans font-semibold text-[#5E5E5E] md:ml-[10%] md:text-left ">
            Our Service Providers
        </div>
        <div className="flex flex-col items-center transform scale-90 sm:scale-100">
            <div className="flex justify-center flex-col lg:flex-row">
                <Card />
                <Card />
            </div>
            <button className="my-[3%] font-sans bg-Primary-red text-white px-6 py-[1%] font-semibold rounded-md">See More</button>
        </div>
    </div>)
}

export default Provider;