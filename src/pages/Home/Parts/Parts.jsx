import MiddlePart from "../MiddlePart/MiddlePart";
import Servicing1 from "../../../assets/Home/Servicing1.png";
import image1 from "../../../assets/Home/tire.png";
import image2 from "../../../assets/Home/tire.png";
import image3 from "../../../assets/Home/tire.png";
import image4 from "../../../assets/Home/tire.png";
import image5 from "../../../assets/Home/tire.png";
import Wheart from "../../../assets/Home/Wheart.png";
import triangle from "../../../assets/Home/triangle.png";
import Star2 from "../../../assets/Home/Star2.png";
import pin from "../../../assets/Home/pin.png";
import { product } from "../../../assets/Product";
import ceat from "../../../assets/Home/ceat.png";
import location from "../../../assets/Home/location.png";
import { useState } from "react";

const Parts = (props) => {
  const [imgNo , setImgNo] = useState(image1);
  const { productss } = props;

  return (
    <div className="bg-bgImg">
      <div className="flex flex-col items-center justify-evenly mt-[4vh]">
        <p className="text-2xl md:text-4xl absolute">Spare Parts</p>
        <img className="mt-4" src={Servicing1} />
      </div>
      <MiddlePart />

      <div className="flex flex-col md:flex-row items-center">
        <div className="flex md:flex-col justify-evenly ml-[3vw] mr-[3vw]">
          <div className="w-[18vw] md:w-[6vw] mr-1 mb-[1.25vw] h-[12vh] rounded-lg bg-gradient-to-b from-red-100 via-red-200 to-red-300 flex justify-center items-center cursor-pointer">
            <img className="w-[15vw] mb-3 " onClick={()=>setImgNo(image1)} src={image1} />
          </div>
          <div className="w-[18vw] md:w-[6vw] mr-1 mb-[1.25vw] h-[12vh] rounded-lg bg-gradient-to-b from-red-100 via-red-200 to-red-300 flex justify-center items-center cursor-pointer">
            <img className="w-[15vw] mb-3 " onClick={()=>setImgNo(image2)} src={image2} />
          </div>
          <div className="w-[18vw] md:w-[6vw] mr-1 mb-[1.25vw] h-[12vh] rounded-lg bg-gradient-to-b from-red-100 via-red-200 to-red-300 flex justify-center items-center cursor-pointer">
            <img className="w-[15vw] mb-3 " onClick={()=>setImgNo(image3)} src={image3} />
          </div>
          <div className="w-[18vw] md:w-[6vw] mr-1 mb-[1.25vw] h-[12vh] rounded-lg bg-gradient-to-b from-red-100 via-red-200 to-red-300 flex justify-center items-center cursor-pointer">
            <img className="w-[15vw] mb-3 " onClick={()=>setImgNo(image4)} src={image4} />
          </div>
          <div className="w-[18vw] md:w-[6vw] mr-1 h-[12vh] rounded-lg bg-gradient-to-b from-red-100 via-red-200 to-red-300 flex justify-center items-center cursor-pointer">
            <img className="w-[15vw] mb-3 " onClick={()=>setImgNo(image5)} src={image5} />
          </div>
        </div>
        <div className="w-[60vw] md:w-[30vw] h-[50vh] md:h-[71vh] mr-[3vw] flex flex-col items-center justify-start bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm mb-[5vh]">
          <div className="flex justify-start items-center text-[white] bg-[#F31D32] w-[20vw] md:w-[14vw] md:h-[6vh] transform translate-x-[20vw] md:translate-x-[8vw] translate-y-[-0vw] md:mb-[2vh] ">
            <img
              className="w-[6vw] md:w-[4vw] transform translate-x-[-1.2vw]"
              src={triangle}
            />
            <p className="pr-[0vw] flex justify-start items-center">Rs. 6000</p>
          </div>
          <div className="md:mb-[2vh]">
            <div className="w-[50vw] md:w-[26vw] h-[35vh] md:h-[45vh] bg-gradient-to-b from-red-100 via-red-200 to-red-300 flex justify-center items-center">
              <img className=" md:w-[24vw] ml-5 mb-10 " src={imgNo} />
              <img
                className="transform translate-x-[-8vw] translate-y-[-20vw]"
                src={Wheart}
              />
            </div>
          </div>
          <div className="mb-1 md:mb-[2vh]">
            <p className="text-xl">Tire & Wheel Care</p>
          </div>
          <button className="w-[26vw] md:h-[7vh] mb-2 text-[white] bg-[#F31D32] rounded p-[0.5vh]">
            Add To Cart
          </button>
        </div>

        <div className="w-[90vw] ml-[3vw] md:w-[50vw]">
          <p className="text-[#5E5E5E] text-2xl  ">
            CEAT 105918 Milaze TL 53J SW 90/100-10 Front & Rear Two Wheeler
            Tyre  (Street, Tube Less)
          </p>
          <div className="flex justify-start items-center">
            <div className="bg-[red] w-[4vw] p-1 flex justify-evenly items-center rounded-lg">
              <p className="text-[white] text-sm">4.5</p>
              <img src={Star2} />
            </div>
            <p className="text-[#979797] text-xs ml-3 ">
              11,555 Ratings & 1,435 Reviews
            </p>
          </div>

          <p className="text-[#F31D32] font-thin mt-[1.5vh]">Special price</p>

          <div className="flex items-center">
            <p className="text-2xl">Rs. 6000</p>
            <div className="ml-[1.2vw]">
              <div className="w-[4vw] h-[0.2vh] bg-[#726e6e] transform translate-y-[1.6vh]"></div>
              <p className="text-[#5E5E5E] text-sm">Rs. 7600</p>
            </div>
            <p className="text-[#F31D32] ml-1">65% off</p>
          </div>

          <p className="text-xl mt-[1vw] ">Available offers</p>
          <div className="flex items-center mt-[1vw] mb-[0.5vw] font-sans font-normal">
            <img src={pin} />
            <p>
              Special PriceGet extra 25% off (price inclusive of
              cashback /coupon)<span className="text-[#7a7ada]"> T&C</span>
            </p>
          </div>
          <div className="flex items-center mt-[1vw] mb-[0.5vw] font-sans font-normal">
            <img src={pin} />
            <p>
              Special PriceGet extra 25% off (price inclusive of
              cashback /coupon)<span className="text-[#7a7ada]"> T&C</span>
            </p>
          </div>
          <div className="flex items-center mt-[1vw] mb-[0.5vw] font-sans font-normal">
            <img src={pin} />
            <p>
              Special PriceGet extra 25% off (price inclusive of
              cashback /coupon)<span className="text-[#7a7ada]"> T&C</span>
            </p>
          </div>
          <div className="flex items-center mt-[1vw] mb-[0.5vw] font-sans font-normal">
            <img src={pin} />
            <p>
              Special PriceGet extra 25% off (price inclusive of
              cashback /coupon)<span className="text-[#7a7ada]"> T&C</span>
            </p>
          </div>
          <p className="text-[#F31D32] font-thin mt-[1.5vh]">
            View 14 more offers
          </p>
          <div className="flex justify-start items-center">
            <img className="mr-2" src={ceat} />
            <p>Unconditional Warranty Know More</p>
          </div>
          <div className="flex">
            <p className="mr-2">Delivery</p>
            <img src={location} />
            <input
              className="border-b-2 border-[#F31D32]"
              placeholder="Enter Delivery Pincode"
            />
          </div>
          <p className="font-sans">Delivery by 25 May, Saturday|Free </p>
          <p className="font-sans">Installation & Demo by28 May, Tuesday|₹49</p>
          <p className="font-sans">View Details</p>
        </div>
      </div>
      <div className="flex flex-col justify-start ml-[3vw] md:ml-[4vw]">
        <p className="mt-[4vh] text-2xl">Specifications</p>
        <p className="text-lg font-sans">Important note</p>
        <p className="text-lg font-sans">Please refer to the size specification before you make your purchase, because tyre sizes vary with vehicle models.</p>
        <div>
          <p className="mt-[4vh]">General</p>
          <div className="flex">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Size</p>
            <p className="w-[45vw] font-sans">90/100-10</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Vehicle Brand</p>
            <p className="w-[65vw] font-sans">Yamaha, Piaggio, Suzuki, Hero, Honda, Mahindra, TVS</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Vehicle Model Name</p>
            <p className="w-[65vw] font-sans">Pleasure, Ray-Z, Fascino, Ray ZR, Vespa Elegante, Vespa, Activa 125, Alpha, Vespa SXL 125, Maestro, Activa 3G, Vespa VXL 150, Access 125, Activa i, Vespa LX 125, Vespa VXL 125, Maestro Edge, Vespa SXL 150, Jupiter</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Maximum Load</p>
            <p className="w-[65vw] font-sans">53</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Speed index</p>
            <p className="w-[65vw] font-sans">j</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Material</p>
            <p className="w-[65vw] font-sans">rubber</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Sales Pakage</p>
            <p className="w-[65vw] font-sans">1 tyre</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Width</p>
            <p className="w-[65vw] font-sans">90mm</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Weight</p>
            <p className="w-[65vw] font-sans">2.95kg</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Other features</p>
            <p className="w-[65vw] font-sans">Wider grooves helps in better water evacuation thus provides better wet grip</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Net Quantity</p>
            <p className="w-[65vw] font-sans">1 Two Wheeler Tyre
            </p>
          </div>
          <p className="mt-[4vh]">Warranty</p>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Warranty Service Type</p>
            <p className="w-[65vw] font-sans">Unconditional Warranty</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Warranty Summary</p>
            <p className="w-[65vw] font-sans">Unconditional Warranty</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Covered in Warranty</p>
            <p className="w-[65vw] font-sans">All Non-serviceable Defects Which Render the Tyre Un-usable as Stipulated by JK Tyre</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Not Covered in Warranty</p>
            <p className="w-[65vw] font-sans">Defects Due to Improper Usage and Other Conditions as Stipulated by JK Tyre</p>
          </div>
          <div className="flex mt-4">
            <p className="w-[25vw] md:w-[16vw] text-[#5E5E5E] font-sans font-[500]">Domestic Warranty</p>
            <p className="w-[65vw] font-sans">36</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Parts;