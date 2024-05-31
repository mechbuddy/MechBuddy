import React from "react";
import Servicing1 from "../../../assets/Home/Servicing1.png";
import { product } from "../../../assets/Product";
import PartsShop from "./PartsShop";
import MiddlePart from "../MiddlePart/MiddlePart";
const SpareParts = () => {
  return (
    <div className="bg-bgImg">
      <div className="flex flex-col items-center justify-evenly mt-[4vh]">
        <p className="text-2xl md:text-4xl absolute">Spare Parts</p>
        <img className="mt-4" src={Servicing1} />
      </div>
      <MiddlePart/>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 w-[80vw] mt-[3vw]">
          {product.map((product) => (
            <PartsShop data={product} />
          ))}
        </div>
        <button className="w-[30vw] md:w-[12vw] text-[white] bg-[#F31D32] rounded p-[0.5vh] mt-[8vh] mb-[8vh]">
          See more
        </button>
      </div>
    </div>
  );
};

export default SpareParts;
