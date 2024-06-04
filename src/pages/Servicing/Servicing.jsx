import React, { useState, useContext, useEffect } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Login from "../../components/Login/Login";
import Header from "./Header/Header";
import Service from "./Service/Service";
import Provider from "./Provider/Provider";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../App";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form/Form";

function Servicing() {

    /*Signup page*/
    let [modal, setModal] = useState(false);
    const { isLoggedIn } = useContext(AuthContext);
    let navigate = useNavigate();
    function onClick() {
        setModal(!modal);
        navigate("/");

    }

    let { id } = useParams();
    let [showAnimation, setShowAnimation] = useState(false);
    let [showRAnimation, setRShowAnimation] = useState(true);
    let [filterModal, setFilterModal] = useState(true);
    let [serviceData, setServiceData] = useState({});
    let [filter, setFilterData] = useState({});
    let [filterPrice, setFilterPriceData] = useState([]);

    useEffect(() => {

        async function getData() {
            await axios.get(`https://api-phi-hazel.vercel.app/service/${id}`).then(response => {
                setServiceData(response.data[0]);
            })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        getData();
    }, [id])

    useEffect(() => {
        console.log(filter);
        console.log(filterPrice);
        if (Object.keys(filter).length !== 0) {
            setFilterPriceData(serviceData.manufacturers
                .filter(manufacturer => manufacturer.name === filter.manufacturers)
                .flatMap(manufacturer => manufacturer.brands)
                .filter(brand => brand.name === filter.brand)
                .flatMap(brand => brand.fuel)
                .filter(fuel => fuel.name === filter.fuel));
        }
    }, [filter])




    return (<div className="bg-bgImg">
        <Navbar />
        <Form changeFilterData={setFilterData} filterModal={filterModal} setFilterModal={setFilterModal} />
        <Header data={serviceData} setFilterModal={setFilterModal} />
        <Service data={filterPrice[0]?.prices} itemData={serviceData} filter={filter} />
        <Provider data={serviceData} />
        <Footer />
        <div className={`${isLoggedIn ? 'hidden' : 'fixed'} top-0 h-[100vh] w-[100vw] z-20`}>
            <Login onClick={onClick} showAnimation={showAnimation} showRAnimation={showRAnimation} setRShowAnimation={setRShowAnimation} setShowAnimation={setShowAnimation} />
        </div>
    </div>)
}

export default Servicing;