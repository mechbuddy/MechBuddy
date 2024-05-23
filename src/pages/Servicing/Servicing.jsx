import React, { useState, useContext, useEffect } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Login from "../../components/Login/Login";
import Header from "./Header/Header";
import Service from "./Service/Service";
import Provider from "./Provider/Provider";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../App";
import axios from "axios";
import { useParams } from "react-router-dom";

function Servicing() {

    const { isLoggedIn } = useContext(AuthContext);
    let { id } = useParams();
    let [showAnimation, setShowAnimation] = useState(false);
    let [showRAnimation, setRShowAnimation] = useState(true);
    let [serviceData, setServiceData] = useState({});

    useEffect(() => {

        async function getData() {
            await axios.get(`https://api-phi-hazel.vercel.app/${id}`).then(response => {
                setServiceData(response.data[0]);
            })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        getData();
    }, [id])

    return (<div className="bg-bgImg">
        <Navbar />
        <Header data={serviceData} />
        <Service data={serviceData} />
        <Provider data={serviceData} />
        <Footer />
        <div className={`${isLoggedIn ? 'hidden' : 'fixed'} top-0 h-[100vh] w-[100vw] z-20`}>
            <Login showAnimation={showAnimation} showRAnimation={showRAnimation} setRShowAnimation={setRShowAnimation} setShowAnimation={setShowAnimation} />
        </div>
    </div>)
}

export default Servicing;