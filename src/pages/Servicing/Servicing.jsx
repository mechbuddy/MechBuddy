import React, { useState, useContext, useEffect } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Login from "../../components/Login/Login";
import Header from "./Header/Header";
import Service from "./Service/Service";
import Provider from "./Provider/Provider";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../App";

function Servicing() {

    const { isLoggedIn } = useContext(AuthContext);
    let [showAnimation, setShowAnimation] = useState(false);
    let [showRAnimation, setRShowAnimation] = useState(true);


    return (<div className="bg-bgImg">
        <Navbar />
        <Header />
        <Service />
        <Provider />
        <Footer />
        <div className={`${isLoggedIn ? 'hidden' : 'fixed'} top-0 h-[100vh] w-[100vw] z-20`}>
            <Login showAnimation={showAnimation} showRAnimation={showRAnimation} setRShowAnimation={setRShowAnimation} setShowAnimation={setShowAnimation} />
        </div>
    </div>)
}

export default Servicing;