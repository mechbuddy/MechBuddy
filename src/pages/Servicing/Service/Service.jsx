import React  from "react";
import Card from "./Card/Card";

function Service(){
    return(<div className="my-[10%] sm:my-[5%]  transform scale-95 sm:scale-100">
    <div className="text-center text-3xl font-SofiaSans font-semibold text-[#5E5E5E] md:ml-[10%] md:text-left ">
        Our Service Plans
    </div>
    <div className="flex flex-col justify-center md:flex-row">
      <Card title="Basic" price="2000"/>
      <Card title="Premium" price="4000"/>
      <Card title="Pro" price="6000"/>
    </div>
    </div>)
}

export default Service;