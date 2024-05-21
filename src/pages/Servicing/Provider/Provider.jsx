import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../../components/Card/Card";
import { useNavigate } from "react-router-dom";

function Provider() {

    let [serviceData, setServiceData] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {

        async function getData() {
            await axios.get(`http://localhost:3001/service/`).then(response => {
                setServiceData(response.data);

            })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        getData();
    }, [])

    return (<div >
        <div className="text-center text-3xl font-SofiaSans font-semibold text-[#5E5E5E] md:ml-[10%] md:text-left ">
            Our Service Providers
        </div>
        <div className="flex flex-col items-center transform scale-90 sm:scale-100">
            <div className="flex justify-center flex-col lg:flex-row">
                {
                    serviceData.map((d, key) => {
                        return (<Card data={d} key={key} onClick={() => {
                            navigate(`/Service/${key + 1}`)
                            window.scrollTo(0, 0);
                        }} />)
                    })
                }
            </div>
            <button className="my-[3%] font-sans bg-Primary-red text-white px-6 py-[1%] font-semibold rounded-md">See More</button>
        </div>
    </div>)
}

export default Provider;