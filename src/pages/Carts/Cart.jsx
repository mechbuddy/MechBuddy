import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import axios from "axios";
import Card from "./Card/Card";
import Navbar from "../../components/NavBar/Navbar";
import { useNavigate } from "react-router-dom";

function Cart() {

    let [cartItems, setCartItems] = useState([]);
    let [totalPrice, setPrice] = useState(0);
    let navigate = useNavigate();

    useEffect(() => {
        const userId = Cookies.get("userId");
        async function getData() {
            await axios.get(`https://api-phi-hazel.vercel.app/cart/${userId}`)
                .then(response => {
                    setCartItems(response.data[0].items);
                    setPrice(
                        () => {
                            let price = 0;
                            cartItems.map((item) => { price += parseInt(item.price) })
                            return price
                        }
                    )
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        }
        getData();

    }, [cartItems]);


    return (<div className="bg-gray-100">
        <Navbar />
        <div className="container mx-auto mt-10 bg-gray-100">
            <div className="sm:flex shadow-md my-10">
                <div className="  w-full  sm:w-3/4 px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{cartItems.length}</h2>
                    </div>

                    {
                        cartItems.map((item, index) => { return (<Card key={index} id={item.id} name={item.name} desc1={item.desc1} desc2={item.desc2} desc3={item.desc3} price={item.price} />) })
                    }

                    <div onClick={() => navigate(-1)} className="flex font-semibold text-Primary-red text-sm mt-10 cursor-pointer">
                        <svg className="fill-current mr-2 text-Primary-red w-4" viewBox="0 0 448 512">
                            <path
                                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                        </svg>
                        Continue Shopping
                    </div>
                </div>
                <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2   px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
                        <span className="font-semibold text-sm">Rs {totalPrice}</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">
                            Shipping
                        </label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option className="bg-gray-50">Standard shipping - Rs 100.00</option>
                        </select>
                    </div>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>Rs {totalPrice + 100}</span>
                        </div>
                        <button className=" bg-Primary-red font-semibold  duration-200 hover:bg-red-700 py-3 text-sm text-white uppercase w-full">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Cart;