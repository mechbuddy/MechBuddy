import React from "react";
import tire from "../../assets/Home/tire.png";
import upi from "../../assets/Home/upi.png";
import gPay from "../../assets/Home/gPay.png";
import masterCard from "../../assets/Home/masterCard.png";
import paytm from "../../assets/Home/paytm.png";
import Footer from "../../components/Footer/Footer";


const CheckOut = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center">
      <div className=" mb-[8vh] mt-[8vh] ">
        <p className=" w-[80vw] md:w-[45vw] h-[8vh] text-[white] text-2xl font-sans font-[500] bg-[#F31D32] rounded-2xl p-2 pl-7 mb-[2vh] relative z-1 ">
          DELIVERY ADDRESS
        </p>
        <div className="flex flex-col w-[80vw] md:w-[45vw] translate-y-[-3vh] rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ">
          <input
            className=" w-[70vw] md:w-[40vw] p-2 border-b-[3px] border-[#B4B4B475] mb-[2vh] ml-[2vw] mt-[3vh]"
            placeholder="Enter Your Email Address"
            type="text"
          />
          <input
            className=" w-[70vw] md:w-[40vw] p-2 border-b-[3px] border-[#B4B4B475] mb-[5vh] ml-[2vw]"
            placeholder="pin code"
            type="text"
          />
          <button className=" text-[white] bg-[#F31D32] w-[50vw] md:w-[20vw] p-2 rounded-lg ml-[2vw] mb-[3vh] ">
            CONTINUE
          </button>
        </div>
      </div>
      <div className=" mb-[8vh] ">
        <p className=" w-[80vw] md:w-[45vw] h-[8vh] text-[white] text-2xl font-sans font-[500] bg-[#F31D32] rounded-2xl p-2 pl-7 mb-[2vh] relative z-1 ">
          ORDER SUMMARY
        </p>
        <div className="flex flex-col w-[80vw] md:w-[45vw] translate-y-[-3vh] rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ">
          <div className=" flex mt-[3vh] mb-[3vh] ml-[2vw] ">
            <div className="flex flex-col ">
              <div className="w-[30vw] md:w-[9vw] h-[20vh] md:h-[20vh] bg-gradient-to-b from-red-100 via-red-200 to-red-300 flex justify-center items-center">
                <img className="w-[28vw] md:w-[12vw] ml-5 mb-7 " src={tire} />
              </div>
              <p className="font-sans font-[500]">Tire & Wheel Care</p>
            </div>
            <div className=" ml-[2vw]">
              <p className=" w-[27vw] text-sm font-sans font-[500]">
                CEAT 105918 Milaze TL 53J SW 90/100-10 Front & Rear Two Wheeler
                Tyre  (Street, Tube Less)
              </p>
              <div className="flex justify-center item-center font-sans font-[500]">
                <div className="flex flex-col w-[16vw]">
                  <p className=" mt-[1vh] w-[27vw] mb-[1vh] text-sm text-[red]  ">
                    Special Price
                  </p>
                  <div className="flex items-center mb-[1vh]">
                    <p className="text-2xl">Rs. 6000</p>
                    <div className="ml-[1.2vw] ">
                      <div className="w-[4vw] h-[0.2vh] bg-[#726e6e] transform translate-y-[1.6vh]"></div>
                      <p className="text-[#5E5E5E] text-sm">Rs. 7600</p>
                    </div>
                    <p className="text-[#F31D32] ml-1">65% off</p>
                  </div>
                  <p>
                    Delivered by Wed May 29 |{" "}
                    <span className="text-[red]">Free</span>
                  </p>
                </div>
                <div className="w-[1px] h-[18vh] bg-[#B4B4B4]"></div>
                <div className="w-[14vw] ml-[1vw] flex flex-col items-center font-[450]">
                  <p className="mb-2">Price Details</p>
                  <div className="flex justify-between">
                    <p>Price( 2 Items)</p>
                    <p className="mb-1 ml-10">Rs.6000</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Delivery Charges</p>
                    <p className="ml-12 mb-1 text-[red]">Free</p>
                  </div>
                  <div className="w-[14vw] h-[1px] mb-1 bg-slate-500"></div>
                  <div className="flex justify-between">
                    <p>Price( 2 Items)</p>
                    <p className="ml-10">Rs.6000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className=" text-[white] bg-[#F31D32] w-[50vw] md:w-[20vw] p-2 rounded-lg ml-[2vw] mb-[3vh] ">
            CONTINUE
          </button>
        </div>
      </div>
      <div className=" mb-[8vh] ">
        <p className=" w-[80vw] md:w-[45vw] h-[8vh] text-[white] text-2xl font-sans font-[500] bg-[#F31D32] rounded-2xl p-2 pl-7 mb-[2vh] relative z-1 ">
          PAYMENT OPTIONS
        </p>
        <fieldset>
          <div className=" font-sans font-[500] flex flex-col w-[80vw] md:w-[45vw] translate-y-[-3vh] rounded-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ">
            <div className="flex mt-[3vh] justify-evenly">
              <div className=" w-[30vw] md:w-[20vw] h-[18vh] md:h-[8vh] flex flex-col md:flex-row justify-start items-center bg-[#f5f3f3] rounded-md ">
                <div className=" bg-[#EBEBEB] p-1 pr-2 pl-2 md:mr-[1vw]">
                <img className="w-[7vw] md:w-[2.3vw]" src={upi} />
                </div>
                <div className="flex flex-col justify-center items-center md:mr-[5vw]">
                  <p>UPI</p>
                  <p className="text-sm font-[400]">sask***@mail.com</p>
                </div>
                <input className="w-[25px] h-[25px] rounded-md border-[2px] border-slate-400" ></input>
              </div>
              <div className=" w-[30vw] md:w-[20vw] h-[18vh] md:h-[8vh] flex flex-col md:flex-row justify-start items-center bg-[#f5f3f3] rounded-md ">
                <div className=" bg-[#EBEBEB] p-1 pr-2 pl-2 md:mr-[1vw]">
                <img className="w-[7vw] md:w-[2.3vw]" src={masterCard} />
                </div>
                <div className="flex flex-col justify-center items-center md:mr-[5vw]">
                  <p>UPI</p>
                  <p className="text-sm font-[400]">sask***@mail.com</p>
                </div>
                <input className="w-[25px] h-[25px] rounded-md border-[2px] border-slate-400" ></input>
              </div>
            </div>
            <div className="flex mt-[3vh] justify-evenly">
            <div className=" w-[30vw] md:w-[20vw] h-[18vh] md:h-[8vh] flex flex-col md:flex-row justify-start items-center bg-[#f5f3f3] rounded-md ">
                <div className=" bg-[#EBEBEB] p-1 pr-2 pl-2 md:mr-[1vw]">
                <img className="w-[7vw] md:w-[2.3vw]" src={paytm} />
                </div>
                <div className="flex flex-col justify-center items-center md:mr-[5vw]">
                  <p>UPI</p>
                  <p className="text-sm font-[400]">sask***@mail.com</p>
                </div>
                <input className="w-[25px] h-[25px] rounded-md border-[2px] border-slate-400" ></input>
              </div>
              <div className=" w-[30vw] md:w-[20vw] h-[18vh] md:h-[8vh] flex flex-col md:flex-row justify-start items-center bg-[#f5f3f3] rounded-md ">
                <div className=" bg-[#EBEBEB] p-1 pr-2 pl-2 md:mr-[1vw]">
                <img className="w-[7vw] md:w-[2.3vw]" src={gPay} />
                </div>
                <div className="flex flex-col justify-center items-center md:mr-[5vw]">
                  <p>UPI</p>
                  <p className="text-sm font-[400]">sask***@mail.com</p>
                </div>
                <input className="w-[25px] h-[25px] rounded-md border-[2px] border-slate-400" ></input>
              </div>
            </div>
            <button className=" text-[white] bg-[#F31D32] w-[50vw] md:w-[20vw] p-2 rounded-lg ml-[2vw] mb-[3vh] ">
              CONTINUE
            </button>
          </div>
        </fieldset>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default CheckOut;
