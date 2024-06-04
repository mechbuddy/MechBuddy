import React, { useContext } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import Card from "./Card/Card";
import { useNavigate } from "react-router-dom";

function Service({ data = { basicPrice: "", premiumPrice: "", proPrice: "" }, itemData, filter }) {


  let navigate = useNavigate();

  async function handleClick(name, price) {
    const userId = Cookies.get("userId");
    let items = {
      id: itemData.name,
      name: name,
      desc1: filter.manufacturers + ' ' + filter.brand,
      desc3: filter.fuel,
      price: price
    }
    await axios.post(`https://api-phi-hazel.vercel.app/cart/${userId}`, { items })
      .then(response => {
        console.log("Response Sent");
        navigate("/cart");

      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  return (
    <div className="my-[10%] sm:my-[5%] transform scale-95 sm:scale-100">
      <div className="text-center text-3xl font-SofiaSans font-semibold text-[#5E5E5E] md:ml-[10%] md:text-left">
        Our Service Plans
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        <Card title="Basic" price={data.basicPrice} handleClick={() => { handleClick("Basic", data.basicPrice) }} />
        <Card title="Premium" price={data.premiumPrice} handleClick={() => { handleClick("Premium", data.premiumPrice) }} />
        <Card title="Pro" price={data.proPrice} handleClick={() => { handleClick("Pro", data.proPrice) }} />
      </div>
    </div>
  );
}

export default Service;
