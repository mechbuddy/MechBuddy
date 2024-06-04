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
import { useNavigate } from "react-router-dom";

function Home() {

    let [modal, setModal] = useState(false);
    let navigate = useNavigate();

    let [showAnimation, setShowAnimation] = useState(false);
    let [showRAnimation, setRShowAnimation] = useState(true);

    function onClick() {
        setModal(!modal);
        navigate("/");
        
    }
    
    function onClickSignUp() {
        onClick();
        setShowAnimation(true);
        setRShowAnimation(false);
    }
    
    function onClickLogin() {
        onClick();
        setShowAnimation(false);
        setRShowAnimation(true);
    }
    

    return (
        <div className="bg-bgImg">
            <Navbar onClickLogin={onClickLogin} onClickSignUp={onClickSignUp} />
            <Header />
            <Service />
            <Review />
            <AskAnything />
            <Faq />
            <Map />
            <Footer />
            <div className={`${modal ? 'fixed' : 'hidden'} top-0 h-[100vh] w-[100vw] z-20`}>
                <Login onClick={onClick} showAnimation={showAnimation} showRAnimation={showRAnimation} setRShowAnimation={setRShowAnimation} setShowAnimation={setShowAnimation} />
            </div>
        </div>
    )
}
export default Home;

