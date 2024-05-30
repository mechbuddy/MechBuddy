import React from "react";
import heart from "../../../assets/Home/heart.png";
import cart from "../../../assets/Home/cart.png";
import search from "../../../assets/Home/search.png";
import tune1 from "../../../assets/Home/tune1.png";
const MiddlePart = () => {
  return (
    <div>
      <div className="flex justify-end mt-[2vw] mr-[7vw]">
        <div className="flex items-center justify-center border-[2px] w-[8vw] p-1 border-[#F31D32] rounded-2xl mr-2 cursor-pointer">
          <p className="text-[#F31D32] font-[400] mr-[0.5vw]">Whishlist</p>
          <img src={heart} />
        </div>
        <div className="flex items-center justify-center border-[2px] w-[8vw] p-1 border-[#F31D32] rounded-2xl cursor-pointer">
          <p className="text-[#F31D32] font-[400] mr-[0.5vw]">Cart</p>
          <img src={cart} />
        </div>
      </div>

      <div className="flex justify-center items-center mt-[8vh] mb-[8vh]">
        <input
          className="w-[35vw] pl-2 h-[8vh] rounded-2xl ml-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          type="text"
          placeholder="Search"
        ></input>
        <img className="transform translate-x-[-2vw]" src={search}/>
        <select
          className=" w-[8vw] h-[8vh] rounded-2xl ml-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-[#5E5E5E]"
          name="cars"
          id="cars"
        >
          <option value="Sort by">Sort by</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercs</option>
          <option value="audi">Audi</option>
        </select>
        <div className="flex justify-start items-center w-[10vw] h-[8vh] rounded-2xl ml-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-[#5E5E5E]">
          <img className="w-[2vw] ml-4" src={tune1} />
          <p className="ml-4 text-xl">Filter</p>
        </div>
        <select className=" text-[#5E5E5E] w-[12vw] h-[8vh] rounded-2xl ml-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <option value="">Customer Review</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercs</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  )
}

export default MiddlePart