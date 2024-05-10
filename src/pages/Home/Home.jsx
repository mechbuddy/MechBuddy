import React, { useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Service from "./Service/Service";
import Review from "./Review/Review";
import Header from "./Header/Header";
import AskAnything from "./AskAnything/AskAnything";
import Footer from "../../components/Footer/Footer";
import Map from "./Map/Map"
import Faq from "./Faq/Faq";
import Login from "../../components/Login/Login";

function Home() {

    let [modal, setModal] = useState(false);

    function onClick() {
        setModal(!modal);
    }

    return (
        <div className="bg-bgImg">

            <Navbar onClick={onClick} />
            <Header />
            <Service />
            <Review />
            <AskAnything />
            <Faq />
            <Map />
            <Footer />
            <div className={`${modal ? 'fixed' : 'hidden'} top-0 h-[100vh] w-[100vw] z-20`}>
                <Login onClick={onClick} />
            </div>
        </div>
    )
}
export default Home;

