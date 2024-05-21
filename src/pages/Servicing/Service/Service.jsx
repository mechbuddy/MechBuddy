import React from "react";
import Card from "./Card/Card";

function Service({ data }) {
  return (<div className="my-[10%] sm:my-[5%]  transform scale-95 sm:scale-100">
    <div className="text-center text-3xl font-SofiaSans font-semibold text-[#5E5E5E] md:ml-[10%] md:text-left ">
      Our Service Plans
    </div>
    <div className="flex flex-col justify-center md:flex-row">
      <Card title="Basic" price={data.basicPrice} />
      <Card title="Premium" price={data.premiumPrice} />
      <Card title="Pro" price={data.proPrice} />
    </div>
  </div>)
}

export default Service;