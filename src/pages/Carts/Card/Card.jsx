import React from "react";
import Cookies from 'js-cookie';
import axios from "axios";

function Card({ id, name, desc1, desc2, desc3, price }) {

    function handleRemoveCart() {
        const userId = Cookies.get("userId");
        async function getData() {
            await axios.put(`https://api-phi-hazel.vercel.app/cart/${userId}/${id}`)
                .then(response => {
                    console.log("Response Sent");
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        }
        getData();
    }

    return (<div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div class="md:w-4/12 2xl:w-1/4 w-full">
            <img src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png" alt="Black Leather Purse" class="h-full object-center object-cover md:block hidden" />
            <img src="https://i.ibb.co/TTnzMTf/Rectangle-21.png" alt="Black Leather Purse" class="md:hidden w-full h-full object-center object-cover" />
        </div>
        <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
            <p class="text-xs leading-3 text-gray-800 md:pt-0 py-1 pt-4">{id}</p>
            <div class="flex items-center justify-between w-full">
                <p class="text-base font-black leading-none py-1 text-gray-800">{name}</p>
        
            </div>
            <p class="text-xs leading-3 text-gray-600 py-1">{desc1}</p>
            <p class="text-xs leading-3 text-gray-600 py-1">{desc2}</p>
            <p class="w-96 text-xs leading-3 text-gray-600 py-1">{desc3}</p>
            <div class="flex items-center justify-between pt-5">
                <div class="flex itemms-center">
                    <p class="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                    <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={handleRemoveCart}>Remove</p>
                </div>
                <p class="text-base font-black leading-none text-gray-800">Rs {price}</p>
            </div>
        </div>
    </div>)
}

export default Card;